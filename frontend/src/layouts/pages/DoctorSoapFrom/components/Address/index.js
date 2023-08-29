// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
// import Select from "@mui/material/Select";


// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
// import SoftInput from "components/SoftInput";
import SoftSelect from "components/SoftSelect";
// import { Country, State, City } from "country-state-city";
// import csc from "country-state-city";
// NewUser page components
import FormField from "layouts/pages/ProfileAfterlogin/components/FormField";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function Address({ formData }) {
  // console.log("formData..",formData);
  const [countryData,setCountryData] = useState([]);
  const [stateData,setStateData] = useState([]);
  const [cityData,setCityData] = useState([]);
 
  const { formField, values, errors, touched, setFieldValue } = formData;
  const { address1, address2, city, state ,zip} = formField;
  const {
    address1: address1V,
    address2: address2V,
    
    zip: zipV,
    
  } = values;

    const getCountrys = useCallback(async() => {
      var config = {
        method: 'get',
        url: 'https://api.countrystatecity.in/v1/countries',
        headers: {
          'X-CSCAPI-KEY': 'anhvY3BHazdnbTkzSHo0ZmNsOXZHQkk0TGJEbVNwb0ZCYjZPbVEwcw=='
        }
      };
      
      const response = await axios(config)
      console.log("response..",response);
      const getCountryData = response.data;
      const updatedCountries = getCountryData.map((country) => ({
        label: country.name,
        value: country.id,
        ...country,
      }));
      setCountryData(updatedCountries);
    });
    
    useEffect(() => {
      getCountrys();
    },[]);

    const updatedStates = useCallback(async(country) =>{
      var config = {
        method: 'get',
        url: `https://api.countrystatecity.in/v1/countries/${country?.iso2}/states`,
        headers: {
          'X-CSCAPI-KEY': 'anhvY3BHazdnbTkzSHo0ZmNsOXZHQkk0TGJEbVNwb0ZCYjZPbVEwcw=='
        }
      };
      
      const response = await axios(config);
      const getStatesOfCountry = response.data;
      console.log("getStatesOfCountry.",getStatesOfCountry);
      return getStatesOfCountry?.map((state) => ({
        label: state.name,
        value: state.id,
        ...state,
      }))
    },[countryData]);

    const updatedCities = useCallback(async (countryCode,StateCode) =>{
console.log("countryCode...",countryCode?.iso2, "+++++",StateCode?.iso2);
    var config = {
      method: 'get',
      url: `https://api.countrystatecity.in/v1/countries/${countryCode?.iso2}/states/${StateCode?.iso2}/cities`,
      headers: {
        'X-CSCAPI-KEY': 'anhvY3BHazdnbTkzSHo0ZmNsOXZHQkk0TGJEbVNwb0ZCYjZPbVEwcw=='
      }
    };

    const response = await axios(config);
    const countryDataOdState = response.data;
      return countryDataOdState.map((city) => ({
        label: city.name,
        value: city.id,
        ...city,
      }))
    },[stateData]);

    // useEffect(() => {
    //   // const countries = Country.getAllCountries();
    //   const countries = csc?.getAllCountries();
    //   const updatedCountries = countries.map((country) => ({
    //     label: country.name,
    //     value: country.id,
    //     ...country,
    //   }));
    //   setCountryData(updatedCountries);
    // },[]);

    // const updatedStates = useCallback((countryId) =>{
    //   return csc?.getStatesOfCountry(countryId).map((state) => ({
    //     label: state.name,
    //     value: state.id,
    //     ...state,
    //   }))
    // },[countryData]);

    // const updatedCities = useCallback((stateId) =>{
    //   return csc?.getCitiesOfState(stateId?.id).map((city) => ({
    //     label: city.name,
    //     value: city.id,
    //     ...city,
    //   }))
    // },[stateData]);

  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Address
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              type={address1.type}
              label={address1.label}
              name={address1.name}
              value={address1V}
              placeholder={address1.placeholder}
              error={errors.address1 && touched.address1}
              success={address1V.length > 0 && !errors.address1}
            />
          </Grid>
          <Grid item xs={12}>
            <SoftBox mt={-1.625}>
              <FormField
                type={address2.type}
                label={address2.label}
                name={address2.name}
                value={address2V}
                placeholder={address2.placeholder}
              />
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
          <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Country
              </SoftTypography>
            </SoftBox>
            <SoftSelect
              menuPortalTarget={document.body}
              menuPosition={"fixed"}
              placeholder="Select your Country"
              options={countryData}
              onChange={async (value) => {
                console.log("value..",value);
                setFieldValue("country", value)
                let data = await updatedStates(value)
                // let data = updatedStates(value?.value)
                setStateData(data);
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
          <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                State
              </SoftTypography>
            </SoftBox>
            <SoftSelect
              menuPortalTarget={document.body}
              menuPosition={"fixed"}
              type={state.type}
              placeholder={state.placeholder}
              // options={updatedStates(values.country ? values.country.isoCode : null)}
              options={stateData ?? null}
              value={values.state}
              onChange={async (value) => {
                setFieldValue("state", value)
                let data = await updatedCities(values?.country,value)
                // let data = updatedCities(value)
                setCityData(data);
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
          <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                City
              </SoftTypography>
            </SoftBox>
            <SoftSelect
              menuPortalTarget={document.body}
              menuPosition={"fixed"}
              type={city.type}
              placeholder={city.placeholder}
              // options={updatedCities(values.state ? values.state : null)}
              options={cityData ?? null}

              value={values.city}
              onChange={(value) => setFieldValue("city", value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
          <FormField
                type={zip.type}
                label={zip.label}
                name={zip.name}
                value={zipV}
                placeholder={zip.placeholder}
              />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;

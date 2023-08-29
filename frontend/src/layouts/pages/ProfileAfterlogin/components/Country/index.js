import React, { Suspense, lazy, useEffect, useState } from "react";

const SoftBox = lazy(() => import("components/SoftBox"));
const SoftTypography = lazy(() => import("components/SoftTypography"));
const SoftSelect = lazy(() => import("components/SoftSelect"));
import { Country } from "country-state-city";

const Countrycomponent = (Props) => {
  const [countryVal,setCountryVal] = useState([]);
  const { formDataProps } = Props;
  const { setFieldValue } = formDataProps;
  useEffect(() =>{
    const countryData = () => {
      const countries = Country?.getAllCountries();
      const updatedCountries = countries?.map((country) => ({
        label: country.name,
        value: country.id,
        ...country,
      }));
      setCountryVal(updatedCountries);
    }
    countryData();
  },[]);

  return (
    <Suspense>
      <SoftBox>
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
          options={countryVal}
          onChange={(value) => {
            setFieldValue("country", value);
          }}
        />
      </SoftBox>
    </Suspense>
  );
};

export default Countrycomponent;

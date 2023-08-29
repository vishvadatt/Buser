import React, { Suspense, lazy, useEffect, useState } from "react";
const SoftBox = lazy(() => import("components/SoftBox"));
const SoftTypography = lazy(() => import("components/SoftTypography"));
const SoftSelect = lazy(() => import("components/SoftSelect"));
import { City } from "country-state-city";

function Citycomponent(Props) {
  const { formDataProps } = Props;
  const { formField, values,setFieldValue } = formDataProps;
  const {city} = formField;
  const [cityVal,setCity] = useState([]);
  

    useEffect(() => {
      const updatedCities = (stateId) =>{
      return City?.getCitiesOfState(stateId?.countryCode, stateId?.isoCode).map((city) => ({
        label: city.name,
        value: city.id,
        ...city,
      }))};
      const result = updatedCities(values.state ? values.state : null);
      setCity(result);

    },[values]);
  return (
    <Suspense>
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
        options={cityVal ? cityVal : null}
        value={values.city}
        onChange={(value) => setFieldValue("city", value)}
      />
    </Suspense>
  );
}

export default Citycomponent;

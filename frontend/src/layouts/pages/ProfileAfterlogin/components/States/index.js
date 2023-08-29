import React, { Suspense, lazy, useState } from "react";
const SoftBox = lazy(() => import("components/SoftBox"));
const SoftTypography = lazy(() => import("components/SoftTypography"));
const SoftSelect = lazy(() => import("components/SoftSelect"));
import { State } from "country-state-city";
import { useEffect } from "react";

const Statecomponent = (Props) => {
  const [statesVal,setStatesVal] = useState([]);
  const { formDataProps } = Props;
  const { formField, values, setFieldValue } = formDataProps;
  const { state } = formField;
 
    useEffect(() => {
      const updatedStates = (countryId) =>{
      return State?.getStatesOfCountry(countryId).map((state) => ({
        label: state.name,
        value: state.id,
        ...state,
      }))
    }
      const result = updatedStates(values.country ? values.country.isoCode : null);
      setStatesVal(result);
    },[values]);
    
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
            State
          </SoftTypography>
        </SoftBox>
        <SoftSelect
          menuPortalTarget={document.body}
          menuPosition={"fixed"}
          type={state.type}
          placeholder={state.placeholder}
          options={statesVal ? statesVal : null}
          value={values.state}
          onChange={(value) => {
            setFieldValue("state", value);
          }}
        />
      </SoftBox>
    </Suspense>
  );
};
export default Statecomponent;

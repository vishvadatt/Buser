import React from "react";
import { Formik, Field, FieldArray } from "formik";
import { Grid } from "@mui/material";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import PropTypes from "prop-types";
import "../style.css";

const DynamicConditions = ({ values, formik, key }) => {

  return (
    <FieldArray name={`page13[${key}]conditions`}>
      {({ insert, remove, push }) => (
        <div>
          {values.length > 0 &&
            values.map((data, index) => (
              <div key={index}>
                {index > 0 && (
                  <Grid item xs={12} sm={12} lg={12} my={1}>
                    <SoftBox
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                      height="100%"
                    >
                      <MinusCircleOutlined
                        style={{
                          cursor: "pointer",
                          fontSize: "25px",
                          color: "#344767",
                        }}
                        onClick={() => remove(index)}
                      />
                    </SoftBox>
                  </Grid>
                )}
                <Grid className="P9conditions">
                  <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>
                    Condition {index + 1}:
                  </span>
                  <input
                    type="text"
                    value={data}
                    name={`page13[${key}].conditions[${index}]`}
                    onChange={formik.handleChange}
                  />
                </Grid>
                {/* <Field name={`Conditions.${index}`} placeholder={`Data ${index + 1}`} /> */}
              </div>
            ))}
          <Grid item xs={12} sm={12} lg={12} my={1}>
            <SoftBox display="flex" flexDirection="row" justifyContent="center" height="100%">
              <PlusCircleOutlined
                style={{
                  cursor: "pointer",
                  fontSize: "25px",
                  color: "#344767",
                }}
                onClick={() => insert(formik.values.page13[key].conditions.length, "")}
              />
            </SoftBox>
          </Grid>
        </div>
      )}
    </FieldArray>
  );
};

export default DynamicConditions;

DynamicConditions.propTypes = {
  key: PropTypes.any.isRequired,
  values: PropTypes.any.isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

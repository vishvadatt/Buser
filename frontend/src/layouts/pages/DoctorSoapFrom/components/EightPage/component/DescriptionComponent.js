import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup, Select, MenuItem } from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import { Grid } from "@mui/material";
import SoftTypography from "components/SoftTypography";

function DescriptionComponent({ formik, form, index }) {
  const descriptionOpt = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];
  const { formField } = form;
  const { values } = formik;

  return (
    <>
      <Grid container className="diagnostic-code-table-container">
        <div style={{ width: "100%" }} className="diagnostic-code-table-header-container">
          <Grid item xs={4} lg={7.8} sm={5.7} style={{ display: "flex" }}>
            <label className="diagno1Lab">Diagnosis Code Description</label>
          </Grid>
          <Grid item xs={4} lg={2.3} sm={4}>
            <label className="diagno1Labs">/ ICD-10 Code</label>
          </Grid>
          <Grid item mr={1}>
            <label className="diagno1Lab">/&nbsp;Sx&nbsp;Severity(#/10)</label>
          </Grid>
        </div>

        {console.log("page3data--", formik.values.diagnosisData)}

        {formik.values.diagnosisData &&
          Object.entries(formik.values.diagnosisData).map(([diagnosisKey, diagnosisValue], index) => (
            diagnosisValue.diagnosisName && <Grid container direction="row" className="diagnostic-code-table-row-container" key={index}>
              <span className="diagnostic-code-table-index-span no-span">1:</span>
              <Grid item xs={5.8} lg={8} sm={4.8} ml={1.5} mb={0.5} className="diagnostic-code-grid-container">
                <input
                  type="text"
                  name={`diagnosisData.${diagnosisKey}.diagnosisName`}
                  value={diagnosisValue.diagnosisName}
                  style={{ width: '100%' }}
                  onChange={formik.handleChange}
                  className="diagno2"
                />
              </Grid>
              <span className="span-css diagnostic-code-table-slash-span">/</span>
              <Grid item xs={3} lg={2} sm={4}>
                <input
                  type="text"
                  name={`diagnosisData.${diagnosisKey}.diagnosisCode`}
                  value={diagnosisValue.diagnosisCode}
                  onChange={formik.handleChange}
                  className="diagno2"
                />
              </Grid>
              <span className="span-css diagnostic-code-table-slash-span">/</span>
              <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
                <FormControl>
                  <Select
                    value={diagnosisValue.severity}
                    onChange={(e) => {
                      formik.setFieldValue(`diagnosisData.${diagnosisKey}.severity`, e.target.value);
                    }}
                  >
                    {descriptionOpt.map((severity) =>
                    (<MenuItem key={severity.value} value={severity.value}>{severity.value}</MenuItem>
                    )
                    )}

                  </Select>
                </FormControl>
              </Grid>
              <span className="span-css-outoff diagnostic-code-table-slash-span">/10</span>
            </Grid>
          ))}

        {/* <Grid container direction="row" className="diagnostic-code-table-row-container">
          <FormControlLabel
            control={
              <Checkbox
                name={description2Check.name}
                // checked={description2CheckV}
                // onChange={formik.handleChange}
                checked={formik.values?.eightPage[index]?.[description2Check.name]}
                onChange={(e) =>
                  formik.setFieldValue(
                    `eightPage[${index}].${description2Check.name}`,
                    e.target.checked
                  )
                }
              />
            }
          />
          <span className="diagnostic-code-table-index-span no-span">2:</span>
          <Grid
            item
            xs={4.8}
            lg={8}
            sm={4.8}
            ml={1.5}
            mb={0.5}
            className="diagnostic-code-grid-container"
          >
            <FormField
              type={description2Input.type}
              name={description2Input.name}
              // value={description2InputV}
              value={formik.values?.eightPage[index]?.[description2Input.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description2Input.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item xs={4} lg={2} sm={4}>
            <FormField
              type={description2codeInput.type}
              name={description2codeInput.name}
              // value={description2codeInputV}
              value={formik.values?.eightPage[index]?.[description2codeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description2codeInput.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
            <FormControl>
              <Select
                labelId="typesLabel"
                label="Types"
                name={description2ServerityDrop.name}
                // value={description2ServerityDropV || 0}
                // onChange={formik.handleChange}
                value={formik.values?.eightPage[index]?.[description2ServerityDrop.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `eightPage[${index}].${description2ServerityDrop.name}`,
                    e.target.value
                  );
                }}
              >
                {descriptionOpt.map((field) => (
                  <MenuItem key={field} value={field.value}>
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <span className="span-css-outoff diagnostic-code-table-slash-span">/ 10</span>
        </Grid>

        <Grid container direction="row" className="diagnostic-code-table-row-container">
          <FormControlLabel
            control={
              <Checkbox
                name={description3Check.name}
                // checked={description3CheckV}
                // onChange={formik.handleChange}
                checked={formik.values?.eightPage[index]?.[description3Check.name]}
                onChange={(e) =>
                  formik.setFieldValue(
                    `eightPage[${index}].${description3Check.name}`,
                    e.target.checked
                  )
                }
              />
            }
          />
          <span className="diagnostic-code-table-index-span no-span">3:</span>
          <Grid
            item
            xs={4.8}
            lg={8}
            sm={4.8}
            ml={1.5}
            mb={0.5}
            className="diagnostic-code-grid-container"
          >
            <FormField
              type={description3Input.type}
              name={description3Input.name}
              // value={description3InputV}
              value={formik.values?.eightPage[index]?.[description3Input.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description3Input.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item xs={4} lg={2} sm={4}>
            <FormField
              type={description3codeInput.type}
              name={description3codeInput.name}
              // value={description3codeInputV}
              value={formik.values?.eightPage[index]?.[description3codeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description3codeInput.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
            <FormControl>
              <Select
                labelId="typesLabel"
                label="Types"
                name={description3ServerityDrop.name}
                // value={description3ServerityDropV || 0}
                // onChange={formik.handleChange}
                value={formik.values?.eightPage[index]?.[description3ServerityDrop.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `eightPage[${index}].${description3ServerityDrop.name}`,
                    e.target.value
                  );
                }}
              >
                {descriptionOpt.map((field) => (
                  <MenuItem key={field} value={field.value}>
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <span className="span-css-outoff diagnostic-code-table-slash-span">/ 10</span>
        </Grid>

        <Grid container direction="row" className="diagnostic-code-table-row-container">
          <FormControlLabel
            control={
              <Checkbox
                name={description4Check.name}
                // checked={description4CheckV}
                // onChange={formik.handleChange}
                checked={formik.values?.eightPage[index]?.[description4Check.name]}
                onChange={(e) =>
                  formik.setFieldValue(
                    `eightPage[${index}].${description4Check.name}`,
                    e.target.checked
                  )
                }
              />
            }
          />
          <span className="diagnostic-code-table-index-span no-span">4:</span>
          <Grid
            item
            xs={4.8}
            lg={8}
            sm={4.8}
            ml={1.5}
            mb={0.5}
            className="diagnostic-code-grid-container"
          >
            <FormField
              type={description4Input.type}
              name={description4Input.name}
              // value={description4InputV}
              value={formik.values?.eightPage[index]?.[description4Input.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description4Input.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item xs={4} lg={2} sm={4}>
            <FormField
              type={description4codeInput.type}
              name={description4codeInput.name}
              // value={description4codeInputV}
              value={formik.values?.eightPage[index]?.[description4codeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description4codeInput.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
            <FormControl>
              <Select
                labelId="typesLabel"
                label="Types"
                name={description4ServerityDrop.name}
                // value={description4ServerityDropV || 0}
                // onChange={formik.handleChange}
                value={formik.values?.eightPage[index]?.[description4ServerityDrop.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `eightPage[${index}].${description4ServerityDrop.name}`,
                    e.target.value
                  );
                }}
              >
                {descriptionOpt.map((field) => (
                  <MenuItem key={field} value={field.value}>
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <span className="span-css-outoff diagnostic-code-table-slash-span">/ 10</span>
        </Grid>

        <Grid container direction="row" className="diagnostic-code-table-row-container">
          <FormControlLabel
            control={
              <Checkbox
                name={description5Check.name}
                // checked={description5CheckV}
                // onChange={formik.handleChange}
                checked={formik.values?.eightPage[index]?.[description5Check.name]}
                onChange={(e) =>
                  formik.setFieldValue(
                    `eightPage[${index}].${description5Check.name}`,
                    e.target.checked
                  )
                }
              />
            }
          />
          <span className="diagnostic-code-table-index-span no-span">5:</span>
          <Grid
            item
            xs={4.8}
            lg={8}
            sm={4.8}
            ml={1.5}
            mb={0.5}
            className="diagnostic-code-grid-container"
          >
            <FormField
              type={description5Input.type}
              name={description5Input.name}
              // value={description5InputV}
              value={formik.values?.eightPage[index]?.[description5Input.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description5Input.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item xs={4} lg={2} sm={4}>
            <FormField
              type={description5codeInput.type}
              name={description5codeInput.name}
              // value={description5codeInputV}
              value={formik.values?.eightPage[index]?.[description5codeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description5codeInput.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
            <FormControl>
              <Select
                labelId="typesLabel"
                label="Types"
                name={description5ServerityDrop.name}
                // value={description5ServerityDropV || 0}
                // onChange={formik.handleChange}
                value={formik.values?.eightPage[index]?.[description5ServerityDrop.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `eightPage[${index}].${description5ServerityDrop.name}`,
                    e.target.value
                  );
                }}
              >
                {descriptionOpt.map((field) => (
                  <MenuItem key={field} value={field.value}>
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <span className="span-css-outoff diagnostic-code-table-slash-span">/ 10</span>
        </Grid>

        <Grid container direction="row" className="diagnostic-code-table-row-container">
          <FormControlLabel
            control={
              <Checkbox
                name={description6Check.name}
                // checked={description6CheckV}
                // onChange={formik.handleChange}
                checked={formik.values?.eightPage[index]?.[description6Check.name]}
                onChange={(e) =>
                  formik.setFieldValue(
                    `eightPage[${index}].${description6Check.name}`,
                    e.target.checked
                  )
                }
              />
            }
          />
          <span className="diagnostic-code-table-index-span no-span">6:</span>
          <Grid
            item
            xs={4.8}
            lg={8}
            sm={4.8}
            ml={1.5}
            mb={0.5}
            className="diagnostic-code-grid-container"
          >
            <FormField
              type={description6Input.type}
              name={description6Input.name}
              // value={description6InputV}
              value={formik.values?.eightPage[index]?.[description6Input.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description6Input.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item xs={4} lg={2} sm={4}>
            <FormField
              type={description6codeInput.type}
              name={description6codeInput.name}
              // value={description6codeInputV}
              value={formik.values?.eightPage[index]?.[description6codeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description6codeInput.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
            <FormControl>
              <Select
                labelId="typesLabel"
                label="Types"
                name={description6ServerityDrop.name}
                // value={description6ServerityDropV || 0}
                // onChange={formik.handleChange}
                value={formik.values?.eightPage[index]?.[description6ServerityDrop.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `eightPage[${index}].${description6ServerityDrop.name}`,
                    e.target.value
                  );
                }}
              >
                {descriptionOpt.map((field) => (
                  <MenuItem key={field} value={field.value}>
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <span className="span-css-outoff diagnostic-code-table-slash-span">/ 10</span>
        </Grid>

        <Grid container direction="row" className="diagnostic-code-table-row-container">
          <FormControlLabel
            control={
              <Checkbox
                name={description7Check.name}
                // checked={description7CheckV}
                // onChange={formik.handleChange}
                checked={formik.values?.eightPage[index]?.[description7Check.name]}
                onChange={(e) =>
                  formik.setFieldValue(
                    `eightPage[${index}].${description7Check.name}`,
                    e.target.checked
                  )
                }
              />
            }
          />
          <span className="diagnostic-code-table-index-span no-span">7:</span>
          <Grid
            item
            xs={4.8}
            lg={8}
            sm={4.8}
            ml={1.5}
            mb={0.5}
            className="diagnostic-code-grid-container"
          >
            <FormField
              type={description7codeInput.type}
              name={description7codeInput.name}
              // value={description7codeInputV}
              value={formik.values?.eightPage[index]?.[description7codeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description7codeInput.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item xs={4} lg={2} sm={4}>
            <FormField
              type={description7Input.type}
              name={description7Input.name}
              // value={description7InputV}
              value={formik.values?.eightPage[index]?.[description7Input.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description7Input.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
            <FormControl>
              <Select
                labelId="typesLabel"
                label="Types"
                name={description7ServerityDrop.name}
                // value={description7ServerityDropV || 0}
                // onChange={formik.handleChange}
                value={formik.values?.eightPage[index]?.[description7ServerityDrop.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `eightPage[${index}].${description7ServerityDrop.name}`,
                    e.target.value
                  );
                }}
              >
                {descriptionOpt.map((field) => (
                  <MenuItem key={field} value={field.value}>
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <span className="span-css-outoff diagnostic-code-table-slash-span">/ 10</span>
        </Grid>
        <Grid container direction="row" className="diagnostic-code-table-row-container">
          <FormControlLabel
            control={
              <Checkbox
                name={description8Check.name}
                // checked={description8CheckV}
                // onChange={formik.handleChange}
                checked={formik.values?.eightPage[index]?.[description8Check.name]}
                onChange={(e) =>
                  formik.setFieldValue(
                    `eightPage[${index}].${description8Check.name}`,
                    e.target.checked
                  )
                }
              />
            }
          />
          <span className="diagnostic-code-table-index-span no-span">8:</span>
          <Grid
            item
            xs={4.8}
            lg={8}
            sm={4.8}
            ml={1.5}
            mb={0.5}
            className="diagnostic-code-grid-container"
          >
            <FormField
              type={description8Input.type}
              name={description8Input.name}
              // value={description8InputV}
              value={formik.values?.eightPage[index]?.[description8Input.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description8Input.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item xs={4} lg={2} sm={4}>
            <FormField
              type={description8codeInput.type}
              name={description8codeInput.name}
              // value={description8codeInputV}
              value={formik.values?.eightPage[index]?.[description8codeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description8codeInput.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
            <FormControl>
              <Select
                labelId="typesLabel"
                label="Types"
                name={description8ServerityDrop.name}
                // value={description8ServerityDropV || 0}
                // onChange={formik.handleChange}
                value={formik.values?.eightPage[index]?.[description8ServerityDrop.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `eightPage[${index}].${description8ServerityDrop.name}`,
                    e.target.value
                  );
                }}
              >
                {descriptionOpt.map((field) => (
                  <MenuItem key={field} value={field.value}>
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <span className="span-css-outoff diagnostic-code-table-slash-span">/ 10</span>
        </Grid>
        <Grid container direction="row" className="diagnostic-code-table-row-container">
          <FormControlLabel
            control={
              <Checkbox
                name={description9Check.name}
                // checked={description9CheckV}
                // onChange={formik.handleChange}
                checked={formik.values?.eightPage[index]?.[description9Check.name]}
                onChange={(e) =>
                  formik.setFieldValue(
                    `eightPage[${index}].${description9Check.name}`,
                    e.target.checked
                  )
                }
              />
            }
          />
          <span className="diagnostic-code-table-index-span no-span">9:</span>
          <Grid
            item
            xs={4.8}
            lg={8}
            sm={4.8}
            ml={1.5}
            mb={0.5}
            className="diagnostic-code-grid-container"
          >
            <FormField
              type={description9Input.type}
              name={description9Input.name}
              // value={description9InputV}
              value={formik.values?.eightPage[index]?.[description9Input.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description9Input.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item xs={4} lg={2} sm={4}>
            <FormField
              type={description9codeInput.type}
              name={description9codeInput.name}
              // value={description9codeInputV}
              value={formik.values?.eightPage[index]?.[description9codeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description9codeInput.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
            <FormControl>
              <Select
                labelId="typesLabel"
                label="Types"
                name={description9ServerityDrop.name}
                // value={description9ServerityDropV || 0}
                // onChange={formik.handleChange}
                value={formik.values?.eightPage[index]?.[description9ServerityDrop.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `eightPage[${index}].${description9ServerityDrop.name}`,
                    e.target.value
                  );
                }}
              >
                {descriptionOpt.map((field) => (
                  <MenuItem key={field} value={field.value}>
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <span className="span-css-outoff diagnostic-code-table-slash-span">/ 10</span>
        </Grid>
        <Grid container direction="row" className="diagnostic-code-table-row-container">
          <FormControlLabel
            control={
              <Checkbox
                name={description10Check.name}
                // checked={description10CheckV}
                // onChange={formik.handleChange}
                checked={formik.values?.eightPage[index]?.[description10Check.name]}
                onChange={(e) =>
                  formik.setFieldValue(
                    `eightPage[${index}].${description10Check.name}`,
                    e.target.checked
                  )
                }
              />
            }
          />
          <span className="diagnostic-code-table-index-span no-span">10:</span>
          <Grid
            item
            xs={4.8}
            lg={8}
            sm={4.8}
            ml={1.5}
            mb={0.5}
            className="diagnostic-code-grid-container"
          >
            <FormField
              type={description10Input.type}
              name={description10Input.name}
              // value={description10InputV}
              value={formik.values?.eightPage[index]?.[description10Input.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description10Input.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item xs={4} lg={2} sm={4}>
            <FormField
              type={description10codeInput.type}
              name={description10codeInput.name}
              // value={description10codeInputV}
              value={formik.values?.eightPage[index]?.[description10codeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `eightPage[${index}].${description10codeInput.name}`,
                  e.target.value
                );
              }}
              className="diagno2"
            />
          </Grid>
          <span className="span-css diagnostic-code-table-slash-span">/</span>
          <Grid item mr={1} xs={1} lg={0.7} sm={1.2}>
            <FormControl>
              <Select
                labelId="typesLabel"
                label="Types"
                name={description10ServerityDrop.name}
                // value={description10ServerityDropV || 0}
                // onChange={formik.handleChange}
                value={formik.values?.eightPage[index]?.[description10ServerityDrop.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `eightPage[${index}].${description10ServerityDrop.name}`,
                    e.target.value
                  );
                }}
              >
                {descriptionOpt.map((field) => (
                  <MenuItem key={field} value={field.value}>
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <span className="span-css-outoff diagnostic-code-table-slash-span">/ 10</span>
        </Grid> */}
      </Grid>
    </>
  );
}

DescriptionComponent.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default DescriptionComponent;

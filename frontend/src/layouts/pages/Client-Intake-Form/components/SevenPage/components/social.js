import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes, { number } from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

function social({ formik, form, index }) {
  const { values } = formik;
  const {
    AlcoholCheck: AlcoholCheckV,
    tobacconever: tobacconeverV,
    tobaccoquit: tobaccoquitV,
    tobaccoquitinput: tobaccoquitinputV,
    tobaccoweek: tobaccoweekV,
    tobaccoweekinput: tobaccoweekinputV,
    alcohol: alcoholV,
    alcoholinput: alcoholinputV,
    drugsnone: drugsnoneV,
    drugsdiscribe: drugsdiscribeV,
    drugsdiscribeinput: drugsdiscribeinputV,
    sleephour: sleephourV,
    sleephourdis: sleephourdisV,
    sexuallyactive: sexuallyactiveV,
    sexuallyactivestd: sexuallyactivestdV,
    sexuallyactivestdinput: sexuallyactivestdinputV,
    excercise: excerciseV,
    water: waterV,
    SmokesCheck: SmokesCheckV,
  } = values.page11[index];

  return (
    <>
      <SoftBox>
        <h2 style={{ textAlign: "center", fontWeight: "700", fontSize: "33px" }}>SOCIAL:</h2>
        <Grid container mt={2} ml={1} className="gridmajor">
          <Grid item lg={2.5} xs={12}>
            <Checkbox
              name={`page11[${index}].SmokesCheck`}
              checked={SmokesCheckV}
              onChange={formik.handleChange}
            />
            <span style={{ fontSize: "16px" }}>Tobacco:</span>
          </Grid>
          <Grid item lg={1.9} xs={12}>
            <Checkbox
              name={`page11[${index}].tobacconever`}
              checked={tobacconeverV}
              onChange={formik.handleChange}
            />
            <span style={{ fontSize: "15px" }}>Never used</span>
          </Grid>
          <Grid item lg={3.16} xs={12} className="Datequit ">
            <Checkbox
              name={`page11[${index}].tobaccoquit`}
              checked={tobaccoquitV}
              onChange={formik.handleChange}
            />
            <span style={{ fontSize: "15px" }} className="datequitinput">
              Date Quit:
            </span>
            <input
              type="date"
              name={`page11[${index}].tobaccoquitinput`}
              value={tobaccoquitinputV}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item lg={3.16} xs={12} className="Datequit">
            <Checkbox
              name={`page11[${index}].tobaccoweek`}
              checked={tobaccoweekV}
              onChange={formik.handleChange}
            />
            <span style={{ fontSize: "15px" }}>Packs/Week:</span>
            <input
              type="number"
              name={`page11[${index}].tobaccoweekinput`}
              value={tobaccoweekinputV}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <Grid container mt={1} ml={1} className="gridmajor">
          <Grid item lg={2.5} xs={12}>
            <Checkbox
              name={`page11[${index}].AlcoholCheck`}
              checked={AlcoholCheckV}
              onChange={formik.handleChange}
            />
            <span style={{ fontSize: "16px" }}>Alcohol:</span>
          </Grid>
          <Grid item lg={8} md={8}>
            <RadioGroup className="maritals" name="alcohol">
              <Grid item lg={2} md={2.5}>
                <Radio
                  id="single"
                  value="none"
                  name={`page11[${index}].alcohol`}
                  checked={alcoholV === "none"}
                  onChange={formik.handleChange}
                />
                <span style={{ fontSize: "15px" }}>None</span>
              </Grid>
              <Grid item lg={7} md={8} ml={5} className="Datequit">
                <Radio
                  id="married"
                  value="drinks"
                  name={`page11[${index}].alcohol`}
                  checked={alcoholV === "drinks"}
                  onChange={formik.handleChange}
                />
                <span style={{ fontSize: "15px" }}>Drinks/Week:</span>
                <input
                  type="number"
                  name={`page11[${index}].alcoholinput`}
                  value={alcoholinputV}
                  onChange={formik.handleChange}
                />
              </Grid>
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid container mt={1} ml={1} className="gridmajor">
          <Grid item lg={2.5} xs={12}>
            <SoftTypography fontSize="16px" marginBottom="8px">
              Recreational drugs:
            </SoftTypography>
          </Grid>
          <RadioGroup className="maritals" name="drugsnone">
            <Grid item lg={3.16} xs={12} md={2}>
              <Radio
                id="no"
                name={`page11[${index}].drugsnone`}
                value="none"
                checked={drugsnoneV === "none"}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px" }}>None</span>
            </Grid>
            <Grid item lg={6.17} xs={12} md={8} className="Datequit">
              <Radio
                id="des"
                name={`page11[${index}].drugsnone`}
                value="Describe"
                checked={drugsnoneV === "Describe"}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px" }}>Describe:</span>
              <input
                name={`page11[${index}].drugsdiscribeinput`}
                value={drugsdiscribeinputV}
                onChange={formik.handleChange}
              />
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid container mt={1} ml={1} className="gridmajor">
          <Grid item lg={2.5} xs={12}>
            <SoftTypography fontSize="16px" marginBottom="8px">
              Sleep:
            </SoftTypography>
          </Grid>
          <Grid item lg={3.16} xs={12} className="Datequit">
            <span style={{ fontSize: "15px" }}>Hours/Night:</span>
            <input
              type="number"
              name={`page11[${index}].sleephour`}
              value={sleephourV}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item lg={6.17} xs={12}>
            <Checkbox
              name={`page11[${index}].sleephourdis`}
              checked={sleephourdisV}
              onChange={formik.handleChange}
            />
            <span style={{ fontSize: "15px" }}>Disturbed</span>
          </Grid>
        </Grid>
        <Grid container mt={1} ml={1} className="gridmajor">
          <Grid item lg={2.5} mt={0.8} xs={12}>
            <SoftTypography fontSize="16px" marginBottom="8px">
              Sexually active:
            </SoftTypography>
          </Grid>

          <Grid item lg={3.2} mt={1}>
            <RadioGroup className="maritals" name="sexuallyactive">
              <Radio
                id="yes"
                value="yes"
                name={`page11[${index}].sexuallyactive`}
                checked={sexuallyactiveV === "yes"}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px" }}>Yes</span>

              <Radio
                style={{ marginLeft: "15px" }}
                id="no"
                value="no"
                name={`page11[${index}].sexuallyactive`}
                checked={sexuallyactiveV === "no"}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px" }}>No</span>
            </RadioGroup>
          </Grid>
          <Grid item lg={5} mb={1} xs={12} className="Datequit">
            <Checkbox
              name={`page11[${index}].sexuallyactivestd`}
              checked={sexuallyactivestdV}
              onChange={formik.handleChange}
            />
            <span style={{ fontSize: "15px" }}>STD/STI:</span>
            <input
              name={`page11[${index}].sexuallyactivestdinput`}
              value={sexuallyactivestdinputV}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <Grid container mt={1} ml={1} className="gridmajor">
          <Grid item lg={2.5} xs={12} mt={0.8}>
            <SoftTypography fontSize="16px" marginBottom="8px">
              Exercise:
            </SoftTypography>
          </Grid>
          <Grid item lg={9} xs={12}>
            <RadioGroup className="maritals excercise-intake" name="excercise">
              <Grid>
                <Grid container>
                  <Grid item lg={0.5}>
                    <Radio
                      id="Sedentary"
                      value="Sedentary"
                      name={`page11[${index}].excercise`}
                      checked={excerciseV === "Sedentary"}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item lg={3}>
                    <span style={{ fontSize: "15px", marginLeft: "10px" }}>Sedentary</span>
                  </Grid>
                </Grid>
                <span style={{ fontSize: "13px" }}>(little to no physical activity)</span>
              </Grid>
              <Grid>
                <Grid container>
                  <Grid item lg={0.5}>
                    <Radio
                      id="Light"
                      value="Light"
                      name={`page11[${index}].excercise`}
                      checked={excerciseV === "Light"}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item lg={4}>
                    <span style={{ fontSize: "15px", marginLeft: "10px" }}>Light Activity</span>
                  </Grid>
                </Grid>
                <span style={{ fontSize: "13px" }}>(1-2 days/week)</span>
              </Grid>
              <Grid>
                <Grid container>
                  <Grid item lg={0.5}>
                    <Radio
                      id="Moderate"
                      value="Moderate"
                      name={`page11[${index}].excercise`}
                      checked={excerciseV === "Moderate"}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item lg={5}>
                    <span style={{ fontSize: "15px", marginLeft: "10px" }}>Moderate Activity</span>
                  </Grid>
                </Grid>
                <span style={{ fontSize: "13px" }}>(3-5 days/week)</span>
              </Grid>
              <Grid>
                <Grid container>
                  <Grid item lg={0.5}>
                    <Radio
                      id="Active"
                      value="Active"
                      name={`page11[${index}].excercise`}
                      checked={excerciseV === "Active"}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item lg={4}>
                    <span style={{ fontSize: "15px", marginLeft: "10px" }}> Very Active</span>
                  </Grid>
                </Grid>
                <span style={{ fontSize: "13px" }}>(6-7 days/week)</span>
              </Grid>
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid className="Water gridmajor" mt={2} ml={1}>
          <span style={{ fontSize: "15px" }}>Water:</span>
          <input name={`page11[${index}].water`} value={waterV} onChange={formik.handleChange} />
          <span style={{ fontSize: "15px" }}>Oz/day (1L=33oz)</span>
        </Grid>
      </SoftBox>
    </>
  );
}
social.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default social;

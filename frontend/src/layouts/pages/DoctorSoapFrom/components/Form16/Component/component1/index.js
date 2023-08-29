import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React from "react";
import FormField from "../../../FormField";
import PropTypes from "prop-types";
import "./index.css";

function ComponentOne({ formik }) {
  const { values } = formik;
  console.log("sz", formik);
  const {
    HT: HTV,
    Wt: WtV,
    BP: BPV,
    Pulse: PulseV,
    RR: RRV,
    Area1: Area1V,
    Area2: Area2V,
    Area3: Area3V,
    CN: CNV,
    Derm: DermV,
    Myo: MyoV,
    Dtr: DtrV,
    Path: PathV,
  } = values;
  console.log("HTV..", HTV);
  return (
    <SoftBox>
      <Grid container spacing={1} style={{ marginBottom: "15px", marginTop: "20px" }}>
        <Grid item xl={9} lg={11} sm={12} xs={12} className="htControl">
          <label>HT</label>

          <input
            className="htControlHT"
            type="text"
            label="HT"
            name="HT"
            values={HTV}
            onChange={formik.handleChange}
          />
          {/* <FormField type="text" label="HT" name="HT" values={HTV} /> */}
          <label style={{ marginLeft: "16px" }}>Wt</label>

          <input
            className="htcontrol-Grid1"
            type="text"
            label="Wt"
            name="Wt"
            values={WtV}
            onChange={formik.handleChange}
          />
        </Grid>
        {/* <Grid item lg={3} sm={3} xs={3}>
          <FormField type="text" label="Wt" name="Wt" values={WtV} />
        </Grid> */}
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          className="htControl htcontrol-Grid"
          style={{ paddingTop: "0px" }}
        >
          <label>BP</label>

          <input
            className="BPControl"
            type="text"
            label="BP"
            name="BP"
            values={BPV}
            onChange={formik.handleChange}
          />

          {/* <FormField type="text" label="BP" name="BP" values={BPV} /> */}
        </Grid>
        <Grid item lg={12} sm={12} xs={12} className="htControl" style={{ paddingTop: "0px" }}>
          <label>Pulse</label>
          <input
            className="htcontrol-Grid"
            type="text"
            label="Pulse"
            name="Pulse"
            values={PulseV}
            onChange={formik.handleChange}
          />
          <label style={{ marginLeft: "16px" }}>Temp</label>
          <input
            className="TempControl"
            type="text"
            label="Pulse"
            name="Pulse"
            values={PulseV}
            onChange={formik.handleChange}
          />
          {/* <FormField type="text" label="Pulse" name="Pulse" values={PulseV} /> */}
        </Grid>
        <Grid item lg={12} sm={12} xs={12} className="htControl" style={{ paddingTop: "0px" }}>
          <label>RR</label>
          <input
            className="RRControl"
            type="text"
            label="RR"
            name="RR"
            values={RRV}
            onChange={formik.handleChange}
          />
          <label style={{ marginLeft: "16px" }}>SpO2</label>
          <input
            className="spo2control"
            type="text"
            label="RR"
            name="RR"
            values={RRV}
            onChange={formik.handleChange}
          />
        </Grid>
        {/* <Grid item lg={3} sm={3} xs={6}>
          <FormField type="text" label="RR" name="RR" values={RRV} />
        </Grid> */}
        <Grid item lg={12} sm={12} xs={12}>
          <div style={{ display: "flex", alignItems: "center" }} className="htControl2">
            <label className="title12">Area</label>
            <label style={{ paddingLeft: "5px", fontSize: "20px" }}> 1:</label>

            <input
              className="cnVControls"
              type="text"
              label="Area1"
              name="Area1"
              values={Area1V}
              onChange={formik.handleChange}
            />

            {/* <FormField type="text" label="Area1" name="Area1" values={Area1V} /> */}
            <Grid style={{ paddingLeft: "5px", fontSize: "13px" }}>/10</Grid>
          </div>
        </Grid>
        <Grid item lg={12} sm={12} xs={12} style={{ paddingTop: "0px" }}>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "47px" }}
            className="htControl2"
          >
            <label style={{ paddingLeft: "5px", fontSize: "20px" }}> 2:</label>

            <input
              className="cnVControl"
              type="text"
              label="Area2"
              name="Area2"
              values={Area2V}
              onChange={formik.handleChange}
            />

            {/* <FormField type="text" label="Area1" name="Area1" values={Area1V} /> */}
            <Grid style={{ paddingLeft: "5px", fontSize: "13px" }}>/10</Grid>
          </div>
        </Grid>
        <Grid item lg={12} sm={12} xs={12} style={{ paddingTop: "0px" }}>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "47px" }}
            className="htControl2"
          >
            <label style={{ paddingLeft: "5px", fontSize: "20px" }}> 3:</label>

            <input
              className="cnVControl"
              type="text"
              label="Area3"
              name="Area3"
              values={Area3V}
              onChange={formik.handleChange}
            />
            {/* <FormField type="text" label="Area3" name="Area3" values={Area3V} /> */}
            <Grid style={{ paddingLeft: "5px", fontSize: "13px" }}>/10</Grid>
          </div>
        </Grid>
        <Grid item lg={12} sm={6} xs={12}>
          <table>
            <tr className="htControl3">
              <td>
                <label>CN</label>
              </td>
              <td>
                <input
                  // style={{ height: "10px" }}
                  className="cnVControl"
                  type="text"
                  label="CN"
                  name="CN"
                  values={CNV}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>
            <tr className="htControl3">
              <td>
                <label>Derm</label>
              </td>
              <td>
                <input
                  className="cnVControl"
                  type="text"
                  label="Derm"
                  name="Derm"
                  values={DermV}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>
            <tr className="htControl3">
              <td>
                <label>Myo</label>
              </td>
              <td>
                <input
                  className="cnVControl"
                  type="text"
                  label="Myo"
                  name="Myo"
                  values={MyoV}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>
            <tr className="htControl3">
              <td>
                <label>Dtr</label>
              </td>
              <td>
                <input
                  className="cnVControl"
                  type="text"
                  label="DTR"
                  name="Dtr"
                  values={DtrV}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>
            <tr className="htControl3">
              <td>
                <label>Path</label>
              </td>
              <td>
                <input
                  className="cnVControl"
                  type="text"
                  label="Path"
                  name="Path"
                  values={PathV}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>
          </table>
        </Grid>

        {/* <Grid item lg={10} sm={3} xs={4} className="htControl3">
          <label>CN</label>

          <input type="text" label="CN" name="CN" values={CNV} onChange={formik.handleChange} />
          <FormField type="text" label="CN" name="CN" values={CNV} />
        </Grid>
        <Grid item lg={10} sm={3} xs={4} style={{ paddingTop: "0px" }} className="htControl3">
          <label>Derm</label>

          <input
            type="text"
            label="Derm"
            name="Derm"
            values={DermV}
            onChange={formik.handleChange}
          />
          <FormField type="text" label="Derm" name="Derm" values={DermV} />
        </Grid>
        <Grid item lg={10} sm={3} xs={4} style={{ paddingTop: "0px" }} className="htControl3">
          <label>Myo</label>
          <input type="text" label="Myo" name="Myo" values={MyoV} onChange={formik.handleChange} />
          <FormField type="text" label="Myo" name="Myo" values={MyoV} />
        </Grid>
        <Grid item lg={10} sm={3} xs={4} style={{ paddingTop: "0px" }} className="htControl3">
          <label>Dtr</label>
          <input type="text" label="DTR" name="Dtr" values={DtrV} onChange={formik.handleChange} />
          <FormField type="text" label="DTR" name="Dtr" values={DtrV} />
        </Grid>
        <Grid item lg={10} sm={3} xs={4} style={{ paddingTop: "0px" }} className="htControl3">
          <label>Path</label>
          <input
            type="text"
            label="Path"
            name="Path"
            values={PathV}
            onChange={formik.handleChange}
          />
          <FormField type="text" label="Path" name="Path" values={PathV} />
        </Grid> */}
      </Grid>
    </SoftBox>
  );
}
ComponentOne.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default ComponentOne;

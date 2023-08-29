import { Grid } from "@mui/material";
import React from "react";
import FormField from "../../../FormField";
import PropTypes from "prop-types";
import { Height } from "@mui/icons-material";

const TextAreaComponent = ({ formik }) => {
  const { values } = formik;
  const { notesArea1: notesArea1V, Area4: Area4V, Area5: Area5V, Area6: Area6V } = values;
  return (
    <>
      <Grid container>
        <Grid lg={12} sm={12} xs={12} mt={1}>
          {/* <span style={{ fontSize: "10px" }}>Notes</span> */}
          <textarea
            style={{
              width: "100%",
              background: "#F1F4FF",
              border: "none",
              outline: "none",
              fontSize: "15px",
              Height: "100px",
            }}
            name="notesArea1"
            value={notesArea1V}
            onChange={formik.handleChange}
          />
        </Grid>
        {/* <Grid item lg={4} sm={4} xs={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormField type="text" label="Area1" name="Area4" value={Area4V}/>
            <Grid style={{ paddingTop: "25px", paddingLeft: "5px" }}>/10</Grid>
          </div>
        </Grid>
        <Grid item lg={4} sm={4} xs={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormField type="text" label="Area2" name="Area5" value={Area5V}/>
            <Grid style={{ paddingTop: "25px", paddingLeft: "5px" }}>/10</Grid>
          </div>
        </Grid>
        <Grid item lg={4} sm={4} xs={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormField type="text" label="Area3" name="Area6" value={Area6V}/>
            <Grid style={{ paddingTop: "25px", paddingLeft: "5px" }}>/10</Grid>
          </div>
        </Grid> */}

        <Grid item lg={12} sm={12} xs={12}>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="htControl2 Area-control"
          >
            <label className="title12">Area</label>
            <label style={{ paddingLeft: "5px", fontSize: "20px" }}> 1:</label>

            <input
              className="cnVControl Area1sub-control"
              type="text"
              label="Area1"
              name="Area4"
              value={Area4V}
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
              name="Area5"
              value={Area5V}
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
              name="Area6"
              value={Area6V}
              onChange={formik.handleChange}
            />
            {/* <FormField type="text" label="Area3" name="Area3" values={Area3V} /> */}
            <Grid style={{ paddingLeft: "5px", fontSize: "13px" }}>/10</Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

TextAreaComponent.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default TextAreaComponent;

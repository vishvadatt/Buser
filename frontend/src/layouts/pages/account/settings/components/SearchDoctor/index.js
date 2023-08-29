import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Autocomplete from "./AutocompleteFilter";
import SearchDoctorComponent from "./SearchDoctor";

const SearchDoctor = () => {
  return (
    <Card id="change-password">
      <SoftBox p={3}>
        <SoftTypography variant="h5">Search Doctor</SoftTypography>
      </SoftBox>
      <SoftBox component="form" pb={3} px={3}>
        <Grid item xs={12}>
          {/* <Autocomplete /> */}
          <div className="search-doctor">
            <SearchDoctorComponent />
          </div>
        </Grid>
      </SoftBox>
    </Card>
  );
};

export default SearchDoctor;

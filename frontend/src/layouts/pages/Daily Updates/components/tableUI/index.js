import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import "./style.css";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "../DataTable";
import SoftSnackbar from "components/SoftSnackbar";
import { clearMessage } from "store/actions/actions";
import { patientsoapdata } from "store/actions/actions";
import { getSearchPatient } from "store/actions/actions";
import SoftInput from "components/SoftInput";
import { Grid } from "@mui/material";

function DailyTables() {
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const [searchValue, setSearchValue] = useState("");
  const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  // const onSearch = (searchTerm) => {
  //   dispatch(patientsoapdata({ patientId: searchTerm._id }));
  // };

  // useEffect(() => {
  //   if(searchValue !== ""){
  //     dispatch(getSearchPatient({ searchkey: searchValue }));
  //   }
  // }, [searchValue]);
  
  return (
    <SoftBox pt={6} pb={3}>
      <Card>
        <SoftBox p={3} lineHeight={1}>
          <h2 className="hedings" fontWeight="medium">
            YOUR DAILY UPDATE DATA TABLE
          </h2>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            data about Your Sequence , Nutrition , Pains
          </SoftTypography>
          
          <SoftBox display="flex" justifyContent="flex-end">
          {/* <Grid >
            <SoftInput
              name="searchClient"
              type="text"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder="Search client here"
            />
            <div className="dropdown" style={{ marginBottom: "10px" }}>
              {searchValue &&
                patientlist &&
                patientlist?.slice(0, 5).map((item, index) => {
                  console.log("item..", item);
                  return (
                    <>
                      {item.email !== searchValue && (
                        <div style={{ marginLeft: "10px" }}>
                          <SoftTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                            onClick={() => {
                              onSearch(item);
                              setSearchValue(item.email);
                            }}
                            key={index}
                          >
                            {item.email}
                          </SoftTypography>
                        </div>
                      )}
                    </>
                  );
                })}
            </div>
          </Grid> */}
            <SoftButton
              variant="gradient"
              color="info"
              component={Link}
              to="/daily-updates/daily-updates-form"
            >
              Add
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <DataTable
          // table={DailyTableData}
          canSearch
          entriesPerPage={{
            defaultValue: 10,
            entries: [10, 15, 20, 25],
          }}
        />
      </Card>
      <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={errorMessage || successMessage}
        open={errorMessage !== "" || successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />
    </SoftBox>
  );
}

export default DailyTables;

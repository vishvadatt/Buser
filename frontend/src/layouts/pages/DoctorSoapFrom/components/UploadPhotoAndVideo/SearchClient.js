import Grid from "@mui/material/Grid";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { reportListAction } from "store/actions/actions";
import { getPhotoAndVideosAction, getSearchPatient, patientsoapdata } from "store/actions/actions";

function SearchClient({ listData }) {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.auth.userdata);
  const [searchValue, setSearchValue] = useState("");
  const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  const UserId = useSelector((state) => state.auth.auth._id);
  const [page, setPage] = useState(1);
  const [PageSize, setPageSize] = useState(10);
  const token = useSelector((state) => state.auth.auth.idToken);

const location = useLocation();
  const onLoadPhotoVideos = (Id, page, limit) => {
    dispatch(getPhotoAndVideosAction({ UserId: Id, page: page, limit: limit }));
  };

  const onSearch = (searchTerm) => {
    console.log("MMMMMMMMM-4");
    dispatch(patientsoapdata({ patientId: searchTerm._id }));
    
    // location.pathname === '/photo-video' ?
    // getPhotoAndVideosAction(searchTerm._id, page, PageSize) :

    location.pathname === '/labs' &&
    reportListAction(token,searchTerm._id,page,PageSize)
  };
  useEffect(() => {
    console.log("MMMMMMMMM-5");
    if (searchValue !== "") {
      console.log("MMMMMMMMM-6");
      dispatch(getSearchPatient({ searchkey: searchValue }));
    }
  }, [searchValue]);

  useEffect(() => {
    console.log("MMMMMMMMM-2");
    if (searchValue === "") {
      // location.pathname === '/photo-video' ?
      // getPhotoAndVideosAction(UserId, page, PageSize) :

      location.pathname === '/labs' &&
      reportListAction(token,UserId,page,PageSize)
    }
  }, [searchValue]);

  return (
    <Grid item xs={12} lg={6} sm={6} mb={3}>
      {userData?.userType === "doctor" && (
        <>
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
        </>
      )}
    </Grid>
  );
}
SearchClient.propTypes = {
  listData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default SearchClient;

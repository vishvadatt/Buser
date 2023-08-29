import { useEffect, useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// react-table components
import { useAsyncDebounce } from "react-table";

// @mui material components
// import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

// Soft UI Dashboard PRO React components
import { Grid } from "@mui/material";
import "antd/dist/antd.css";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftSelect from "components/SoftSelect";
import SoftTypography from "components/SoftTypography";

import { DeleteFilled, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteDailyPaineAction, deletePainAction, getPainListAction } from "store/actions/actions";
import "./example.scss";
import { getSearchPatient } from "store/actions/actions";
import { patientsoapdata } from "store/actions/actions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { clientListAction } from "store/actions/actions";
import axios from "axios";
import { url } from "services/AxiosInstance";

function DataTable({ entriesPerPage, canSearch, showTotalEntries }) {
  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const paindata = useSelector((state) =>
    state.auth.painData.list !== undefined ? state.auth.painData.list : []
  );
  const totalCount = useSelector((state) => state.auth.painData.totalCount);
  const [pagelimit, setPageLimit] = useState(10);
  // Set the entries per page value based on the select value
  const setEntriesPerPage = ({ value }) => {
    setPageLimit(value);
  };
  const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  // Search input value state
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [clientList, setClientList] = useState([]);
  const [showClient, setShowClient] = useState([]);
  const userData = useSelector((state) => state.auth.auth.userdata);
  const [searchId, setSearchId] = useState("");
  // Search input state handle
  const onSearchChange = useAsyncDebounce((value) => {
    setSearch(value);
  }, 100);

  useEffect(() => {
    const loadPatient = async () => {
      if (searchValue !== "") {
        const response = await axios.get(`${url}/api/user/userList`, {
          headers: {
            authorization: token,
          },
        });
        setClientList(response.data.data.result);
      }
    };
    loadPatient();
  }, [searchValue]);

  useEffect(() => {
    if (searchId !== "") {
      dispatch(
        getPainListAction({
          token: token,
          userId: searchId,
          search: search,
          pageNo: pageNo,
          limit: pagelimit,
        })
      );
    }
  }, [search]);

  const onLoadPainDetails = (page) => {
    dispatch(
      getPainListAction({
        token: token,
        userId: UserId,
        search: search,
        pageNo: page,
        limit: pagelimit,
      })
    );
  };
  useEffect(() => {
    onLoadPainDetails(pageNo);
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      onLoadPainDetails(pageNo);
    }
  }, [search, searchValue, pagelimit]);

  // delete sub item
  const DeleteItem = (record) => {
    dispatch(
      deleteDailyPaineAction({ painId: record._id, token, UserId, search, pageNo, pagelimit })
    );
  };
  const DeleteRowItem = (id) => {
    dispatch(deletePainAction({ mainId: id, token, UserId, search, pageNo, pagelimit }));
  };

  const tableColumns = [
    {
      title: "Date",
      dataIndex: "Date",
      // sorter : (values) => {
      //   return  moment(new Date()).format("DD-MM-YYYY") > values.Date
      // }
    },
    {
      title: "Sequence",
      dataIndex: "Sequence",
    },
    {
      title: "Time of Sequence",
      dataIndex: "timeofSequence",
    },
    {
      title: "Nutrition",
      dataIndex: "Nutrition",
    },
    {
      title: "Time Of Nutrition",
      dataIndex: "timeofNutrition",
    },
    {
      title: "Action",
      key: "delete",
      render: (text, record) => {
        return (
          <DeleteFilled
            onClick={() => DeleteRowItem(record.key)}
            style={{ cursor: "pointer", fontSize: "20px", color: "#344767" }}
          />
        );
      },
    },
  ];
  let dataSource = [];
  for (let i = 0; i < paindata.length; i++) {
    const element = paindata[i];
    dataSource.push({
      key: element?._id,
      Date: element?.Date,
      Sequence: element?.Sequence,
      timeofSequence: element?.timeofSequence,
      Nutrition: element?.Nutrition,
      timeofNutrition: element?.timeofNutrition,
      employeePainData: element?.employeePainData,
    });
  }

  const nestedColums = [
    {
      title: "Pain Name",
      dataIndex: "painName",
    },
    {
      title: "Diagnosis Name",
      dataIndex: "diagnosisName",
      render: (record) => {
        return (
          <h4 style={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.70)" }}>{record?.label}</h4>
        );
      },
    },
    {
      title: "Pain Type",
      dataIndex: `PainType`,
      render: (record) => {
        let arr = [];
        {
          record
            ? record?.map((el, i) => {
                arr.push(el.label);
              })
            : [];
        }
        const str = JSON.stringify(arr.toString()).replaceAll('"', "");
        const newStr = str.replaceAll(/,/g, ",  ");

        return <h4 style={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.70)" }}>{newStr}</h4>;
      },
    },
    {
      title: "Pain Level",
      dataIndex: "painLevel",
    },
    {
      title: "Pain Side",
      dataIndex: "leftSidePain",
      render: (employeePainData, aa) => {
        const painSide =
          aa.leftSidePain && aa.rightSidePain
            ? "Left and Right"
            : aa.leftSidePain && aa.rightSidePain === false
            ? "Left"
            : aa.leftSidePain === false && aa.rightSidePain
            ? "Right"
            : "";
        return <span>{painSide}</span>;
      },
    },
    {
      title: "Anti-Gravity",
      dataIndex: "antiGravity",
    },
    {
      title: "Pain Frequency",
      dataIndex: "painFrequency",
    },
    {
      title: "Pain Duration",
      dataIndex: "painDuration",
    },
    {
      title: "Action",
      key: "Action",
      render: (record, i) => {
        return (
          <DeleteFilled
            onClick={() => DeleteItem(record)}
            style={{ cursor: "pointer", fontSize: "20px", color: "#344767" }}
          />
        );
      },
    },
  ];

  const onHandleChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = clientList.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.name.match(regex);
      });
    }
    setShowClient(matches);
    setSearchValue(text);
  };
  const onSuggestHandle = (item) => {
    setSearchValue(item?.name);
    setSearchId(item._id);
    dispatch(patientsoapdata({ patientId: item._id }));
    dispatch(
      getPainListAction({
        token: token,
        userId: item._id,
        search: search,
        pageNo: pageNo,
        limit: pagelimit,
      })
    );
    setShowClient([]);
  };
  return (
    <>
      <SoftBox>
        {entriesPerPage || canSearch ? (
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <Grid container spacing={1}>
              <Grid item lg={2} sm={4} xs={12}>
                {entriesPerPage && (
                  <div style={{ display: "flex", flexDirection: "row", textAlign: "center" }}>
                    <SoftSelect
                      className="searchDailyUpdate"
                      defaultValue={{ value: defaultValue, label: defaultValue }}
                      options={entries.map((entry) => ({ value: entry, label: entry }))}
                      onChange={setEntriesPerPage}
                      size="small"
                    />
                    <SoftTypography variant="caption" color="secondary">
                      &nbsp;&nbsp;Entries Per Page
                    </SoftTypography>
                  </div>
                )}
              </Grid>

              <Grid item xs={12} sm={8} lg={6} className="names">
                {/* <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Name :</span> */}
                {userData?.userType === "doctor" && (
                  <>
                    <input
                      type="text"
                      className="otherlang4  name-span4"
                      onChange={(e) => onHandleChange(e.target.value)}
                      placeholder="Search Client here"
                      value={searchValue}
                    />
                    <div
                      style={{
                        maxHeight: 300,
                        width: "43%",
                        paddingLeft: "20px",
                        overflowY: "scroll",
                        position: "absolute",
                        zIndex: 10,
                        background: "white",
                      }}
                    >
                      {showClient &&
                        showClient.map((user, i) => (
                          <div key={i} onClick={() => onSuggestHandle(user)}>
                            <Grid className="select-item4">
                              <Grid container>
                                <Grid item lg={2} className="profile-details-select4">
                                  {user.UserProfilePIC ? (
                                    <>
                                      <div
                                        style={{ marginLeft: "10px", marginTop: "9px",padding:"16px" }}
                                        className="profile-select"
                                      >
                                        <img src={user.UserProfilePIC} height={40} width={40} />
                                      </div>
                                    </>
                                  ) : (
                                    <div
                                      style={{ marginLeft: "10px", marginTop: "9px",padding:"16px" }}
                                      className="profile-select"
                                    >
                                      <AccountCircleIcon
                                        style={{
                                          fontSize: "20px",
                                          height: "45px",
                                          width: "45px",
                                        }}
                                      />
                                    </div>
                                  )}
                                </Grid>
                                <Grid
                                  item
                                  lg={10}
                                  className="profile-details-select4"
                                  p={1}
                                  style={{ borderRight: "1px solid", borderColor: "#D8DDE6" }}
                                >
                                  <div style={{ marginLeft: "10px" }}>
                                    <SoftTypography
                                      variant="button"
                                      fontWeight="regular"
                                      color="text"
                                    >
                                      {user.name}
                                    </SoftTypography>
                                  </div>
                                  <div style={{ marginLeft: "10px" }}>
                                    <SoftTypography
                                      variant="button"
                                      fontWeight="regular"
                                      color="text"
                                    >
                                      {user.email}
                                    </SoftTypography>
                                  </div>
                                </Grid>
                                {/* <Grid item lg={1.5}></Grid> */}
                              </Grid>
                            </Grid>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </Grid>
              {/* <Grid item lg={1}></Grid> */}
              <Grid item lg={4} sm={4} xs={12} className="searchGrid">
                {canSearch && (
                  // <SoftBox>
                  <SoftInput
                    placeholder="Search..."
                    value={search}
                    onChange={({ currentTarget }) => {
                      setSearch(search);
                      onSearchChange(currentTarget.value);
                    }}
                  />
                  // </SoftBox>
                )}
              </Grid>
            </Grid>
          </SoftBox>
        ) : null}
      </SoftBox>
      <TableContainer sx={{ boxShadow: "none" }}>
        <Table
          columns={tableColumns}
          dataSource={dataSource}
          pagination={{
            pageSize: pagelimit,
            total: totalCount,
            onChange: (page, pageSize) => {
              setPageNo(page);
              onLoadPainDetails(page);
            },
            className: "ant-table ant-pagination-item-active li a",
          }}
          expandable={{
            rowExpandable: (record) => true,
            expandedRowRender: (recrod, i) => {
              return (
                <>
                  <Table
                    columns={nestedColums}
                    dataSource={recrod.employeePainData}
                    pagination={false}
                  ></Table>
                </>
              );
            },
            defaultExpandAllRows: false,
            defaultExpandedRowKeys: [],
            expandIcon: ({ expanded, onExpand, record }) => {
              return expanded ? (
                <MinusCircleOutlined
                  onClick={(e) => onExpand(record, e)}
                  style={{ cursor: "pointer", fontSize: "20px", color: "#344767" }}
                />
              ) : (
                <PlusCircleOutlined
                  onClick={(e) => onExpand(record, e)}
                  style={{ cursor: "pointer", fontSize: "20px", color: "#344767" }}
                />
              );
            },
          }}
        ></Table>

        <SoftBox
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
        ></SoftBox>
      </TableContainer>
    </>
  );
}

// Setting default values for the props of DataTable
DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
};

// Typechecking props for the DataTable
DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(["contained", "gradient"]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};

export default DataTable;

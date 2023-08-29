import { useEffect, useState } from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// react-table components
import { useAsyncDebounce } from "react-table";
import { Button, Modal, Pagination, Popconfirm, Typography } from "antd";
// @mui material components
// import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
// Soft UI Dashboard PRO React components
import { Grid, IconButton, Tooltip, tooltipClasses } from "@mui/material";
import "antd/dist/antd.css";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftSelect from "components/SoftSelect";
import SoftTypography from "components/SoftTypography";
import { styled } from "@mui/material/styles";
import moment from "moment";

import { DeleteFilled, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getWorkHistoryAction } from "store/actions/actions";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { getSearchPatient } from "store/actions/actions";
import { patientsoapdata } from "store/actions/actions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../style.css";
import "./example.scss";
import TextArea from "antd/lib/input/TextArea";
import { updateWorkHistoryAction } from "store/actions/actions";
import SoftSnackbar from "components/SoftSnackbar";
import { clearMessage } from "store/actions/actions";
import { findOneUserAction } from "store/actions/actions";
import DialogBox from "../../DialogBox/index";

function DataTable() {
  const entriesPerPage = {
    defaultValue: 10,
    entries: [10, 15, 20, 25],
  };

  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const workHistorydata = useSelector((state) =>
    state.auth.workHistoryList.result !== undefined ? state.auth.workHistoryList.result : []
  );
  console.log("workHistorydata..", workHistorydata);
  let newWorkHistory = [];
  newWorkHistory = workHistorydata.map((data, i) => ({

    _id: data._id,
    purchaseOfDate: data?.purchaseOfDate,
    clientName: data?.clientName,
    packageName: data?.packageName,
    serviceName: data?.serviceName,
    painDetails: data?.painDetails,
    SessionCount: data?.SessionCount,
    Date: data?.Date,
    practionerName: data?.practionerName,
    Description: data?.Description,
  }));

  const totalCount = useSelector((state) => state.auth.workHistoryList.totalCount);
  const [pagelimit, setPageLimit] = useState(5);
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [editDescription, setEditDescription] = useState(null);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);

  useEffect(() => {
    dispatch(findOneUserAction({ userId : UserId, token : token}));
  },[]);

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  console.log("descriptionValue..", descriptionValue);
  // Set the entries per page value based on the select value
  const setEntriesPerPage = ({ value }) => {
    console.log("page value--", value);
    setPageLimit(value);
    dispatch(
      getWorkHistoryAction({
        practitionerId: UserId,
        pageNo: pageNo,
        limit: value,
        token: token,
      })
    );
  };

  console.log("Newwork---", newWorkHistory);

  useEffect(() => {
    dispatch(
      getWorkHistoryAction({
        practitionerId: UserId,
        pageNo: pageNo,
        limit: pagelimit,
        token: token,
        search: search,
      })
    );
  }, [pageNo, pagelimit, search]);

  console.log("pageNumber--", pageNo, pagelimit, workHistorydata);

  const onLoadPainDetails = (page) => {
    console.log("page--", page);
    dispatch(
      getWorkHistoryAction({
        practitionerId: UserId,
        pageNo: page,
        limit: pagelimit,
        search: search,
        token: token,
      })
    );
  };

  // useEffect(() => {
  //     onLoadPainDetails(pageNo);
  //   }, []);
  // Search input value state
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#17c1e8",
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      return newWorkHistory?.map((des, i) => {
        if (des._id === editDescription?._id) {
          console.log("des..", des);
          // return editDescription;
          dispatch(
            updateWorkHistoryAction({
              id: editDescription?._id,
              data: {
                Description: editDescription?.Description,
              },
              token: token,
            })
          );
          setTimeout(() => {
            onLoadPainDetails(pageNo);
          }, 1000);
        }
        // else{
        //     console.log("des..",editDescription);
        //     return des;
        // }
      });
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const saveDescription = (record) => {
    setOpen(true);
    setEditDescription(record);
  };
  const handleInputChange = (e) => {
    console.log("value...", e);
    setDescriptionValue(e.target.value);
  };
  const tableColumns = [
    {
      title: "Date of Purchase",
      dataIndex: "purchaseOfDate",
      // style: { color: "red" }
    },
    {
      title: "Service Type",
      dataIndex: "serviceName",
      render: (text, record) => {
        console.log("text..", text);
        return {
          props: {
            style: { width: "50%" },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "Service Package",
      dataIndex: "packageName",
    },
    {
      title: "Session # (for Client)",
      dataIndex: "SessionCount",
    },
    {
      title: "Date Of Service",
      dataIndex: "Date",
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
    },
    {
      title: "Pain Detail",
      dataIndex: "painDetails",
      render: (record) => {
        let arr = [];
        console.log("record..",record);
        record[0]?.map((el, i) => {
          arr.push(el.name);
        });
        const str = JSON.stringify(arr.toString()).replaceAll('"', "");
        const newStr = str.replaceAll(/,/g, ",  ");

        return <h4 style={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.70)" }}>{newStr}</h4>;
      },
    },
    {
      title: "Practitioner Name",
      dataIndex: "practionerName",
    },
    // {
    //     title : "Description",
    //     dataIndex : "Description",
    //     // key : "Description",
    //     editable: true,
    //     render : (text,record) => {
    //         console.log("text..",text);
    //         return {
    //             props : {
    //                 style : { width : "100%"}
    //             },
    //             children : <TextArea
    //                 name="Description"
    //                 // value={text}
    //                 // value={descriptionValue}
    //                 // onChange={(e) => setDescriptionValue(e.target.value,record)}

    //                 value={descriptionValue?.Description}
    //                 // onChange={(e) => handleInputChange(e)}
    //                 onChange={(e) => {
    //                     setDescriptionValue(pre => {
    //                         return {...pre,Description : e.target.value}
    //                     })
    //                 }}
    //                 placeholder="Controlled autosize"
    //                 autoSize={{ minRows: 3, maxRows: 5 }}
    //                 style={{width : "100%",height : "50px",padding : "10px 5px",boxSizing : "border-box",borderRadius : "4px",backgroundColor : "#f8f8f8",fontSize : "14px",resize : "none",fontFamily : "inherit"}}
    //             />
    //         }
    //     }
    // },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        //   const editable = true
        return (
          <Button style={{ cursor: "pointer" }} onClick={() => saveDescription(record)}>
            Save Description
          </Button>
        );
      },
    },
  ];

  const onShowSizeChange = (current, pageSize) => {
    setPageLimit(pageSize);
  };

  return (
    <>
      <Grid container>
        {entriesPerPage || canSearch ? (
          <>
            <Grid xs={12} sm={6} lg={4}>
              {entriesPerPage && (
                <SoftBox display="flex" alignItems="center">
                  <SoftSelect
                    defaultValue={{ value: defaultValue, label: defaultValue }}
                    options={entries.map((entry) => ({ value: entry, label: entry }))}
                    onChange={setEntriesPerPage}
                    size="small"
                  />
                  <SoftTypography variant="caption" color="secondary">
                    &nbsp;&nbsp;Entries Per Page
                  </SoftTypography>
                </SoftBox>
              )}
            </Grid>
            <Grid xs={12} sm={6} lg={8} style={{ display: "flex", justifyContent: "end" }}>
              <SoftInput
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Searching here"
                className="educationSearch"
              />
            </Grid>
          </>
        ) : null}
        {/* <SoftBox display="flex" justifyContent="flex-end" pb={2}> */}

        {/* </SoftBox> */}
      </Grid>
      <TableContainer sx={{ boxShadow: "none" }}>
        <Table
          // style={{padding : "10px 5px"}}
          className="antdTableClass"
          columns={tableColumns}
          dataSource={newWorkHistory}
          // pagination={{
          //     pageSize: pagelimit,
          //     total: totalCount,
          //     onChange: (page, pageSize) => {
          //         setPageNo(page);
          //         onLoadPainDetails(page);
          //     },
          //     className: "ant-table ant-pagination-item-active li a",
          // }}
          pagination={false}
        ></Table>
        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <TextArea
          placeholder="Enter Description here"
            value={editDescription?.Description}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={(e) => {
              setEditDescription((pre) => {
                //    console.log("pre...",...pre);
                return { ...pre, Description: e.target.value };
              });
            }}
          />
        </Modal>
      </TableContainer>
      <br />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Pagination
          pageSize={pagelimit}
          total={totalCount}
          current={pageNo}
          onChange={(value) => setPageNo(value)}
          // showSizeChanger
          // showQuickJumper
          // onShowSizeChange={onShowSizeChange}
        />
      </div>
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
      <DialogBox open={informConsentStatus}/>

    </>
  );
}

// Setting default values for the props of DataTable
// DataTable.defaultProps = {
//     entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
//     canSearch: false,
//     showTotalEntries: true,
//     pagination: { variant: "gradient", color: "info" },
//     isSorted: true,
//     noEndBorder: false,
// };

// Typechecking props for the DataTable
// DataTable.propTypes = {
//     entriesPerPage: PropTypes.oneOfType([
//         PropTypes.shape({
//             defaultValue: PropTypes.number,
//             entries: PropTypes.arrayOf(PropTypes.number),
//         }),
//         PropTypes.bool,
//     ]),
//     canSearch: PropTypes.bool,
//     showTotalEntries: PropTypes.bool,
//     table: PropTypes.objectOf(PropTypes.array).isRequired,
//     // pagination: PropTypes.shape({
//     //   variant: PropTypes.oneOf(["contained", "gradient"]),
//     //   color: PropTypes.oneOf([
//     //     "primary",
//     //     "secondary",
//     //     "info",
//     //     "success",
//     //     "warning",
//     //     "error",
//     //     "dark",
//     //     "light",
//     //   ]),
//     // }),
//     isSorted: PropTypes.bool,
//     noEndBorder: PropTypes.bool,
// };

export default DataTable;

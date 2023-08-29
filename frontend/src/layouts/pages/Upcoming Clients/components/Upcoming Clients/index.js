import { useEffect, useState } from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// react-table components
import { useAsyncDebounce } from "react-table";
import { Pagination } from "antd";
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
import { getUpcomingClientsAction } from "store/actions/actions";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { patientsoapdata } from "store/actions/actions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../style.css";

function UpcomingClient() {
  const entriesPerPage = {
    defaultValue: 10,
    entries: [10, 15, 20, 25],
  };
  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const patientRecorddata = useSelector((state) =>
    state.auth.doctorUpcomingClientList.result !== undefined
      ? state.auth.doctorUpcomingClientList.result
      : []
  );

  const totalCount = useSelector((state) => state.auth.doctorUpcomingClientList.totalCount);
  const [pagelimit, setPageLimit] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  // Set the entries per page value based on the select value
  const setEntriesPerPage = ({ value }) => {
    console.log("page value--", value);
    setPageLimit(value);
    dispatch(
      getUpcomingClientsAction({
        doctorId: UserId,
        pageNo: pageNo,
        limit: value,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getUpcomingClientsAction({
        doctorId: UserId,
        pageNo: pageNo,
        limit: pagelimit,
      })
    );
  }, [pageNo, pagelimit]);

  const onLoadPainDetails = (page) => {
    console.log("page--", page);
    dispatch(
      getUpcomingClientsAction({
        doctorId: UserId,
        pageNo: page,
        limit: pagelimit,
      })
    );
  };



  const tableColumns = [
    {
      title: "Client Name",
      dataIndex: "name",
    },
    {
      title: "Client Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Date",
      dataIndex: "Date",
    },
  ];

  const onShowSizeChange = (current, pageSize) => {
    setPageLimit(pageSize);
  };

  return (
    <>
      <TableContainer sx={{ boxShadow: "none" }}>
        <SoftBox>
          {entriesPerPage || canSearch ? (
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
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
            </SoftBox>
          ) : null}
        </SoftBox>
        <Table
          columns={tableColumns}
          dataSource={patientRecorddata}
          pagination={{
            pageSize: pagelimit,
            total: totalCount,
            onChange: (page, pageSize) => {
              setPageNo(page);
              onLoadPainDetails(page);
            },
            className: "ant-table ant-pagination-item-active li a",
          }}
          // pagination={true}
        ></Table>
      </TableContainer>
    </>
  );
}



export default UpcomingClient;

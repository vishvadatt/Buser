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
import { styled } from '@mui/material/styles';

import { DeleteFilled, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteDailyPaineAction, deletePainAction, getPainListAction } from "store/actions/actions";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { getSearchPatient } from "store/actions/actions";
import { patientsoapdata } from "store/actions/actions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


function DataTable({ entriesPerPage, canSearch, showTotalEntries }) {
  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  //   const paindata = useSelector((state) =>
  //     state.auth.painData.list !== undefined ? state.auth.painData.list : []
  //   );

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
  const userData = useSelector((state) => state.auth.auth.userdata);
  const [searchId, setSearchId] = useState("");
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#17c1e8",
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));



  const tableColumns = [

    {
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "Date",
      dataIndex: "Date",

    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
        console.log(_, record, "check")
        return (
          <LightTooltip title="view" arrow={false}>
            <IconButton aria-label="view" onClick={() => window.open(`https://sandbox.optimum-method.com/#/programs/abc/${record.Name}`)}>
              <OpenInBrowserIcon />
            </IconButton></LightTooltip>
        )
      },
    },

  ];
  //   console.log("paindata..", paindata);
  let dataSource = [
    {
      Name: "program1",
      Date: "22/3/2023"
    }, {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },
    {
      Name: "program2",
      Date: "22/3/2023"
    },

  ];


  const onShowSizeChange = (current, pageSize) => {
    setPageLimit(pageSize);
  };

  return (
    <>

      <TableContainer sx={{ boxShadow: "none" }}>
        <Table
          columns={tableColumns}
          dataSource={dataSource}
          pagination={false}
        ></Table>
        <div style={{ display: "flex" }}>
          <SoftBox py={2}>
            <Pagination
              pageSize={pagelimit}
              total={dataSource.length + 1}
              current={pageNo}
              onChange={(value) => setPageNo(value)}
              showSizeChanger
              showQuickJumper
              onShowSizeChange={onShowSizeChange}
            />
          </SoftBox>
        </div>

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
  // pagination: PropTypes.shape({
  //   variant: PropTypes.oneOf(["contained", "gradient"]),
  //   color: PropTypes.oneOf([
  //     "primary",
  //     "secondary",
  //     "info",
  //     "success",
  //     "warning",
  //     "error",
  //     "dark",
  //     "light",
  //   ]),
  // }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};

export default DataTable;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import TableContainer from "@mui/material/TableContainer";
import "antd/dist/antd.css";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import moment from "moment";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getPatientRecordsAction,
  toggleSoapFormAction,
  toggleIntakeFormAction,
} from "store/actions/actions";
import "../style.css";
import ReactSelect from "react-select";

function PatientRecord() {
  const entriesPerPage = {
    defaultValue: 10,
    entries: [10, 15, 20, 25],
  };
  const navigate = useNavigate();

  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);

  const patientRecorddata = useSelector((state) =>
    state.auth.patientRecordsList?.result ? state.auth.patientRecordsList.result : []
  );
  const totalCount = useSelector((state) => state.auth.patientRecordsList.totalCount);

  const [pagelimit, setPageLimit] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const [searchText, setSearchText] = useState("");
  const [selectedSearch, setSelectedSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [count, setCount] = useState(0);

  // console.log(patientRecorddata, "hh");
  // console.log(searchList, "ffffffffffffffff");

  const fetchList = async () => {
    await dispatch(
      getPatientRecordsAction({ doctorId: UserId, pageNo, limit: pagelimit, token, searchText })
    );
  };

  useEffect(() => {
    fetchList();
  }, [pageNo, pagelimit, searchText]);

  useEffect(() => {
    setSearchList(
      patientRecorddata?.map((data, i) => {
        return {
          value: data?._id,
          label: data?.name,
        };
      }) || []
    );
  }, [patientRecorddata]);

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
      title: "Mobile",
      dataIndex: "mobile_no",
    },
    {
      title: "Address",
      dataIndex: "address1",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (date) => moment(date).format("DD-MM-YYYY"),
    },
    {
      title: "",
      render: (data) => (
        <SoftButton
          className="client-records-view-btn"
          variant="gradient"
          color="dark"
          id={data._id}
          key={data._id}
          onClick={() => {
            dispatch(
              toggleIntakeFormAction({
                shouldShowPatientIntakeFormDetail: true,
                patientId: data._id,
              })
            );
            navigate("/client-intake-form");
          }}
        >
          VIEW CLIENT INTAKE
        </SoftButton>
      ),
    },
    {
      title: "",
      render: (data) => (
        <SoftButton
          className="client-records-view-btn"
          variant="gradient"
          color="dark"
          id={data._id}
          key={data._id}
          onClick={() => {
            dispatch(
              toggleSoapFormAction({
                shouldShowPatientSoapFormDetail: true,
                patientId: data._id,
              })
            );
            navigate("/doctor-soap-form");
          }}
        >
          VIEW SOAP
        </SoftButton>
      ),
    },
  ];

  // Set the entries per page value based on the select value
  // const setEntriesPerPage = ({ value }) => {
  //   // console.log("page value--", value);
  //   setPageLimit(value);

  //   dispatch(
  //     getPatientRecordsAction({
  //       doctorId: UserId,
  //       pageNo: pageNo,
  //       limit: value,
  //       token: token,
  //       searchText: searchText,
  //     })
  //   );
  // };

  const onShowSizeChange = (current, pageSize) => {
    setPageLimit(pageSize);
  };

  const onHandleChange = (text) => {
    setSelectedSearch(text);
    if (text === null) {
      setSearchText("");
    } else {
      setSearchText(text?.label);
    }
  };

  return (
    <SoftBox>
      <SoftBox>
        <ReactSelect
          className="report-search"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontSize: "15px !important",
              borderRadius: "8px",
            }),
          }}
          placeholder="Search here"
          closeMenuOnSelect={true}
          options={searchList}
          onChange={(e) => {
            onHandleChange(e);
          }}
          value={selectedSearch}
          isClearable={true}
        />
      </SoftBox>
      {/* <div className="client-records-container">
          <div className="client-records-search-bar-container">
            <input
              className="client-records-search-bar-input"
              placeholder="Filter By "
              onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            />
          </div>
        </div> */}
      <TableContainer sx={{ boxShadow: "none" }}>
        <Table
          columns={tableColumns}
          dataSource={patientRecorddata}
          // pagination={{
          //   pageSize: pagelimit,
          //   total: totalCount,
          //   onChange: (page, pageSize) => {
          //     setPageNo(page);
          //   },
          //   className: "ant-table ant-pagination-item-active li a",
          // }}
          pagination={false}
        ></Table>
        <Pagination
          pageSize={pagelimit}
          total={totalCount}
          current={pageNo}
          onChange={(value) => setPageNo(value)}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
        />
      </TableContainer>
    </SoftBox>
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

export default PatientRecord;

import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
import SoftTypography from "components/SoftTypography";
import { Table } from "antd";
import { useSelector } from "react-redux";
import "../style.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { CLIENT_PURCHASE_SERVICE_LIST_ACTION } from "store/actions/actions";
import { DOCTOR_PURCHASE_SERVICE_LIST_ACTION } from "store/actions/actions";

function MyServicesTable({ tabValue }) {
  const dispatch = useDispatch();
  const entriesPerPage = {
    defaultValue: 10,
    entries: [10, 15, 20, 25],
  };
  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];

  const token = useSelector((state) => state.auth.auth.idToken);

  const clientServiceList = useSelector((state) => state.auth.clientAllServiceList?.result);
  const doctorServiceList = useSelector((state) => state.auth.doctorAllServiceList?.result);

  const clientServiceListCount = useSelector(
    (state) => state.auth.clientAllServiceList?.totalCount
  );
  const doctorServiceListCount = useSelector(
    (state) => state.auth.doctorAllServiceList?.totalCount
  );

  const [pageLimit, setPageLimit] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const setEntriesPerPage = ({ value }) => {
    setPageLimit(value);
  };
  // console.log(clientServiceList, "cl");
  // console.log(doctorServiceList, "dl");
  const fetchDetails = async () => {
    if (tabValue === 1) {
      dispatch(CLIENT_PURCHASE_SERVICE_LIST_ACTION({ pageNo, pageLimit, token }));
    } else {
      dispatch(DOCTOR_PURCHASE_SERVICE_LIST_ACTION({ pageNo, pageLimit, token }));
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    fetchDetails();
  }, [tabValue, pageLimit, pageNo]);

  const tableColumns = [
    {
      title: "Service Name",
      dataIndex: "serviceName",
    },
    {
      title: "Package Name",
      dataIndex: "packageName",
    },
    {
      title: "Date of Purchase",
      dataIndex: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD-MM-YYYY"),
    },
    {
      title: "Date of Upgradation",
      dataIndex: "updatedDate",
      render: (updatedDate) => moment(updatedDate).format("DD-MM-YYYY"),
    },
    {
      title: "Total Credit",
      dataIndex: "totalCredit",
    },
    {
      title: "Available Credit",
      dataIndex: "remainingCredit",
    },
  ];

  return (
    <>
      <TableContainer sx={{ boxShadow: "none" }}>
        <SoftBox>
          {entriesPerPage || canSearch ? (
            <SoftBox
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              p={2}
              mt={1}
              className="per-pages-entries-conainer"
            >
              {entriesPerPage && (
                <SoftBox display="flex" alignItems="center" className="per-pages-container">
                  <SoftSelect
                    defaultValue={{ value: defaultValue, label: defaultValue }}
                    options={entries.map((entry) => ({ value: entry, label: entry }))}
                    onChange={setEntriesPerPage}
                    size="small"
                    className="page-select"
                  />
                  <SoftTypography variant="caption" color="secondary" className="entries">
                    &nbsp;&nbsp;Entries Per Page
                  </SoftTypography>
                </SoftBox>
              )}
            </SoftBox>
          ) : null}
        </SoftBox>
        <Table
          columns={tableColumns}
          dataSource={tabValue === 0 ? doctorServiceList : clientServiceList}
          pagination={{
            pageSize: pageLimit,
            total: tabValue === 0 ? doctorServiceListCount : clientServiceListCount,
            onChange: (page) => {
              setPageNo(page);
            },
            className: "ant-table ant-pagination-item-active li a",
          }}
        ></Table>
      </TableContainer>
    </>
  );
}

MyServicesTable.propTypes = {
  tabValue: PropTypes.number.isRequired,
};
export default MyServicesTable;

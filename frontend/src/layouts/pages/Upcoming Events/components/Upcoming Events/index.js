import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
// Soft UI Dashboard PRO React components
import "antd/dist/antd.css";
import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
import SoftTypography from "components/SoftTypography";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingEventListAction } from "store/actions/actions";
import "../style.css";
import SoftButton from "components/SoftButton";
import { useNavigate } from "react-router-dom";

function UpcomingEvent() {
  const navigate = useNavigate();
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
    state.auth.UpcomingEventList.result !== undefined ? state.auth.UpcomingEventList.result : []
  );
  const totalCount = useSelector((state) => state.auth.UpcomingEventList.totalCount);
  const [pagelimit, setPageLimit] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  // Set the entries per page value based on the select value
  const setEntriesPerPage = ({ value }) => {
    setPageLimit(value);
  };
  useEffect(() => {
    dispatch(
      getUpcomingEventListAction({
        pageNo: pageNo,
        limit: pagelimit,
        token: token,
      })
    );
  }, [pageNo, pagelimit]);


  const tableColumns = [
    {
      title: "Event Name",
      dataIndex: "title",
    },
    // {
    //   title: "Event Description",
    //   dataIndex: "description",
    // },
    // {
    //   title: "Note",
    //   dataIndex: "note",
    // },
    {
      title: "Start Date",
      dataIndex: "Date",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Time",
      dataIndex: "startTime",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Action",
      key: "view",
      dataIndex: "tags",
      render: (_, record) => (
        <>
          <SoftButton
            className="btn-event-view "
            onClick={() => {
              navigate(`/upcoming-Events/event_detail?id=${record._id}`);
            }}
          >
            View
          </SoftButton>
        </>
      ),
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
            <SoftBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              className="per-pages-entries-conainer"
            >
              {entriesPerPage && (
                <SoftBox display="flex" alignItems="center" className="per-pages-container">
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
              
            },
            className: "ant-table ant-pagination-item-active li a",
          }}
          // pagination={true}
        ></Table>
      </TableContainer>
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

export default UpcomingEvent;

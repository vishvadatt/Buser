import SoftBox from "components/SoftBox";
import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SoftButton from "components/SoftButton";
import "./styles.css";
import { Pagination, Table } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "services/AxiosInstance";
import { patientCancelAppointment } from "store/actions/actions";
import { Formik } from "formik";
import { Box, Grid, Modal, Typography } from "@mui/material";
import * as Yup from "yup";
import moment from "moment";

const validationSchema = Yup.object({
  cancelReason: Yup.string().required("Required!"),
});

const TableView = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState("");
  const navigate = useNavigate();
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [aptId, setAptId] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  const currentTime = moment().format("YYYY-MM-DDTHH:mm:ss");

  const date48 = (date, time) => {
    const startDate = moment(`${date}T${time}`);
    let remainingHours = 48;
    while (remainingHours > 0) {
      startDate.subtract(1, "hour");
      if (startDate.day() === 0 || startDate.day() === 6) {
        continue;
      }
      remainingHours--;
    }
    return startDate.format("YYYY-MM-DDTHH:mm:ss");
    // return moment(`${date}T${time}`)
    //   .subtract(48, "hours")
    //   .format("YYYY-MM-DDThh:mm:ss");
  };

  const date5days = (date, time) => {
    const startDate = moment(`${date}T${time}`);
    let remainingHours = 120;
    while (remainingHours > 0) {
      startDate.subtract(1, "hour");
      if (startDate.day() === 0 || startDate.day() === 6) {
        continue;
      }
      remainingHours--;
    }
    return startDate.format("YYYY-MM-DDTHH:mm:ss");
  };

  const fetchList = async () => {
    const response = await axiosInstance.get(
      `Appointment/MonthlyUpcomingAppointment/${UserId}?pageNo=${page}&limit=${pageSize}&searchText=""`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    const res = response?.data?.data;
    console.log(res);

    setTotal(res?.totalCount);
    setData(res?.result);
  };

  useEffect(() => {
    fetchList();
  }, [page, pageSize]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [page, pageSize]);

  const handleAppointmentCancel = (details) => {
    setAptId(details?._id);
    setAppointmentDetails(details);
    setShowCancelModal(true);
  };

  const handleCancelAppointment = async (val) => {
    try {
      await dispatch(
        patientCancelAppointment({
          appointmentId: appointmentDetails._id,
          cancelReason: val.cancelReason,
          patientId: UserId,
          token: token,
        })
      );
      await fetchList();
      setShowCancelModal(false);
      setAptId("");
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Doctor Name",
      dataIndex: "doctorName",
    },
    {
      title: "Status",
      dataIndex: "Status",
    },
    {
      title: "Date",
      dataIndex: "Date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "Service Type",
      dataIndex: "serviceName",
    },
    {
      title: "View",
      key: "view",
      dataIndex: "tags",
      render: (_, record) => (
        <>
          <SoftButton
            onClick={() => {
              navigate(`/appointment-details/?id=${record._id}&tab=upcClient`);
            }}
          >
            View
          </SoftButton>
        </>
      ),
    },

    {
      title: "Action",
      dataIndex: "Status",
      render: (Status, record) => {
        if (Status === "Pending" || Status === "Confirmed") {
          return (
            <SoftBox display="flex" gap="5px">
              <SoftButton
                className="action-btn1"
                onClick={() => {
                  handleAppointmentCancel(record);
                }}
              >
                Cancel
              </SoftButton>
            </SoftBox>
          );
        }
        return null;
      },
    },
  ];
  const onShowSizeChange = (current, value) => {
    setPageSize(value);
  };

  // console.log(appointmentDetails, "appp");

  return (
    <SoftBox p={2}>
      <SoftBox style={{ overflowX: "scroll", overflowY: "hidden" }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </SoftBox>
      <SoftBox p={1}>
        <Pagination
          pageSize={pageSize}
          total={total}
          current={page}
          onChange={(value) => setPage(value)}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
        />
      </SoftBox>

      <Modal
        open={showCancelModal}
        onClose={() => {
          setAptId("");
          setShowCancelModal(false);
          setAppointmentDetails("");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
      >
        <Box className="cancelAppointment">
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Cancel Appointment
          </Typography>
          {appointmentDetails &&
            appointmentDetails.Status === "Confirmed" &&
            appointmentDetails.serviceName === "Client Live Video (Online) Exercise Therapy" &&
            currentTime > date48(appointmentDetails?.Date, appointmentDetails?.startTime) && (
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
                id="modal-modal-title2"
              >
                You will loose your credit, if you still want to cancel then proceed ?
              </Typography>
            )}
          {appointmentDetails &&
            appointmentDetails.Status === "Confirmed" &&
            appointmentDetails.serviceName ===
              "Client Live In-Person and Travel Exercise Therapy" &&
            currentTime > date5days(appointmentDetails?.Date, appointmentDetails?.startTime) && (
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
                id="modal-modal-title3"
              >
                You will loose your credit, if you still want to cancel then proceed ?
              </Typography>
            )}
          <>
            <Formik
              initialValues={{
                cancelReason: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, onSubmitProps) => {
                setTimeout(() => {
                  setAptId("");
                  setShowCancelModal(false);
                }, 500);
                handleCancelAppointment(values);
              }}
            >
              {(formik) => {
                return (
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <br />
                    <div style={{ width: "90%" }}>
                      <textarea
                        style={{ height: "50px" }}
                        type="text"
                        name="cancelReason"
                        placeholder="Enter reason for cancellation..."
                        className="form-Reason"
                        value={formik.values.cancelReason}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.cancelReason && formik.errors.cancelReason && (
                        <div style={{ color: "red" }}>{formik.errors.cancelReason}</div>
                      )}
                    </div>
                    <br />
                    <Grid item xs={12} lg={6}>
                      <SoftBox display="flex" justifyContent="center">
                        <SoftButton
                          type="submit"
                          variant="gradient"
                          style={{
                            backgroundColor: "#17C1E8",
                            color: "white",
                          }}
                          onClick={formik.handleSubmit}
                        >
                          submit
                        </SoftButton>
                      </SoftBox>
                    </Grid>
                  </Grid>
                );
              }}
            </Formik>
          </>
        </Box>
      </Modal>
    </SoftBox>
  );
};

export default TableView;

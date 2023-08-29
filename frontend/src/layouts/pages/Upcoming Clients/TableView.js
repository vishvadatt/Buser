import SoftBox from "components/SoftBox";
import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SoftButton from "components/SoftButton";
import "./style.css";
import { Pagination, Table } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "services/AxiosInstance";
import {
  Box,
  Typography,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  Checkbox,
} from "@mui/material";
import SoftInput from "components/SoftInput";
import { confirmAppointmentAction } from "store/actions/actions";
import QuizForm from "../../../components/QuizForm";
import { findOneInformConsent } from "store/actions/actions";
import SoftTypography from "components/SoftTypography";

const TableView = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState("");
  const navigate = useNavigate();
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const [informConsetData, setinformConsetData] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showDeniedModal, setShowDeniedModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [aptId, setAptId] = useState("");
  const [link, setLink] = useState("");
  const [videoName, setVideoName] = useState("");
  const [checked, setChecked] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);
  const [record, setRecord] = useState(null);

  const fetchList = async () => {
    const response = await axiosInstance.get(
      `doctorAppointmentSlot/MonthlyUpcomingClient/${UserId}?pageNo=${page}&limit=${pageSize}&searchText=""`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    const res = response?.data?.data;
    console.log(res, "res");

    setData(res?.result);
    setTotal(res?.totalCount);
  };

  const fetchPatientIC = async () => {
    try {
      const res = await axiosInstance.get(
        `informConsent/patientLastInformedConsentRecord/${record?.patientId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setinformConsetData(res?.data?.data?.result[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (record) {
      fetchPatientIC();
    }
  }, [record]);

  useEffect(() => {
    fetchList();
  }, [page, pageSize]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [page, pageSize]);

  const handleAppointmentConfirm = (id) => {
    setShowConfirmModal(true);
    setAptId(id);
  };
  const handleConfirmAppointment = async () => {
    try {
      await dispatch(
        confirmAppointmentAction({
          appointmentId: aptId,
          token: token,
        })
      );
      await fetchList();
      setShowConfirmModal(false);
      setAptId("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAppointmentDenied = (id) => {
    setShowDeniedModal(true);
    setAptId(id);
  };

  const handleDenied = async () => {
    try {
      dispatch({
        type: "SET_DENIED_APPOINTMENT_STATUS_ACTION",
        payload: {
          appointmentId: aptId,
          token: token,
        },
      });
      await fetchList();
      setShowDeniedModal(false);
      setAptId("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAppointmentCancel = (details) => {
    setAptId(details?._id);
    setAppointmentDetails(details);
    setShowCancelModal(true);
  };

  const handleCancelAppointment = async () => {
    try {
      dispatch({
        type: "SET_CANCEL_APPOINTMENT_STATUS_ACTION",
        payload: {
          token: token,
          appointmentId: aptId,
          Date: appointmentDetails.Date,
          Time: appointmentDetails.startTime,
        },
      });
      await fetchList();
      setShowCancelModal(false);
      setAptId("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAppointmentComplete = (details) => {
    setAptId(details._id);
    setRecord(details);
    setShowCompleteModal(true);
  };

  const handleLinkSubmission = async (quizData) => {
    if (!image) {
      setError(true);
      return;
    }
    setError(false);
    const formData = new FormData();

    formData.append("sequenceImage", image);
    formData.append("videoName", videoName);
    formData.append("recommendation", checked);
    formData.append("quiz", JSON.stringify(quizData.formData));

    try {
      const response = await axiosInstance.put(
        `doctorAppointmentSlot/doctorCompleteAppointment/${aptId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        await fetchList();
      }
      setAptId("");
      setLink("");
      setVideoName("");
      setImage("");
      setAvatarPreview("");
      setChecked(false);
      setShowCompleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLinkSubmission1 = async () => {
    const data = {
      meetingLink: link,
      videoName: videoName,
      notForSale: true,
    };

    try {
      const response = await axiosInstance.put(
        `doctorAppointmentSlot/doctorCompleteAppointment/${aptId}`,
        data,
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        await fetchList();
      }
      setAptId("");
      setLink("");
      setVideoName("");
      setChecked(false);
      setShowCompleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (e) => {
    setImage(e.currentTarget.files[0]);
    setError(false);

    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
  };
  const columns = [
    {
      title: "Client Name",
      dataIndex: "patientName",
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
    // {
    //   title: "End Time",
    //   dataIndex: "endTime",
    // },
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
        if (Status === "Pending") {
          return (
            <SoftBox display="flex" gap="5px">
              <SoftButton
                className="action-btn"
                onClick={() => {
                  handleAppointmentConfirm(record._id);
                }}
              >
                Confirm
              </SoftButton>
              <SoftButton
                className="action-btn1"
                onClick={() => {
                  handleAppointmentDenied(record._id);
                }}
              >
                Deny
              </SoftButton>
            </SoftBox>
          );
        } else if (Status === "Confirmed") {
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
              {record?.therapyType === "Live video therapy" && (
                <SoftButton
                  className="action-btn"
                  onClick={() => {
                    window.open(record.meetingLink, "_blank");
                  }}
                >
                  Zoom
                </SoftButton>
              )}

              <SoftButton
                className="action-btn"
                onClick={() => {
                  handleAppointmentComplete(record);
                }}
              >
                Complete
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

  // console.log(aptId, "idddddddddd");
  // console.log("assss", appointmentDetails);

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

      <Dialog
        fullWidth
        maxWidth={"md"}
        open={showCompleteModal}
        onClose={() => {
          setAptId("");
          setLink("");
          setShowCompleteModal(false);
          setRecord("");
        }}
      >
        <DialogTitle>Complete Session</DialogTitle>
        <DialogContent sx={{ padding: "10px" }}>
          <SoftInput
            type="text"
            value={videoName}
            name="link"
            placeholder="Enter Video Name Here.."
            onChange={(e) => setVideoName(e.target.value)}
          />
          <SoftInput
            sx={{ margin: "15px 0" }}
            type="text"
            value={link}
            name="link"
            placeholder="Enter Link Here.."
            onChange={(e) => setLink(e.target.value)}
          />
          {informConsetData &&
          informConsetData?.commitment_initial2 &&
          informConsetData?.commitment_initial2 !== "" ? (
            <>
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                marginBottom={"10px"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  marginBottom={"10px"}
                >
                  <Checkbox value={checked} onChange={(e) => setChecked(e.target.checked)} />
                  <Typography variant="body2" color="text.secondary">
                    Recommeded For Sale
                  </Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"5px"}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    {avatarPreview && (
                      <img src={avatarPreview} alt="Preview" className="preview-image" />
                    )}
                    <input type="file" onChange={(e) => handleImage(e)} className="file-input" />
                  </Box>
                  {error && <div className="error-message">Image is required.</div>}
                </Box>
              </Box>

              <QuizForm
                onSubmit={handleLinkSubmission}
                onClose={() => {
                  setAptId("");
                  setLink("");
                  setRecord("");
                  setShowCompleteModal(false);
                }}
              />
            </>
          ) : (
            <Box>
              <SoftTypography sx={{ fontSize: "18px", marginBottom: "10px" }}>
                The client has not agreed to share his details.
              </SoftTypography>
              <SoftButton
                onClick={() => {
                  setAptId("");
                  setLink("");
                  setRecord("");
                  setShowCompleteModal(false);
                }}
              >
                Close
              </SoftButton>
              <SoftButton color="dark" background="gradient" onClick={handleLinkSubmission1}>
                Submit
              </SoftButton>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Modal
        open={showConfirmModal}
        onClose={() => {
          setAptId("");
          setShowConfirmModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
      >
        <Box className="docConfirm">
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Confirm Appointment
          </Typography>
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h4"
          >
            Do you want to confirm appointment?
          </Typography>

          <div className="cancel-divc">
            <SoftButton
              type="submit"
              className="btn-cancelc"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={handleConfirmAppointment}
            >
              Yes
            </SoftButton>
            <SoftButton
              type="submit"
              className="btn-cancel1c"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={() => {
                setShowConfirmModal(false);
                setAptId("");
              }}
            >
              No
            </SoftButton>
          </div>
        </Box>
      </Modal>

      <Modal
        open={showDeniedModal}
        onClose={() => {
          setAptId("");
          setShowDeniedModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
      >
        <Box className="Denied-appointment">
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Deny Appointment
          </Typography>
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h4"
          >
            Do you want to deny appointment?
          </Typography>

          <div className="cancel-divc">
            <SoftButton
              type="submit"
              className="btn-cancelc"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={handleDenied}
            >
              Yes
            </SoftButton>
            <SoftButton
              type="submit"
              className="btn-cancel1c"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={() => {
                setAptId("");
                setShowDeniedModal(false);
              }}
            >
              No
            </SoftButton>
          </div>
        </Box>
      </Modal>

      <Modal
        open={showCancelModal}
        onClose={() => {
          setAptId("");
          setShowCancelModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
      >
        <Box className="canceldoc-appointment">
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
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h4"
          >
            Do you want to cancel appointment?
          </Typography>

          <div className="cancel-divc">
            <SoftButton
              type="submit"
              className="btn-cancelc"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={handleCancelAppointment}
            >
              Yes
            </SoftButton>
            <SoftButton
              type="submit"
              className="btn-cancel1c"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={() => {
                setAptId("");
                setShowCancelModal(false);
              }}
            >
              No
            </SoftButton>
          </div>
        </Box>
      </Modal>
    </SoftBox>
  );
};

export default TableView;

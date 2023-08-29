// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import * as React from "react";
import { useRef, useEffect, useState } from "react";

import DialogContent from "@mui/material/DialogContent";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";

import { Formik } from "formik";

import SoftButton from "components/SoftButton";
import DocInformedConsent from "../Docinformed Consent/index";
import { Checkbox, FormControlLabel } from "@mui/material";
import FormField from "../Profile/components/FormField";
import ImformedCons from "./informedConsent";
import "./style.css";
import { Pagination, Table } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { getInformConsentListAction } from "store/actions/actions";
import { useNavigate } from "react-router-dom";
import { set } from "stylis";
const steps = ["", "", ""];

// const data = [
//   {
//     key: "1",
//     date: "23 Aug 2023",
//     time: "09:00 am",
//     day: "Monday",
//   },
//   {
//     key: "2",

//     date: "24 Aug 2023",
//     time: "07:00 am",
//     day: "Tuesday",
//   },
//   {
//     key: "3",
//     date: "24 May 2023",
//     time: "11:00 am",
//     day: "Wednesday",
//   },
// ];

function InformedConsent() {
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState("paper");
  const [activeStep, setActiveStep] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page1, setPage1] = useState(1);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const userdata = useSelector((state) => state?.auth?.auth?.userdata);
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const informedConsentList = useSelector((state) => state?.auth?.informedConsentList);
  const totalConsent = useSelector((state) => state?.auth?.totalConsent);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (userType === "client") {
      if (!localStorage.getItem("informedConsent") || informedConsentList?.length === 0) {
        dispatch(getInformConsentListAction({ limit: pageSize, page: page1, token }));
      } else {
        setPage1(parseInt(localStorage.getItem("informConsentPageNO")));
        setTimeout(() => {
          localStorage.removeItem("informConsentPageNO");
        }, 1000);

        localStorage.removeItem("informedConsent");
      }
    } else if (userType === "doctor") {
      if (!localStorage.getItem("docinformedConsent") || informedConsentList?.length === 0) {
        dispatch(getInformConsentListAction({ limit: pageSize, page: page1, token }));
      } else {
        setPage1(parseInt(localStorage.getItem("docinformConsentPageNO")));
        setTimeout(() => {
          localStorage.removeItem("docinformConsentPageNO");
        }, 1000);

        localStorage.removeItem("docinformedConsent");
      }
    }
  }, [page1, pageSize]);

  console.log("dataataa", informedConsentList);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_, record) => {
        const date = new Date(record?.day);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();

        return <>{`${day}-${month}-${year}`}</>;
      },
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (_, record) => {
        const date = new Date(record?.day);

        const options = { hour: "2-digit", minute: "2-digit", hour12: false };
        const time24 = date.toLocaleTimeString("en-US", options);

        return <>{time24}</>;
      },
    },
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
      render: (_, record) => {
        const date = new Date(record?.day);
        const options = { weekday: "long" };
        const dayOfWeek = date.toLocaleDateString("en-US", options);

        return <>{dayOfWeek}</>;
      },
    },
    {
      title : "Status",
      dataIndex : "status"
    },
    {
      title: "",
      key: "view",
      dataIndex: "tags",
      render: (_, record) => (
        <>
          <SoftButton
            onClick={() => {
              localStorage.setItem("informConsentPageNO", page1);
              navigate(
                userType === "doctor"
                  ? `/informed-consent-view?id=${record?.id}`
                  : userType === "client" && `/informed-consents-view?id=${record?.id}`
              );
            }}
          >
            View
          </SoftButton>
        </>
      ),
    }
  ];

  const handleNext = () => {
    setActiveStep((ActiveStep) => ActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const descriptionElementRef = useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const termAndCondition = useSelector((state) => state.auth.termAndCondition);
  const isPractitioner = useSelector((state) => state.auth.auth.userType);
  // let data = "";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [activeStep]);

  const datas = informedConsentList?.map((ele, ind) => {
    return {
      id: ele?._id,
      date: ele?.createdAt,
      time: ele?.createdAt,
      day: ele?.createdAt,
      status : ele?.status
    };
  });

  console.log(datas, "dataataa", informedConsentList);

  const handlePageChange = (value) => {
    if (userType === "client") {
      localStorage.setItem("informConsentPageNO", value);
    } else if (userType === "doctor") {
      localStorage.setItem("docinformConsentPageNO", value);
    }
    setPage1(value);
  };

  const onShowSizeChange = (current, value) => {
    setPageSize(value);
  };

  return (
    <>
      <DashboardLayout>
        {/* <DocInformedConsent /> */}
        <DashboardNavbar />
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <SoftButton
            onClick={() => {
              localStorage.removeItem("docinformConsentPageNO");
              localStorage.removeItem("informConsentPageNO");
              (userType === "doctor" && navigate("/informed-consent-form-new?isnew=new")) ||
                (userType === "client" && navigate("/termsandsignaturenew?isnew=new"));
            }}
          >
            Add New
          </SoftButton>
        </div>
        <Table columns={columns} dataSource={datas} pagination={false} />
        <Pagination
          pageSize={pageSize}
          total={totalConsent}
          current={page1}
          onChange={(value) => handlePageChange(value)}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
        />
      </DashboardLayout>
    </>
  );
}

export default InformedConsent;

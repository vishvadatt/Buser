// @mui material components
// import Icon from "@mui/material/Icon";
// Soft UI Dashboard PRO React components
// import SoftTypography from "components/SoftTypography";
// import Demo from "./component/demo";
// Soft UI Dashboard PRO React base styles
// import typography from "assets/theme/base/typography";
// import breakpoints from "assets/theme/base/breakpoints";
// import LineChart from "./LineChart";
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   LineElement,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Filler,
// } from "chart.js";
// import SoftSelect from "components/SoftSelect";
// import { graphShow } from "store/selectors/selector";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import LineChart1 from "./LineChart1";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { getChartDetailsAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import moment from "moment";
import "./style.css";
import { setGraphShowAction } from "store/actions/actions";
import { getChartDetailSuccessAction } from "store/actions/actions";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import { findOneUserAction } from "store/actions/actions";
import DialogBox from "../DialogBox/index";

// ChartJS.register(
//   Title,
//   Tooltip,
//   LineElement,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Filler,
//   Legend
// );
// "chart.js": "3.4.1",   "react-chartjs-2": "3.0.4",

function ProgressChart() {
  // const { values } = breakpoints;
  //  const graphStatus = useSelector(graphShow);

  const dispatch = useDispatch();
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);

  const [painLevelData, setPainLevel] = useState([]);
  const [painDurationData, setPainDuration] = useState([]);
  const [painFrequencyData, setPainFrequency] = useState([]);
  const [lablesArray, setLableArray] = useState([]);

  const [FromDate, setFromDate] = useState(moment().subtract(6, "days").format("YYYY-MM-DD"));
  const [EndDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [painName, setPainName] = useState([]);
  const [graphShow, setGraphShow] = useState(false);

  useEffect(() => {
    onSubmitFunction();
  }, []);

  const chartDetails = useSelector((state) => state.auth.chartDetails);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);

  useEffect(() => {
    dispatch(findOneUserAction({ userId : UserId, token : token}));
  },[]);
  // console.log("painName..", graphStatus);
  //console.log("Chart Details", chartDetails);

  // useEffect(() => {
  //   let dateArray = [0, 1, 2, 3, 4, 5, 6];
  //   dateArray.map((data, i) => {
  //     const newDate = moment()
  //       .subtract(dateArray.length - (i + 1), "days")
  //       .format("DD/MM/YYYY");
  //     labels.push(newDate);
  //   });
  //   setLableArray(labels);

  //   generateGraphData1();
  // }, []);

  // console.log("la",lablesArray);

  useEffect(() => {
    generateGraphData1();
  }, [chartDetails]);

  const generateGraphData1 = () => {
    if (chartDetails.length > 0) {
      setGraphShow(true);
      const startDate = moment(FromDate);
      const endDate = moment(EndDate);
      const dates = [];
      let currentDate = startDate.clone();
      while (currentDate <= endDate) {
        dates.push(currentDate.format("DD-MM-YYYY"));
        currentDate.add(1, "d");
      }
      setLableArray(dates);

      chartDetails.forEach((painData, i) => {
        setPainName((prev) => {
          const newArray = [...prev];
          newArray[i] = painData._id;
          return newArray;
        });
        const painDataMap = new Map(painData.data.map((item) => [item.Date, item]));
        const painLevel = [];
        const painDuration = [];
        const painFrequency = [];

        dates.forEach((date) => {
          const item = painDataMap.get(date);
          if (item) {
            painLevel.push(item.painLevel);
            painDuration.push(item.painDuration);
            if (item.painFrequency === "Daily") {
              painFrequency.push("3");
            } else if (item.painFrequency === "Weekly") {
              painFrequency.push("2");
            } else if (item.painFrequency === "Monthly") {
              painFrequency.push("1");
            }
          } else {
            painLevel.push("0");
            painDuration.push(0);
            painFrequency.push("0");
          }
        });
        setPainLevel((prev) => {
          const newArray = [...prev];
          newArray[i] = painLevel;
          return newArray;
        });
        setPainDuration((prev) => {
          const newArray = [...prev];
          newArray[i] = painDuration;
          return newArray;
        });
        setPainFrequency((prev) => {
          const newArray = [...prev];
          newArray[i] = painFrequency;
          return newArray;
        });
      });
    } else {
      setGraphShow(false);
      setPainLevel([]);
      setPainDuration([]);
      setPainFrequency([]);
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  const handleStartDateChange = (e) => {
    setFromDate(e.target.value);
  };
  const onSubmitFunction = async (e) => {
    if (FromDate !== "" && EndDate !== "") {
      let data = {};
      data["startDate"] = FromDate;
      data["endDate"] = EndDate;
      data["userId"] = UserId;

      dispatch(getChartDetailsAction({ data: data, token: token }));
      dispatch(setGraphShowAction(true));
    } else {
      console.log("please enter all details");
    }
  };

  const memoizedLineCharts = useMemo(
    () =>
      painName.map((name, i) => (
        <Grid
          key={i}
          item
          lg={12}
          xs={12}
          md={12}
          sm={14}
          mb={2}
          style={{ overflowX: "scroll", overflowY: "hidden" }}
        >
          <SoftBox mb={3} xs={10} sm={10}>
            <SoftBox lg={6} xs={2} fontSize={24} marginTop={1} mb={2}>
              {name}
            </SoftBox>
            {/* <LineChart
              labels={lablesArray}
              painLevelData={painLevelData[i]}
              painDurationData={painDurationData[i]}
              painFrequencyData={painFrequencyData[i]}
            /> */}
            <LineChart1
              labels={lablesArray}
              painLevelData={painLevelData[i]}
              painDurationData={painDurationData[i]}
              painFrequencyData={painFrequencyData[i]}
            />
          </SoftBox>
        </Grid>
      )),
    [painName, lablesArray, painLevelData, painDurationData, painFrequencyData]
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox className="chart-softbox">
        <Grid container spacing={1} justifyContent="left" alignItems="center">
          <Grid item lg={2} xs={6} sm={6} md={4}>
            <label className="chart-label">From Date</label>
            <input
              onChange={(e) => handleStartDateChange(e)}
              type="date"
              value={FromDate}
              max={moment().format("YYYY-MM-DD")}
              className="chart-inputButton"
            />
          </Grid>
          <Grid item lg={2} xs={6} sm={6} md={4}>
            <label className="chart-label">To Date</label>
            <input
              type="date"
              value={EndDate}
              max={moment().format("YYYY-MM-DD")}
              onChange={(e) => handleEndDateChange(e)}
              className="chart-inputButton"
            />
          </Grid>
          <Grid item lg={2} xs={8} sm={6} md={3} display="flex" alignItems="center">
            <button onClick={onSubmitFunction} className="generateButton">
              Generate Chart
            </button>
          </Grid>

          {graphShow ? (
            memoizedLineCharts
          ) : (
            <SoftBox className="msg">
              Please Fill the Daily Updates Form to see the progress.
            </SoftBox>
          )}
        </Grid>
      </SoftBox>
      <Footer />
      <DialogBox open={informConsentStatus}/>
    </DashboardLayout>
  );
}

export default ProgressChart;

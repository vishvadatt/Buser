import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import breakpoints from "assets/theme/base/breakpoints";
import { useSelector } from "react-redux";
import JoyRide from "react-joyride";
import { steps } from "./data/stepData";
import AppBar from "@mui/material/AppBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const { values } = breakpoints;
    const userType = useSelector((state) => state.auth.auth.userType);
    const [run, setRun] = useState(false);
    const navigate = useNavigate();
    const tour = () => {
        setRun(true);
    };

    const tourstart = (data) => {
        console.log("action--", data.action);
        // if (data.action == "close") {
        //     navigate("/services");
        // }
    };
    useEffect(() => {
        setTimeout(() => setRun(true), 500);
    }, [])

    return (
        <DashboardLayout>
            <DashboardNavbar />
            {
                userType === "client"
                    ? (<>
                        <SoftBox py={3}>
                            <Grid container>
                                <Grid item xs={12} lg={7}>
                                    <SoftBox mb={3} p={1}>
                                        <SoftTypography
                                            variant={window.innerWidth < values.sm ? "h3" : "h2"}
                                            textTransform="capitalize"
                                            fontWeight="bold"
                                        >
                                            Patient Dashboard
                                        </SoftTypography>
                                    </SoftBox>
                                </Grid>
                            </Grid>
                        </SoftBox>
                    </>)
                    : (<>
                        <SoftBox py={3}>
                            <Grid container>
                                <Grid item xs={12} lg={7}>
                                    <SoftBox mb={3} p={1}>
                                        <SoftTypography
                                            variant={window.innerWidth < values.sm ? "h3" : "h2"}
                                            textTransform="capitalize"
                                            fontWeight="bold"
                                        >
                                            PRACTITIONER DASHBOARD
                                        </SoftTypography>
                                    </SoftBox>
                                </Grid>
                            </Grid>
                        </SoftBox>
                    </>)
            }

            <JoyRide
                //continuous={true}
                run={run}
                callback={tourstart}
                hideCloseButton
                // scrollToFirstStep
                disableScrolling
                showProgress
                showSkipButton
                showStepsProgress
                // autoStart
                disableCloseOnEsc
                isableOverlayClose
                steps={steps}
                disableBeacon
                hideBackButton={true}
                // hideCloseButton={false}
                styles={{
                    options: {
                        beaconSize: 50,
                        overlayColor: "rgba(0, 0, 0, 0.5)",
                        primaryColor: "#3E506F",
                        spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                        arrowColor: "#fff",
                    },
                }}
                locale={{ close: "OK" }}
            />
            <Footer />
        </DashboardLayout>
    );
}

export default Home;

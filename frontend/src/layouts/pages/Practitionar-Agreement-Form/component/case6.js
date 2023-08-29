import * as React from "react";
import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import SoftBox from "components/SoftBox";
import FormField from "../../Profile/components/FormField/index";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";
import PropTypes from "prop-types";
import brand from "assets/images/Logo-01-rm.png";
import { Box, DialogContent } from "@mui/material";
import { useEffect } from "react";
const Case6 = ({ values, handleChange, touched, errors, setFieldValue }) => {
    console.log(values);
    let sigPad = React.useRef({});
    let signPad1 = React.useRef({});
    const [signBeginClient, setSignBeginClient] = React.useState(true);
    const [signBeginOfc, setSignBeginOfc] = React.useState(true);
    const onBeginfun = (e) => {
        setSignBeginClient(e?.isTrusted);
    };
    const onBeginfun1 = (e) => {
        setSignBeginOfc(e?.isTrusted);
    };

    function clear() {
        sigPad.current.clear();
        signPad1.current.clear();
        setSignBeginClient(true);
        setSignBeginOfc(true);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    return (
        <div>
            <SoftBox px={3} mt={5} py={1} mb={1}>
                <DialogContent
                    dividers={scroll === "paper"}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    {brand && (
                        <SoftBox
                            component="img"
                            src={brand}
                            alt="buser institute Logo"
                            width="10rem"
                            borderRadius="12px"
                        // ml={45}
                        />
                    )}
                </DialogContent>
            </SoftBox>
            <SoftBox px={3} className="step1">
                <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>9. ARBITRATION.</b> If any dispute shall arise relative to the interpretation of this Agreement the dispute shall be
                        submitted to arbitration as follows: Each party shall appoint one disinterested individual to act as arbitrator and
                        the persons so appointed shall appoint a third arbitrator. The Board of Arbitrators shall then determine the matter
                        in dispute by determination arrived at by a majority of the arbitrators. The determination of the arbitrators shall
                        be final and binding upon the parties hereto, their representative heirs, personal representatives, successors and
                        assigns. The cost of arbitration shall be shared equally between the parties; however, the prevailing party shall be
                        entitled to recover its reasonable attorney’s fees incurred concerning the arbitration and/or any appeal thereof.
                    </p>
                    <br />
                    <br />
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>10. ATTORNEY FEES.</b> If any dispute shall arise relative to the interpretation of this Agreement the dispute shall be
                        submitted to arbitration as follows: Each party shall appoint one disinterested individual to act as arbitrator and
                        the persons so appointed shall appoint a third arbitrator. The Board of Arbitrators shall then determine the matter
                        in dispute by determination arrived at by a majority of the arbitrators. The determination of the arbitrators shall
                        be final and binding upon the parties hereto, their representative heirs, personal representatives, successors and
                        assigns. The cost of arbitration shall be shared equally between the parties; however, the prevailing party shall be
                        entitled to recover its reasonable attorney’s fees incurred concerning the arbitration and/or any appeal thereof.
                    </p>
                    <br />
                    <br />
                    IN WITNESS HEREOF, the parties have affixed their signatures hereto as of the dates set forth below.
                </p>
                <br />
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6} >
                        <span><b>BUSER INSTITUTE:</b> </span>
                        <br />
                        <br />
                        {values.practitioner_aggrement_buserInstitute_Signature !== undefined ? (
                            <Grid item xs={12} sm={4} className="parentClass">
                                <p style={{ marginBottom: "7px", fontSize: "15px", fontWeight: "bold" }}>
                                    BY
                                </p>
                                <img src={values.practitioner_aggrement_buserInstitute_Signature} />
                                <h5 style={{fontSize:"15px"}}>Sign here</h5>
                            </Grid>
                        ) : (
                            <Grid item xs={12} md={6} lg={6}>
                                <p style={{ marginBottom: "7px", fontSize: "15px", fontWeight: "bold" }}>
                                    BY
                                </p>
                                <SignaturePad
                                    canvasProps={{ width: 240, height: 150 }}
                                    ref={sigPad}
                                    penColor="black"
                                    backgroundColor="#f1f1f1"
                                    placeholder="sign"
                                    onBegin={(e) => onBeginfun1(e.isTrusted)}
                                />
                                <div className="saveAndClear">
                                    <SoftButton
                                        onClick={clear}
                                        style={{ marginRight: "10px" }}
                                        disabled={signBeginOfc}
                                    >
                                        Clear
                                    </SoftButton>

                                    <SoftButton
                                        disabled={signBeginOfc}
                                        onClick={() => {
                                            setFieldValue(
                                                "practitioner_aggrement_buserInstitute_Signature",
                                                sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                                            );
                                        }}
                                    >
                                        Save
                                    </SoftButton>
                                </div>
                            </Grid>
                        )}

                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={4} md={8} className="spaceing">
                                <FormField
                                    label="Print Name"
                                    disabled="true"
                                    placeholder="Enter Name.."
                                    name="practitioner_aggrement_buserInstitutePrint_name"
                                    value={values.practitioner_aggrement_buserInstitutePrint_name}
                                    onChange={handleChange}
                                    errorMsg
                                    error={errors.practitioner_aggrement_buserInstitutePrint_name && touched.practitioner_aggrement_buserInstitutePrint_name}
                                    success={values?.practitioner_aggrement_buserInstitutePrint_name?.length > 0 && !errors.practitioner_aggrement_buserInstitutePrint_name}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={4} md={8} className="spaceing">
                                <FormField
                                    label="Title"
                                    disabled="true"
                                    placeholder="Enter Title.."
                                    name="practitioner_aggrement_buserInstitute_Title"
                                    value={values.practitioner_aggrement_buserInstitute_Title}
                                    onChange={handleChange}
                                    errorMsg
                                    error={errors.practitioner_aggrement_buserInstitute_Title && touched.practitioner_aggrement_buserInstitute_Title}
                                    success={values?.practitioner_aggrement_buserInstitute_Title?.length > 0 && !errors.practitioner_aggrement_buserInstitute_Title}
                                />
                            </Grid>
                        </Grid>
                        <div>
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={8} sm={4} className="spaceing">
                                    <FormField
                                        label="Date"
                                        type="date"
                                        placeholder="date"
                                        name="practitioner_aggrement_buserInstitute_date"
                                        value={values.practitioner_aggrement_buserInstitute_date}
                                        onChange={handleChange}
                                        disabled="true"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <span ><b>ASSOCIATE:</b> </span>
                        <br />
                        <br />
                        {values.practitioner_aggrement_Signature !== undefined ? (
                            <Grid item xs={12} sm={4} className="parentClass">
                                <p style={{ marginBottom: "7px", fontSize: "15px", fontWeight: "bold" }}>
                                    BY
                                </p>
                                <img src={values.practitioner_aggrement_Signature} />
                                <h5 style={{fontSize: "15px"}}>Sign here</h5>
                            </Grid>
                        ) : (
                            <Grid item xs={12} md={6} lg={6}>
                                <p style={{ marginBottom: "7px", fontSize: "15px", fontWeight: "bold" }}>
                                    BY
                                </p>
                                <SignaturePad
                                    canvasProps={{ width: 240, height: 150 }}
                                    ref={signPad1}
                                    penColor="black"
                                    backgroundColor="#f1f1f1"
                                    placeholder="sign"
                                    onBegin={(e) => onBeginfun(e.isTrusted)}
                                />
                                <div className="saveAndClear">
                                    <SoftButton
                                        onClick={clear}
                                        style={{ marginRight: "10px" }}
                                        disabled={signBeginClient}
                                    >
                                        Clear
                                    </SoftButton>

                                    <SoftButton
                                        disabled={signBeginClient}
                                        onClick={() => {
                                            setFieldValue(
                                                "practitioner_aggrement_Signature",
                                                signPad1.current.getTrimmedCanvas().toDataURL("image/png")
                                            );
                                        }}
                                    >
                                        Save
                                    </SoftButton>
                                </div>
                            </Grid>
                        )}
                        <div>
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={8} sm={4} className="spaceing">
                                    <FormField
                                        label="Print Name"
                                        disabled="true"
                                        placeholder="Enter Name.."
                                        name="practitioner_aggrement_Print_name"
                                        value={values.practitioner_aggrement_Print_name}
                                        onChange={handleChange}
                                        errorMsg
                                        error={errors.practitioner_aggrement_Print_name && touched.practitioner_aggrement_Print_name}
                                        success={values?.practitioner_aggrement_Print_name?.length > 0 && !errors.practitioner_aggrement_Print_name}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={8} sm={4} className="spaceing">
                                    <FormField
                                        label="Title"
                                        disabled="true"
                                        placeholder="Enter Title.."
                                        name="practitioner_aggrement_Title"
                                        value={values.practitioner_aggrement_Title}
                                        onChange={handleChange}
                                        errorMsg
                                        error={errors.practitioner_aggrement_Title && touched.practitioner_aggrement_Title}
                                        success={values?.practitioner_aggrement_Title?.length > 0 && !errors.practitioner_aggrement_Title}
                                    />
                                </Grid>
                            </Grid>
                        </div>

                        <div>
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={8} sm={4} className="spaceing">
                                    <FormField
                                        label="Date"
                                        type="date"
                                        placeholder="date"
                                        name="practitioner_aggrement_date"
                                        value={values.practitioner_aggrement_date}
                                        onChange={handleChange}
                                        disabled="true"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                <SoftBox mt={2}>
                    <Grid container spacing={7}>
                        <Grid item xs={12} sm={4}></Grid>
                        <Grid item xs={12} sm={4}></Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControlLabel
                                style={{
                                    backgroundColor: "rgba(0,0,0,0.04)",
                                    width: "max-content",
                                    marginLeft: "180px",
                                }}
                                pl={2}
                                control={
                                    <Checkbox
                                        className="stylebox"
                                        defaultChecked={values.practitioner_agreement_flag}
                                        name="practitioner_agreement_flag"
                                        onChange={handleChange}
                                        disabled="true"
                                    />
                                }
                                label={"I Agree"}
                            />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
        </div>
    );
};
Case6.propTypes = {
    values: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case6;

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
const Case5 = ({ values, handleChange, touched, errors, setFieldValue }) => {
    console.log(values);
    let sigPad = React.useRef({});
    let signPad1 = React.useRef({});
    const [signBeginClient, setSignBeginClient] = React.useState(true);
    const [signBeginOfc, setSignBeginOfc] = React.useState(true);
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
                    {/* {brand && (
                        <SoftBox
                            component="img"
                            src={brand}
                            alt="buser institute Logo"
                            width="10rem"
                            borderRadius="12px"
                        // ml={45}
                        />
                    )} */}
                </DialogContent>
            </SoftBox>

            <SoftBox px={3} className="step1">
                <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                    <div style={{ marginLeft: "120px" }}>
                        <Grid container >
                            <Grid item lg={0.2}>
                            </Grid>
                            <Grid item lg={11}>
                                schedules that have been previously agreed upon at least <b>24 hours</b> prior to the
                                scheduled appointment.
                            </Grid >
                        </Grid>
                        <br />
                        <Grid container >
                            <Grid item lg={0.2}>
                                ii.
                            </Grid>
                            <Grid item lg={11}>
                                If Associate Practitioner is unable to fill his or her agreed upon schedule for any
                                reason, Associate Practitioner shall be solely responsible for obtaining an appropriate
                                substitute and arranging a re-scheduled appointments at the earliest opportunity that
                                the scheduling manager is available.
                            </Grid >
                        </Grid>
                        <br />
                        <Grid container >
                            <Grid item lg={0.2}>
                                iii.
                            </Grid>
                            <Grid item lg={11}>
                                During Associate Practitioner’s contract hours and scheduled appointments with the
                                Buser Institue, Associate Practitioner shall consult with clients using the Buser
                                Institute system in order to maintain accurate records, correspondance and billing
                                practices.
                            </Grid >
                        </Grid>
                    </div>
                    <br />
                    <div style={{ marginLeft: "35px" }}>
                        <p style={{ textAlign: "justify" }} className="initialhere">
                            <Grid container >
                                <Grid item lg={0.4}>
                                    <b>c)</b>
                                </Grid>
                                <Grid item lg={11}>
                                    <b>DIRECTION OF SERVICES.</b> Associate Practitioner shall designate its own sub-contracting
                                    practitioners or employees to the Buser Institute and ensure they each in turn sign this same
                                    Associate Practitioner Agreement with the Buser Institute and similarly perform services listed
                                    under this agreement in accordance to this agreement.
                                </Grid >
                            </Grid>
                            <br />
                            <Grid container >
                                <Grid item lg={0.4}>
                                    <b>d)</b>
                                </Grid>
                                <Grid item lg={11}>
                                    <b>BILLING.</b> The Associate Practitioner agrees that all clients receiving Buser Institute services
                                    provided by the Associate Practitioner shall be actively enrolled in the Buser Institute system
                                    with a respective active Buser Institute Client Dashboard account. The Associate Practitioner
                                    agrees that all clients receiving Buser Institute services provided by the Associate Practitioner
                                    shall be billed through the Buser Institute Dashboard and system. The Associate Practitioner
                                    agrees to enforce the requirement that all clients receiving Buser Institure services from the
                                    Associate Practitioner be actively enrolled in the Buser Institute Client Dashboard in order to
                                    recieve the Assocaite Practitioner Buser Institute services. <b>Providing services otherwise (ie.
                                        providing Buser Institute exercise and nutitional recommendations outside of the Buser
                                        Institute system and/or collecting payment for these services from the client directly to
                                        the Associate Practitkoner) is in breach of this agreement and will be grounds for
                                        termination of this association and agreement and require full compensation to the Buser
                                        Institute for services provided regardless of payment received by the Associate
                                        Practitioner from the client or the Buser Institute.</b>
                                </Grid >
                            </Grid>
                        </p>
                    </div>
                    <br />
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>7. Records.</b> Upon the termination of this Agreement, Associte shall not be entitled to keep or preserve records or
                        charts of Buser Instiute clientelle (except that the Buser Institute shall make available to the Associate) for
                        temporary use or copying purposes, including the records of any client of the Buser Institute consulted by
                        Associate. In no event shall Associate be entitled to the records or files of clients not consulted by Associate.
                        During the term of this Agreement and for a period of four years after the Agreement’s termination, each party
                        shall grant access to the following documents to the Secretary of U.S. Department of Health and Human Services
                        (“Secretary”), the U.S. Comptroller General, and their authorized representatives; This Agreement and all books,
                        documents and records necessary to verify the nature and cost of professional services.
                    </p>
                    <br />
                    <br />
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>8. General Provisions.</b>
                    </p>
                    <br />
                    <div style={{ marginLeft: "40px" }}>
                        <Grid container >
                            <Grid item lg={0.3}>
                                <b>a)</b>
                            </Grid>
                            <Grid item lg={11}>
                                <b>Amendment.</b> Buser Institute may amend this Agreement at any time upon notice to Associate of not
                                less than ten (10) days prior to the effective date of such amendment, provided that any amendment for
                                any fee increase may become effective upon not less than thirty (30) days notice. No other amendment,
                                modification or waiver of any of the provisions of this Agreement will be valid unless set forth in a
                                written instrument signed by both parties.
                            </Grid >
                        </Grid>
                        <br />
                        <Grid container >
                            <Grid item lg={0.3}>
                                <b>b)</b>
                            </Grid>
                            <Grid item lg={11}>
                                <b>Interpretation.</b> The words and phrases used herein shall have the meaning generally understood in the
                                fitness, wellness, healthcare and legal industries. This Agreement shall be construed in accordance with
                                its fair meaning and not for or against either Party on account of which Party drafted this Agreement.
                            </Grid >
                        </Grid>
                        <br />
                        <Grid container >
                            <Grid item lg={0.3}>
                                <b>c)</b>
                            </Grid>
                            <Grid item lg={11}>
                                <b>Entire Agreement.</b> This Agreement sets forth the entire understanding and agreement of the parties,
                                and supersedes any and all prior or contemporaneous oral or written agreements or understandings
                                between the parties, as to the subject matter of this Agreement.
                            </Grid >
                        </Grid>
                    </div>
                </p>
                <br/>
                <br/>
                <SoftBox mt={2}>
                <Grid container spacing={7}>
                    <Grid item xs={12} sm={4}></Grid>
                    <Grid item xs={12} sm={4}></Grid>
                    <Grid item xs={12} sm={4} >
                        <FormControlLabel
                            style={{
                                backgroundColor: "rgba(0,0,0,0.04)",
                                width: "max-content",
                                marginLeft: "130px",
                            }}
                            pl={2}
                            control={
                                <Checkbox
                                    className="stylebox"
                                    checked={values.practitioner_agreement_flagPage5}
                                    name="practitioner_agreement_flagPage5"
                                    // onChange={handleChange}
                                    onChange={(e) => setFieldValue("practitioner_agreement_flagPage5",e.target.checked)}
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
Case5.propTypes = {
    values: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case5;

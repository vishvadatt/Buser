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


const Case3 = ({ values, handleChange, touched, errors, setFieldValue }) => {
    console.log(values);

    useEffect(() => {
        console.log("page2---");
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
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        content and documentation furnished to Associate by Buser Institute hereunder, and the Buser Institute
                        technology. No title to or ownership of any of the foregoing is granted or otherwise transferred to Associate or
                        any other entity or person under this Agreement. Associate shall not reverse engineer, disassemble, decompile or
                        otherwise attempt to discover the source code or trade secrets for any of the Buser Institute Services or related
                        technology. The below named Associate agrees not to print, record, duplicate or distribute these exercises,
                        pictures, instructions or any other educational or intellectual property of the Buser Institute, without the
                        expressed and written permission of Buser Institute. The Associate agrees not to engage in any business activity
                        or promotional efforts with market competitors of the Buser Institute.
                    </p>
                    <br />
                    <br />
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>6. Scope and Limitation of Services Associated with the Buser Institute as a Buser Institute Student,
                            Associate Student, Independent Practitioner and Certified Practitioner.</b> Unless otherwise specifically
                        designated as a Buser Institute Associate Practitioner (Independent Contractor) as agreed upon in a separate
                        <b>Associate Practitioner Scope of Practice and Fee Schedule Agreement</b> and thereby constituting a separate
                        billing/service/compensation agreement, all users of the Buser Institute Student and Practitioner systems are
                        responsible for their own <b>independent</b> business practices and shall abide by the following in order to ensure
                        public safety and adhere to fair and orderly business practices:
                    </p>
                    <br />
                    <br />
                    <div style={{ marginLeft: "35px" }}>
                        <p style={{ textAlign: "justify" }} className="initialhere">
                            <Grid container >
                                <Grid item lg={0.4}>
                                    6.1.
                                </Grid>
                                <Grid item lg={11}>
                                    Associate shall be responsible for billing and collecting from their own clientelle and in turn the
                                    Associate shall be responsivle for paying all federal and state withholding taxes for themselves.
                                </Grid >

                            </Grid>
                            <Grid container >
                                <Grid item lg={0.4}>
                                    6.2.
                                </Grid>
                                <Grid item lg={11}>
                                    Associate shall maintain an active license in good standing from an institution duely accredited within
                                    the Unites States that includes at a minimum the authorized practice of recommending exercises to
                                    clients (ie. Personal Trainer, Certified Strength and Conditioning Specialist, Yoga Istructor, Doctor of
                                    Chiropractic, Physical Therapist, etc.). If the Associate will provide services including nutritional
                                    recommendations, he or she will maintain an active license in good standing from an institution duely
                                    accredited within the Unites States that includes the authorized practice of providing nutritional
                                    recommendations to clientelle (i.e. Certified Clinical Nutritionist, Doctor of Chiropractic, Doctor of
                                    Osteopathy, Doctor of Naturopathy, Medical Doctor, etc). Associate agrees to furnish proof of their
                                    current and active licensure to the Buser Institute.
                                </Grid >
                            </Grid>
                            <Grid container >
                                <Grid item lg={0.4}>
                                    6.3.
                                </Grid>
                                <Grid item lg={11}>
                                    Associate shall provide malpractice insurance coverage for himself or herself in amounts reasonably
                                    considered necessary by the region for which their license and insurances cover.
                                </Grid >
                            </Grid>
                            <Grid container >
                                <Grid item lg={0.4}>
                                    6.4.
                                </Grid>
                                <Grid item lg={11}>
                                    Associate shall not receive any benefits from The Buser Institute (e.g. vacation, sick leave, CME
                                    allowance, malpractice insurance, or health insurance). The forgoing list is not exhaustive. All such
                                    benefits shall be the responsibility of the Associate.
                                </Grid >
                            </Grid>
                            <Grid container >
                                <Grid item lg={0.4}>
                                    6.5.
                                </Grid>
                                <Grid item lg={11}>
                                    Associate agrees to provide exercise and nutritional consultation and recommendation services only (as
                                    permitted by the Associate’s professional license and insurance carrier as stated above). The Associate
                                    shall only provide services in conjunction with the Buser Institute system in the context of ”<b>Supporting
                                        functional activity and a healthy lifestyle.” The Associate <u>shall not</u> provide services in conjunction
                                        with the Buser Institute (nor implied to be in conjunction with the Buser Institute) claiming that
                                        their associated evaluations, consultations and recommendations provide any other sort of
                                        therapeutic or medical screening or treatment of or for any medically diagnosable injury, illness,
                                        disease or condition. <u>To be clear, The Buser Institute’s exercise and nutritional recommendations
                                            do not claim to evaluate, screen for nor treat any medically related or medically diagnosable
                                            injury, illness, disease or condition. To claim otherwise is in breach of this contract and the
                                            position of the Buser Institute and will be grounds for termination of this association, agreement
                                            and access to the Buser Institute system.</u> If an Associate chooses to include services beyond the
                                        scope of this Buser Institute agreement in their interaction with a client also receiving Buser
                                        Institute services, the Associate will make it clear to the client (with a separate signed Informed
                                        Consent form) clearly delineating the services associated with the Buser Institute and those
                                        services that are solely performed under the Associate’s individual license with an expanded
                                        scope of practice beyond that of the Buser Institute.</b>
                                </Grid >
                            </Grid>
                        </p>
                    </div>
                    <br />
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>7. Associate Practitioner Independent Contractor Appointment, Practice, Licensing and Compensation.</b>
                        <u> This section (section 7) is specific to </u><b><u>Buser Institute Associate Practitioners (INDEPENDENT
                            CONTRACTORS PROVIDING SERVICES FOR THE BUSER INSTITUTE</u>).</b> As an independently
                        contracted “Associate Practitioner” of the Buser Institute, the Associate agrees to perform only the below
                        described services in accordance with their independent licensed scope of practice (ie. not exceeding their
                        independent scope of practice) and while maintaining independently procured general liability, professional
                    </p>
                </p>
                <br />
                <br />
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
                                        checked={values.practitioner_agreement_flagPage3}
                                        name="practitioner_agreement_flagPage3"
                                        // onChange={handleChange}
                                    onChange={(e) => setFieldValue("practitioner_agreement_flagPage3",e.target.checked)}
                                    />
                                }
                                label={"I Agree"}
                            />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
        </div >
    );
};
Case3.propTypes = {
    values: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case3;

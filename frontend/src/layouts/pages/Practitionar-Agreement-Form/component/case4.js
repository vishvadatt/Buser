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



const Case4 = ({ values, handleChange, touched, errors, setFieldValue }) => {
    console.log(values);

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
                        liability and malpractice insurance. Within the Associate’s independently procured insurance policies, the
                        Associate shall name The Buser Institute as “Additionally Insured” within the Associates policies. In
                        exchange for providing the below agreed upon services, the Buser Institute shall pay the Associate
                        Practitioner by the tenth day of each month for the services provided in the preceding month at the
                        established and agreed upon hourly rate per the <b>Associate Practitioner Scope of Practice and Fee
                            Schedule Agreement</b> (enclosed in a separate agreement). Additionally, the Associate Practitioner agrees to
                        the following:
                    </p>
                    <br />

                    <div style={{ marginLeft: "35px" }}>
                        <p style={{ textAlign: "justify" }} className="initialhere">
                            <Grid container >
                                <Grid item lg={0.4}>
                                    7.1
                                </Grid>
                                <Grid item lg={11}>
                                    Associate Practitioner shall be responsible for all federal and state withholding taxes for themselves and
                                    the independent contractor payments made to the Associate by the Buser Institute. At the beginning of
                                    each calendar year (January) the Buser Institute shall provide the Associate Practitioner with a 1099
                                    representing the agreed upon and contracted pay to the Associate Practitioner for each preceding
                                    calendar year.
                                </Grid >

                            </Grid>
                            <Grid container >
                                <Grid item lg={0.4}>
                                    7.2.
                                </Grid>
                                <Grid item lg={11}>
                                    Associate Practitioner shall maintain an active license in good standing from an institution duely
                                    accredited within the Unites States that includes at a minimum the authorized practice of recommending
                                    exercises to clients (ie. Personal Trainer, Certified Strength and Conditioning Specialist, Yoga Istructor,
                                    Doctor of Chiropractic, Physical Therapist, etc.). If the Associate Practitioner will provide services
                                    including nutritional recommendations, he or she will maintain an active license in good standing from
                                    an institution duely accredited within the Unites States that includes the authorized practice of
                                    providing nutritional recommendations to clientelle (i.e. Certified Clinical Nutritionist, Doctor of
                                    Chiropractic, Doctor of Osteopathy, Doctor of Naturopathy, Medical Doctor, etc).
                                </Grid >
                            </Grid>
                            <Grid container >
                                <Grid item lg={0.4}>
                                    7.3.
                                </Grid>
                                <Grid item lg={11}>
                                    Associate Practitioner shall provide malpractice insurance coverage for himself or herself in amounts
                                    reasonably considered necessary by The Buser Institute.
                                </Grid >
                            </Grid>
                            <Grid container >
                                <Grid item lg={0.4}>
                                    7.4.
                                </Grid>
                                <Grid item lg={11}>
                                    Associate Practitioner shall not receive any benefits from The Buser Institute (e.g. vacation, sick leave,
                                    CME allowance, malpractice insurance, or health insurance). The forgoing list is not exhaustive. All
                                    such benefits shall be the responsibility of the Associate Practitioner.
                                </Grid >
                            </Grid>
                        </p>
                    </div>
                    <br />
                    <p>NOW, THEREFORE, The Buser Institute and the Associate Practitioner agree as follows:</p>

                    <div style={{ marginLeft: "35px" }}>
                        <p style={{ textAlign: "justify" }} className="initialhere">
                            <Grid container >
                                <Grid item lg={0.4}>
                                    <b>a)</b>
                                </Grid>
                                <Grid item lg={11}>
                                    <b> SERVICE AND DUTY.</b>  <span >Associate Practitioner agrees to provide exercise and nutritional
                                        consultation and recommendation services only (as permitted by the Associate Practitioner’s
                                        professional license and insurance carrier as stated above) for the Buser Institute. The
                                        Associate Practitioner shall only provide services as a Buser Institute Associate Practitioner in
                                        the context of ”<b>Supporting functional activity and a healthy lifestyle.” The Associate
                                            Practitioner <u>shall not</u> provide services for the Buser Institute nor in conjunction with
                                            Buser Institute services claiming that their associated evaluations, consultations and
                                            recommendations provide any other sort of therapeutic or medical screening or
                                            treatment of or for any medically diagnosable injury, illness, disease or condition.<u>To be
                                            clear, The Buser Institute’s exercise and nutritional recommendations do not claim to
                                            evaluate, screen for nor treat any medically related or medically diagnosable injury,
                                            illness, disease or condition. To claim otherwise is in breach of this contract and the
                                            position of the Buser Institute and will be grounds for termination of this association and
                                            agreement.</u> If an Associate Practitioner chooses to include services beyond the scope of
                                            this Buser Institute Associate Practitioner Independent Contractor agreement in their
                                            interaction with a client also receiving Buser Institute services, the Associate Practitioner
                                            will make it clear to the client with a separate signed Informed Consent form clearly
                                            delineating the services associated with the Buser Institute and those services that are
                                            solely performed under the Associate Practitioner’s license with an expanded scope of
                                            practice beyond that of the Buser Institute.</b></span>
                                </Grid >

                            </Grid>
                            <br />
                            <Grid container >
                                <Grid item lg={0.4}>
                                    <b>b)</b>
                                </Grid>
                                <Grid item lg={11}>
                                    <b>SERVICES TO BE PERFORMED.</b> Associate Practitioner’s services provided for the Buser
                                    Institute clients shall include the following:
                                </Grid >
                            </Grid>
                        </p>
                    </div>
                    <div style={{ marginLeft: "120px" }}>
                        <Grid container >
                            <Grid item lg={0.2}>
                                i.
                            </Grid>
                            <Grid item lg={11}>
                                Associate Practitioner shall provide exercise and nutrition recommendation services
                                for the Buser Institute as per the agreed upon authorized scope of practice specified in
                                the <b>Associate Practitioner Scope of Practice and Fee Schedule Agreement</b>
                                (enclosed in a separate agreement). The schedule shall be determined by the
                                scheduling manager for the Buser Institute in consultation with the Associate
                                Practitioner. Associate Practitioner shall make himself or herself available for
                            </Grid >
                        </Grid>
                    </div>
                </p>
                <br />
            </SoftBox>
        </div>
    );
};
Case4.propTypes = {
    values: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case4;

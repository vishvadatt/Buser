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
const Case2 = ({ values, handleChange, touched, errors, setFieldValue }) => {
    console.log(values);
    let sigPad = React.useRef({});
    let signPad1 = React.useRef({});
    const [signBeginClient, setSignBeginClient] = React.useState(true);
    const [signBeginOfc, setSignBeginOfc] = React.useState(true);

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
                        OR THIS AGREEMENT (HOWEVER ARISING, INCLUDING NEGLIGENCE), INCLUDING WITHOUT
                        LIMITATION, LIABILITY OR LOSS ASSOCIATED WITH UNAUTHORIZED ACCESS TO A SERVER,
                        ASSOCIATE INTERFACE, WEBSITE, FACILITY, YOUR DATA OR YOUR CUSTOMER DATA
                        (INCLUDING CREDIT CARD NUMBERS AND OTHER PERSONALLY IDENTIFIABLE INFORMATION)
                        DUE TO ACCIDENT, ILLEGAL OR FRAUDULENT MEANS, INCLUDING HACKING, OR DEVICES
                        USED BY ANY THIRD PARTY, OR OTHER CAUSES BEYOND BUSER INSTITUTE REASONABLE
                        CONTROL. ASSOCIATE EXPRESSLY AGREES THAT BUSER INSTITUTE SHALL NOT BE LIABLE
                        FOR ANY LOSS ARISING FROM: (I) A THIRD PARTY’S INFILTRATION OF BUSER INSTITUTE
                        SERVICES, SYSTEMS OR WEBSITE BY ANY MEANS, INCLUDING WITHOUT LIMITATION, DDoS
                        ATTACKS, SOFTWARE VIRUSES, TROJAN HORSES, WORMS, TIME BOMBS, OR ANY OTHER
                        SOFTWARE PROGRAMS, OR TECHNOLOGY; (II) DISRUPTION, DAMAGE, INTERCEPTION,
                        UNAUTHORIZED ACCESS TO OR EXPROPRIATION OF THE BUSER INSTITUTE SERVICES, OR ANY
                        SYSTEM, PROGRAM, DATA, TRANSACTION OR PERSONAL INFORMATION BELONGING TO
                        BUSER INSTITUTE, YOU OR ANY THIRD PARTY; OR (III) THE LIMITATION OF THE FUNCTIONING
                        OF ANY SOFTWARE, HARDWARE, EQUIPMENT OR THE SERVICE.
                    </p>
                    <br />
                    <br />
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>3.2 NO CONSEQUENTIAL DAMAGES.</b> EXCEPT FOR CLAIMS ARISING FROM CRIMINAL OR
                        WILLFUL MISCONDUCT, THE PARTIES AND THEIR VENDORS (AND ANY OFFICERS, DIRECTORS,
                        EMPLOYEES AND AGENTS OF THE PARTIES AND THEIR VENDORS) SHALL BE LIABLE ONLY
                        FOR DIRECT, OUT-OF-POCKET DAMAGES, AND SHALL NOT BE LIABLE FOR ANY INDIRECT,
                        CONSEQUENTIAL, INCIDENTAL, SPECIAL OR EXEMPLARY DAMAGES, INCLUDING LOST
                        PROFITS OR BUSINESS, UNDER ANY THEORY OF LIABILITY OR CAUSE OF ACTION WHETHER IN
                        TORT, CONTRACT OR OTHERWISE, REGARDLESS OF WHETHER THE PARTY HAS BEEN ADVISED
                        OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                    <br />
                    <br />
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>3.3 INDEMNIFICATION:</b> By execution of this agreement, Associate hereby agrees to indemnify and hold
                        harmless the Buser Institute from any loss, liability, damage, or cost Associate may incur due to the provision of
                        Buser Institute services. The Associate agrees to take full responsibility for the services he or she provides to
                        themselves or clientelle and agrees to practice as such under their independent professional license and within
                        the legal parameters set forth by their license’s accrediting and governing body.
                    </p>
                    <br />
                    <br />
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>4. Ownership and Use of Data.</b> To the extent permissible and in compliance with HIPAA regulations,
                        applicable law, and as between the Parties, <b>Buser Institute shall retain in perpetuity full ownership of all
                            data submitted by Associate and the Associate’s associated clients in connection with Associate´s
                            enrolment for and use of the Buser Institute Services and hosted or stored on Buser Institute servers,
                            including but not limited to: names, mailing & shipping addresses, email addresses, phone numbers,
                            dollar amounts of purchases, type of purchases and descriptions of purchases, educationally and/or
                            clinically related photos, videos, video messages, transcripts, recommended sequences and recommended
                            nutritional protocols, suggested and/or submitted (i.e. contributed by the Associate into the Buser Institute
                            system) exercises (photos, videos and instructions), nutritional protocols (photos, videos, instructions),
                            educational content (including papers, assignments, exercise profiling documents, photos, videos and
                            video messages).</b> Buser Institute agrees to use such data only as necessary to perform hereunder (including forprofit
                        clinical and educational purposes), and hereby grants Associate a royalty-free, fully paid up right, during
                        the Term, to use such data only as necessary to perform its rights and obligations hereunder (for supporting the
                        Associate’s Buser Institute educational progression and providing services to the Associate’s clients that are
                        enrolled in the Buser Institute database) and for no other purpose. Nothing in this Agreement shall prevent or
                        restrict Associate from using any information it collects or receives independent of its performance under this
                        Agreement.
                    </p>
                    <br />
                    <br />
                    <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
                        <b>5. Intellectual Property.</b>The Parties agree that Buser Institute owns and retains in perpetuity all right, title and
                        interest in and to the Buser Institute Web Site, the Buser Institute Services, the co-branded Pages, all client
                        testing and evaluation protocols and documentation (including but not limited to the Buser Institute
                        Patient/Client Intake Evaluation, Practitioner/Doctor SOAP Evaluation, Clinical FLOW Logic Algorithms, and
                        Buser Institute Client Posture and Functional Evaluation documents, exercise and nutritional pictures, videos,
                        video messages, and all Buser Institute Associate photos, videos, instructions, video messages, client evaluations
                        and recommendations, educational assignments and documentation and videos submitted or contributed to the
                        Buser Institute system), all intellectual information and concepts (including but not limited to the Buser Institute
                        Anti-Gravity Kinetic Chain of muscles, and Buser Institute Collapsing-Extending Skeleton Design model), all
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
                                        checked={values.practitioner_agreement_flagPage2}
                                        name="practitioner_agreement_flagPage2"
                                        // onChange={handleChange}
                                    onChange={(e) => setFieldValue("practitioner_agreement_flagPage2",e.target.checked)}

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
Case2.propTypes = {
    values: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case2;

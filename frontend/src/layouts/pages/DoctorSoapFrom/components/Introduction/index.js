import { Container } from "@mui/system";
import React from "react";
import "../Introduction/style.css";
import { Formik } from "formik";
import SoftButton from "components/SoftButton";

function index() {
  return (
    <div>
      <h2 className="soap">NOTICE REGARDING MONTHLY “SOAP” NOTES</h2>
      <Container>
        <p className="policy" style={{textAlign: "justify"}}>
          It is the policy of this chiropractic office to follow the Rules & Regulations of the
          California Board of Chiropractic Examiners in regard to patient record keeping. This
          includes the following legal requirements:{" "}
        </p>
        <p className="Chiropractic" style={{textAlign: "justify"}}>
          §318(a) Chiropractic patient records must include all of the following:
        </p>
        <ul>
          <li className="patient" style={{textAlign: "justify"}}>
            (1) Patient’s full name, date of birth and social security number if available
          </li>
          <li className="patient" style={{textAlign: "justify"}}>(2) Gender, height and weight</li>
          <li className="patient" style={{textAlign: "justify"}}>
            (3) History, complaints, diagnosis and treatment signed by primary doctor
          </li>
          <li className="patient" style={{textAlign: "justify"}}>(4) Signature of patient</li>
          <li className="patient" style={{textAlign: "justify"}}>(5) Date of each and every patient visit</li>
          <li className="patient" style={{textAlign: "justify"}}>
            (6) All chiropractic X-rays, or evidence of the transfer of said X-rays
          </li>
          <li className="patient" style={{textAlign: "justify"}}>(7) Signed written informed consent (see §319.1)</li>
        </ul>
        <p className="the312" style={{textAlign: "justify"}}>
          §312(c)(2) The doctor shall initially examine and prepare a written treatment program
        </p>
        <p className="the312" style={{textAlign: "justify"}}>
          §312(c)(3) The doctor shall provide periodic reevaluation of the treatment program…at
          least once every thirty days the patient is under active care.
        </p>
        <p className="the312" style={{textAlign: "justify"}}>
          § 312(c)(4) The doctor shall perform and record an evaluation of the patient and his or
          her response to treatment at the termination thereof.
        </p>
        <p style={{textAlign: "justify"}} className="the312">
          This office does NOT perform progress examinations on each and every patient visit because
          doing that would be overly expensive to the patient as well as his or her insurance
          company. Thus, there are no “SOAP” notes for each and every patient visit. Our office
          records “SOAP” notes pursuant to California law and sections 312 and 318 of the California
          Chiropractic Board’s Rules and Regulations every thirty days.{" "}
        </p>
        <p style={{textAlign: "justify"}} className="the312">
          Our office refers to these monthly “SOAP” notes and incorporates them by reference when it
          records the date of each and every patient visit as required by §318(a)(5). Please note
          that it is the standard business practice in this office to follow the most recent written
          monthly SOAP notes in the patient’s file. Any deviations, addition or deletions from the
          most recent written treatment plan on file are noted whenever such action occurs.
        </p>
      </Container>
      <div style={{ float: "right" }}>
                  <SoftButton
                    // className="nx"
                    type="submit"
                    variant="gradient"
                    color="dark"
                    // onClick={formik.handleSubmit}
                  >
                    Next
                  </SoftButton>
                </div>  
    </div>
  );
}

export default index;

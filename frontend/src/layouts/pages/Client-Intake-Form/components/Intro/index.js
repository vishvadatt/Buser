import React from "react";
import { Grid } from "@mui/material";
import "./style.css";
import { Formik } from "formik";
import brand from "assets/images/Logo-01.jpeg";
import { Container } from "@mui/system";
import SoftButton from "components/SoftButton";

function index() {
  return (
    <div>
      <Grid>
        <Container fluid>
          <div className="img">
            <img src={brand} />
          </div>
          <b className="client">CLIENT PARTICIPATION AGREEMENT</b>
          <p className="Buser">
            Thank you for your interest in becoming a client of the Buser Institute.
          </p>
          <b>Our mission: </b>
          <p className="Institute">
            The Buser Institute is a complementary healthcare clinic and organization dedicated to
            the research, development and application of cutting-edge, peer-review validated,
            functional physiotherapy with clients and other practitioners around the world. As such,
            we spend a great deal of time and take great care in collecting and safeguarding
            information from our clients and our community of practitioners, conducting research
            studies in our dedicated kinesiology lab, publishing articles in peer-reviewed clinical
            journals, and then offering seminars for other practitioners to incorporate these
            findings into their practices. In doing so, we utilize clinically relevant client case
            information, photos and videos obtained in the course of real-world therapy for both
            research analysis and grand round reviews with our practitioner students. We are careful
            to withhold and protect all confidential information such as personal billing and
            contact information (i.e. phone numbers, mailing and email addresses, credit card
            numbers, international fund transfer accounts, etc) from these studies and publications.
          </p>
          <b>The process: </b>
          <p className="Institute">
            In this process we will ultimately evaluate and study almost every physiological system
            in your body to determine what systems need support to reach your goals. Each client’s
            case is different from the next, and some clients and some of their systems may need
            more attention than others. We will figure that out with you, and we will invest a great
            deal of time in educating you on how to recognize system dysfunctions and give you the
            tools to address them throughout your life to sustain and continue to enhance your
            gains. Such a comprehensive approach inherently requires an equally comprehensive Client
            Intake form. Hence, ours is somewhat more detailed than your average experience with
            other practitioners. Similarly, our therapist evaluations and many of our treatment
            approaches also include a significant investment of time and energy to obtain the
            outcomes our clients frequently achieve. Thus, we expect our clients to take personal
            responsibility for, and an active role in, their health care pathway. We encourage
            tracking of your conduct of our recommended therapy protocols (exercises and nutrition),
            and recording daily changes in pain and performance so that you can report that to your
            Buser Institute therapist. Only through your commitment and active participation in this
            program will you achieve the benefits of this therapy. But if you do commit and take the
            actions we recommend, it can change your life.
          </p>
          <b>Our commitment:</b>
          <p className="Institute">
            Our commitment is to care as much about you as you do, and we look forward to joining
            you in this journey.
          </p>
          <p className="commitment">
            In consideration of being allowed to participate in the Buser Institute therapy program,
            we ask that you agree to the following:
          </p>
        </Container>
        {/* <Container fluid>
          <div className="img">
          <img  src={brand} />
          </div>
          <b className="client">CLIENT PARTICIPATION AGREEMENT</b>
          <p className="Buser">
            Thank you for your interest in becoming a client of the Buser Institute.
          </p>
          <b>Our mission: </b>
          <p className="Institute">
            The Buser Institute is a complementary healthcare clinic and organization dedicated to
            the research, development and application of cutting-edge, peer-review validated,
            functional physiotherapy with clients and other practitioners around the world. As such,
            we spend a great deal of time and take great care in collecting and safeguarding
            information from our clients and our community of practitioners, conducting research
            studies in our dedicated kinesiology lab, publishing articles in peer-reviewed clinical
            journals, and then offering seminars for other practitioners to incorporate these
            findings into their practices. In doing so, we utilize clinically relevant client case
            information, photos and videos obtained in the course of real-world therapy for both
            research analysis and grand round reviews with our practitioner students. We are careful
            to withhold and protect all confidential information such as personal billing and
            contact information (i.e. phone numbers, mailing and email addresses, credit card
            numbers, international fund transfer accounts, etc) from these studies and publications.
          </p>
          <b>The process: </b>
          <p className="Institute">
            In this process we will ultimately evaluate and study almost every physiological system
            in your body to determine what systems need support to reach your goals. Each client’s
            case is different from the next, and some clients and some of their systems may need
            more attention than others. We will figure that out with you, and we will invest a great
            deal of time in educating you on how to recognize system dysfunctions and give you the
            tools to address them throughout your life to sustain and continue to enhance your
            gains. Such a comprehensive approach inherently requires an equally comprehensive Client
            Intake form. Hence, ours is somewhat more detailed than your average experience with
            other practitioners. Similarly, our therapist evaluations and many of our treatment
            approaches also include a significant investment of time and energy to obtain the
            outcomes our clients frequently achieve. Thus, we expect our clients to take personal
            responsibility for, and an active role in, their health care pathway. We encourage
            tracking of your conduct of our recommended therapy protocols (exercises and nutrition),
            and recording daily changes in pain and performance so that you can report that to your
            Buser Institute therapist. Only through your commitment and active participation in this
            program will you achieve the benefits of this therapy. But if you do commit and take the
            actions we recommend, it can change your life.
          </p>
          <b>Our commitment:</b>
          <p className="Institute">
            Our commitment is to care as much about you as you do, and we look forward to joining
            you in this journey.
          </p>
          <p className="commitment">
            In consideration of being allowed to participate in the Buser Institute therapy program,
            we ask that you agree to the following:
          </p>
        </Container> */}
      </Grid>
      <div style={{ float: "right", position: "relative" }}>
        <SoftButton type="submit" variant="gradient" color="dark">
          Next
        </SoftButton>
      </div>
    </div>
  );
}

export default index;

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import brand from "assets/images/Logo-01-rm.png";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Images import
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import first from "./images/first.jpg";
import second from "./images/second.jpg";
import third from "./images/third.jpg";
import fourth from "./images/fourth.jpg";
import fifth from "./images/fifth.jpg";
import sixth from "./images/sixth.jpg";
import seventh from "./images/seventh.jpg";
import eigth from "./images/eigth.jpg";
import nigth from "./images/nigth.jpg";
import "../style.css";
// Data
import { Box, Button, DialogContent } from "@mui/material";

function Instruction() {
  // useEffect(() => {
  //   const loadSessionUrl = async () => {
  //     if (paymentId !== "") {
  //       const stripe = await stripePromise;
  //       const result = await stripe.redirectToCheckout({
  //         sessionId: paymentId,
  //       });
  //       if (result.error) {
  //         console.log(result.error);
  //       }
  //     }
  //   };
  //   loadSessionUrl();
  // }, [paymentId]);

  //  useEffect(() => {
  //   console.log("log1..call useEffect on welcom");
  //   const storeSession = async () => {
  //   console.log("log1..call Function");
  //     let isExpiredDate = moment().add(1, setInterval).format("YYYY-MM-DDThh:mm:ssn");
  //     let path = window.location.href;
  //   console.log("log1..path",path);
  //     let splitPath = path.split("/");
  //     const id = splitPath[4].split("=");
  //   console.log("log1..id[1]",id);
  //     if (id[1]) {
  //   console.log("log1..inside",id[1]);
  //       dispatch(sessionIdAction(id[1]));
  //       setLoader(true);
  //       var index = isDashBoardPlan.findIndex((x) => x == planId);
  //       index === -1 ? isDashBoardPlan.push(planId) : [];

  //       dispatch(
  //         popupAction({
  //           data: {
  //             isDashBordPurchase: true,
  //             // isDashBordAutoDebit: autoDebitValue,
  //             isExpiredDate: isExpiredDate,
  //             dashBoardPlan: isDashBoardPlan,
  //           },
  //           id: userId,
  //           token: token,
  //         })
  //       );
  //       // setTimeout(() => {
  //         // Navigate("/welcome");
  //       // }, 1000);
  //       // setLoader(false)
  //     }
  //   };
  //   storeSession();
  // }, []);

  return (
    <>
      <SoftBox mb={1}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
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
                // ml={50}
              />
            )}
            <Box sx={{ width: "100%" }} mt={2}>
              <SoftBox>
                <h2 style={{ textAlign: "center" }}>Buser Institute Video Messaging Therapy</h2>
                <br />

                <p style={{ textAlign: "justify" }}>
                  <b>Welcome to the Buser Institute Video Messaging Therapy Department.</b>
                  This is the most efficient way to get personalized Buser Institute Exercise
                  Therapy with proven results. You will be able to record and relay to us your
                  personal health history in as much detail as you wish and ask us any questions you
                  may have about your specific conditions, your therapy, and your path to your
                  health goals
                  <br />
                  We will reply to you with a detailed personalized video message that answers your
                  questions, explains the therapy you have been recommended, and is accompanied with
                  pictures, video demonstrations and written instructions for each of your
                  physiotherapy exercises.
                  <br />
                  So now, <b>please watch the </b>
                  <b style={{ color: "blue" }}>Video Coming Soon</b> below. This will give you an
                  overview of how to use our Video Message platform and what to do. We have also
                  posted the instructions below to help guide you through the process.
                  <br />
                  See you soon!
                  <br />
                  <br />
                  <b>
                    Note: If you do not have a video camera on your computer or smartphone, then we
                    can instead do Photo Therapy using still photographs. Photo Therapy is a very
                    effective alternative. If you choose to do so, please go to the Photo Therapy
                    tab on your dashboard
                  </b>
                  <br />
                  <br />
                  <hr />
                  <br />
                  <div style={{ marginLeft: "10%" }}>
                    <b style={{ textDecoration: "underline" }}>Video Message recording steps </b>
                    <br />
                    <br />
                    <b style={{ textDecoration: "underline" }}>Step 1</b>
                    <b>: Complete the Client Intake Form</b>
                    <br />
                    <br />
                    <b style={{ textDecoration: "underline" }}>Step 2</b>
                    <b>: Record your video message</b>
                    <br />
                    <b>
                      To begin your video message (Note: we recommend doing a Test video message for
                      20-30 seconds before recording your first actual therapy video message)
                    </b>
                    <br />
                    click on the
                    <b> Start Session</b> button at the bottom left of the screen in the website or
                    smartphone app
                    <div className="chatbox_input_instruction" style={{ margin: "10p 0" }}>
                      <Button className="start_conversation_button" style={{ width: "20%" }}>
                        Start Session
                      </Button>
                    </div>
                    Click on the purple{" "}
                    <b style={{ color: "purple" }}>Enable camera & mic access</b> button. And in the
                    pop-up window click <b style={{ color: "blue" }}>OK</b> to allow your dashboard
                    to access your microphone and camera.
                    <br />
                    <div style={{ display: "flex", gap: ".3rem" }}>
                      <p style={{ display: "flex", flexWrap: "wrap" }}>
                        Click on the Video Button{" "}
                        <VideoCameraBackIcon
                          style={{
                            width: "30px",
                            margin: "0 10px",
                            height: "30px",
                            color: "#62c2e8",
                          }}
                        />{" "}
                        and{" "}
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0 10px",
                            backgroundColor: "red",
                            borderRadius: "50%",
                          }}
                        />{" "}
                        Record button on your screen to begin rcording
                      </p>
                    </div>
                    <b>
                      Please see the video demonstration and instructions on what to include in your
                      video message.
                    </b>
                    <br />
                    <b>
                      Once you are done recording, end and send your video by doing the following:
                    </b>
                    <div style={{ display: "flex", gap: ".3rem" }}>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: "red",
                        }}
                      />
                      <p>
                        Click on the red <b style={{ color: "red" }}>Stop button</b> (red square) to
                        stop your recording.{" "}
                      </p>
                    </div>
                    <br />
                    <br />
                    <b style={{ textDecoration: "underline" }}>Step 3</b>
                    <b>: Check and Submit your video message</b>
                    <br />
                    <b>
                      {" "}
                      Click on the video recording tile in your message thread to check your video
                      and confirm you recorded audio (voice) as well
                    </b>
                    <br />
                    <p>
                      Submit the video to us by clicking on the{" "}
                      <SendIcon
                        style={{
                          color: "#62c2e8",
                        }}
                      />{" "}
                      button
                    </p>
                    <p>
                      Upload any photos, reports or other document using the{" "}
                      <AttachFileIcon
                        style={{
                          color: "#62c2e8",
                        }}
                      />{" "}
                      attachment button.
                    </p>
                    <br />
                    <p>
                      When you video is complete with recording your videos, uploading your comments
                      and photos (optional) and ready to end your session, please click on the
                      <span className="endSession"> End Session</span> bar at the bottom of the
                      screen.
                    </p>
                  </div>
                  <br />
                  <br />
                  <b>
                    Beginning your first full Video Message: (What to include in your Exercise
                    Therapy video message)
                  </b>
                  <br />
                  Now, we would like to know a little more about your health history. So, please be
                  sure that all initial information is captured in your written Client Intake form.
                  This video message is the point where you can add any details or insights into
                  your health history, conditions, challenges and goals using your own body to point
                  out these problems and describe what you have experienced and observed in your own
                  imbalances. The following are some points of interest to help guide your
                  conversation in your video message
                  <br />
                  <br />
                  <div style={{ marginLeft: "10%" }}>
                    <b style={{ textDecoration: "underline" }}>
                      Part I- Pertinent Health History Points to discuss in your Video Message
                    </b>
                    <br />
                    1) Brief (overview by name) list of pertinent past and current{" "}
                    <b>
                      ailments, accidents, traumas, injuries, diseases and/or health conditions
                    </b>{" "}
                    you have had and now have.
                    <br /> 2) Current <b>conditions that limit you</b> from living a pain-free and
                    active life. Please list these in order of your primary (worst) condition first
                    and then down the list to that which is of the least concern to you. Let us know
                    if you feel that any of these conditions are connected to one another in any way
                    (your opinion and personal insight into your own body matter to us).
                    <br /> 3) Now, let’s get some deeper detail on each of these conditions one at a
                    time. Here, as you go through each of the above conditions on your list, please
                    elaborate on anything you wrote in the Client Intake Form with as much detail as
                    you please, but at the least please speak to the following <b>LMPQRSTU</b>{" "}
                    points in Lines a-j below for each of your conditions. Once you have completed
                    this review, please then move on to Line 4 in these instructions
                    <ol type="a" style={{ marginLeft: "5%" }}>
                      <li>
                        <b>Location:</b> Where do you feel the pain? Where is the pain on your body?
                        Is it on your left, right or centered? Is it on the front, back, inside or
                        outside of your appendage (arm, leg, etc)? Is it deep or superficial? Is it
                        deep in the body part or joint, or superficial on the skin? Can you trace
                        the pain with your finger? Over what area is the pain? For example, is it a
                        pin-point or broad area? Can you trace it on your skin?
                      </li>
                      <li>
                        <b>Mechanism:</b> Was there an event or injury that you can recall that
                        contributed to this condition? What and when was the event or multiple
                        events?
                      </li>
                      <li>
                        <b>Provocative/Palliative:</b> Is there anything (position, activity,
                        stress, food, etc) that seems to aggravate your pain or alleviate the pain?
                        Did any of the functional tests seem to aggravate or alleviate your
                        condition(s)?
                      </li>
                      <li>
                        <b>Quality of the pain:</b> How would you describe the pain in your own
                        words? For example, is it sharp or dull, constant, aching, throbbing,
                        burning, stinging, stabbing, shooting, tingling, numb, stiff, cramping,
                        other, etc?
                      </li>
                      <li>
                        <b>Radiation:</b> Does the pain move around, radiate, “shoot” or travel
                        anywhere in the body from that initial area?
                      </li>
                      <li>
                        <b>Restrictions and Limitations:</b> What things does this condition limit
                        you from doing in your life?
                      </li>
                      <li>
                        <b>Severity:</b> On a scale of 0-10 (0 being no pain, 10 being the worst
                        pain you have ever experienced), what level is it now? What level is it at
                        it’s worst? What level is it at it’s least?
                      </li>
                      <li>
                        <b>Timing, Frequency, Duration:</b> How long have you had this condition? Is
                        it constant or intermittent? If intermittent, how often do you have it, and
                        at what time of day or night do you have it? When did you last have it? If
                        intermittent, how long does the pain last when you have it (duration)?
                      </li>
                      <li>
                        <b>Treatment(s)/Diagnoses:</b> Have you been diagnosed for this condition?
                        By whom and when? What was the diagnosis? Have you been treated for this
                        condition (medication, surgery, therapy, self-care or anything else)? What
                        was the treatment and when were you treated? What was the outcome of this
                        treatment? And did the treatment and any relief last? How long did the
                        relief last?
                      </li>
                      <li>
                        <b>Understanding:</b> What do you think caused this condition? Why do you
                        think this condition is not resolving or going away or healing?
                      </li>
                    </ol>
                    4) <b>Mind and Nutrition:</b> Have you correlated any nutritional or
                    psychological patterns that may be involved with your pain in a positive or
                    negative way? For example, does drinking dairy or eating wheat seem to aggravate
                    your condition? Does stress with work or another situation in your life seem to
                    contribute to flare ups?
                    <br />
                    5) <b>Fitness:</b> How often do you “workout” (perform a physical activity for
                    fitness purposes)? How long do you work out? What type of activity do you do?
                    How does that affect your condition(s)? Here, we consider walking a workout too.
                    <br />
                    6) <b>Life Priorities</b>: On a scale of 0-10, how important is your long-term
                    physical health to you (10 being the highest priority in your life)? What other
                    life priorities come before your physical health?
                    <br />
                    7)<b>Functional Goals:</b> What physical activities would you like to be able to
                    do that you are limited in presently?
                    <br />
                    8) <b>Time management</b>: How much time would you be willing to invest daily to
                    accomplish these goals? For example, 10 minutes, 30 minutes, one hour, two hours
                    per day, etc?
                    <br />
                    9)<b>Expectation management:</b> Given the severity of and duration of your
                    conditions, and given the amount of time you are willing to invest now in
                    addressing them, how much time do you think it might take to accomplish these
                    goals? For example, two weeks, a few months, a year or years?
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <b>
                      Part II- Postural and Functional Tests to demonstrate in your Video Message:
                    </b>
                    <br />
                    Now we would like to explore your body’s global function. That is, how well
                    you’re your body works as a whole unit in relation to itself and gravity. Please
                    demonstrate the following Postural and Functional Tests in your Video Message
                    and remark on each based on the questions associated with each test. Please stay
                    in each position or test for 10 seconds as you are recording each to allow you
                    body to settle into the test and for your therapist to be able to capture your
                    results.
                    <br />
                    <br />
                    <b>Front view:</b>
                    <br /> Instructions: Stand facing the camera, behind the plumb-line or in the
                    frame of a door if possible because this gives us a vertical reference. Relax
                    and stand naturally. Make sure that your entire body is in the frame of the
                    camera – from the feet to the top of the head. Please relax, give us your
                    natural posture in this position for 10 seconds.
                    <br />
                    <b> Back view:</b>
                    <br /> Instructions: Stand with your back to the camera behind the plumb-line or
                    a frame of a door, relax and stand naturally. Make sure that your entire body is
                    in the frame of the camera – from the feet to the top of the head for 10
                    seconds.
                    <br /> <b>Left Side view:</b>
                    <br />
                    Instructions: Stand behind the plumb-line (or at a doorway) with your left side
                    towards the camera. Relax and stand naturally. Make sure that your entire body
                    is in the frame of the camera – from the feet to the top of the head for 10
                    seconds.
                    <br />
                    <hr />
                    <br />
                    <b> Right Side view:</b>
                    <br />
                    Instructions: Stand behind the plumb-line (or at a doorway) with your right side
                    towards the camera. Relax and stand naturally. Make sure that your entire body
                    is in the frame of the camera – from the feet to the top of the head for 10
                    seconds.
                    <br />
                    <b> Center of Gravity Test</b> (Central Integration Strategy)
                    <br />
                    <img src={first} style={{ width: "25rem", objectFit: "contain" }} />
                    <br />
                    <b>Exercise instruction video:</b>
                    <br />
                    <a
                      href="https://vimeo.com/manage/videos/502844135"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://vimeo.com/manage/videos/502844135
                    </a>
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> To start to
                    explore your own body’s level of function. Stand in the center of a room and
                    feel where your center of gravity falls. Get a feel for how your weight is
                    distributed in your feet. Your weight should fall evenly left to right foot, and
                    evenly front to back. If it doesn’t, that’s an indication that your center of
                    gravity is unevenly distributed.
                    <br />
                    <span style={{ textDecoration: "underline" }}> Remarks:</span> Check your body
                    weight from left to right and front to back in your feet. Is your weight
                    distributed 50/50% evenly left to right, or more in one foot? What percent is in
                    your right and your left foot?
                    <br /> <span style={{ textDecoration: "underline" }}>Remarks:</span> Check your
                    weight from front to back in your feet. Is your weight evenly distributed front
                    to back or more in the heels or toes of one (right or left) or both feet? <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> When you take a
                    deep breath, what moves as you breathe in and out? Your stomach, your chest,
                    your back or your shoulders?
                    <br />
                    <hr />
                    <br />
                    <br />
                    <b>Standing At Wall 11 Point Test </b>(Vertical Load Joints)
                    <br />
                    <img src={second} style={{ width: "25rem", objectFit: "contain" }} />
                    <br />
                    <b>Exercise instruction video:</b>
                    <br />
                    <a
                      href="https://vimeo.com/manage/videos/659149731"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://vimeo.com/manage/videos/659149731
                    </a>
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> To start to
                    explore your own body’s level of function. Stand at a wall with your feet in a
                    comfortable position and with your heels both touching the wall. Relax your body
                    in this position to allow for your natural posture. That is, do not force any
                    part of your body to touch the wall other than your heels. Check to see if the
                    following body points are naturally touching the wall or not: calves, buttocks,
                    shoulder blades, backs of your shoulders, head
                    <br />
                    <span style={{ textDecoration: "underline" }}> Remarks:</span>Check the
                    following body points and tell us if it each is touching the wall or not. If a
                    part is not touching the wall, then tell us how far away from the wall does it
                    feel? You can measure it in finger width if you can.
                    <br />
                    <br />
                    <b>Hands on Head Test (Head-Spine-Pelvis Chain Integrity)</b>
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> Relax and
                    stand naturally with your right side to the camera. Now interlace your fingers
                    behind your head and pull your elbows as far back as possible. Relax your
                    stomach while standing in this position.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> When doing Hands
                    on Head (HOH)- Does your buttocks feel like it sticks out more than normal?
                    <br />
                    <hr />
                    <br />
                    <br />
                    <b>Pidgeon Toed Test: </b>(Head-Spine-Pelvis Chain Integrity)
                    <br />
                    <img src={third} style={{ width: "25rem", objectFit: "contain" }} />
                    <br />
                    <b>Exercise instruction video:</b>
                    <br />
                    <a
                      href="https://vimeo.com/manage/videos/659149731"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://vimeo.com/manage/videos/659149731
                    </a>
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> Relax and
                    stand naturally with your right side to the camera. Now turn your feet inwards
                    so that your big toes touch and your heels point out to the sides approximately
                    45 degrees each. Be sure to turn your feet inwards equally. Tighten your thighs
                    and lock your knees out to straighten your legs. Relax your stomach while
                    standing in this position.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> When doing Pidgeon
                    Toed Stance (PT)- Does your buttocks stick out more than normal? Do you feel an
                    accentuated curve in your spine? If so, how high does it feel that accentuated
                    curve goes up in your spine?
                    <br />
                    <b>Hands-on-Head & Pigeon-toed Test: </b>(Head-Spine-Pelvis Chain Integrity)
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> Relax and
                    stand naturally with your right side to the camera. Now turn your feet inwards
                    so that your big toes touch and your heels point out to the sides approximately
                    45 degrees each. Be sure to turn your feet inwards equally. Tighten your thighs
                    and lock your knees out to straighten your legs. Relax your stomach while
                    standing in this position. Now interlace your fingers behind your head and pull
                    your elbows as far back as possible. Remember to relax your stomach while
                    standing in this position.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> When doing Both-
                    Does the feeling of the height of the curve you felt in Pidgeon Toed Stance seem
                    to go higher in your spine?
                    <br />
                    <br />
                    <b>Standing At Wall Elbow Flexes Test </b>(Thoracic Compensation)
                    <br />
                    <br />
                    <img src={fourth} style={{ width: "25rem", objectFit: "contain" }} />
                    <br />
                    <b>Exercise instruction video:</b>
                    <br />
                    <a
                      href="https://vimeo.com/manage/videos/659144495"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://vimeo.com/manage/videos/659144495
                    </a>
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> tand against
                    a wall with feet hip width apart, pointing straight ahead. The calves, buttocks,
                    upper back and head should be against the wall during the whole exercise. Relax
                    your stomach and extend the upper back. Form half-fists with your hands, thumbs
                    extended. Put your knuckles at the temples, thumbs pointing down. Keeping your
                    wrists straight, curl your elbows from the sides to the front and then back to
                    the wall. The elbows should touch each other in the front position and the wall
                    in the side position. Remember to relax the stomach and keep the upper back and
                    thumbs extended.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> Are you able to
                    touch your elbows together at chin level? Do you feel tension anywhere as you do
                    this test when you bring your elbows forwards or backwards?
                    <br />
                    <b>Walking Hands on Head </b>(Head/Arm/Trunk Compensation Implications)
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> With your
                    arms in a normal position and just simply walk forward for 5-10 steps and get a
                    feel for you balance, the weight of your legs and the pain you may have when you
                    walk. Now, place your hands behind your head with fingers interlaced and elbows
                    back. Walk forward for 5-10 steps using your normal stride length (don’t think
                    about it).
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> Compared to
                    walking with your arms swinging normally at your side, does walking with your
                    hands on your head make you feel more or less stable or does it feel the same?
                    Do your legs feel heavier or lighter? Does this change the pain you experience
                    when walking? Do you sense any other difference?
                    <br />
                    <br />
                    <br />
                    <b>Sitting Ankle Knee Crossover Test </b>(Pelvic Asymmetry)
                    <br />
                    <br />
                    <img src={fifth} style={{ width: "25rem", objectFit: "contain" }} />
                    <br />
                    <b>Exercise instruction video:</b>
                    <br />
                    <a
                      href="https://vimeo.com/manage/videos/659036537"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://vimeo.com/manage/videos/659036537
                    </a>
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> Sit in a
                    chair with your side or front to the camera, with your hips rolled forward to
                    place an arch in your low back(extension). Cross one foot above the opposite
                    knee. While sitting in extension, use the hip muscles of the crossed leg to
                    press that knee toward the floor and HOLD. You should feel this stretch the
                    lateral hip of the crossed leg and some work in your low back from holding the
                    extension position.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> Get a sense for
                    the stretch in you hip that this creates. Where do you feel the stretch in your
                    hips? Do you a stretch anywhere else (i.e. in your thigh or back)? Is the
                    stretch in the same area compared from left to right?
                    <br />
                    <br />
                    <br />
                    <b>Sitting Single Hip Lifts </b>(Locomotor Unit Recruitment)
                    <br />
                    <br />
                    <img src={sixth} style={{ width: "25rem", objectFit: "contain" }} />
                    <br />
                    <b>Exercise instruction video:</b>
                    <br />
                    <a
                      href="https://vimeo.com/manage/videos/659106748"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://vimeo.com/manage/videos/659106748
                    </a>
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> Sit in a
                    chair with your side or front to the camera, knees and feet hip width apart,
                    knees bent 90 degrees and feet pointed straight ahead. Relax your stomach, roll
                    your hips forward to place an arch in the low back and extend your upper back by
                    pushing your chest up and out - the shoulders relax down and back. Make sure you
                    are sitting upright (not leaning forward/backward with the upper body). Hold
                    this position. Stand on the toes of the left foot, and on the heel of the right
                    foot. Holding the above posture begin lifting and lowering the right knee 1-2
                    inches by using the front hip muscles. Be sure to keep the right foot pointed
                    straight ahead while lifting and do not let the upper body shift to left during
                    the exercise. Repeat for the desired amount of repetitions and switch sides
                    between each set. It is very important to keep the hips rolled forward and the
                    low back arched during the whole exercise. You should feel the work in the front
                    of the hip.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> After doing
                    somewhere between 15-50 lifts on one leg, where do you feel the work of lifting
                    that leg? Is it in the front of the hip, side of your leg, in your back, or
                    anywhere else? Please point to it. What does that work feel like (burn, stretch,
                    pain?). Now, switch legs and do the same to find the work on that side. Please
                    tell us the same information for that other side as a comparison.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> Now, switch legs
                    and do the same to find the work on that side. Please tell us the same
                    information for that other side as a comparison.
                    <br />
                    {/*  */}
                    <br />
                    <br />
                    <b>Static Back Thoracic and Pelvic Rotation Test </b>(Axial Rotation)
                    <br />
                    <br />
                    <img src={seventh} style={{ width: "25rem", objectFit: "contain" }} />
                    <br />
                    <b>Exercise instruction video:</b>
                    <br />
                    <a
                      href="https://vimeo.com/manage/videos/659184549"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://vimeo.com/manage/videos/659184549
                    </a>
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> Lie on your
                    back with your side or feet or head to the camera, legs up on couch or similar.
                    Knees and hips bent 90 degrees (held by the block or chair or couch) with legs
                    and feet relaxed out. Also relax arms out to the sides.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> Do your shoulders
                    feel as if they are resting evenly on the floor? Do your hips (upper buttocks)
                    feel as if they are resting evenly on the floor? Is your low back arched or flat
                    on the floor? Does your head rest comfortably on the floor and is your neck
                    relaxed in this position? Lastly, do your knees and feet splay outwards evenly
                    from left to right?
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> When you take a
                    deep breath, what moves as you breathe in and out? Your stomach, your chest,
                    your back or your shoulders?
                    <br />
                    {/*  */}
                    <br />
                    <br />
                    <b>IML SI Joint Test</b> (Sacro-Iliac Joint Function, IML Cell Column Central
                    Integrative State)
                    <br />
                    <br />
                    <img src={eigth} style={{ width: "25rem", objectFit: "contain" }} />
                    <br />
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> Lie on your
                    back with your side to the camera and put one leg up on the block (or chair or
                    couch you used for Static Back) resting the leg and foot out on the up/bent leg
                    side. Have a partner hold your other leg out aligned straight down from your
                    shoulders and hips. Have your partner hold your foot up to a comfortable
                    position and ideally to the point where your low back on the side of the
                    straight leg flattens into the ground (usually around 45 degrees up from the hip
                    angle). Now have your partner slowly lower your leg to the point where your low
                    back comes off of the floor. Make a mental note of how high your straight leg
                    was when your low back came off of the floor. Now switch sides with the block
                    and straight leg and do the same.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span> As your straight
                    leg is held up at the 45 degree level, is your low back arched or flat on the
                    floor? If your low back is flat at the 45 degree leg level, and as your straight
                    leg is lowered, at what height of the heel above the ground does the low back
                    arch up from the floor? Now do the same to the other leg and describe the
                    experience as on the first leg, comparing both sides.
                    <br />
                    {/*  */}
                    <br />
                    <br />
                    <b>Cats and Dogs </b>(Spinal Kinetic Chain Integrity)
                    <br />
                    <br />
                    <img src={nigth} style={{ width: "25rem", objectFit: "contain" }} />
                    <br />
                    <b>Exercise instruction video:</b>
                    <br />
                    <a
                      href="https://vimeo.com/manage/videos/503638674"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://vimeo.com/manage/videos/503638674
                    </a>
                    <br />
                    <span style={{ textDecoration: "underline" }}>Instructions:</span> On the floor
                    on your hands and knees with your right side to the camera. Hands right under
                    shoulders, shoulder width apart, straighten your arms and lock out your elbows.
                    Knees right under hips, hip width apart. Make sure that you are standing with
                    even weight on both hands and knees during the entire exercise. Arch your back
                    up and roll your pelvis under (as if pulling an imaginary tail in between the
                    legs), push your shoulder blades apart, head goes down, flex your chin toward
                    your chest. Then relax your stomach, roll your pelvis forward, arching the back
                    down, pinch your shoulder blades together (but not up towards the neck) and look
                    up. Repeat up and down for 10 repetitions.
                    <br />
                    <span style={{ textDecoration: "underline" }}>Remarks:</span>Get a sense of the
                    range of motion of your spine from your head to your buttocks. Does your spine
                    feel like it has a free and comfortable range of motion from flexion (Cat) to
                    extension (Dog)? If not, where does it feel restricted and during what motion?
                    Does your pelvis move with your spine? Do your shoulder blades collapse together
                    as you extend into the Dog position with your spine arched towards the floor? If
                    not, how far apart are your shoulder blades in that position of the Dog?
                    <br />
                    <br />
                    <div style={{ display: "flex", gap: ".3rem" }}>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: "red",
                        }}
                      />
                      <p>
                        <b style={{ textDecoration: "underline" }}>Once you are done recording,</b>
                        click again on the <b style={{ color: "red" }}>Red Stop button</b> (red
                        square inside a red circle) to stop your recording.{" "}
                      </p>
                    </div>
                    <p>
                      Click on your video recording tile in your message thread to check your video
                      and confirm you recorded audio (voice) as well.
                    </p>
                    <p>
                      Submit the video to us by clicking on the{" "}
                      <SendIcon
                        style={{
                          color: "#62c2e8",
                        }}
                      />{" "}
                      button
                    </p>
                    <p>
                      Upload any photos, reports or other document using the{" "}
                      <AttachFileIcon
                        style={{
                          color: "#62c2e8",
                        }}
                      />{" "}
                      attachment button.
                    </p>
                    <br />
                    <p>
                      When your are complete with recording your videos, uploading your comments and
                      photos (optional) and ready to end your session, please click on the
                      <span className="endSession"> End Session</span> bar at the bottom of the
                      screen.
                    </p>
                    <br />
                    <br />
                    <b> Great job!</b> You’re done with your video message. We will reply within{" "}
                    <b>5 business days</b> (usually 2-3 days) with a corresponding video message
                    including the results of our analysis and evaluation and the recommended
                    exercise therapy sequence you will do for the next phase of your therapy. If you
                    do not see a reply video message within <b>5 business days</b>, please contact
                    us to ensure that your message was delivered.
                    <br />
                    <br />
                    Feel free to email (
                    <b style={{ color: "darkblue" }}>admin@buserinstitute.com</b>) or{" "}
                    <b style={{ color: "darkblue" }}>call</b> us for assistance in doing your first
                    Video Message Therapy recording if you are having any technical difficulties.
                    Once you have done it once, it will be like riding a bike and you will have
                    Buser Institute Physiotherapy at your fingertips, anytime and anywhere!
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <b>Part III- Postural Photos (optional, but recommended)</b>
                    <br />
                    We would lastly like to request that you take still <b>Postural Photos</b> to
                    submit with your Video Message. This is optional, but highly recommended. So,
                    please follow the <b style={{ color: "blue" }}>Postural Photo Instructions</b>{" "}
                    and upload your photos using the{" "}
                    <AttachFileIcon
                      style={{
                        color: "#62c2e8",
                      }}
                    />{" "}
                    attachment and{" "}
                    <SendIcon
                      style={{
                        color: "#62c2e8",
                      }}
                    />{" "}
                    submit buttons on this Video Message thread screen.
                    <br />
                    <br />
                    <b> Great job!</b> You’re done with your video message.
                    <br />
                    <br />
                    We will reply within <b>5 business days</b> with a corresponding video message
                    including the results of our analysis and evaluation and the recommended
                    exercise therapy sequence you will do for the next phase of your therapy. If you
                    do not see a reply video message within <b>5 business days</b>, please contact
                    us to ensure that your message was delivered and that we have your contact
                    information correct.
                    <br />
                    <br />
                    Feel free to email (
                    <b style={{ color: "darkblue" }}>admin@buserinstitute.com</b>) or call us for
                    assistance in doing your Video Message Therapy recording and photographs. Once
                    you have done it the first time, it will be like riding a bike and you will have
                    Buser Institute Physiotherapy at your fingertips, anytime and anywhere!
                  </div>
                  <br />
                  <br />
                  <b>Buser Institute Video Messaging Therapy Follow-Up Session</b>
                  <br />
                  <br />
                  <b>For all Client Follow-up Sessions after Session 1</b>
                  <br />
                  <br />
                  <b style={{ color: "red" }}>**Not for first introduction session**</b>
                  <br />
                  <br />
                  <b>Please repeat all of the above in</b>
                  <br />
                  <br />
                  <b>Part I- Pertinent Health History Points to discuss in your Video Message</b>
                  <br />
                  <b>Part II- Functional Tests to demonstrate in your Video Message</b>
                  <br />
                  <b>Part III- Postural Photos (optional, but recommended)</b>
                  <br />
                  <br />
                  <b>And add:</b>
                  <br />
                  <b>Part IV- Physiotherapy Exercise Sequence Review:</b>
                  <br />
                  If you have received an Exercise Therapy Sequence before, please demonstrate
                  setting up each exercise in your last sequence. You do not need to do the entire
                  exercise. We recommend just doing 10 seconds for timed exercises or 10 repetitions
                  (for exercises with sets and repetitions) of that exercise and then moving on to
                  the next. We will give you feedback and tips on how to get more out of each
                  exercise as you alternate with this sequence in the future.
                </p>
              </SoftBox>
            </Box>
          </DialogContent>
        </Grid>
      </SoftBox>
      <Footer />
    </>
  );
}

export default Instruction;

import React from "react";
import { Button, Checkbox, Grid } from "@mui/material";
import left from "../../../../../../assets/images/excercisetool/lefts.png";
import "../style.css";
import PropTypes from "prop-types";

function leftBody({ formik, index }) {
  const values = formik.values.PosturePage;

  return (
    <>
      <img className="lestbodymedia" src={left} height={600} width={190} />
      {/* ears part */}
      <div className="eartopone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].eartopone`}
          value={formik.values?.PosturePage[index]?.eartopone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].eartopone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.eartopone}
        />
      </div>
      <div className="eartoptwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].eartoptwo`}
          value={formik.values?.PosturePage[index]?.eartoptwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].eartoptwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.eartoptwo}
        />
      </div>
      <div className="eartopthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].eartopthree`}
          value={formik.values?.PosturePage[index]?.eartopthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].eartopthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.eartopthree}
        />
      </div>
      <div className="earone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earone`}
          value={formik.values?.PosturePage[index]?.earone}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].earone`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.earone}
        />
      </div>
      <div className="eartwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].eartwo`}
          value={formik.values?.PosturePage[index]?.eartwo}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].eartwo`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.eartwo}
        />
      </div>
      <div className="earthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earthree`}
          value={formik.values?.PosturePage[index]?.earthree}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].earthree`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.earthree}
        />
      </div>
      <div className="earfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earfour`}
          value={formik.values?.PosturePage[index]?.earfour}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].earfour`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.earfour}
        />
      </div>
      <div className="earfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earfive`}
          value={formik.values?.PosturePage[index]?.earfive}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].earfive`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.earfive}
        />
      </div>
      <div className="earsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earsix`}
          value={formik.values?.PosturePage[index]?.earsix}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].earsix`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.earsix}
        />
      </div>
      <div className="earseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earseven`}
          value={formik.values?.PosturePage[index]?.earseven}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].earseven`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.earseven}
        />
      </div>
      <div className="eartopeight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].eartopeight`}
          value={formik.values?.PosturePage[index]?.eartopeight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].eartopeight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.eartopeight}
        />
      </div>
      <div className="earrightone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earrightone`}
          value={formik.values?.PosturePage[index]?.earrightone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].earrightone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.earrightone}
        />
      </div>
      <div className="earrighttwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earrighttwo`}
          value={formik.values?.PosturePage[index]?.earrighttwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].earrighttwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.earrighttwo}
        />
      </div>
      <div className="earrightthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earrightthree`}
          value={formik.values?.PosturePage[index]?.earrightthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].earrightthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.earrightthree}
        />
      </div>
      <div className="earrightfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earrightfour`}
          value={formik.values?.PosturePage[index]?.earrightfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].earrightfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.earrightfour}
        />
      </div>
      <div className="earrightfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earrightfive`}
          value={formik.values?.PosturePage[index]?.earrightfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].earrightfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.earrightfive}
        />
      </div>
      <div className="earrightsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earrightsix`}
          value={formik.values?.PosturePage[index]?.earrightsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].earrightsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.earrightsix}
        />
      </div>
      <div className="earrightseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].earrightseven`}
          value={formik.values?.PosturePage[index]?.earrightseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].earrightseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.earrightseven}
        />
      </div>
      {/* throat */}
      <div className="throatone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].throatone`}
          value={formik.values?.PosturePage[index]?.throatone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].throatone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.throatone}
        />
      </div>
      <div className="throattwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].throattwo`}
          value={formik.values?.PosturePage[index]?.throattwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].throattwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.throattwo}
        />
      </div>

      {/* left body left shoulder part */}
      <div className="leftshoulderone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshoulderone`}
          value={formik.values?.PosturePage[index]?.leftshoulderone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshoulderone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshoulderone}
        />
      </div>
      <div className="leftshouldertwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshouldertwo`}
          value={formik.values?.PosturePage[index]?.leftshouldertwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshouldertwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshouldertwo}
        />
      </div>
      <div className="leftshoulderthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshoulderthree`}
          value={formik.values?.PosturePage[index]?.leftshoulderthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshoulderthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshoulderthree}
        />
      </div>
      <div className="leftshoulderfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshoulderfour`}
          value={formik.values?.PosturePage[index]?.leftshoulderfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshoulderfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshoulderfour}
        />
      </div>
      <div className="leftshoulderfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshoulderfive`}
          value={formik.values?.PosturePage[index]?.leftshoulderfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshoulderfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshoulderfive}
        />
      </div>
      <div className="leftshouldersix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshouldersix`}
          value={formik.values?.PosturePage[index]?.leftshouldersix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshouldersix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshouldersix}
        />
      </div>
      <div className="leftshoulderseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshoulderseven`}
          value={formik.values?.PosturePage[index]?.leftshoulderseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshoulderseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshoulderseven}
        />
      </div>
      <div className="leftshouldereight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshouldereight`}
          value={formik.values?.PosturePage[index]?.leftshouldereight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshouldereight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshouldereight}
        />
      </div>
      <div className="leftshouldernine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshouldernine`}
          value={formik.values?.PosturePage[index]?.leftshouldernine}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshouldernine`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshouldernine}
        />
      </div>
      <div className="leftshoulderten circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshoulderten`}
          value={formik.values?.PosturePage[index]?.leftshoulderten}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshoulderten`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshoulderten}
        />
      </div>
      <div className="leftshouldereleven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshouldereleven`}
          value={formik.values?.PosturePage[index]?.leftshouldereleven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshouldereleven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshouldereleven}
        />
      </div>
      <div className="leftshouldertwleve circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshouldertwleve`}
          value={formik.values?.PosturePage[index]?.leftshouldertwleve}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshouldertwleve`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshouldertwleve}
        />
      </div>
      <div className="leftshoulderithirteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshoulderithirteen`}
          value={formik.values?.PosturePage[index]?.leftshoulderithirteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshoulderithirteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshoulderithirteen}
        />
      </div>
      <div className="leftshoulderfourteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftshoulderfourteen`}
          value={formik.values?.PosturePage[index]?.leftshoulderfourteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftshoulderfourteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftshoulderfourteen}
        />
      </div>

      {/* left body right shoulder part */}
      <div className="rightshoulderone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshoulderone`}
          value={formik.values?.PosturePage[index]?.rightshoulderone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshoulderone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshoulderone}
        />
      </div>
      <div className="rightshouldertwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshouldertwo`}
          value={formik.values?.PosturePage[index]?.rightshouldertwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshouldertwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshouldertwo}
        />
      </div>
      <div className="rightshoulderthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshoulderthree`}
          value={formik.values?.PosturePage[index]?.rightshoulderthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshoulderthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshoulderthree}
        />
      </div>
      <div className="rightshoulderfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshoulderfour`}
          value={formik.values?.PosturePage[index]?.rightshoulderfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshoulderfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshoulderfour}
        />
      </div>
      <div className="rightshoulderfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshoulderfive`}
          value={formik.values?.PosturePage[index]?.rightshoulderfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshoulderfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshoulderfive}
        />
      </div>
      <div className="rightshouldersix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshouldersix`}
          value={formik.values?.PosturePage[index]?.rightshouldersix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshouldersix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshouldersix}
        />
      </div>
      <div className="rightshoulderseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshoulderseven`}
          value={formik.values?.PosturePage[index]?.rightshoulderseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshoulderseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshoulderseven}
        />
      </div>
      <div className="rightshouldereight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshouldereight`}
          value={formik.values?.PosturePage[index]?.rightshouldereight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshouldereight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshouldereight}
        />
      </div>
      <div className="rightshouldernine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshouldernine`}
          value={formik.values?.PosturePage[index]?.rightshouldernine}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshouldernine`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshouldernine}
        />
      </div>
      <div className="rightshoulderten circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshoulderten`}
          value={formik.values?.PosturePage[index]?.rightshoulderten}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshoulderten`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshoulderten}
        />
      </div>
      <div className="rightshouldereleven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshouldereleven`}
          value={formik.values?.PosturePage[index]?.rightshouldereleven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshouldereleven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshouldereleven}
        />
      </div>
      <div className="rightshouldertwleve circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshouldertwleve`}
          value={formik.values?.PosturePage[index]?.rightshouldertwleve}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshouldertwleve`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshouldertwleve}
        />
      </div>
      <div className="rightshoulderithirteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshoulderithirteen`}
          value={formik.values?.PosturePage[index]?.rightshoulderithirteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshoulderithirteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshoulderithirteen}
        />
      </div>
      <div className="rightshoulderfourteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightshoulderfourteen`}
          value={formik.values?.PosturePage[index]?.rightshoulderfourteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightshoulderfourteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightshoulderfourteen}
        />
      </div>
      {/* left arm */}
      <div className="leftarmone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftarmone`}
          value={formik.values?.PosturePage[index]?.leftarmone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftarmone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftarmone}
        />
      </div>
      <div className="leftarmtwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftarmtwo`}
          value={formik.values?.PosturePage[index]?.leftarmtwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftarmtwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftarmtwo}
        />
      </div>

      {/* left body right albow */}
      <div className="righalbowone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righalbowone`}
          value={formik.values?.PosturePage[index]?.righalbowone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righalbowone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righalbowone}
        />
      </div>
      <div className="righalbowtwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righalbowtwo`}
          value={formik.values?.PosturePage[index]?.righalbowtwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righalbowtwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righalbowtwo}
        />
      </div>
      <div className="rightalbowthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightalbowthree`}
          value={formik.values?.PosturePage[index]?.rightalbowthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightalbowthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightalbowthree}
        />
      </div>
      <div className="rightalbowfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightalbowfour`}
          value={formik.values?.PosturePage[index]?.rightalbowfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightalbowfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightalbowfour}
        />
      </div>
      <div className="rightalbowfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightalbowfive`}
          value={formik.values?.PosturePage[index]?.rightalbowfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightalbowfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightalbowfive}
        />
      </div>
      <div className="rightalbowsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightalbowsix`}
          value={formik.values?.PosturePage[index]?.rightalbowsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightalbowsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightalbowsix}
        />
      </div>
      <div className="rightalbowseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightalbowseven`}
          value={formik.values?.PosturePage[index]?.rightalbowseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightalbowseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightalbowseven}
        />
      </div>

      {/* left body left albow */}
      <div className="leftalbowone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftalbowone`}
          value={formik.values?.PosturePage[index]?.leftalbowone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftalbowone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftalbowone}
        />
      </div>
      <div className="leftalbowtwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftalbowtwo`}
          value={formik.values?.PosturePage[index]?.leftalbowtwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftalbowtwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftalbowtwo}
        />
      </div>
      <div className="leftalbowthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftalbowthree`}
          value={formik.values?.PosturePage[index]?.leftalbowthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftalbowthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftalbowthree}
        />
      </div>
      <div className="leftalbowfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftalbowfour`}
          value={formik.values?.PosturePage[index]?.leftalbowfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftalbowfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftalbowfour}
        />
      </div>
      <div className="leftalbowfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftalbowfive`}
          value={formik.values?.PosturePage[index]?.leftalbowfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftalbowfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftalbowfive}
        />
      </div>
      <div className="leftalbowsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftalbowsix`}
          value={formik.values?.PosturePage[index]?.leftalbowsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftalbowsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftalbowsix}
        />
      </div>
      <div className="leftalbowseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftalbowseven`}
          value={formik.values?.PosturePage[index]?.leftalbowseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftalbowseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftalbowseven}
        />
      </div>
      <div className="leftalboweight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftalboweight`}
          value={formik.values?.PosturePage[index]?.leftalboweight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftalboweight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftalboweight}
        />
      </div>
      <div className="leftalbownine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftalbownine`}
          value={formik.values?.PosturePage[index]?.leftalbownine}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftalbownine`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftalbownine}
        />
      </div>

      {/* Left Body left hend */}
      <div className="leftbodyhandone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodyhandone`}
          value={formik.values?.PosturePage[index]?.leftbodyhandone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodyhandone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodyhandone}
        />
      </div>
      <div className="leftbodyhandtwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodyhandtwo`}
          value={formik.values?.PosturePage[index]?.leftbodyhandtwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodyhandtwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodyhandtwo}
        />
      </div>
      <div className="leftbodyhandthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodyhandthree`}
          value={formik.values?.PosturePage[index]?.leftbodyhandthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodyhandthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodyhandthree}
        />
      </div>
      <div className="leftbodyhandfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodyhandfour`}
          value={formik.values?.PosturePage[index]?.leftbodyhandfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodyhandfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodyhandfour}
        />
      </div>
      <div className="leftbodyhandfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodyhandfive`}
          value={formik.values?.PosturePage[index]?.leftbodyhandfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodyhandfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodyhandfive}
        />
      </div>
      <div className="leftbodyhandsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodyhandsix`}
          value={formik.values?.PosturePage[index]?.leftbodyhandsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodyhandsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodyhandsix}
        />
      </div>
      <div className="leftbodyhandseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodyhandseven`}
          value={formik.values?.PosturePage[index]?.leftbodyhandseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodyhandseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodyhandseven}
        />
      </div>

      {/*Left body right hend */}
      <div className="righthandone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthandone`}
          value={formik.values?.PosturePage[index]?.righthandone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthandone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthandone}
        />
      </div>
      <div className="righthandtwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthandtwo`}
          value={formik.values?.PosturePage[index]?.righthandtwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthandtwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthandtwo}
        />
      </div>
      <div className="righthandthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthandthree`}
          value={formik.values?.PosturePage[index]?.righthandthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthandthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthandthree}
        />
      </div>
      <div className="righthandfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthandfour`}
          value={formik.values?.PosturePage[index]?.righthandfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthandfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthandfour}
        />
      </div>
      <div className="righthandfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthandfive`}
          value={formik.values?.PosturePage[index]?.righthandfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthandfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthandfive}
        />
      </div>
      <div className="righthandsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthandsix`}
          value={formik.values?.PosturePage[index]?.righthandsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthandsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthandsix}
        />
      </div>
      <div className="righthandseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthandseven`}
          value={formik.values?.PosturePage[index]?.righthandseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthandseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthandseven}
        />
      </div>
      <div className="righthandeight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthandeight`}
          value={formik.values?.PosturePage[index]?.righthandeight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthandeight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthandeight}
        />
      </div>
      <div className="righthandnine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthandnine`}
          value={formik.values?.PosturePage[index]?.righthandnine}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthandnine`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthandnine}
        />
      </div>

      {/*Left body left hip */}
      <div className="lefthipone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].lefthipone`}
          value={formik.values?.PosturePage[index]?.lefthipone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].lefthipone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.lefthipone}
        />
      </div>
      <div className="lefthiptwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].lefthiptwo`}
          value={formik.values?.PosturePage[index]?.lefthiptwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].lefthiptwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.lefthiptwo}
        />
      </div>
      <div className="lefthipthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].lefthipthree`}
          value={formik.values?.PosturePage[index]?.lefthipthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].lefthipthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.lefthipthree}
        />
      </div>
      <div className="lefthipfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].lefthipfour`}
          value={formik.values?.PosturePage[index]?.lefthipfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].lefthipfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.lefthipfour}
        />
      </div>
      <div className="lefthipfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].lefthipfive`}
          value={formik.values?.PosturePage[index]?.lefthipfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].lefthipfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.lefthipfive}
        />
      </div>
      <div className="lefthipsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].lefthipsix`}
          value={formik.values?.PosturePage[index]?.lefthipsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].lefthipsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.lefthipsix}
        />
      </div>
      <div className="lefthipseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].lefthipseven`}
          value={formik.values?.PosturePage[index]?.lefthipseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].lefthipseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.lefthipseven}
        />
      </div>

      {/*Left body Right hip */}
      <div className="righthipone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthipone`}
          value={formik.values?.PosturePage[index]?.righthipone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthipone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthipone}
        />
      </div>
      <div className="righthiptwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthiptwo`}
          value={formik.values?.PosturePage[index]?.righthiptwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthiptwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthiptwo}
        />
      </div>
      <div className="righthipthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthipthree`}
          value={formik.values?.PosturePage[index]?.righthipthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthipthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthipthree}
        />
      </div>
      <div className="righthipfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthipfour`}
          value={formik.values?.PosturePage[index]?.righthipfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthipfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthipfour}
        />
      </div>
      <div className="righthipfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthipfive`}
          value={formik.values?.PosturePage[index]?.righthipfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthipfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthipfive}
        />
      </div>
      <div className="righthipsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthipsix`}
          value={formik.values?.PosturePage[index]?.righthipsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthipsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthipsix}
        />
      </div>
      <div className="righthipseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righthipseven`}
          value={formik.values?.PosturePage[index]?.righthipseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righthipseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righthipseven}
        />
      </div>

      {/* Left body left knee     */}

      <div className="leftkneeone1 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftkneeone1`}
          value={formik.values?.PosturePage[index]?.leftkneeone1}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftkneeone1`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftkneeone1}
        />
      </div>
      <div className="leftkneetwo2 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftkneetwo2`}
          value={formik.values?.PosturePage[index]?.leftkneetwo2}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftkneetwo2`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftkneetwo2}
        />
      </div>
      <div className="leftkneethree3 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftkneethree3`}
          value={formik.values?.PosturePage[index]?.leftkneethree3}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftkneethree3`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftkneethree3}
        />
      </div>
      <div className="leftkneefour4 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftkneefour4`}
          value={formik.values?.PosturePage[index]?.leftkneefour4}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftkneefour4`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftkneefour4}
        />
      </div>
      <div className="leftkneefive5 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftkneefive5`}
          value={formik.values?.PosturePage[index]?.leftkneefive5}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftkneefive5`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftkneefive5}
        />
      </div>
      <div className="leftkneesix6 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftkneesix6`}
          value={formik.values?.PosturePage[index]?.leftkneesix6}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftkneesix6`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftkneesix6}
        />
      </div>
      <div className="leftkneeseven7 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftkneeseven7`}
          value={formik.values?.PosturePage[index]?.leftkneeseven7}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftkneeseven7`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftkneeseven7}
        />
      </div>

      {/* left body right knee     */}

      <div className="rightkneeone1 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightkneeone1`}
          value={formik.values?.PosturePage[index]?.rightkneeone1}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightkneeone1`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightkneeone1}
        />
      </div>
      <div className="rightkneetwo2 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightkneetwo2`}
          value={formik.values?.PosturePage[index]?.rightkneetwo2}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightkneetwo2`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightkneetwo2}
        />
      </div>
      <div className="rightkneethree3 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightkneethree3`}
          value={formik.values?.PosturePage[index]?.rightkneethree3}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightkneethree3`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightkneethree3}
        />
      </div>
      <div className="rightkneefour4 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightkneefour4`}
          value={formik.values?.PosturePage[index]?.rightkneefour4}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightkneefour4`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightkneefour4}
        />
      </div>
      <div className="rightkneefive5 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightkneefive5`}
          value={formik.values?.PosturePage[index]?.rightkneefive5}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightkneefive5`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightkneefive5}
        />
      </div>
      <div className="rightkneesix6 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightkneesix6`}
          value={formik.values?.PosturePage[index]?.rightkneesix6}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightkneesix6`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightkneesix6}
        />
      </div>
      <div className="rightkneeseven7 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightkneeseven7`}
          value={formik.values?.PosturePage[index]?.rightkneeseven7}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightkneeseven7`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightkneeseven7}
        />
      </div>

      {/*Left body left ankle */}

      <div className="leftankleone1 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftankleone1`}
          value={formik.values?.PosturePage[index]?.leftankleone1}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftankleone1`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftankleone1}
        />
      </div>
      <div className="leftankletwo2 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftankletwo2`}
          value={formik.values?.PosturePage[index]?.leftankletwo2}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftankletwo2`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftankletwo2}
        />
      </div>
      <div className="leftanklethree3 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftanklethree3`}
          value={formik.values?.PosturePage[index]?.leftanklethree3}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftanklethree3`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftanklethree}
        />
      </div>
      <div className="leftanklefour4 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftanklefour4`}
          value={formik.values?.PosturePage[index]?.leftanklefour4}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftanklefour4`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftanklefour4}
        />
      </div>
      <div className="leftanklefive5 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftanklefive5`}
          value={formik.values?.PosturePage[index]?.leftanklefive5}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftanklefive5`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftanklefive5}
        />
      </div>
      <div className="leftanklesix6 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftanklesix6`}
          value={formik.values?.PosturePage[index]?.leftanklesix6}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftanklesix6`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftanklesix6}
        />
      </div>
      <div className="leftankleseven7 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftankleseven7`}
          value={formik.values?.PosturePage[index]?.leftankleseven7}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftankleseven7`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftankleseven}
        />
      </div>

      {/*Left body Right ankle */}

      <div className="rightankleone1 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightankleone1`}
          value={formik.values?.PosturePage[index]?.rightankleone1}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightankleone1`, e.target.checked1)
          }
          checked={formik.values?.PosturePage[index]?.rightankleone1}
        />
      </div>
      <div className="rightankletwo2 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightankletwo2`}
          value={formik.values?.PosturePage[index]?.rightankletwo2}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightankletwo2`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightankletwo2}
        />
      </div>
      <div className="rightanklethree3 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightanklethree3`}
          value={formik.values?.PosturePage[index]?.rightanklethree3}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightanklethree3`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightanklethree3}
        />
      </div>
      <div className="rightanklefour4 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightanklefour4`}
          value={formik.values?.PosturePage[index]?.rightanklefour4}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightanklefour4`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightanklefour4}
        />
      </div>
      <div className="rightanklefive5 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightanklefive5`}
          value={formik.values?.PosturePage[index]?.rightanklefive5}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightanklefive5`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightanklefive5}
        />
      </div>
      <div className="rightanklesix6 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightanklesix6`}
          value={formik.values?.PosturePage[index]?.rightanklesix6}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightanklesix6`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightanklesix6}
        />
      </div>
      <div className="rightankleseven7 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightankleseven7`}
          value={formik.values?.PosturePage[index]?.rightankleseven7}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightankleseven7`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightankleseven}
        />
      </div>

      {/* Left Body finger */}
      <div className="leftbodyfingerone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodyfingerone`}
          value={formik.values?.PosturePage[index]?.leftbodyfingerone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodyfingerone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodyfingerone}
        />
      </div>
      <div className="leftbodyfingertwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodyfingertwo`}
          value={formik.values?.PosturePage[index]?.leftbodyfingertwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodyfingertwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodyfingertwo}
        />
      </div>

      {/* Left Body Sole */}
      <div className="leftbodysoleone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodysoleone`}
          value={formik.values?.PosturePage[index]?.leftbodysoleone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodysoleone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodysoleone}
        />
      </div>
      <div className="leftbodysoletwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].leftbodysoletwo`}
          value={formik.values?.PosturePage[index]?.leftbodysoletwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].leftbodysoletwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.leftbodysoletwo}
        />
      </div>
    </>
  );
}
leftBody.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default leftBody;

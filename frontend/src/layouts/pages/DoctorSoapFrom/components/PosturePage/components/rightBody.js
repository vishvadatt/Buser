import React from "react";
import { Button, Checkbox, Grid } from "@mui/material";
import right from "../../../../../../assets/images/excercisetool/rights.png";
import PropTypes from "prop-types";
import "../style.css";

function rightBody({ formik, index }) {
  return (
    <>
      <img className="rightbodymedia" src={right} height={600} width={190} />

      {/*Right ears part */}
      <div className="righteartopone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righteartopone`}
          value={formik.values?.PosturePage[index]?.righteartopone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righteartopone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righteartopone}
        />
      </div>
      <div className="righteartoptwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righteartoptwo`}
          value={formik.values?.PosturePage[index]?.righteartoptwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righteartoptwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righteartoptwo}
        />
      </div>
      <div className="righteartopthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].righteartopthree`}
          value={formik.values?.PosturePage[index]?.righteartopthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].righteartopthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.righteartopthree}
        />
      </div>
      <div className="rightbodyearone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyearone`}
          value={formik.values?.PosturePage[index]?.rightbodyearone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyearone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyearone}
        />
      </div>
      <div className="rightbodyeartwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyeartwo`}
          value={formik.values?.PosturePage[index]?.rightbodyeartwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyeartwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyeartwo}
        />
      </div>
      <div className="rightbodyearthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyearthree`}
          value={formik.values?.PosturePage[index]?.rightbodyearthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyearthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyearthree}
        />
      </div>
      <div className="rightbodyearfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyearfour`}
          value={formik.values?.PosturePage[index]?.rightbodyearfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyearfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyearfour}
        />
      </div>
      <div className="rightbodyearfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyearfive`}
          value={formik.values?.PosturePage[index]?.rightbodyearfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyearfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyearfive}
        />
      </div>
      <div className="rightbodyearsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyearsix`}
          value={formik.values?.PosturePage[index]?.rightbodyearsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyearsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyearsix}
        />
      </div>
      <div className="rightbodyearseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyearseven`}
          value={formik.values?.PosturePage[index]?.rightbodyearseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyearseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyearseven}
        />
      </div>

      <div className="rightbodyleftearone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftearone`}
          value={formik.values?.PosturePage[index]?.rightbodyleftearone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftearone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftearone}
        />
      </div>
      <div className="rightbodylefteartwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodylefteartwo`}
          value={formik.values?.PosturePage[index]?.rightbodylefteartwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodylefteartwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodylefteartwo}
        />
      </div>
      <div className="rightbodyleftearthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftearthree`}
          value={formik.values?.PosturePage[index]?.rightbodyleftearthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftearthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftearthree}
        />
      </div>
      <div className="rightbodyleftearfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftearfour`}
          value={formik.values?.PosturePage[index]?.rightbodyleftearfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftearfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftearfour}
        />
      </div>
      <div className="rightbodyleftearfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftearfive`}
          value={formik.values?.PosturePage[index]?.rightbodyleftearfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftearfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftearfive}
        />
      </div>
      <div className="rightbodyleftearsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftearsix`}
          value={formik.values?.PosturePage[index]?.rightbodyleftearsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftearsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftearsix}
        />
      </div>
      <div className="rightbodyleftearseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftearseven`}
          value={formik.values?.PosturePage[index]?.rightbodyleftearseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftearseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftearseven}
        />
      </div>

      {/* Right neck */}

      <div className="rightneckone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightneckone`}
          value={formik.values?.PosturePage[index]?.rightneckone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightneckone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightneckone}
        />
      </div>
      <div className="rightnecktwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightnecktwo`}
          value={formik.values?.PosturePage[index]?.rightnecktwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightnecktwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightnecktwo}
        />
      </div>

      {/* Right sholder  */}

      <div className="rightsholderone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholderone`}
          value={formik.values?.PosturePage[index]?.rightsholderone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholderone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholderone}
        />
      </div>
      <div className="rightsholdertwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholdertwo`}
          value={formik.values?.PosturePage[index]?.rightsholdertwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholdertwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholdertwo}
        />
      </div>
      <div className="rightsholderthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholderthree`}
          value={formik.values?.PosturePage[index]?.rightsholderthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholderthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholderthree}
        />
      </div>
      <div className="rightsholderfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholderfour`}
          value={formik.values?.PosturePage[index]?.rightsholderfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholderfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholderfour}
        />
      </div>
      <div className="rightsholderfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholderfive`}
          value={formik.values?.PosturePage[index]?.rightsholderfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholderfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholderfive}
        />
      </div>
      <div className="rightsholdersix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholdersix`}
          value={formik.values?.PosturePage[index]?.rightsholdersix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholdersix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholdersix}
        />
      </div>
      <div className="rightsholderseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholderseven`}
          value={formik.values?.PosturePage[index]?.rightsholderseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholderseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholderseven}
        />
      </div>
      <div className="rightsholdereight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholdereight`}
          value={formik.values?.PosturePage[index]?.rightsholdereight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholdereight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholdereight}
        />
      </div>
      <div className="rightsholdernine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholdernine`}
          value={formik.values?.PosturePage[index]?.rightsholdernine}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholdernine`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholdernine}
        />
      </div>
      <div className="rightsholderten circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholderten`}
          value={formik.values?.PosturePage[index]?.rightsholderten}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholderten`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholderten}
        />
      </div>
      <div className="rightsholdereleven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholdereleven`}
          value={formik.values?.PosturePage[index]?.rightsholdereleven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholdereleven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholdereleven}
        />
      </div>
      <div className="rightsholdertwelve circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholdertwelve`}
          value={formik.values?.PosturePage[index]?.rightsholdertwelve}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholdertwelve`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholdertwelve}
        />
      </div>
      <div className="rightsholdertherteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholdertherteen`}
          value={formik.values?.PosturePage[index]?.rightsholdertherteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholdertherteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholdertherteen}
        />
      </div>
      <div className="rightsholderfourteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightsholderfourteen`}
          value={formik.values?.PosturePage[index]?.rightsholderfourteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightsholderfourteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightsholderfourteen}
        />
      </div>

      {/* Right leftsholder  */}
      <div className="rightbodyleftsholderone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholderone`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholderone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftsholderone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholderone}
        />
      </div>
      <div className="rightbodyleftsholdertwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholdertwo`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholdertwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftsholdertwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholdertwo}
        />
      </div>
      <div className="rightbodyleftsholderthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholderthree`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholderthree}
          onChange={(e) =>
            formik.setFieldValue(
              `PosturePage[${index}].rightbodyleftsholderthree`,
              e.target.checked
            )
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholderthree}
        />
      </div>
      <div className="rightbodyleftsholderfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholderfour`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholderfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftsholderfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholderfour}
        />
      </div>
      <div className="rightbodyleftsholderfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholderfive`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholderfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftsholderfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholderfive}
        />
      </div>
      <div className="rightbodyleftsholdersix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholdersix`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholdersix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftsholdersix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholdersix}
        />
      </div>
      <div className="rightbodyleftsholderseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholderseven`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholderseven}
          onChange={(e) =>
            formik.setFieldValue(
              `PosturePage[${index}].rightbodyleftsholderseven`,
              e.target.checked
            )
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholderseven}
        />
      </div>
      <div className="rightbodyleftsholdereight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholdereight`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholdereight}
          onChange={(e) =>
            formik.setFieldValue(
              `PosturePage[${index}].rightbodyleftsholdereight`,
              e.target.checked
            )
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholdereight}
        />
      </div>
      <div className="rightbodyleftsholdernine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholdernine`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholdernine}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftsholdernine`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholdernine}
        />
      </div>
      <div className="rightbodyleftsholderten circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholderten`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholderten}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyleftsholderten`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholderten}
        />
      </div>
      <div className="rightbodyleftsholdereleven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholdereleven`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholdereleven}
          onChange={(e) =>
            formik.setFieldValue(
              `PosturePage[${index}].rightbodyleftsholdereleven`,
              e.target.checked
            )
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholdereleven}
        />
      </div>
      <div className="rightbodyleftsholdertwelve circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholdertwelve`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholdertwelve}
          onChange={(e) =>
            formik.setFieldValue(
              `PosturePage[${index}].rightbodyleftsholdertwelve`,
              e.target.checked
            )
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholdertwelve}
        />
      </div>
      <div className="rightbodyleftsholdertherteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholdertherteen`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholdertherteen}
          onChange={(e) =>
            formik.setFieldValue(
              `PosturePage[${index}].rightbodyleftsholdertherteen`,
              e.target.checked
            )
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholdertherteen}
        />
      </div>
      <div className="rightbodyleftsholderfourteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyleftsholderfourteen`}
          value={formik.values?.PosturePage[index]?.rightbodyleftsholderfourteen}
          onChange={(e) =>
            formik.setFieldValue(
              `PosturePage[${index}].rightbodyleftsholderfourteen`,
              e.target.checked
            )
          }
          checked={formik.values?.PosturePage[index]?.rightbodyleftsholderfourteen}
        />
      </div>

      {/* Right arm */}
      <div className="armone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].armone`}
          value={formik.values?.PosturePage[index]?.armone}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].armone`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.armone}
        />
      </div>
      <div className="armtwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].armtwo`}
          value={formik.values?.PosturePage[index]?.armtwo}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].armtwo`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.armtwo}
        />
      </div>

      {/* Right albow */}
      <div className="rightbodyalbowone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowone`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowone}
        />
      </div>
      <div className="rightbodyalbowtwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowtwo`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowtwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowtwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowtwo}
        />
      </div>
      <div className="rightbodyalbowthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowthree`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowthree}
        />
      </div>
      <div className="rightbodyalbowfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowfour`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowfour}
        />
      </div>
      <div className="rightbodyalbowfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowfive`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowfive}
        />
      </div>
      <div className="rightbodyalbowsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowsix`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowsix}
        />
      </div>
      <div className="rightbodyalbowseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowseven`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowseven}
        />
      </div>
      <div className="rightbodyalboweight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalboweight`}
          value={formik.values?.PosturePage[index]?.rightbodyalboweight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalboweight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalboweight}
        />
      </div>
      <div className="rightbodyalbownine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbownine`}
          value={formik.values?.PosturePage[index]?.rightbodyalbownine}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbownine`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbownine}
        />
      </div>
      <div className="rightbodyalbowten circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowten`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowten}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowten`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowten}
        />
      </div>
      <div className="rightbodyalboweleven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalboweleven`}
          value={formik.values?.PosturePage[index]?.rightbodyalboweleven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalboweleven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalboweleven}
        />
      </div>
      <div className="rightbodyalbowtweleve circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowtweleve`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowtweleve}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowtweleve`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowtweleve}
        />
      </div>
      <div className="rightbodyalbowtherteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowtherteen`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowtherteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowtherteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowtherteen}
        />
      </div>
      <div className="rightbodyalbowfourteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowfourteen`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowfourteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowfourteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowfourteen}
        />
      </div>
      <div className="rightbodyalbowfifteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowfifteen`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowfifteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowfifteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowfifteen}
        />
      </div>
      <div className="rightbodyalbowsixteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyalbowsixteen`}
          value={formik.values?.PosturePage[index]?.rightbodyalbowsixteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyalbowsixteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyalbowsixteen}
        />
      </div>

      {/* Right body hand */}
      <div className="rightbodyhandone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandone`}
          value={formik.values?.PosturePage[index]?.rightbodyhandone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandone}
        />
      </div>
      <div className="rightbodyhandtwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandtwo`}
          value={formik.values?.PosturePage[index]?.rightbodyhandtwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandtwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandtwo}
        />
      </div>
      <div className="rightbodyhandthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandthree`}
          value={formik.values?.PosturePage[index]?.rightbodyhandthree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandthree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandthree}
        />
      </div>
      <div className="rightbodyhandfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandfour`}
          value={formik.values?.PosturePage[index]?.rightbodyhandfour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandfour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandfour}
        />
      </div>
      <div className="rightbodyhandfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandfive`}
          value={formik.values?.PosturePage[index]?.rightbodyhandfive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandfive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandfive}
        />
      </div>
      <div className="rightbodyhandsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandsix`}
          value={formik.values?.PosturePage[index]?.rightbodyhandsix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandsix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandsix}
        />
      </div>
      <div className="rightbodyhandseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandseven`}
          value={formik.values?.PosturePage[index]?.rightbodyhandseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandseven}
        />
      </div>
      <div className="rightbodyhandeight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandeight`}
          value={formik.values?.PosturePage[index]?.rightbodyhandeight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandeight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandeight}
        />
      </div>
      <div className="rightbodyhandnine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandnine`}
          value={formik.values?.PosturePage[index]?.rightbodyhandnine}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandnine`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandnine}
        />
      </div>
      <div className="rightbodyhandten circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandten`}
          value={formik.values?.PosturePage[index]?.rightbodyhandten}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandten`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandten}
        />
      </div>
      <div className="rightbodyhandeleven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandeleven`}
          value={formik.values?.PosturePage[index]?.rightbodyhandeleven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandeleven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandeleven}
        />
      </div>
      <div className="rightbodyhandtwelve circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandtwelve`}
          value={formik.values?.PosturePage[index]?.rightbodyhandtwelve}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandtwelve`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandtwelve}
        />
      </div>
      <div className="rightbodyhandtherteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandtherteen`}
          value={formik.values?.PosturePage[index]?.rightbodyhandtherteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandtherteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandtherteen}
        />
      </div>
      <div className="rightbodyhandfourteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandfourteen`}
          value={formik.values?.PosturePage[index]?.rightbodyhandfourteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandfourteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandfourteen}
        />
      </div>
      <div className="rightbodyhandfiftineen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandfiftineen`}
          value={formik.values?.PosturePage[index]?.rightbodyhandfiftineen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandfiftineen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandfiftineen}
        />
      </div>
      <div className="rightbodyhandsixteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].rightbodyhandsixteen`}
          value={formik.values?.PosturePage[index]?.rightbodyhandsixteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].rightbodyhandsixteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.rightbodyhandsixteen}
        />
      </div>

      {/* Right body hip */}

      <div className="hipone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipone`}
          value={formik.values?.PosturePage[index]?.hipone}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hipone`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hipone}
        />
      </div>
      <div className="hiptwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hiptwo`}
          value={formik.values?.PosturePage[index]?.hiptwo}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hiptwo`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hiptwo}
        />
      </div>
      <div className="hipthree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipthree`}
          value={formik.values?.PosturePage[index]?.hipthree}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hipthree`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hipthree}
        />
      </div>
      <div className="hipfour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipfour`}
          value={formik.values?.PosturePage[index]?.hipfour}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hipfour`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hipfour}
        />
      </div>
      <div className="hipfive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipfive`}
          value={formik.values?.PosturePage[index]?.hipfive}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hipfive`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hipfive}
        />
      </div>
      <div className="hipsix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipsix`}
          value={formik.values?.PosturePage[index]?.hipsix}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hipsix`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hipsix}
        />
      </div>
      <div className="hipseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipseven`}
          value={formik.values?.PosturePage[index]?.hipseven}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hipseven`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hipseven}
        />
      </div>
      <div className="hipeight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipeight`}
          value={formik.values?.PosturePage[index]?.hipeight}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hipeight`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hipeight}
        />
      </div>
      <div className="hipnine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipnine`}
          value={formik.values?.PosturePage[index]?.hipnine}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hipnine`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hipnine}
        />
      </div>
      <div className="hipten circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipten`}
          value={formik.values?.PosturePage[index]?.hipten}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].hipten`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.hipten}
        />
      </div>
      <div className="hipeleven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipeleven`}
          value={formik.values?.PosturePage[index]?.hipeleven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].hipeleven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.hipeleven}
        />
      </div>
      <div className="hiptwelve circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hiptwelve`}
          value={formik.values?.PosturePage[index]?.hiptwelve}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].hiptwelve`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.hiptwelve}
        />
      </div>
      <div className="hiptherteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hiptherteen`}
          value={formik.values?.PosturePage[index]?.hiptherteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].hiptherteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.hiptherteen}
        />
      </div>
      <div className="hipfourteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].hipfourteen`}
          value={formik.values?.PosturePage[index]?.hipfourteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].hipfourteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.hipfourteen}
        />
      </div>

      {/* Right Body knee */}

      <div className="kneeone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneeone`}
          value={formik.values?.PosturePage[index]?.kneeone}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].kneeone`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.kneeone}
        />
      </div>
      <div className="kneetwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneetwo`}
          value={formik.values?.PosturePage[index]?.kneetwo}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].kneetwo`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.kneetwo}
        />
      </div>
      <div className="kneethree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneethree`}
          value={formik.values?.PosturePage[index]?.kneethree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].kneethree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.kneethree}
        />
      </div>
      <div className="kneefour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneefour`}
          value={formik.values?.PosturePage[index]?.kneefour}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].kneefour`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.kneefour}
        />
      </div>
      <div className="kneefive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneefive`}
          value={formik.values?.PosturePage[index]?.kneefive}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].kneefive`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.kneefive}
        />
      </div>
      <div className="kneesix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneesix`}
          value={formik.values?.PosturePage[index]?.kneesix}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].kneesix`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.kneesix}
        />
      </div>
      <div className="kneeseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneeseven`}
          value={formik.values?.PosturePage[index]?.kneeseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].kneeseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.kneeseven}
        />
      </div>
      <div className="kneeeight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneeeight`}
          value={formik.values?.PosturePage[index]?.kneeeight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].kneeeight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.kneeeight}
        />
      </div>
      <div className="kneenine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneenine`}
          value={formik.values?.PosturePage[index]?.kneenine}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].kneenine`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.kneenine}
        />
      </div>
      <div className="kneeten circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneeten`}
          value={formik.values?.PosturePage[index]?.kneeten}
          onChange={(e) => formik.setFieldValue(`PosturePage[${index}].kneeten`, e.target.checked)}
          checked={formik.values?.PosturePage[index]?.kneeten}
        />
      </div>
      <div className="kneeeleven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneeeleven`}
          value={formik.values?.PosturePage[index]?.kneeeleven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].kneeeleven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.kneeeleven}
        />
      </div>
      <div className="kneetwelve circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneetwelve`}
          value={formik.values?.PosturePage[index]?.kneetwelve}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].kneetwelve`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.kneetwelve}
        />
      </div>
      <div className="kneetherteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneetherteen`}
          value={formik.values?.PosturePage[index]?.kneetherteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].kneetherteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.kneetherteen}
        />
      </div>
      <div className="kneefourteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].kneefourteen`}
          value={formik.values?.PosturePage[index]?.kneefourteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].kneefourteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.kneefourteen}
        />
      </div>

      {/* Right Body ankle */}
      <div className="Rightbodyankleone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyankleone`}
          value={formik.values?.PosturePage[index]?.Rightbodyankleone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyankleone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyankleone}
        />
      </div>
      <div className="Rightbodyankletwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyankletwo`}
          value={formik.values?.PosturePage[index]?.Rightbodyankletwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyankletwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyankletwo}
        />
      </div>
      <div className="Rightbodyanklethree circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyanklethree`}
          value={formik.values?.PosturePage[index]?.Rightbodyanklethree}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyanklethree`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyanklethree}
        />
      </div>
      <div className="Rightbodyanklefour circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyanklefour`}
          value={formik.values?.PosturePage[index]?.Rightbodyanklefour}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyanklefour`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyanklefour}
        />
      </div>
      <div className="Rightbodyanklefive circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyanklefive`}
          value={formik.values?.PosturePage[index]?.Rightbodyanklefive}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyanklefive`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyanklefive}
        />
      </div>
      <div className="Rightbodyanklesix circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyanklesix`}
          value={formik.values?.PosturePage[index]?.Rightbodyanklesix}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyanklesix`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyanklesix}
        />
      </div>
      <div className="Rightbodyankleseven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyankleseven`}
          value={formik.values?.PosturePage[index]?.Rightbodyankleseven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyankleseven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyankleseven}
        />
      </div>
      <div className="Rightbodyankleeight circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyankleeight`}
          value={formik.values?.PosturePage[index]?.Rightbodyankleeight}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyankleeight`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyankleeight}
        />
      </div>
      <div className="Rightbodyanklenine circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyanklenine`}
          value={formik.values?.PosturePage[index]?.Rightbodyanklenine}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyanklenine`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyanklenine}
        />
      </div>
      <div className="Rightbodyankleten circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyankleten`}
          value={formik.values?.PosturePage[index]?.Rightbodyankleten}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyankleten`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyankleten}
        />
      </div>
      <div className="Rightbodyankleeleven circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyankleeleven`}
          value={formik.values?.PosturePage[index]?.Rightbodyankleeleven}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyankleeleven`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyankleeleven}
        />
      </div>
      <div className="Rightbodyankletwelve circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyankletwelve`}
          value={formik.values?.PosturePage[index]?.Rightbodyankletwelve}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyankletwelve`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyankletwelve}
        />
      </div>
      <div className="Rightbodyankletherteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyankletherteen`}
          value={formik.values?.PosturePage[index]?.Rightbodyankletherteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyankletherteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyankletherteen}
        />
      </div>
      <div className="Rightbodyanklefourteen circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightbodyanklefourteen`}
          value={formik.values?.PosturePage[index]?.Rightbodyanklefourteen}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightbodyanklefourteen`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightbodyanklefourteen}
        />
      </div>

      {/* right finger */}
      <div className="Rightfingerone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightfingerone`}
          value={formik.values?.PosturePage[index]?.Rightfingerone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightfingerone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightfingerone}
        />
      </div>
      <div className="Rightfingertwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightfingertwo`}
          value={formik.values?.PosturePage[index]?.Rightfingertwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightfingertwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightfingertwo}
        />
      </div>

      {/* Right sole */}
      <div className="Rightsoleone circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightsoleone`}
          value={formik.values?.PosturePage[index]?.Rightsoleone}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightsoleone`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightsoleone}
        />
      </div>
      <div className="Rightsoletwo circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].Rightsoletwo`}
          value={formik.values?.PosturePage[index]?.Rightsoletwo}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].Rightsoletwo`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.Rightsoletwo}
        />
      </div>
    </>
  );
}
rightBody.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default rightBody;

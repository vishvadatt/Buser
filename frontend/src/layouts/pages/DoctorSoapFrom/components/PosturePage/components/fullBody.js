import React from "react";
import { Button, Checkbox, Grid } from "@mui/material";
import front from "../../../../../../assets/images/excercisetool/fullbodys.png";
import "../style.css";
import PropTypes from "prop-types";

function fullBody({ formik, index }) {
  const values = formik.values.PosturePage;

  return (
    <>
      <div className="container">
        <img className="fullboddyy" src={front} height={600} width={280} />
        {/* ear part */}
        <div className="lefteartop circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].lefteartop`}
            value={formik.values?.PosturePage[index]?.lefteartop}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefteartop`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefteartop}
          />
        </div>
        <div className="leftearbottom circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftearbottom`}
            value={formik.values?.PosturePage[index]?.leftearbottom}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftearbottom`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftearbottom}
          />
        </div>
        <div className="righteartop circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].righteartop`}
            value={formik.values?.PosturePage[index]?.righteartop}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].righteartop`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.righteartop}
          />
        </div>
        <div className="rightearbottom circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightearbottom`}
            value={formik.values?.PosturePage[index]?.rightearbottom}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightearbottom`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightearbottom}
          />
        </div>
        {/* beard */}
        <div className="beardone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].beardone`}
            value={formik.values?.PosturePage[index]?.beardone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].beardone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.beardone}
          />
        </div>
        <div className="beardtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].beardtwo`}
            value={formik.values?.PosturePage[index]?.beardtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].beardtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.beardtwo}
          />
        </div>
        <div className="beardthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].beardthree`}
            value={formik.values?.PosturePage[index]?.beardthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].beardthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.beardthree}
          />
        </div>
        <div className="beardfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].beardfour`}
            value={formik.values?.PosturePage[index]?.beardfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].beardfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.beardfour}
          />
        </div>
        <div className="bearfive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].bearfive`}
            value={formik.values?.PosturePage[index]?.bearfive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].bearfive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.bearfive}
          />
        </div>
        <div className="bearsix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].bearsix`}
            value={formik.values?.PosturePage[index]?.bearsix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].bearsix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.bearsix}
          />
        </div>
        {/* thorat */}
        <div className="thoratone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].thoratone`}
            value={formik.values?.PosturePage[index]?.thoratone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].thoratone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.thoratone}
          />
        </div>
        <div className="thorattwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].thorattwo`}
            value={formik.values?.PosturePage[index]?.thorattwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].thorattwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.thorattwo}
          />
        </div>
        {/* sholder Left */}
        <div className="sholdertopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].sholdertopone`}
            value={formik.values?.PosturePage[index]?.sholdertopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].sholdertopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.sholdertopone}
          />
        </div>
        <div className="sholdertoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].sholdertoptwo`}
            value={formik.values?.PosturePage[index]?.sholdertoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].sholdertoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.sholdertoptwo}
          />
        </div>
        <div className="shoulderone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderone`}
            value={formik.values?.PosturePage[index]?.shoulderone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderone}
          />
        </div>
        <div className="shouldertwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shouldertwo`}
            value={formik.values?.PosturePage[index]?.shouldertwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shouldertwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shouldertwo}
          />
        </div>
        <div className="shoulderthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderthree`}
            value={formik.values?.PosturePage[index]?.shoulderthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderthree}
          />
        </div>
        <div className="shoulderfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderfour`}
            value={formik.values?.PosturePage[index]?.shoulderfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderfour}
          />
        </div>
        <div className="shoulderfive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderfive`}
            value={formik.values?.PosturePage[index]?.shoulderfive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderfive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderfive}
          />
        </div>
        <div className="shouldersix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shouldersix`}
            value={formik.values?.PosturePage[index]?.shouldersix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shouldersix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shouldersix}
          />
        </div>
        <div className="shoulderbottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderbottomone`}
            value={formik.values?.PosturePage[index]?.shoulderbottomone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderbottomone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderbottomone}
          />
        </div>
        <div className="shoulderbottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderbottomtwo`}
            value={formik.values?.PosturePage[index]?.shoulderbottomtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderbottomtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderbottomtwo}
          />
        </div>
        {/* shouldermiddle */}
        <div className="shouldermiddleone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shouldermiddleone`}
            value={formik.values?.PosturePage[index]?.shouldermiddleone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shouldermiddleone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shouldermiddleone}
          />
        </div>
        <div className="shouldermiddletwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shouldermiddletwo`}
            value={formik.values?.PosturePage[index]?.shouldermiddletwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shouldermiddletwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shouldermiddletwo}
          />
        </div>
        <div className="shouldermiddlethree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shouldermiddlethree`}
            value={formik.values?.PosturePage[index]?.shouldermiddlethree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shouldermiddlethree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shouldermiddlethree}
          />
        </div>
        <div className="shouldermiddlefour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shouldermiddlefour`}
            value={formik.values?.PosturePage[index]?.shouldermiddlefour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shouldermiddlefour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shouldermiddlefour}
          />
        </div>
        <div className="shouldermiddlefive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shouldermiddlefive`}
            value={formik.values?.PosturePage[index]?.shouldermiddlefive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shouldermiddlefive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shouldermiddlefive}
          />
        </div>
        <div className="shouldermiddlesix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shouldermiddlesix`}
            value={formik.values?.PosturePage[index]?.shouldermiddlesix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shouldermiddlesix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shouldermiddlesix}
          />
        </div>
        {/* shoulderRight */}
        <div className="shoulderrighttopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrighttopone`}
            value={formik.values?.PosturePage[index]?.shoulderrighttopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrighttopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrighttopone}
          />
        </div>
        <div className="shoulderrighttoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrighttoptwo`}
            value={formik.values?.PosturePage[index]?.shoulderrighttoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrighttoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrighttoptwo}
          />
        </div>
        <div className="shoulderrightone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrightone`}
            value={formik.values?.PosturePage[index]?.shoulderrightone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrightone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrightone}
          />
        </div>
        <div className="shoulderrighttwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrighttwo`}
            value={formik.values?.PosturePage[index]?.shoulderrighttwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrighttwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrighttwo}
          />
        </div>
        <div className="shoulderrightthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrightthree`}
            value={formik.values?.PosturePage[index]?.shoulderrightthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrightthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrightthree}
          />
        </div>
        <div className="shoulderrightfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrightfour`}
            value={formik.values?.PosturePage[index]?.shoulderrightfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrightfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrightfour}
          />
        </div>
        <div className="shoulderrightfive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrightfive`}
            value={formik.values?.PosturePage[index]?.shoulderrightfive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrightfive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrightfive}
          />
        </div>
        <div className="shoulderrightsix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrightsix`}
            value={formik.values?.PosturePage[index]?.shoulderrightsix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrightsix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrightsix}
          />
        </div>
        <div className="shoulderrightbottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrightbottomone`}
            value={formik.values?.PosturePage[index]?.shoulderrightbottomone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrightbottomone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrightbottomone}
          />
        </div>
        <div className="shoulderrightbottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].shoulderrightbottomtwo`}
            value={formik.values?.PosturePage[index]?.shoulderrightbottomtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].shoulderrightbottomtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.shoulderrightbottomtwo}
          />
        </div>
        {/* Left Chest */}
        <div className="chestlefttopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestlefttopone`}
            value={formik.values?.PosturePage[index]?.chestlefttopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestlefttopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestlefttopone}
          />
        </div>
        <div className="chestlefttoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestlefttoptwo`}
            value={formik.values?.PosturePage[index]?.chestlefttoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestlefttoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestlefttoptwo}
          />
        </div>
        <div className="chestleftone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestleftone`}
            value={formik.values?.PosturePage[index]?.chestleftone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestleftone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestleftone}
          />
        </div>
        <div className="chestlefttwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestlefttwo`}
            value={formik.values?.PosturePage[index]?.chestlefttwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestlefttwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestlefttwo}
          />
        </div>
        <div className="chestleftthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestleftthree`}
            value={formik.values?.PosturePage[index]?.chestleftthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestleftthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestleftthree}
          />
        </div>
        <div className="chestleftfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestleftfour`}
            value={formik.values?.PosturePage[index]?.chestleftfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestleftfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestleftfour}
          />
        </div>
        <div className="chestleftbottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestleftbottomone`}
            value={formik.values?.PosturePage[index]?.chestleftbottomone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestleftbottomone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestleftbottomone}
          />
        </div>
        <div className="chestleftbottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestleftbottomtwo`}
            value={formik.values?.PosturePage[index]?.chestleftbottomtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestleftbottomtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestleftbottomtwo}
          />
        </div>

        {/* middlechest */}
        <div className="chestmiddleone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestmiddleone`}
            value={formik.values?.PosturePage[index]?.chestmiddleone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestmiddleone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestmiddleone}
          />
        </div>
        <div className="chestmiddletwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestmiddletwo`}
            value={formik.values?.PosturePage[index]?.chestmiddletwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestmiddletwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestmiddletwo}
          />
        </div>

        {/* right chest */}
        <div className="chestrighttopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestrighttopone`}
            value={formik.values?.PosturePage[index]?.chestrighttopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestrighttopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestrighttopone}
          />
        </div>
        <div className="chestrighttoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestrighttoptwo`}
            value={formik.values?.PosturePage[index]?.chestrighttoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestrighttoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestrighttoptwo}
          />
        </div>
        <div className="chestrightone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestrightone`}
            value={formik.values?.PosturePage[index]?.chestrightone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestrightone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestrightone}
          />
        </div>
        <div className="chestrighttwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestrighttwo`}
            value={formik.values?.PosturePage[index]?.chestrighttwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestrighttwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestrighttwo}
          />
        </div>
        <div className="chestrightthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestrightthree`}
            value={formik.values?.PosturePage[index]?.chestrightthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestrightthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestrightthree}
          />
        </div>
        <div className="chestrightfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestrightfour`}
            value={formik.values?.PosturePage[index]?.chestrightfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestrightfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestrightfour}
          />
        </div>
        <div className="chestrightbottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestrightbottomone`}
            value={formik.values?.PosturePage[index]?.chestrightbottomone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestrightbottomone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestrightbottomone}
          />
        </div>
        <div className="chestrightbottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].chestrightbottomtwo`}
            value={formik.values?.PosturePage[index]?.chestrightbottomtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].chestrightbottomtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.chestrightbottomtwo}
          />
        </div>
        {/* middle body */}
        <div className="middlebodyone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].middlebodyone`}
            value={formik.values?.PosturePage[index]?.middlebodyone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].middlebodyone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.middlebodyone}
          />
        </div>
        <div className="middlebodytwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].middlebodytwo`}
            value={formik.values?.PosturePage[index]?.middlebodytwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].middlebodytwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.middlebodytwo}
          />
        </div>
        <div className="middlebodythree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].middlebodythree`}
            value={formik.values?.PosturePage[index]?.middlebodythree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].middlebodythree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.middlebodythree}
          />
        </div>
        <div className="middlebodyfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].middlebodyfour`}
            value={formik.values?.PosturePage[index]?.middlebodyfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].middlebodyfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.middlebodyfour}
          />
        </div>

        {/* left hand */}
        <div className="lefthandone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].lefthandone`}
            value={formik.values?.PosturePage[index]?.lefthandone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefthandone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefthandone}
          />
        </div>
        <div className="lefthandtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].lefthandtwo`}
            value={formik.values?.PosturePage[index]?.lefthandtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefthandtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefthandtwo}
          />
        </div>
        <div className="lefthandthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].lefthandthree`}
            value={formik.values?.PosturePage[index]?.lefthandthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefthandthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefthandthree}
          />
        </div>
        <div className="lefthandfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].lefthandfour`}
            value={formik.values?.PosturePage[index]?.lefthandfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefthandfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefthandfour}
          />
        </div>

        {/* right hand */}
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

        {/* left stomach */}
        <div className="leftstomachtopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachtopone`}
            value={formik.values?.PosturePage[index]?.leftstomachtopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachtopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachtopone}
          />
        </div>
        <div className="leftstomachtoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachtoptwo`}
            value={formik.values?.PosturePage[index]?.leftstomachtoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachtoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachtoptwo}
          />
        </div>
        <div className="leftstomachone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachone`}
            value={formik.values?.PosturePage[index]?.leftstomachone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachone}
          />
        </div>
        <div className="leftstomachtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachtwo`}
            value={formik.values?.PosturePage[index]?.leftstomachtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachtwo}
          />
        </div>
        <div className="leftstomachthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachthree`}
            value={formik.values?.PosturePage[index]?.leftstomachthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachthree}
          />
        </div>
        <div className="leftstomachfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachfour`}
            value={formik.values?.PosturePage[index]?.leftstomachfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachfour}
          />
        </div>
        <div className="leftstomachfive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachfive`}
            value={formik.values?.PosturePage[index]?.leftstomachfive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachfive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachfive}
          />
        </div>
        <div className="leftstomachsix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachsix`}
            value={formik.values?.PosturePage[index]?.leftstomachsix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachsix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachsix}
          />
        </div>
        <div className="leftstomachbottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachbottomone`}
            value={formik.values?.PosturePage[index]?.leftstomachbottomone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachbottomone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachbottomone}
          />
        </div>
        <div className="leftstomachbottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftstomachbottomtwo`}
            value={formik.values?.PosturePage[index]?.leftstomachbottomtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftstomachbottomtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftstomachbottomtwo}
          />
        </div>

        {/* top stomach */}
        <div className="topstomachone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].topstomachone`}
            value={formik.values?.PosturePage[index]?.topstomachone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].topstomachone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.topstomachone}
          />
        </div>
        <div className="topstomachtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].topstomachtwo`}
            value={formik.values?.PosturePage[index]?.topstomachtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].topstomachtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.topstomachtwo}
          />
        </div>

        {/* bottom stomach */}
        <div className="bottomstomachone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].bottomstomachone`}
            value={formik.values?.PosturePage[index]?.bottomstomachone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].bottomstomachone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.bottomstomachone}
          />
        </div>
        <div className="bottomstomachtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].bottomstomachtwo`}
            value={formik.values?.PosturePage[index]?.bottomstomachtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].bottomstomachtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.bottomstomachtwo}
          />
        </div>

        {/* right stomach */}
        <div className="rightstomachtopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachtopone`}
            value={formik.values?.PosturePage[index]?.rightstomachtopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachtopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachtopone}
          />
        </div>
        <div className="rightstomachtoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachtoptwo`}
            value={formik.values?.PosturePage[index]?.rightstomachtoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachtoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachtoptwo}
          />
        </div>
        <div className="rightstomachone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachone`}
            value={formik.values?.PosturePage[index]?.rightstomachone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachone}
          />
        </div>
        <div className="rightstomachtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachtwo`}
            value={formik.values?.PosturePage[index]?.rightstomachtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachtwo}
          />
        </div>
        <div className="rightstomachthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachthree`}
            value={formik.values?.PosturePage[index]?.rightstomachthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachthree}
          />
        </div>
        <div className="rightstomachfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachfour`}
            value={formik.values?.PosturePage[index]?.rightstomachfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachfour}
          />
        </div>
        <div className="rightstomachfive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachfive`}
            value={formik.values?.PosturePage[index]?.rightstomachfive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachfive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachfive}
          />
        </div>
        <div className="rightstomachsix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachsix`}
            value={formik.values?.PosturePage[index]?.rightstomachsix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachsix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachsix}
          />
        </div>
        <div className="rightstomachbottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachbottomone`}
            value={formik.values?.PosturePage[index]?.rightstomachbottomone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachbottomone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachbottomone}
          />
        </div>
        <div className="rightstomachbottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightstomachbottomtwo`}
            value={formik.values?.PosturePage[index]?.rightstomachbottomtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightstomachbottomtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightstomachbottomtwo}
          />
        </div>

        {/* left hand plam */}
        <div className="lefthandplamone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].lefthandplamone`}
            value={formik.values?.PosturePage[index]?.lefthandplamone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefthandplamone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefthandplamone}
          />
        </div>
        <div className="lefthandplamtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].lefthandplamtwo`}
            value={formik.values?.PosturePage[index]?.lefthandplamtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefthandplamtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefthandplamtwo}
          />
        </div>
        <div className="lefthandplamthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].lefthandplamthree`}
            value={formik.values?.PosturePage[index]?.lefthandplamthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefthandplamthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefthandplamthree}
          />
        </div>
        <div className="lefthandplamfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].lefthandplamfour`}
            value={formik.values?.PosturePage[index]?.lefthandplamfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefthandplamfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefthandplamfour}
          />
        </div>

        {/* right hand plam */}
        <div className="righthandplamone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].righthandplamone`}
            value={formik.values?.PosturePage[index]?.righthandplamone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].righthandplamone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.righthandplamone}
          />
        </div>
        <div className="righthandplamtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].righthandplamtwo`}
            value={formik.values?.PosturePage[index]?.righthandplamtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].righthandplamtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.righthandplamtwo}
          />
        </div>
        <div className="righthandplamthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].righthandplamthree`}
            value={formik.values?.PosturePage[index]?.righthandplamthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].righthandplamthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.righthandplamthree}
          />
        </div>
        <div className="righthandplamfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].righthandplamfour`}
            value={formik.values?.PosturePage[index]?.righthandplamfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].righthandplamfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.righthandplamfour}
          />
        </div>

        {/* left abddomen */}
        <div className="leftabdomentopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomentopone`}
            value={formik.values?.PosturePage[index]?.leftabdomentopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftabdomentopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftabdomentopone}
          />
        </div>
        <div className="leftabdomentoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomentoptwo`}
            value={formik.values?.PosturePage[index]?.leftabdomentoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftabdomentoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftabdomentoptwo}
          />
        </div>
        <div className="leftabdomenone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomenone`}
            value={formik.values?.PosturePage[index]?.leftabdomenone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftabdomenone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftabdomenone}
          />
        </div>
        <div className="leftabdomentwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomentwo`}
            value={formik.values?.PosturePage[index]?.leftabdomentwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftabdomentwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftabdomentwo}
          />
        </div>
        <div className="leftabdomenthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomenthree`}
            value={formik.values?.PosturePage[index]?.leftabdomenthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftabdomenthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftabdomenthree}
          />
        </div>
        <div className="leftabdomenfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomenfour`}
            value={formik.values?.PosturePage[index]?.leftabdomenfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftabdomenfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftabdomenfour}
          />
        </div>
        <div className="leftabdomenfive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomenfive`}
            value={formik.values?.PosturePage[index]?.leftabdomenfive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftabdomenfive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftabdomenfive}
          />
        </div>
        <div className="leftabdomensix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomensix`}
            value={formik.values?.PosturePage[index]?.leftabdomensix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftabdomensix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftabdomensix}
          />
        </div>
        <div className="leftabdomenonebottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomenonebottomone`}
            value={formik.values?.PosturePage[index]?.leftabdomenonebottomone}
            onChange={(e) =>
              formik.setFieldValue(
                `PosturePage[${index}].leftabdomenonebottomone`,
                e.target.checked
              )
            }
            checked={formik.values?.PosturePage[index]?.leftabdomenonebottomone}
          />
        </div>
        <div className="leftabdomenonebottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftabdomenonebottomtwo`}
            value={formik.values?.PosturePage[index]?.leftabdomenonebottomtwo}
            onChange={(e) =>
              formik.setFieldValue(
                `PosturePage[${index}].leftabdomenonebottomtwo`,
                e.target.checked
              )
            }
            checked={formik.values?.PosturePage[index]?.leftabdomenonebottomtwo}
          />
        </div>

        {/* Right abddomen */}
        <div className="rightabdomentopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomentopone`}
            value={formik.values?.PosturePage[index]?.rightabdomentopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightabdomentopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightabdomentopone}
          />
        </div>
        <div className="rightabdomentoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomentoptwo`}
            value={formik.values?.PosturePage[index]?.rightabdomentoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightabdomentoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightabdomentoptwo}
          />
        </div>
        <div className="rightabdomenone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomenone`}
            value={formik.values?.PosturePage[index]?.rightabdomenone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightabdomenone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightabdomenone}
          />
        </div>
        <div className="rightabdomentwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomentwo`}
            value={formik.values?.PosturePage[index]?.rightabdomentwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightabdomentwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightabdomentwo}
          />
        </div>
        <div className="rightabdomenthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomenthree`}
            value={formik.values?.PosturePage[index]?.rightabdomenthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightabdomenthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightabdomenthree}
          />
        </div>
        <div className="rightabdomenfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomenfour`}
            value={formik.values?.PosturePage[index]?.rightabdomenfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightabdomenfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightabdomenfour}
          />
        </div>
        <div className="rightabdomenfive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomenfive`}
            value={formik.values?.PosturePage[index]?.rightabdomenfive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightabdomenfive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightabdomenfive}
          />
        </div>
        <div className="rightabdomensix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomensix`}
            value={formik.values?.PosturePage[index]?.rightabdomensix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightabdomensix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightabdomensix}
          />
        </div>
        <div className="rightabdomenonebottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomenonebottomone`}
            value={formik.values?.PosturePage[index]?.rightabdomenonebottomone}
            onChange={(e) =>
              formik.setFieldValue(
                `PosturePage[${index}].rightabdomenonebottomone`,
                e.target.checked
              )
            }
            checked={formik.values?.PosturePage[index]?.rightabdomenonebottomone}
          />
        </div>
        <div className="rightabdomenonebottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightabdomenonebottomtwo`}
            value={formik.values?.PosturePage[index]?.rightabdomenonebottomtwo}
            onChange={(e) =>
              formik.setFieldValue(
                `PosturePage[${index}].rightabdomenonebottomtwo`,
                e.target.checked
              )
            }
            checked={formik.values?.PosturePage[index]?.rightabdomenonebottomtwo}
          />
        </div>

        {/* left knee */}
        <div className="leftkneetopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneetopone`}
            value={formik.values?.PosturePage[index]?.leftkneetopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneetopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneetopone}
          />
        </div>
        <div className="leftkneetoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneetoptwo`}
            value={formik.values?.PosturePage[index]?.leftkneetoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneetoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneetoptwo}
          />
        </div>
        <div className="leftkneetopthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneetopthree`}
            value={formik.values?.PosturePage[index]?.leftkneetopthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneetopthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneetopthree}
          />
        </div>
        <div className="leftkneetopfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneetopfour`}
            value={formik.values?.PosturePage[index]?.leftkneetopfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneetopfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneetopfour}
          />
        </div>
        <div className="leftkneeone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneeone`}
            value={formik.values?.PosturePage[index]?.leftkneeone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneeone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneeone}
          />
        </div>
        <div className="leftkneetwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneetwo`}
            value={formik.values?.PosturePage[index]?.leftkneetwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneetwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneetwo}
          />
        </div>
        <div className="leftkneethree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneethree`}
            value={formik.values?.PosturePage[index]?.leftkneethree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneethree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneethree}
          />
        </div>
        <div className="leftkneefour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneefour`}
            value={formik.values?.PosturePage[index]?.leftkneefour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneefour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneefour}
          />
        </div>
        <div className="leftkneefive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneefive`}
            value={formik.values?.PosturePage[index]?.leftkneefive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneefive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneefive}
          />
        </div>
        <div className="leftkneesix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneesix`}
            value={formik.values?.PosturePage[index]?.leftkneesix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneesix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneesix}
          />
        </div>
        <div className="leftkneebottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneebottomone`}
            value={formik.values?.PosturePage[index]?.leftkneebottomone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneebottomone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneebottomone}
          />
        </div>
        <div className="leftkneebottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneebottomtwo`}
            value={formik.values?.PosturePage[index]?.leftkneebottomtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneebottomtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneebottomtwo}
          />
        </div>
        <div className="leftkneebottomthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneebottomthree`}
            value={formik.values?.PosturePage[index]?.leftkneebottomthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneebottomthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneebottomthree}
          />
        </div>
        <div className="leftkneebottomfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftkneebottomfour`}
            value={formik.values?.PosturePage[index]?.leftkneebottomfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftkneebottomfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftkneebottomfour}
          />
        </div>

        {/* right knee */}
        <div className="rightkneetopone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneetopone`}
            value={formik.values?.PosturePage[index]?.rightkneetopone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneetopone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneetopone}
          />
        </div>
        <div className="rightkneetoptwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneetoptwo`}
            value={formik.values?.PosturePage[index]?.rightkneetoptwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneetoptwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneetoptwo}
          />
        </div>
        <div className="rightkneetopthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneetopthree`}
            value={formik.values?.PosturePage[index]?.rightkneetopthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneetopthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneetopthree}
          />
        </div>
        <div className="rightkneetopfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneetopfour`}
            value={formik.values?.PosturePage[index]?.rightkneetopfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneetopfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneetopfour}
          />
        </div>
        <div className="rightkneeone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneeone`}
            value={formik.values?.PosturePage[index]?.rightkneeone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneeone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneeone}
          />
        </div>
        <div className="rightkneetwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneetwo`}
            value={formik.values?.PosturePage[index]?.rightkneetwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneetwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneetwo}
          />
        </div>
        <div className="rightkneethree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneethree`}
            value={formik.values?.PosturePage[index]?.rightkneethree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneethree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneethree}
          />
        </div>
        <div className="rightkneefour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneefour`}
            value={formik.values?.PosturePage[index]?.rightkneefour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneefour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneefour}
          />
        </div>
        <div className="rightkneefive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneefive`}
            value={formik.values?.PosturePage[index]?.rightkneefive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneefive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneefive}
          />
        </div>
        <div className="rightkneesix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneesix`}
            value={formik.values?.PosturePage[index]?.rightkneesix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneesix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneesix}
          />
        </div>
        <div className="rightkneebottomone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneebottomone`}
            value={formik.values?.PosturePage[index]?.rightkneebottomone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneebottomone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneebottomone}
          />
        </div>
        <div className="rightkneebottomtwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneebottomtwo`}
            value={formik.values?.PosturePage[index]?.rightkneebottomtwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneebottomtwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneebottomtwo}
          />
        </div>
        <div className="rightkneebottomthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneebottomthree`}
            value={formik.values?.PosturePage[index]?.rightkneebottomthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneebottomthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneebottomthree}
          />
        </div>
        <div className="rightkneebottomfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightkneebottomfour`}
            value={formik.values?.PosturePage[index]?.rightkneebottomfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightkneebottomfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightkneebottomfour}
          />
        </div>

        {/* top foot */}
        <div className="topfootone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].topfootone`}
            value={formik.values?.PosturePage[index]?.topfootone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].topfootone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.topfootone}
          />
        </div>
        <div className="topfoottwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].topfoottwo`}
            value={formik.values?.PosturePage[index]?.topfoottwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].topfoottwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.topfoottwo}
          />
        </div>
        <div className="topfootthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].topfootthree`}
            value={formik.values?.PosturePage[index]?.topfootthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].topfootthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.topfootthree}
          />
        </div>
        <div className="topfootfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].topfootfour`}
            value={formik.values?.PosturePage[index]?.topfootfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].topfootfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.topfootfour}
          />
        </div>

        {/* left ankle */}
        <div className="leftankleone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftankleone`}
            value={formik.values?.PosturePage[index]?.leftankleone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftankleone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftankleone}
          />
        </div>
        <div className="leftankletwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftankletwo`}
            value={formik.values?.PosturePage[index]?.leftankletwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftankletwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftankletwo}
          />
        </div>
        <div className="leftanklethree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftanklethree`}
            value={formik.values?.PosturePage[index]?.leftanklethree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftanklethree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftanklethree}
          />
        </div>
        <div className="leftanklefour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftanklefour`}
            value={formik.values?.PosturePage[index]?.leftanklefour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftanklefour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftanklefour}
          />
        </div>
        <div className="leftanklefive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftanklefive`}
            value={formik.values?.PosturePage[index]?.leftanklefive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftanklefive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftanklefive}
          />
        </div>
        <div className="leftanklesix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].leftanklesix`}
            value={formik.values?.PosturePage[index]?.leftanklesix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].leftanklesix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.leftanklesix}
          />
        </div>

        {/* right ankle */}
        <div className="rightankleone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightankleone`}
            value={formik.values?.PosturePage[index]?.rightankleone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightankleone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightankleone}
          />
        </div>
        <div className="rightankletwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightankletwo`}
            value={formik.values?.PosturePage[index]?.rightankletwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightankletwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightankletwo}
          />
        </div>
        <div className="rightanklethree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightanklethree`}
            value={formik.values?.PosturePage[index]?.rightanklethree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightanklethree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightanklethree}
          />
        </div>
        <div className="rightanklefour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightanklefour`}
            value={formik.values?.PosturePage[index]?.rightanklefour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightanklefour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightanklefour}
          />
        </div>
        <div className="rightanklefive circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightanklefive`}
            value={formik.values?.PosturePage[index]?.rightanklefive}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightanklefive`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightanklefive}
          />
        </div>
        <div className="rightanklesix circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].rightanklesix`}
            value={formik.values?.PosturePage[index]?.rightanklesix}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].rightanklesix`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.rightanklesix}
          />
        </div>

        {/* Bottom foot */}
        <div className="bottomfootone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].bottomfootone`}
            value={formik.values?.PosturePage[index]?.bottomfootone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].bottomfootone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.bottomfootone}
          />
        </div>
        <div className="bottomfoottwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].bottomfoottwo`}
            value={formik.values?.PosturePage[index]?.bottomfoottwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].bottomfoottwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.bottomfoottwo}
          />
        </div>
        <div className="bottomfootthree circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].bottomfootthree`}
            value={formik.values?.PosturePage[index]?.bottomfootthree}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].bottomfootthree`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.bottomfootthree}
          />
        </div>
        <div className="bottomfootfour circle">
          <input
            type="checkbox"
            className="fullbody-check"
            name={`PosturePage[${index}].bottomfootfour`}
            value={formik.values?.PosturePage[index]?.bottomfootfour}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].bottomfootfour`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.bottomfootfour}
          />
        </div>

        {/* left toe */}
        <div className="lefttoeone circle">
          <input
            type="checkbox"
            style={{ borderColor: "#e16e85" }}
            className="fullbody-check"
            name={`PosturePage[${index}].lefttoeone`}
            value={formik.values?.PosturePage[index]?.lefttoeone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefttoeone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefttoeone}
          />
        </div>
        <div className="lefttoetwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            style={{ borderColor: "#e16e85" }}
            name={`PosturePage[${index}].lefttoetwo`}
            value={formik.values?.PosturePage[index]?.lefttoetwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].lefttoetwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.lefttoetwo}
          />
        </div>

        {/* middle toe */}
        <div className="middletoeone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            style={{ borderColor: "#e16e85" }}
            name={`PosturePage[${index}].middletoeone`}
            value={formik.values?.PosturePage[index]?.middletoeone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].middletoeone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.middletoeone}
          />
        </div>
        <div className="middletoetwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            style={{ borderColor: "#e16e85" }}
            name={`PosturePage[${index}].middletoetwo`}
            value={formik.values?.PosturePage[index]?.middletoetwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].middletoetwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.middletoetwo}
          />
        </div>

        {/* right toe */}
        <div className="righttoeone circle">
          <input
            type="checkbox"
            className="fullbody-check"
            style={{ borderColor: "#e16e85" }}
            name={`PosturePage[${index}].righttoeone`}
            value={formik.values?.PosturePage[index]?.righttoeone}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].righttoeone`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.righttoeone}
          />
        </div>
        <div className="righttoetwo circle">
          <input
            type="checkbox"
            className="fullbody-check"
            style={{ borderColor: "#e16e85" }}
            name={`PosturePage[${index}].righttoetwo`}
            value={formik.values?.PosturePage[index]?.righttoetwo}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].righttoetwo`, e.target.checked)
            }
            checked={formik.values?.PosturePage[index]?.righttoetwo}
          />
        </div>
      </div>
    </>
  );
}
fullBody.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default fullBody;

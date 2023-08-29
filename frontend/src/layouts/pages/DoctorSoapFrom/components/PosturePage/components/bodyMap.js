import React from "react";
import { Button, Checkbox, Grid } from "@mui/material";
import humanBodyDiagram from "../../../../../../assets/images/excercisetool/bodymap.png";
import PropTypes from "prop-types";
import "../style.css";

function bodyMap({ formik, index }) {
  return (
    <>
      <img className="bodymap11" src={humanBodyDiagram} height={600} width={350} />
      <div className="checkboxdiagram circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram}
        />
      </div>
      <div className="checkboxdiagram1 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram1`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram1}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram1`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram1}
        />
      </div>
      <div className="checkboxdiagram2 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram2`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram2}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram2`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram2}
        />
      </div>
      <div className="checkboxdiagram3 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram3`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram3}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram3`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram3}
        />
      </div>
      <div className="checkboxdiagram4 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram4`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram4}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram4`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram4}
        />
      </div>
      <div className="checkboxdiagram5 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram5`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram5}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram5`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram5}
        />
      </div>
      <div className="checkboxdiagram6 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram6`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram6}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram6`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram6}
        />
      </div>
      <div className="checkboxdiagram7 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram7`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram7}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram7`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram7}
        />
      </div>
      <div className="checkboxdiagram8 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram8`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram8}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram8`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram8}
        />
      </div>
      <div className="checkboxdiagram9 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram9`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram9}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram9`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram9}
        />
      </div>
      <div className="checkboxdiagram10 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram10`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram10}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram10`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram10}
        />
      </div>
      <div className="checkboxdiagram11 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram11`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram11}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram11`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram11}
        />
      </div>
      <div className="checkboxdiagram12 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram12`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram12}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram12`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram12}
        />
      </div>
      <div className="checkboxdiagram13 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram13`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram13}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram13`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram13}
        />
      </div>
      <div className="checkboxdiagram14 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram14`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram14}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram14`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram14}
        />
      </div>
      <div className="checkboxdiagram15 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram15`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram15}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram15`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram15}
        />
      </div>
      <div className="checkboxdiagram16 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram16`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram16}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram16`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram16}
        />
      </div>
      <div className="checkboxdiagram17 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram17`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram17}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram17`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram17}
        />
      </div>
      <div className="checkboxdiagram18 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram18`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram18}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram18`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram18}
        />
      </div>
      <div className="checkboxdiagram19 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram19`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram19}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram19`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram19}
        />
      </div>
      <div className="checkboxdiagram20 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram20`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram20}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram20`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram20}
        />
      </div>
      <div className="checkboxdiagram21 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram21`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram21}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram21`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram21}
        />
      </div>
      <div className="checkboxdiagram22 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram22`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram22}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram22`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram22}
        />
      </div>
      <div className="checkboxdiagram23 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram23`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram23}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram23`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram23}
        />
      </div>
      <div className="checkboxdiagram24 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram24`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram24}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram24`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram24}
        />
      </div>
      <div className="checkboxdiagram25 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram25`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram25}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram25`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram25}
        />
      </div>
      <div className="checkboxdiagram26 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram26`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram26}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram26`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram26}
        />
      </div>
      <div className="checkboxdiagram27 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram27`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram27}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram27`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram27}
        />
      </div>
      <div className="checkboxdiagram28 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram28`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram28}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram28`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram28}
        />
      </div>
      <div className="checkboxdiagram29 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram29`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram29}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram29`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram29}
        />
      </div>
      <div className="checkboxdiagram30 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram30`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram30}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram30`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram30}
        />
      </div>
      <div className="checkboxdiagram31 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram31`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram31}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram31`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram31}
        />
      </div>
      <div className="checkboxdiagram32 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram32`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram32}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram32`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram32}
        />
      </div>
      <div className="checkboxdiagram33 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram33`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram33}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram33`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram33}
        />
      </div>
      <div className="checkboxdiagram34 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram34`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram34}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram34`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram34}
        />
      </div>
      <div className="checkboxdiagram35 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram35`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram35}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram35`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram35}
        />
      </div>
      <div className="checkboxdiagram36 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram36`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram36}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram36`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram36}
        />
      </div>
      <div className="checkboxdiagram37 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram37`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram37}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram37`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram37}
        />
      </div>
      <div className="checkboxdiagram38 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram38`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram38}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram38`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram38}
        />
      </div>
      <div className="checkboxdiagram39 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram39`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram39}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram39`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram39}
        />
      </div>
      <div className="checkboxdiagram40 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram40`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram40}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram40`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram40}
        />
      </div>
      <div className="checkboxdiagram41 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram41`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram41}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram41`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram41}
        />
      </div>
      <div className="checkboxdiagram42 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram42`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram42}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram42`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram42}
        />
      </div>
      <div className="checkboxdiagram43 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram43`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram43}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram43`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram43}
        />
      </div>
      <div className="checkboxdiagram44 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram44`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram44}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram44`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram44}
        />
      </div>
      <div className="checkboxdiagram45 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram45`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram45}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram45`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram45}
        />
      </div>
      <div className="checkboxdiagram46 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram46`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram46}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram46`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram46}
        />
      </div>
      <div className="checkboxdiagram47 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram47`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram47}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram47`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram47}
        />
      </div>
      <div className="checkboxdiagram48 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram48`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram48}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram48`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram48}
        />
      </div>
      <div className="checkboxdiagram49 circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram49`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram49}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram49`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram49}
        />
      </div>
      <div className="checkboxdiagram50  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram50`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram50}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram50`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram50}
        />
      </div>
      <div className="checkboxdiagram51  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram51`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram51}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram51`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram51}
        />
      </div>
      <div className="checkboxdiagram52  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram52`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram52}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram52`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram52}
        />
      </div>
      <div className="checkboxdiagram53  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram53`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram53}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram53`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram53}
        />
      </div>
      <div className="checkboxdiagram54  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram54`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram54}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram54`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram54}
        />
      </div>
      <div className="checkboxdiagram55  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram55`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram55}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram55`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram55}
        />
      </div>
      <div className="checkboxdiagram56  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram56`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram56}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram56`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram56}
        />
      </div>
      <div className="checkboxdiagram57  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram57`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram57}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram57`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram57}
        />
      </div>
      <div className="checkboxdiagram58  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram58`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram58}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram58`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram58}
        />
      </div>
      <div className="checkboxdiagram59  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram59`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram59}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram59`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram59}
        />
      </div>
      <div className="checkboxdiagram60  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram60`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram60}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram60`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram60}
        />
      </div>
      <div className="checkboxdiagram61  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram61`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram61}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram61`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram61}
        />
      </div>
      <div className="checkboxdiagram62  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram62`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram62}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram62`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram62}
        />
      </div>
      <div className="checkboxdiagram63  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram63`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram63}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram63`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram63}
        />
      </div>
      <div className="checkboxdiagram64  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram64`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram64}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram64`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram64}
        />
      </div>
      <div className="checkboxdiagram65  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram65`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram65}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram65`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram65}
        />
      </div>
      <div className="checkboxdiagram66  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram66`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram66}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram66`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram66}
        />
      </div>
      <div className="checkboxdiagram67  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram67`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram67}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram67`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram67}
        />
      </div>
      <div className="checkboxdiagram68  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram68`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram68}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram68`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram68}
        />
      </div>
      <div className="checkboxdiagram69  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram69`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram69}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram69`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram69}
        />
      </div>
      <div className="checkboxdiagram70  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram70`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram70}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram70`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram70}
        />
      </div>
      <div className="checkboxdiagram71  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram71`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram71}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram71`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram71}
        />
      </div>
      <div className="checkboxdiagram72  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram72`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram72}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram72`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram72}
        />
      </div>
      <div className="checkboxdiagram73  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram73`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram73}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram73`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram73}
        />
      </div>
      <div className="checkboxdiagram74  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram74`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram74}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram74`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram74}
        />
      </div>
      <div className="checkboxdiagram75  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram75`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram75}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram75`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram75}
        />
      </div>
      <div className="checkboxdiagram76  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram76`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram76}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram76`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram76}
        />
      </div>
      <div className="checkboxdiagram77  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram77`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram77}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram77`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram77}
        />
      </div>
      <div className="checkboxdiagram78  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram78`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram78}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram78`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram78}
        />
      </div>
      <div className="checkboxdiagram79  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram79`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram79}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram79`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram79}
        />
      </div>
      <div className="checkboxdiagram80  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram80`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram80}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram80`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram80}
        />
      </div>
      <div className="checkboxdiagram81  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram81`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram81}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram81`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram81}
        />
      </div>
      <div className="checkboxdiagram82  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram82`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram82}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram82`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram82}
        />
      </div>
      <div className="checkboxdiagram83  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram83`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram83}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram83`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram83}
        />
      </div>
      <div className="checkboxdiagram84  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram84`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram84}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram84`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram84}
        />
      </div>
      <div className="checkboxdiagram85  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram85`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram85}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram85`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram85}
        />
      </div>
      <div className="checkboxdiagram86  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram86`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram86}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram86`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram86}
        />
      </div>
      <div className="checkboxdiagram87  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram87`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram87}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram87`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram87}
        />
      </div>
      <div className="checkboxdiagram88  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram88`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram88}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram88`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram88}
        />
      </div>
      <div className="checkboxdiagram89  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram89`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram89}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram89`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram89}
        />
      </div>
      <div className="checkboxdiagram90  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram90`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram90}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram90`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram90}
        />
      </div>
      <div className="checkboxdiagram91  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram91`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram91}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram91`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram91}
        />
      </div>
      <div className="checkboxdiagram92  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram92`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram92}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram92`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram92}
        />
      </div>
      <div className="checkboxdiagram93  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram93`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram93}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram93`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram93}
        />
      </div>
      <div className="checkboxdiagram94  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram94`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram94}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram94`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram94}
        />
      </div>
      <div className="checkboxdiagram95  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram95`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram95}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram95`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram95}
        />
      </div>
      <div className="checkboxdiagram96  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram96`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram96}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram96`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram96}
        />
      </div>
      <div className="checkboxdiagram97  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram97`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram97}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram97`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram97}
        />
      </div>
      <div className="checkboxdiagram98  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram98`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram98}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram98`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram98}
        />
      </div>
      <div className="checkboxdiagram99  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram99`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram99}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram99`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram99}
        />
      </div>
      <div className="checkboxdiagram100  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram100`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram100}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram100`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram100}
        />
      </div>
      <div className="checkboxdiagram101  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram101`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram101}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram101`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram101}
        />
      </div>
      <div className="checkboxdiagram102  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram102`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram102}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram102`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram102}
        />
      </div>
      <div className="checkboxdiagram103  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram103`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram103}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram103`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram103}
        />
      </div>
      <div className="checkboxdiagram104  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram104`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram104}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram104`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram104}
        />
      </div>
      <div className="checkboxdiagram105  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram105`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram105}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram105`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram105}
        />
      </div>
      <div className="checkboxdiagram106  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram106`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram106}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram106`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram106}
        />
      </div>
      <div className="checkboxdiagram107  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram107`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram107}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram107`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram107}
        />
      </div>
      <div className="checkboxdiagram108  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram108`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram108}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram108`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram108}
        />
      </div>
      <div className="checkboxdiagram109  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram109`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram109}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram109`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram109}
        />
      </div>
      <div className="checkboxdiagram110  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram110`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram110}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram110`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram110}
        />
      </div>
      <div className="checkboxdiagram111  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram111`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram111}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram111`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram111}
        />
      </div>
      <div className="checkboxdiagram112  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram112`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram112}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram112`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram112}
        />
      </div>
      <div className="checkboxdiagram113  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram113`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram113}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram113`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram113}
        />
      </div>
      <div className="checkboxdiagram114  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram114`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram114}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram114`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram114}
        />
      </div>
      <div className="checkboxdiagram115  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram115`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram115}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram115`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram115}
        />
      </div>
      <div className="checkboxdiagram116  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram116`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram116}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram116`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram116}
        />
      </div>
      <div className="checkboxdiagram117  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram117`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram117}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram117`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram117}
        />
      </div>
      <div className="checkboxdiagram118  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram118`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram118}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram118`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram118}
        />
      </div>
      <div className="checkboxdiagram119  circle">
        <input
          type="checkbox"
          className="fullbody-check"
          name={`PosturePage[${index}].checkboxdiagram119`}
          value={formik.values?.PosturePage[index]?.checkboxdiagram119}
          onChange={(e) =>
            formik.setFieldValue(`PosturePage[${index}].checkboxdiagram119`, e.target.checked)
          }
          checked={formik.values?.PosturePage[index]?.checkboxdiagram119}
        />
      </div>
    </>
  );
}
bodyMap.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default bodyMap;

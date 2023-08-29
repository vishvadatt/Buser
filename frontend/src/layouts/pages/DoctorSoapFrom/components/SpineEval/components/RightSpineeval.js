import React from "react";
import "../style.css";
import { Box, Checkbox, Grid } from "@mui/material";
import Spinalcord2 from "../../../../../../assets/images/excercisetool/spinalcord2.png";

import PropTypes from "prop-types";
import { Typography } from "antd";

function RightSpineeval({ formik, index }) {
  return (
    <>
      <div className="container">
        <img src={Spinalcord2} alt="left" height="auto" width="auto" />
        <div className="sbicononesub1">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbonesub1`}
            value={formik.values?.spineDetails[index]?.spinbonesub1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbonesub1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbonesub1}
          />
        </div>
        <div className="sbicononesub2">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbonesub2`}
            value={formik.values?.spineDetails[index]?.spinbonesub2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbonesub2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbonesub2}
          />
        </div>
        <div className="sbicononesub3">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbonesub3`}
            value={formik.values?.spineDetails[index]?.spinbonesub3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbonesub3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbonesub3}
          />
        </div>
        <div className="sbicononesub4">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbonesub4`}
            value={formik.values?.spineDetails[index]?.spinbonesub4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbonesub4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbonesub4}
          />
        </div>
        <div className="sbicontwosub1">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbtwosub1`}
            value={formik.values?.spineDetails[index]?.spinbtwosub1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbtwosub1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbtwosub1}
          />
        </div>
        <div className="sbicontwosub2">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbtwosub2`}
            value={formik.values?.spineDetails[index]?.spinbtwosub2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbtwosub2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbtwosub2}
          />
        </div>
        <div className="sbicontwosub3">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbtwosub3`}
            value={formik.values?.spineDetails[index]?.spinbtwosub3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbtwosub3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbtwosub3}
          />
        </div>
        <div className="sbicontwosub4">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbtwosub4`}
            value={formik.values?.spineDetails[index]?.spinbtwosub4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbtwosub4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbtwosub4}
          />
        </div>
        <div className="sbiconthreesub1">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbthreesub1`}
            value={formik.values?.spineDetails[index]?.spinbthreesub1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbthreesub1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbthreesub1}
          />
        </div>
        <div className="sbiconthreesub2">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbthreesub2`}
            value={formik.values?.spineDetails[index]?.spinbthreesub2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbthreesub2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbthreesub2}
          />
        </div>
        <div className="sbiconthreesub3">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbthreesub3`}
            value={formik.values?.spineDetails[index]?.spinbthreesub3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbthreesub3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbthreesub3}
          />
        </div>
        <div className="sbiconthreesub4">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbthreesub4`}
            value={formik.values?.spineDetails[index]?.spinbthreesub4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbthreesub4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbthreesub4}
          />
        </div>
        <div className="sbiconfoursub1">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbfoursub1`}
            value={formik.values?.spineDetails[index]?.spinbfoursub1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbfoursub1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbfoursub1}
          />
        </div>
        <div className="sbiconfoursub2">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbfoursub2`}
            value={formik.values?.spineDetails[index]?.spinbfoursub2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbfoursub2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbfoursub2}
          />
        </div>
        <div className="sbiconfoursub3">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbfoursub3`}
            value={formik.values?.spineDetails[index]?.spinbfoursub3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbfoursub3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbfoursub3}
          />
        </div>
        <div className="sbiconfoursub4">
          <Checkbox
            style={{
              width: 8,
              height: 8,
            }}
            name={`spineDetails[${index}].spinbfoursub4`}
            value={formik.values?.spineDetails[index]?.spinbfoursub4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbfoursub4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbfoursub4}
          />
        </div>
        <div className="sbiconfivesub1">
          <Checkbox
            style={{
              width: 10,
              height: 10,
            }}
            name={`spineDetails[${index}].spinbfivesub1`}
            value={formik.values?.spineDetails[index]?.spinbfivesub1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbfivesub1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbfivesub1}
          />
        </div>
        <div className="sbiconfivesub2">
          <Checkbox
            style={{
              width: 10,
              height: 10,
            }}
            name={`spineDetails[${index}].spinbfivesub2`}
            value={formik.values?.spineDetails[index]?.spinbfivesub2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbfivesub2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbfivesub2}
          />
        </div>
        <div className="sbiconfivesub3">
          <Checkbox
            style={{
              width: 10,
              height: 10,
            }}
            name={`spineDetails[${index}].spinbfivesub3`}
            value={formik.values?.spineDetails[index]?.spinbfivesub3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbfivesub3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbfivesub3}
          />
        </div>
        <div className="sbiconfivesub4">
          <Checkbox
            style={{
              width: 10,
              height: 10,
            }}
            name={`spineDetails[${index}].spinbfivesub4`}
            value={formik.values?.spineDetails[index]?.spinbfivesub4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbfivesub4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbfivesub4}
          />
        </div>
        <div className="sbiconsixsub1">
          <Checkbox
            style={{
              width: 10,
              height: 10,
            }}
            name={`spineDetails[${index}].spinbsixsub1`}
            value={formik.values?.spineDetails[index]?.spinbsixsub1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbsixsub1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbsixsub1}
          />
        </div>
        <div className="sbiconsixsub2">
          <Checkbox
            style={{
              width: 10,
              height: 10,
            }}
            name={`spineDetails[${index}].spinbsixsub2`}
            value={formik.values?.spineDetails[index]?.spinbsixsub2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbsixsub2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbsixsub2}
          />
        </div>
        <div className="sbiconsixsub3">
          <Checkbox
            style={{
              width: 10,
              height: 10,
            }}
            name={`spineDetails[${index}].spinbsixsub3`}
            value={formik.values?.spineDetails[index]?.spinbsixsub3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbsixsub3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbsixsub3}
          />
        </div>
        <div className="sbiconsixsub4">
          <Checkbox
            style={{
              width: 10,
              height: 10,
            }}
            name={`spineDetails[${index}].spinbsixsub4`}
            value={formik.values?.spineDetails[index]?.spinbsixsub4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbsixsub4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbsixsub4}
          />
        </div>
        <div className="sbiconsevensub1">
          <Checkbox
            style={{
              width: 12,
              height: 12,
            }}
            name={`spineDetails[${index}].spinbsevensub1`}
            value={formik.values?.spineDetails[index]?.spinbsevensub1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbsevensub1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbsevensub1}
          />
        </div>
        <div className="sbiconsevensub2">
          <Checkbox
            style={{
              width: 12,
              height: 12,
            }}
            name={`spineDetails[${index}].spinbsevensub2`}
            value={formik.values?.spineDetails[index]?.spinbsevensub2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbsevensub2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbsevensub2}
          />
        </div>
        <div className="sbiconsevensub3">
          <Checkbox
            style={{
              width: 12,
              height: 12,
            }}
            name={`spineDetails[${index}].spinbsevensub3`}
            value={formik.values?.spineDetails[index]?.spinbsevensub3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbsevensub3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbsevensub3}
          />
        </div>
        <div className="sbiconsevensub4">
          <Checkbox
            style={{
              width: 12,
              height: 12,
            }}
            name={`spineDetails[${index}].spinbsevensub4`}
            value={formik.values?.spineDetails[index]?.spinbsevensub4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbsevensub4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbsevensub4}
          />
        </div>
        <div className="sbiconone1">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackone1`}
            value={formik.values?.spineDetails[index]?.spinbackone1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackone1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackone1}
          />
        </div>
        <div className="sbiconone2">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackone2`}
            value={formik.values?.spineDetails[index]?.spinbackone2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackone2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackone2}
          />
        </div>
        <div className="sbiconone3">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackone3`}
            value={formik.values?.spineDetails[index]?.spinbackone3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackone3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackone3}
          />
        </div>
        <div className="sbiconone4">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackone4`}
            value={formik.values?.spineDetails[index]?.spinbackone4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackone4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackone4}
          />
        </div>
        <div className="sbicontwo1">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbacktwo1`}
            value={formik.values?.spineDetails[index]?.spinbacktwo1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktwo1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktwo1}
          />
        </div>
        <div className="sbicontwo2">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbacktwo2`}
            value={formik.values?.spineDetails[index]?.spinbacktwo2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktwo2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktwo2}
          />
        </div>
        <div className="sbicontwo3">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbacktwo3`}
            value={formik.values?.spineDetails[index]?.spinbacktwo3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktwo3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktwo3}
          />
        </div>
        <div className="sbicontwo4">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbacktwo4`}
            value={formik.values?.spineDetails[index]?.spinbacktwo4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktwo4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktwo4}
          />
        </div>
        <div className="sbiconthree1">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackthree1`}
            value={formik.values?.spineDetails[index]?.spinbackthree1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackthree1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackthree1}
          />
        </div>
        <div className="sbiconthree2">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackthree2`}
            value={formik.values?.spineDetails[index]?.spinbackthree2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackthree2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackthree2}
          />
        </div>
        <div className="sbiconthree3">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackthree3`}
            value={formik.values?.spineDetails[index]?.spinbackthree3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackthree3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackthree3}
          />
        </div>
        <div className="sbiconthree4">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackthree4`}
            value={formik.values?.spineDetails[index]?.spinbackthree4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackthree4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackthree4}
          />
        </div>
        <div className="sbiconfour1">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackfour1`}
            value={formik.values?.spineDetails[index]?.spinbackfour1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackfour1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackfour1}
          />
        </div>
        <div className="sbiconfour2">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackfour2`}
            value={formik.values?.spineDetails[index]?.spinbackfour2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackfour2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackfour2}
          />
        </div>
        <div className="sbiconfour3">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackfour3`}
            value={formik.values?.spineDetails[index]?.spinbackfour3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackfour3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackfour3}
          />
        </div>
        <div className="sbiconfour4">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackfour4`}
            value={formik.values?.spineDetails[index]?.spinbackfour4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackfour4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackfour4}
          />
        </div>
        <div className="sbiconfive1">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackfive1`}
            value={formik.values?.spineDetails[index]?.spinbackfive1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackfive1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackfive1}
          />
        </div>
        <div className="sbiconfive2">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackfive2`}
            value={formik.values?.spineDetails[index]?.spinbackfive2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackfive2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackfive2}
          />
        </div>
        <div className="sbiconfive3">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackfive3`}
            value={formik.values?.spineDetails[index]?.spinbackfive3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackfive3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackfive3}
          />
        </div>
        <div className="sbiconfive4">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinbackfive4`}
            value={formik.values?.spineDetails[index]?.spinbackfive4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackfive4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackfive4}
          />
        </div>
        <div className="sbiconsix1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksix1`}
            value={formik.values?.spineDetails[index]?.spinbacksix1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksix1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksix1}
          />
        </div>
        <div className="sbiconsix2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksix2`}
            value={formik.values?.spineDetails[index]?.spinbacksix2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksix2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksix2}
          />
        </div>
        <div className="sbiconsix3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksix3`}
            value={formik.values?.spineDetails[index]?.spinbacksix3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksix3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksix3}
          />
        </div>
        <div className="sbiconsix4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksix4`}
            value={formik.values?.spineDetails[index]?.spinbacksix4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksix4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksix4}
          />
        </div>
        <div className="sbiconseven1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackseven1`}
            value={formik.values?.spineDetails[index]?.spinbackseven1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackseven1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackseven1}
          />
        </div>
        <div className="sbiconseven2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackseven2`}
            value={formik.values?.spineDetails[index]?.spinbackseven2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackseven2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackseven2}
          />
        </div>
        <div className="sbiconseven3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackseven3`}
            value={formik.values?.spineDetails[index]?.spinbackseven3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackseven3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackseven3}
          />
        </div>
        <div className="sbiconseven4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackseven4`}
            value={formik.values?.spineDetails[index]?.spinbackseven4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackseven4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackseven4}
          />
        </div>
        <div className="sbiconeight1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackeight1`}
            value={formik.values?.spineDetails[index]?.spinbackeight1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackeight1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackeight1}
          />
        </div>
        <div className="sbiconeight2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackeight2`}
            value={formik.values?.spineDetails[index]?.spinbackeight2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackeight2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackeight2}
          />
        </div>
        <div className="sbiconeight3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackeight3`}
            value={formik.values?.spineDetails[index]?.spinbackeight3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackeight3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackeight3}
          />
        </div>
        <div className="sbiconeight4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackeight4`}
            value={formik.values?.spineDetails[index]?.spinbackeight4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackeight4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackeight4}
          />
        </div>
        <div className="sbiconnine1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacknine1`}
            value={formik.values?.spineDetails[index]?.spinbacknine1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacknine1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacknine1}
          />
        </div>
        <div className="sbiconnine2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacknine2`}
            value={formik.values?.spineDetails[index]?.spinbacknine2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacknine2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacknine2}
          />
        </div>
        <div className="sbiconnine3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacknine3`}
            value={formik.values?.spineDetails[index]?.spinbacknine3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacknine3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacknine3}
          />
        </div>
        <div className="sbiconnine4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacknine4`}
            value={formik.values?.spineDetails[index]?.spinbacknine4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacknine4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacknine4}
          />
        </div>
        <div className="sbiconten1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackten1`}
            value={formik.values?.spineDetails[index]?.spinbackten1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackten1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackten1}
          />
        </div>
        <div className="sbiconten2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackten2`}
            value={formik.values?.spineDetails[index]?.spinbackten2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackten2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackten2}
          />
        </div>
        <div className="sbiconten3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackten3`}
            value={formik.values?.spineDetails[index]?.spinbackten3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackten3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackten3}
          />
        </div>
        <div className="sbiconten4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackten4`}
            value={formik.values?.spineDetails[index]?.spinbackten4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackten4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackten4}
          />
        </div>
        <div className="sbiconeleven1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackeleven1`}
            value={formik.values?.spineDetails[index]?.spinbackeleven1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackeleven1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackeleven1}
          />
        </div>
        <div className="sbiconeleven2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackeleven2`}
            value={formik.values?.spineDetails[index]?.spinbackeleven2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackeleven2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackeleven2}
          />
        </div>
        <div className="sbiconeleven3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackeleven3`}
            value={formik.values?.spineDetails[index]?.spinbackeleven3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackeleven3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackeleven3}
          />
        </div>
        <div className="sbiconeleven4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackeleven4`}
            value={formik.values?.spineDetails[index]?.spinbackeleven4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackeleven4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackeleven4}
          />
        </div>
        <div className="sbicontwleve1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacktwlve1`}
            value={formik.values?.spineDetails[index]?.spinbacktwlve1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktwlve1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktwlve1}
          />
        </div>
        <div className="sbicontwleve2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacktwlve2`}
            value={formik.values?.spineDetails[index]?.spinbacktwlve2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktwlve2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktwlve2}
          />
        </div>
        <div className="sbicontwleve3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacktwlve3`}
            value={formik.values?.spineDetails[index]?.spinbacktwlve3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktwlve3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktwlve3}
          />
        </div>
        <div className="sbicontwleve4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacktwlve4`}
            value={formik.values?.spineDetails[index]?.spinbacktwlve4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktwlve4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktwlve4}
          />
        </div>
        <div className="sbiconsubone1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubone1`}
            value={formik.values?.spineDetails[index]?.spinbacksubone1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubone1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubone1}
          />
        </div>
        <div className="sbiconsubone2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubone2`}
            value={formik.values?.spineDetails[index]?.spinbacksubone2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubone2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubone2}
          />
        </div>
        <div className="sbiconsubone3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubone3`}
            value={formik.values?.spineDetails[index]?.spinbacksubone3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubone3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubone3}
          />
        </div>
        <div className="sbiconsubone4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubone4`}
            value={formik.values?.spineDetails[index]?.spinbacksubone4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubone4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubone4}
          />
        </div>
        <div className="sbiconsubtwo1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubtwo1`}
            value={formik.values?.spineDetails[index]?.spinbacksubtwo1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubtwo1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubtwo1}
          />
        </div>
        <div className="sbiconsubtwo2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubtwo2`}
            value={formik.values?.spineDetails[index]?.spinbacksubtwo2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubtwo2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubtwo2}
          />
        </div>
        <div className="sbiconsubtwo3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubtwo3`}
            value={formik.values?.spineDetails[index]?.spinbacksubtwo3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubtwo3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubtwo3}
          />
        </div>
        <div className="sbiconsubtwo4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubtwo4`}
            value={formik.values?.spineDetails[index]?.spinbacksubtwo4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubtwo4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubtwo4}
          />
        </div>
        <div className="sbiconsubthree1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubthree1`}
            value={formik.values?.spineDetails[index]?.spinbacksubthree1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubthree1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubthree1}
          />
        </div>
        <div className="sbiconsubthree2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubthree2`}
            value={formik.values?.spineDetails[index]?.spinbacksubthree2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubthree2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubthree2}
          />
        </div>
        <div className="sbiconsubthree3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubthree3`}
            value={formik.values?.spineDetails[index]?.spinbacksubthree3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubthree3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubthree3}
          />
        </div>
        <div className="sbiconsubthree4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubthree4`}
            value={formik.values?.spineDetails[index]?.spinbacksubthree4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubthree4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubthree4}
          />
        </div>
        <div className="sbiconsubfour1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubfour1`}
            value={formik.values?.spineDetails[index]?.spinbacksubfour1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubfour1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubfour1}
          />
        </div>
        <div className="sbiconsubfour2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubfour2`}
            value={formik.values?.spineDetails[index]?.spinbacksubfour2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubfour2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubfour2}
          />
        </div>
        <div className="sbiconsubfour3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubfour3`}
            value={formik.values?.spineDetails[index]?.spinbacksubfour3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubfour3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubfour3}
          />
        </div>
        <div className="sbiconsubfour4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubfour4`}
            value={formik.values?.spineDetails[index]?.spinbacksubfour4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubfour4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubfour4}
          />
        </div>
        <div className="sbiconsubfive1">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubfive1`}
            value={formik.values?.spineDetails[index]?.spinbacksubfive1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubfive1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubfive1}
          />
        </div>
        <div className="sbiconsubfive2">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubfive2`}
            value={formik.values?.spineDetails[index]?.spinbacksubfive2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubfive2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubfive2}
          />
        </div>
        <div className="sbiconsubfive3">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubfive3`}
            value={formik.values?.spineDetails[index]?.spinbacksubfive3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubfive3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubfive3}
          />
        </div>
        <div className="sbiconsubfive4">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacksubfive4`}
            value={formik.values?.spineDetails[index]?.spinbacksubfive4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacksubfive4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacksubfive4}
          />
        </div>
        <div className="sbicontopleft">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacktopleft`}
            value={formik.values?.spineDetails[index]?.spinbacktopleft}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktopleft`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktopleft}
          />
        </div>
        <div className="sbicontopright">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbacktopright`}
            value={formik.values?.spineDetails[index]?.spinbacktopright}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbacktopright`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbacktopright}
          />
        </div>
        <div className="sbiconmiddleleft">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackmiddleleft`}
            value={formik.values?.spineDetails[index]?.spinbackmiddleleft}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackmiddleleft`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackmiddleleft}
          />
        </div>
        <div className="sbiconmiddleright">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackmiddleright`}
            value={formik.values?.spineDetails[index]?.spinbackmiddleright}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackmiddleright`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackmiddleright}
          />
        </div>
        <div className="sbiconbottomleft">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackbottomleft`}
            value={formik.values?.spineDetails[index]?.spinbackbottomleft}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackbottomleft`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackbottomleft}
          />
        </div>
        <div className="sbiconbottomright">
          <Checkbox
            style={{
              width: 16,
              height: 16,
            }}
            name={`spineDetails[${index}].spinbackbottomright`}
            value={formik.values?.spineDetails[index]?.spinbackbottomright}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinbackbottomright`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinbackbottomright}
          />
        </div>
      </div>

    </>
  );
}
RightSpineeval.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RightSpineeval;

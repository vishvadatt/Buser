import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Spinalcord1u from "../../../../../../assets/images/excercisetool/spinalcord1update.png";

function LeftSpineeval({ formik, index }) {
  return (
    <>
      <div className="container">
        <img src={Spinalcord1u} alt="left" height="950px" width="auto" />
        <div className="sficon1">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            color="primary"
            name={`spineDetails[${index}].spinf1`}
            value={formik.values?.spineDetails[index]?.spinf1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinf1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinf1}
          />
        </div>
        <div className="sficon2">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinf2`}
            value={formik.values?.spineDetails[index]?.spinf2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinf2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinf2}
          />
        </div>
        <div className="sficon3">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinf3`}
            value={formik.values?.spineDetails[index]?.spinf3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinf3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinf3}
          />
        </div>
        <div className="sficon4">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinf4`}
            value={formik.values?.spineDetails[index]?.spinf4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinf4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinf4}
          />
        </div>
        <div className="sficon5">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinf5`}
            value={formik.values?.spineDetails[index]?.spinf5}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinf5`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinf5}
          />
        </div>
        <div className="sficon6">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinf6`}
            value={formik.values?.spineDetails[index]?.spinf6}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinf6`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinf6}
          />
        </div>
        <div className="sficon7">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`spineDetails[${index}].spinf7`}
            value={formik.values?.spineDetails[index]?.spinf7}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinf7`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinf7}
          />
        </div>
        <div className="sficons1">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront1`}
            value={formik.values?.spineDetails[index]?.spinfront1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront1}
          />
        </div>
        <div className="sficons2">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront2`}
            value={formik.values?.spineDetails[index]?.spinfront2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront2}
          />
        </div>
        <div className="sficons3">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront3`}
            value={formik.values?.spineDetails[index]?.spinfront3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront3}
          />
        </div>
        <div className="sficons4">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront4`}
            value={formik.values?.spineDetails[index]?.spinfront4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront4}
          />
        </div>
        <div className="sficons5">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront5`}
            value={formik.values?.spineDetails[index]?.spinfront5}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront5`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront5}
          />
        </div>
        <div className="sficons6">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront6`}
            value={formik.values?.spineDetails[index]?.spinfront6}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront6`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront6}
          />
        </div>
        <div className="sficons7">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront7`}
            value={formik.values?.spineDetails[index]?.spinfront7}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront7`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront7}
          />
        </div>
        <div className="sficons8">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront8`}
            value={formik.values?.spineDetails[index]?.spinfront8}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront8`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront8}
          />
        </div>
        <div className="sficons9">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront9`}
            value={formik.values?.spineDetails[index]?.spinfront9}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront9`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront9}
          />
        </div>
        <div className="sficons10">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront10V`}
            value={formik.values?.spineDetails[index]?.spinfront10V}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront10V`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront10V}
          />
        </div>
        <div className="sficons11">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront11`}
            value={formik.values?.spineDetails[index]?.spinfront11}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront11`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront11}
          />
        </div>
        <div className="sficons12">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfront12`}
            value={formik.values?.spineDetails[index]?.spinfront12}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfront12`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfront12}
          />
        </div>
        <div className="sficonssub1">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsub1`}
            value={formik.values?.spineDetails[index]?.spinfrontsub1}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfrontsub1`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsub1}
          />
        </div>
        <div className="sficonssub2">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsub2`}
            value={formik.values?.spineDetails[index]?.spinfrontsub2}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfrontsub2`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsub2}
          />
        </div>
        <div className="sficonssub3">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsub3`}
            value={formik.values?.spineDetails[index]?.spinfrontsub3}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfrontsub3`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsub3}
          />
        </div>
        <div className="sficonssub4">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsub4`}
            value={formik.values?.spineDetails[index]?.spinfrontsub4}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfrontsub4`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsub4}
          />
        </div>
        <div className="sficonssub5">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsub5`}
            value={formik.values?.spineDetails[index]?.spinfrontsub5}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfrontsub5`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsub5}
          />
        </div>
        <div className="sficonsubleft">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsubleft`}
            value={formik.values?.spineDetails[index]?.spinfrontsubleft}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfrontsubleft`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsubleft}
          />
        </div>
        <div className="sficonsubright">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsubright`}
            value={formik.values?.spineDetails[index]?.spinfrontsubright}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfrontsubright`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsubright}
          />
        </div>
        <div className="sficontopleft">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsublefttop`}
            value={formik.values?.spineDetails[index]?.spinfrontsublefttop}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfrontsublefttop`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsublefttop}
          />
        </div>
        <div className="sficontopright">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsubrighttop`}
            value={formik.values?.spineDetails[index]?.spinfrontsubrighttop}
            onChange={(e) =>
              formik.setFieldValue(`spineDetails[${index}].spinfrontsubrighttop`, e.target.checked)
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsubrighttop}
          />
        </div>
        <div className="sficonleftbottom">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsubleftbottom`}
            value={formik.values?.spineDetails[index]?.spinfrontsubleftbottom}
            onChange={(e) =>
              formik.setFieldValue(
                `spineDetails[${index}].spinfrontsubleftbottom`,
                e.target.checked
              )
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsubleftbottom}
          />
        </div>
        <div className="sficonrightbottom">
          <Checkbox
            style={{
              width: 17,
              height: 16,
            }}
            name={`spineDetails[${index}].spinfrontsubrightbottom`}
            value={formik.values?.spineDetails[index]?.spinfrontsubrightbottom}
            onChange={(e) =>
              formik.setFieldValue(
                `spineDetails[${index}].spinfrontsubrightbottom`,
                e.target.checked
              )
            }
            checked={formik.values?.spineDetails[index]?.spinfrontsubrightbottom}
          />
        </div>
      </div>
    </>
  );
}
LeftSpineeval.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default LeftSpineeval;

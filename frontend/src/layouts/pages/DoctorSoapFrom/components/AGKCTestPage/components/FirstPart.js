import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import PropTypes from "prop-types";

function FirstPart({ formik, index }) {
  return (
    <>
      <div className="top">
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              name={`AGKCDetail[${index}].HookCervicalSitupsControl`}
              value={formik.values?.AGKCDetail[index]?.HookCervicalSitupsControl}
              onChange={(e) =>
                formik.setFieldValue(
                  `AGKCDetail[${index}].HookCervicalSitupsControl`,
                  e.target.value
                )
              }
              label="HookCervicalSitupsControl"
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              Hook Cervical Situps (<span> Longus Colli </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            label="HookCervicalSitups"
            name={`AGKCDetail[${index}].HookCervicalSitups`}
            value={formik.values?.AGKCDetail[index]?.HookCervicalSitups}
            onChange={(e) =>
              formik.setFieldValue(`AGKCDetail[${index}].HookCervicalSitups`, e.target.value)
            }
          />
        </div>
      </div>
      <div className="top">
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              label="HookREPControl"
              name={`AGKCDetail[${index}].HookREPControl`}
              value={formik.values?.AGKCDetail[index]?.HookREPControl}
              onChange={(e) =>
                formik.setFieldValue(`AGKCDetail[${index}].HookREPControl`, e.target.value)
              }
              // name="HookREPControl"
              // value={HookREPControlV}
              // onChange={formik.handleChange}
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              Hook REP (+ on Blocks)(<span> Rhomboids </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            label="HookREP"
            name={`AGKCDetail[${index}].HookREP`}
            value={formik.values?.AGKCDetail[index]?.HookREP}
            onChange={(e) => formik.setFieldValue(`AGKCDetail[${index}].HookREP`, e.target.value)}
            // name="HookREP"
            // value={HookREPV}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="top">
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              label="PUpPosittoScapControl"
              name={`AGKCDetail[${index}].PUpPosittoScapControl`}
              value={formik.values?.AGKCDetail[index]?.PUpPosittoScapControl}
              onChange={(e) =>
                formik.setFieldValue(`AGKCDetail[${index}].PUpPosittoScapControl`, e.target.value)
              }
              // value={PUpPosittoScapControlV}
              // name="PUpPosittoScapControl"
              // onChange={formik.handleChange}
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              P/Up Posit to Scap P/Ups / / St @ Wall EF (<span> Serratus </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            // value={PUpPosittoScapV}
            name={`AGKCDetail[${index}].PUpPosittoScap`}
            value={formik.values?.AGKCDetail[index]?.PUpPosittoScap}
            onChange={(e) =>
              formik.setFieldValue(`AGKCDetail[${index}].PUpPosittoScap`, e.target.value)
            }
            // name="PUpPosittoScap"
            // label="PUpPosittoScap"
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="top">
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              label="BreathingControl"
              name={`AGKCDetail[${index}].BreathingControl`}
              value={formik.values?.AGKCDetail[index]?.BreathingControl}
              onChange={(e) =>
                formik.setFieldValue(`AGKCDetail[${index}].BreathingControl`, e.target.value)
              }
              // name="BreathingControl"
              // value={BreathingControlV}
              // onChange={formik.handleChange}
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              Breathing(<span> Diaphragm </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            label="Breathing"
            name={`AGKCDetail[${index}].Breathing`}
            value={formik.values?.AGKCDetail[index]?.Breathing}
            onChange={(e) => formik.setFieldValue(`AGKCDetail[${index}].Breathing`, e.target.value)}
            // name="Breathing"
            // value={BreathingV}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="top">
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              label="SideBridgeonElbowFtControl"
              name={`AGKCDetail[${index}].SideBridgeonElbowFtControl`}
              value={formik.values?.AGKCDetail[index]?.SideBridgeonElbowFtControl}
              onChange={(e) =>
                formik.setFieldValue(
                  `AGKCDetail[${index}].SideBridgeonElbowFtControl`,
                  e.target.value
                )
              }
              // value={SideBridgeonElbowFtControlV}
              // name="SideBridgeonElbowFtControl"
              // onChange={formik.handleChange}
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              Side Bridge on Elbow / Ft on Block (<span> QLO </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            label="SideBridgeonElbowFt"
            name={`AGKCDetail[${index}].SideBridgeonElbowFt`}
            value={formik.values?.AGKCDetail[index]?.SideBridgeonElbowFt}
            onChange={(e) =>
              formik.setFieldValue(`AGKCDetail[${index}].SideBridgeonElbowFt`, e.target.value)
            }
            // value={SideBridgeonElbowFtV}
            // name="SideBridgeonElbowFt"
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="top">
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              label="SittingSideBendsArmsCrossedControl"
              name={`AGKCDetail[${index}].SittingSideBendsArmsCrossedControl`}
              value={formik.values?.AGKCDetail[index]?.SittingSideBendsArmsCrossedControl}
              onChange={(e) =>
                formik.setFieldValue(
                  `AGKCDetail[${index}].SittingSideBendsArmsCrossedControl`,
                  e.target.value
                )
              }
              // name="SittingSideBendsArmsCrossedControl"
              // value={SittingSideBendsArmsCrossedControlV}
              // onChange={formik.handleChange}
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              Sitting Side Bends Arms Crossed (<span> IPQM </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            label="SittingSideBendsArmsCrossed"
            name={`AGKCDetail[${index}].SittingSideBendsArmsCrossed`}
            value={formik.values?.AGKCDetail[index]?.SittingSideBendsArmsCrossed}
            onChange={(e) =>
              formik.setFieldValue(
                `AGKCDetail[${index}].SittingSideBendsArmsCrossed`,
                e.target.value
              )
            }
            // name="SittingSideBendsArmsCrossed"
            // value={SittingSideBendsArmsCrossedV}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="top">
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              label="SupineLegLiftsintoAbdControl"
              name={`AGKCDetail[${index}].SupineLegLiftsintoAbdControl`}
              value={formik.values?.AGKCDetail[index]?.SupineLegLiftsintoAbdControl}
              onChange={(e) =>
                formik.setFieldValue(
                  `AGKCDetail[${index}].SupineLegLiftsintoAbdControl`,
                  e.target.value
                )
              }
              // name="SupineLegLiftsintoAbdControl"
              // onChange={formik.handleChange}
              // value={SupineLegLiftsintoAbdControlV}
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              Supine Leg Lifts into Abd. (<span> Iliopsoas </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            label="SupineLegLiftsintoAbd"
            name={`AGKCDetail[${index}].SupineLegLiftsintoAbd`}
            value={formik.values?.AGKCDetail[index]?.SupineLegLiftsintoAbd}
            onChange={(e) =>
              formik.setFieldValue(`AGKCDetail[${index}].SupineLegLiftsintoAbd`, e.target.value)
            }
            // name="SupineLegLiftsintoAbd"
            // onChange={formik.handleChange}
            // value={SupineLegLiftsintoAbdV}
          />
        </div>
      </div>
      <div className="top">
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              label="SidelyingInnerThighLiftsControl"
              name={`AGKCDetail[${index}].SidelyingInnerThighLiftsControl`}
              value={formik.values?.AGKCDetail[index]?.SidelyingInnerThighLiftsControl}
              onChange={(e) =>
                formik.setFieldValue(
                  `AGKCDetail[${index}].SidelyingInnerThighLiftsControl`,
                  e.target.value
                )
              }
              // name="SidelyingInnerThighLiftsControl"
              // value={SidelyingInnerThighLiftsControlV}
              // onChange={formik.handleChange}
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              Sidelying Inner Thigh Lifts (<span> Adductors </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            label="SidelyingInnerThighLifts"
            name={`AGKCDetail[${index}].SidelyingInnerThighLifts`}
            value={formik.values?.AGKCDetail[index]?.SidelyingInnerThighLifts}
            onChange={(e) =>
              formik.setFieldValue(`AGKCDetail[${index}].SidelyingInnerThighLifts`, e.target.value)
            }
            // name="SidelyingInnerThighLifts"
            // value={SidelyingInnerThighLiftsV}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      <div>
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              label="ProneForefootBlockSqueezesControl"
              name={`AGKCDetail[${index}].ProneForefootBlockSqueezesControl`}
              value={formik.values?.AGKCDetail[index]?.ProneForefootBlockSqueezesControl}
              onChange={(e) =>
                formik.setFieldValue(
                  `AGKCDetail[${index}].ProneForefootBlockSqueezesControl`,
                  e.target.value
                )
              }
              // name="ProneForefootBlockSqueezesControl"
              // value={ProneForefootBlockSqueezesControlV}
              // onChange={formik.handleChange}
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              Prone Forefoot Block Squeezes (<span> Popliteus </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            label="ProneForefootBlockSqueezes"
            name={`AGKCDetail[${index}].ProneForefootBlockSqueezes`}
            value={formik.values?.AGKCDetail[index]?.ProneForefootBlockSqueezes}
            onChange={(e) =>
              formik.setFieldValue(
                `AGKCDetail[${index}].ProneForefootBlockSqueezes`,
                e.target.value
              )
            }
            // name="ProneForefootBlockSqueezes"
            // value={ProneForefootBlockSqueezesV}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
      <div>
        <div className="agkg">
          <div>
            <select
              className="selectvalue"
              label="HookWallAbAdWideControl"
              name={`AGKCDetail[${index}].HookWallAbAdWideControl`}
              value={formik.values?.AGKCDetail[index]?.HookWallAbAdWideControl}
              onChange={(e) =>
                formik.setFieldValue(`AGKCDetail[${index}].HookWallAbAdWideControl`, e.target.value)
              }
              // name="HookWallAbAdWideControl"
              // value={HookWallAbAdWideControlV}
              // onChange={formik.handleChange}
            >
              <option></option>
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="agkgsubtitleform">
            <p>
              Hook/Wall Ab/Ad Wide (<span> Tib Post. </span>)
            </p>
          </div>
        </div>
        <div className="Exercises">
          <input
            type="text"
            label="HookWallAbAdWide"
            name={`AGKCDetail[${index}].HookWallAbAdWide`}
            value={formik.values?.AGKCDetail[index]?.HookWallAbAdWide}
            onChange={(e) =>
              formik.setFieldValue(`AGKCDetail[${index}].HookWallAbAdWide`, e.target.value)
            }
            // name="HookWallAbAdWide"
            // value={HookWallAbAdWideV}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
    </>
  );
}
FirstPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default FirstPart;

import { Grid } from "@mui/material";
import React from "react";
import "../../style.scss";
import PropTypes from "prop-types";

export const DropdownComponents = (propsValue) => {
  return (
    <>
      <select className="dropDownInputComponent1" name={propsValue.name} value={propsValue.value} onChange={propsValue.formik.handleChange}>
        <option></option>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
    </>
  );
};

const ComponentFour = ({ formik }) => {
  const { values } = formik;
  const arr1 = [0,1,2,3,4,5,6];
  return (
    <>
      <Grid container>
  <Grid lg={12} xs={12} sm={12} className="headingTable3" ><span style={{fontSize : "14px" ,fontWeight : "bold"}}>Ankle</span></Grid>
        <Grid item lg={6} sm={6} xs={12} pt={2} className="grph1">
        <div
                style={{
                  height: "150px",
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  margin : "auto"
                }}
              >
                <span
                  style={{
                    height: "2px",
                    width: "40%",
                    backgroundColor: "black",
                    display: "block",
                    zIndex: 5,
                    transform: "rotate(90deg)",
                    position: "absolute",
                    bottom: 20,
                  }}
                ></span>
                <div
                  style={{
                    width: "100%",
                    height: "60%",
                    background: "#e2efda",
                    position: "relative",
                    display: "flex",
                    overflow: "hidden",
                    zIndex: 2,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      height: "2px",
                      width: "95%",
                      backgroundColor: "black",
                      display: "block",
                      position: "relative",
                      top: 0,
                    }}
                  ></span>
                  <span
                    style={{
                      height: "2px",
                      width: "100%",
                      backgroundColor: "black",
                      display: "block",
                      zIndex: 5,
                      transform: "rotate(90deg)",
                      position: "absolute",
                    }}
                  ></span>
                </div>
                <div style={{width : "30px",position : "absolute",left : 0,zIndex : 5}}>
              <p style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "-118px",
                width: "100%",
                left: "90px",
                fontStyle : "italic"
              }}>L</p>
            </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="60"
                  style={{ width: "50px", position: "absolute", top: -37, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -10,fontStyle : "italic"}}>Pla60<sup>o</sup></p>
                </div>
               
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="20"
                  style={{ width: "50px", position: "absolute", bottom: -147,left : -30 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : 125,left : 28,fontStyle : "italic"}}>Dor20<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 0,zIndex : 5}}>
                {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
                <input
                  type="text" className="boxInput"
                  placeholder="20"
                  style={{ width: "50px", position: "absolute", bottom: 35, left: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Eve20<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 147,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="30"
                  style={{ width: "50px", position: "absolute", bottom: 35, right: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>lnv30<sup>o</sup></p>
                </div>
              </div>
        </Grid>

        <Grid item lg={6} sm={6} xs={12} pt={2} className="grph2">
        <div
                style={{
                  height: "150px",
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  margin : "auto"
                }}
              >
                <span
                  style={{
                    height: "2px",
                    width: "40%",
                    backgroundColor: "black",
                    display: "block",
                    zIndex: 5,
                    transform: "rotate(90deg)",
                    position: "absolute",
                    bottom: 20,
                  }}
                ></span>
                <div
                  style={{
                    width: "100%",
                    height: "60%",
                    background: "#e2efda",
                    position: "relative",
                    display: "flex",
                    overflow: "hidden",
                    zIndex: 2,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      height: "2px",
                      width: "95%",
                      backgroundColor: "black",
                      display: "block",
                      position: "relative",
                      top: 0,
                    }}
                  ></span>
                  <span
                    style={{
                      height: "2px",
                      width: "100%",
                      backgroundColor: "black",
                      display: "block",
                      zIndex: 5,
                      transform: "rotate(90deg)",
                      position: "absolute",
                    }}
                  ></span>
                </div>
                <div style={{width : "30px",position : "absolute",left : 0,zIndex : 5}}>
              <p style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "-118px",
                width: "100%",
                left: "90px",
                fontStyle : "italic"
              }}>R</p>
            </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="60"
                  style={{ width: "50px", position: "absolute", top: -37, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -10,fontStyle : "italic"}}>Pla60<sup>o</sup></p>
                </div>
               
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="20"
                  style={{ width: "50px", position: "absolute", bottom: -147,left : -30 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : 125,left : 28,fontStyle : "italic"}}>Dor20<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 0,zIndex : 5}}>
                {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
                <input
                  type="text" className="boxInput"
                  placeholder="30"
                  style={{ width: "50px", position: "absolute", bottom: 35, left: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>lnv30<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 147,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="20"
                  style={{ width: "50px", position: "absolute", bottom: 35, right: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Eve20<sup>o</sup></p>
                </div>
              </div>
        </Grid>
        <Grid item lg={12} sm={12} xs={12} pt={10} style={{overflowX: "auto"}} className="tab4">
          <table className="tableContainer">
            <tr>
              <th></th>
              <th>Left</th>
              <th>Right</th>
              <th></th>
            </tr>
            <tbody>
            {
              arr1 && arr1.map((data,i) => {
                return(
                  <>
                    <tr>
                      <td style={{textAlign : "right"}}>{values?.array4[i]?.leftName}</td>
                      <td>
                        <DropdownComponents name={`array4[${i}].left`} value={values?.array4[i]?.left} formik={formik}/>
                      </td>
                      <td>
                        <DropdownComponents name={`array4[${i}].right`} value={values?.array4[i]?.right} formik={formik}/>
                      </td>
                      <td style={{textAlign : "left"}}>{values?.array4[i]?.rightName}</td>  
                    </tr>  
                  </>
                )
              })
            }
            </tbody>
          </table>
        </Grid>
      </Grid>
    </>
  );
};
ComponentFour.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default ComponentFour;

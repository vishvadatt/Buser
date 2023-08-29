import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getDoctorShopFormDataAction } from 'store/actions/actions';
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

const ComponentOne = ({formik}) => {
    const {values} = formik;
    const arr1 = [0,1,2,3,4,5]
  return (
    <>
    {/* <Grid item lg={7} sm={12} style={{ background: "#e2efda", position: "relative" }}> */}
          <Grid container>
          <Grid lg={12} sm={12} xs={12} className="headingTable" ><span style={{fontSize : "14px" ,fontWeight : "bold",paddingLeft : "25px"}}>Elbow</span></Grid>
            <Grid item lg={6} sm={6} cs={12} pt={2} pl={2} margin="auto" 
            className='GraphpaddingTop2'
            >
            <div
                style={{
                  height: "150px",
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
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
                left: "94px",
                fontStyle : "italic"
              }}>L</p>
            </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="140"
                  style={{ width: "50px", position: "absolute", top: -37, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -10,fontStyle : "italic"}}>Flx140<sup>o</sup></p>
                </div>
               
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="0"
                  style={{ width: "50px", position: "absolute", bottom: -147,left : -30 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : 125,left : 28,fontStyle : "italic"}}>Ext0<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 0,zIndex : 5}}>
                {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
                <input
                  type="text" className="boxInput"
                  placeholder="180"
                  style={{ width: "50px", position: "absolute", bottom: 35, left: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Sup180<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 147,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="60"
                  style={{ width: "50px", position: "absolute", bottom: 35, right: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Pro60<sup>o</sup></p>
                </div>
              </div>
            </Grid>

            <Grid item lg={6} sm={6} cs={12} pt={2} pl={2} margin="auto"
            className="GraphpaddingTop1"
            >
            <div
                style={{
                  height: "150px",
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
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
                left: "94px",
                fontStyle : "italic"
              }}>R</p>
            </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="140"
                  style={{ width: "50px", position: "absolute", top: -37, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -10,fontStyle : "italic"}}>Flx140<sup>o</sup></p>
                </div>
               
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="0"
                  style={{ width: "50px", position: "absolute", bottom: -147,left : -30 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : 125,left : 28,fontStyle : "italic"}}>Ext0<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 0,zIndex : 5}}>
                {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
                <input
                  type="text" className="boxInput"
                  placeholder="60"
                  style={{ width: "50px", position: "absolute", bottom: 35, left: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Pro60<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 147,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="180"
                  style={{ width: "50px", position: "absolute", bottom: 35, right: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Sup180<sup>o</sup></p>
                </div>
              </div>
            </Grid>
            
            <Grid item lg={12} sm={12} xs={12} className="tabComp1"  style={{ overflowX: "auto" }} pt={10}>
  
            <table  className="tableContainer">
              <tr>
                <th></th>
                <th>Left</th>
                <th>Right</th>
                <th></th>
              </tr>
              <tbody>
                {
                  arr1 && arr1.map((data,i) => {
                    return (
                      <>
                        <tr>
                          <td style={{textAlign : "right"}}>{values?.array1[i]?.leftName}</td>
                          <td>
                            <DropdownComponents name={`array1[${i}].left`} value={values?.array1[i]?.left} formik={formik}/>
                          </td>
                          <td>
                            <DropdownComponents name={`array1[${i}].right`} value={values?.array1[i]?.right} formik={formik}/>
                          </td>
                          <td style={{textAlign : "left"}}>{values?.array1[i]?.rightName}</td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </table>
            </Grid>
          </Grid>

          {/* <Grid container >
            
          </Grid> */}
        {/* </Grid> */}
    </>
  )
}
ComponentOne.propTypes = {
    formik : PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
}
export default ComponentOne
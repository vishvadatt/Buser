import { Grid } from "@mui/material";
import React from "react";
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

const ComponentThree = ({formik}) => {
    const {values} = formik;
    const arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  return (
    <>
      <Grid container >
  <Grid lg={12} xs={12} xm={12} className="headingTable2" ><span style={{fontSize : "14px" ,fontWeight : "bold"}}>Hip</span></Grid>
        <Grid lg={6} sm={6} xs={12} >
        <div
          className="graphTwo"
            // style={{
            //   height: "250px",
            //   width: "300px",
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   position: "relative",
            // }}
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
                background: "white",
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
                  top: "2px",
                }}
              ></span>
              <span
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "black",
                  display: "block",
                  transform: "rotate(45deg)",
                }}
              ></span>
              <span
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "black",
                  display: "block",
                  transform: "rotate(315deg)",
                  position: "relative",
                  top: "-2px",
                  zIndex: 0,
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
              <p className="labelL" style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "-105px",
                width: "100%",
                left: "142px",
                fontStyle : "italic"
              }}>L</p>
            </div>
            <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="140"
              style={{ width: "50px", position: "absolute", top: 22, zIndex: 5 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : 50,left : -26,fontStyle : "italic"}}>Flx140<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="20"
              style={{ width: "50px", position: "absolute", bottom: -75 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : 25,left : -20,fontStyle : "italic"}}>Ext20<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,left : -3,zIndex : 5}}>
            {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
            <input
              type="text" className="boxInput add45Right"
              placeholder="45"
              style={{ width: "50px", position: "absolute", bottom: -4, left: 10, zIndex: 5 }}
            />
            <p className="add45RightLabel" style={{fontSize : "13px",position : "absolute",top : -48,left:10,fontStyle : "italic" }}>Abd45<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput add30left"
              placeholder="30"
              style={{ width: "50px", position: "absolute", bottom: -4, right: 10, zIndex: 5 }}
            />
            <p className="add30leftLabel" style={{fontSize : "13px",position : "absolute",top : -48,left:-7 ,fontStyle : "italic"}}>Add30<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="45"
              style={{ width: "50px", position: "absolute", top: -70, right: 10, zIndex: 5 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : -43,left:6,fontStyle : "italic" }}>IR45<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",left : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="45"
              style={{ width: "50px", position: "absolute", top: -70, left: 10, zIndex: 5 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : -43,left:0 ,fontStyle : "italic"}}>ER45<sup>o</sup></p>
            </div>
            {/* <p style={{position : 'absolute',color : "red"}}>cs Rom</p> */}
          </div>
        </Grid>

        <Grid lg={6} sm={6} xs={12} className="GraphpaddingTop" >
        <div
          className="graphTwo"
            // style={{
            //   height: "250px",
            //   width: "300px",
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   position: "relative",
            // }}
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
                background: "white",
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
                  top: "2px",
                }}
              ></span>
              <span
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "black",
                  display: "block",
                  transform: "rotate(45deg)",
                }}
              ></span>
              <span
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "black",
                  display: "block",
                  transform: "rotate(315deg)",
                  position: "relative",
                  top: "-2px",
                  zIndex: 0,
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
              <p className="labelR" style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "-105px",
                width: "100%",
                left: "142px",
                fontStyle : "italic"
              }}>R</p>
            </div>
            <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="140"
              style={{ width: "50px", position: "absolute", top: 22, zIndex: 5 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : 50,left : -30,fontStyle : "italic"}}>Flx140<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="20"
              style={{ width: "50px", position: "absolute", bottom: -75 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : 25,left : -25,fontStyle : "italic"}}>Ext20<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,left : -3,zIndex : 5}}>
            {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
            <input
              type="text" className="boxInput add30left"
              placeholder="30"
              style={{ width: "50px", position: "absolute", bottom: -4, left: 10, zIndex: 5 }}
            />
            <p className="add30leftLabel" style={{fontSize : "13px",position : "absolute",top : -48,left:10,fontStyle : "italic" }}>Add30<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput add45Right"
              placeholder="45"
              style={{ width: "50px", position: "absolute", bottom: -4, right: 10, zIndex: 5 }}
            />
            <p className="add45RightLabel" style={{fontSize : "13px",position : "absolute",top : -48,left:-7,fontStyle : "italic" }}>Abd45<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="45"
              style={{ width: "50px", position: "absolute", top: -70, right: 10, zIndex: 5 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : -43,left:6,fontStyle : "italic" }}>ER45<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",left : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="45"
              style={{ width: "50px", position: "absolute", top: -70, left: 10, zIndex: 5 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : -43,left:0 ,fontStyle : "italic"}}>IR45<sup>o</sup></p>
            </div>
            {/* <p style={{position : 'absolute',color : "red"}}>cs Rom</p> */}
          </div>
        </Grid>
      </Grid>
      <Grid container pt={10} style={{ overflowX: "auto" }} className="tabFive">
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
                      <td style={{textAlign : "right"}}>{values?.array3[i]?.leftName}</td>
                      <td>
                        <DropdownComponents name={`array3[${i}].left`} value={values?.array3[i]?.left} formik={formik}/>
                      </td>
                      <td>
                        <DropdownComponents name={`array3[${i}].right`} value={values?.array3[i]?.right} formik={formik}/>
                      </td>
                      <td style={{textAlign : "left"}}>{values?.array3[i]?.rightName}</td>  
                    </tr>  
                  </>
                )
              })
            }
          </tbody>
        </table>
      </Grid>
    </>
  );
};

ComponentThree.propTypes = {
    formik : PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
}
export default ComponentThree;

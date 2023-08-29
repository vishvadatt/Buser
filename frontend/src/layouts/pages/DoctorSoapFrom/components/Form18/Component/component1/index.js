import { Grid } from "@mui/material";
import React from "react";
import '../../style.scss';
import PropTypes from "prop-types";

export const DropdownComponents = (propsValue) => {
    return (
      <>
        <select className="dropDownInputComponent2" name={propsValue.name} value={propsValue.value} onChange={propsValue.formik.handleChange}>
          <option></option>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
      </>
    );
  };

const ComponentOne = ({formik}) => {
    const {values} = formik;
    const arr1 = [0,1,2,3,4,5,6,7,8,9,10,11];
  return (
    <>
    <Grid container >
  <Grid lg={12} xs={12} sm={12} className="headingTableTwo" ><span style={{fontSize : "14px" ,fontWeight : "bold"}}>Knee</span></Grid>
        <Grid container >
        <Grid item lg={6} md={6}  sm={6} xs={12} pt={5} className="singleGraph1">
            <div 
            className="SingGraph1"
                style={{
                height: "150px",
                width: "290px",
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
                    height: "100%",
                    // background: "red",
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
                    width: "20%",
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
              <p className="LableL" style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "-142px",
                width: "100%",
                left: "140px",
                fontStyle : "italic"
              }}>L</p>
            </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                type="text" className="boxInput"
                placeholder="140"
                style={{ width: "50px", position: "absolute", top: -67, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -40,fontStyle : "italic"}}>Flx140<sup>o</sup></p>
                </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                type="text" className="boxInput"
                placeholder="2"
                style={{ width: "50px", position: "absolute", bottom: -208 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : 158,left : 3,fontStyle : "italic"}}>Ext+/-2<sup>o</sup></p>
                </div>
            </div>
        </Grid>
        <Grid item lg={6} md={6}  sm={6} xs={12} pt={6} className="singleGraph2">
        <div 
        className="SingGraph2"
                style={{
                height: "150px",
                width: "290px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                }}
            >
                {/* <span style={{fontSize : "12px",color : "red",fontWeight : "bold"}}>L</span> */}
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
                    height: "100%",
                    // background: "orange",
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
                    width: "20%",
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
              <p className="LableR" style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "-142px",
                width: "100%",
                left: "140px",
                fontStyle : "italic"
              }}>R</p>
            </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                type="text" className="boxInput"
                placeholder="140"
                style={{ width: "50px", position: "absolute", top: -67, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -40,fontStyle : "italic"}}>Flx140<sup>o</sup></p>
                </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                type="text" className="boxInput"
                placeholder="2"
                style={{ width: "50px", position: "absolute", bottom: -208 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : 157,left : 3,fontStyle : "italic"}}>Ext+/-2<sup>o</sup></p>
                </div>
            </div>
        </Grid>
        </Grid>
        <Grid item lg={12} sm={12} xs={12} pt={10} className="tab2" style={{overflowX : "auto", textAlign:"center"}}>

            <table className="tableContainer1">
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
                            <td style={{textAlign : "right"}}>{values?.array3[i]?.leftName}{(i=== 2 || i=== 3) && <sup>o</sup>}</td>
                            <td>
                                <DropdownComponents name={`array3[${i}].left`} value={values?.array3[i]?.left} formik={formik}/>
                            </td>
                            <td>
                                <DropdownComponents name={`array3[${i}].right`} value={values?.array3[i]?.right} formik={formik}/>
                            </td>
                            <td style={{textAlign : "left"}}>{values?.array3[i]?.rightName}{i === 9 && <><sup>o</sup><span>=PCL</span></>}</td>  
                            </tr>  
                        </>
                        )
                    })
                    }
                </tbody>
                {/* <tr>
                    <td>Anterior Translation</td>
                    <td><DropdownComponents name="anteriorTranslation_left" value={values.anteriorTranslation_left} formik={formik}/></td>
                    <td><DropdownComponents name="" value={""} formik={formik}/></td>
                    <td></td>
                </tr>

                <tr>
                    <td>Posterior Translation</td>
                    <td><DropdownComponents name="posteriorTranslation_left" value={values.posteriorTranslation_left} formik={formik}/></td>
                    <td><DropdownComponents name="" value={""} formik={formik}/></td>
                    <td></td>
                </tr>

                <tr>
                    <td>Varus@0&30</td>
                    <td><DropdownComponents name="Varus_30_left" value={values.Varus_30_left} formik={formik}/></td>
                    <td><DropdownComponents name="" value={""} formik={formik}/></td>
                    <td></td>
                </tr>

                <tr>
                    <td>Valgus@0&30</td>
                    <td><DropdownComponents name="Valgus_30_left" value={values.Valgus_30_left} formik={formik}/></td>
                    <td><DropdownComponents name="" value={""} formik={formik}/></td>
                    <td></td>
                </tr>

                <tr>
                    <td>Thessaly&apos;s</td>
                    <td><DropdownComponents name="thessalys_left" value={values.thessalys_left} formik={formik}/></td>
                    <td><DropdownComponents name="meniscus_tear_right1" value={values.meniscus_tear_right1} formik={formik}/></td>
                    <td>Meniscus tear</td>
                </tr>

                <tr>
                    <td>Noble&apos;s</td>
                    <td><DropdownComponents name="nobles_left" value={values.nobles_left} formik={formik}/></td>
                    <td><DropdownComponents name="itb_friction_syndrome_right" value={values.itb_friction_syndrome_right} formik={formik}/></td>
                    <td>ITB friction syndrome</td>
                </tr>

                <tr>
                    <td>McKintosh/Pivot Shift</td>
                    <td><DropdownComponents name="mcKintosh_Pivot_Shift_left" value={values.mcKintosh_Pivot_Shift_left} formik={formik}/></td>
                    <td><DropdownComponents name="acl_lcl_rupture_right" value={values.acl_lcl_rupture_right} formik={formik}/></td>
                    <td>ACL/LCL rupture</td>
                </tr>

                <tr>
                    <td>Patellar Ballottement/Grind</td>
                    <td><DropdownComponents name="patellar_Ballottement_Grind" value={values.patellar_Ballottement_Grind} formik={formik}/></td>
                    <td><DropdownComponents name="patellar_effusion_right" value={values.patellar_effusion_right} formik={formik}/></td>
                    <td>Patellar effusion</td>
                </tr>

                <tr>
                    <td>Dial</td>
                    <td><DropdownComponents name="Dial_left" value={values.Dial_left} formik={formik}/></td>
                    <td><DropdownComponents name="ER_90_ER_30_PCL_right" value={values.ER_90_ER_30_PCL_right} formik={formik}/></td>
                    <td>ER@90&gt;ER@30=PCL</td>
                </tr>

                <tr>
                    <td>McMurray&apos;s</td>
                    <td><DropdownComponents name="mcMurrays_left" value={values.mcMurrays_left} formik={formik}/></td>
                    <td><DropdownComponents name="meniscus_tear_right2" value={values.meniscus_tear_right2} formik={formik}/></td>
                    <td>Meniscus tear</td>
                </tr>

                <tr>
                    <td>Wilson&apos;s Test</td>
                    <td><DropdownComponents name="wilsons_Test_left" value={values.wilsons_Test_left} formik={formik}/></td>
                    <td><DropdownComponents name="osteochondral_dessicans_right" value={values.osteochondral_dessicans_right} formik={formik}/></td>
                    <td>Osteochondral dessicans</td>
                </tr> */}
            </table>
        </Grid>
      </Grid>
    </>
  );
};
ComponentOne.propTypes = {
    formik : PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
}
export default ComponentOne;

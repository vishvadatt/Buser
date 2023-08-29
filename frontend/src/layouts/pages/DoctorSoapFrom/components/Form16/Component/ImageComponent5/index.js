import { Grid } from "@mui/material";
import React from "react";
import graph4 from "assets/images/graph4.png";

const ImageComponent5 = () => {
  return (
    <>
      {/* <Grid lg={6} sm={12} xs={12} style={{ position: "relative" }}>
        <img src={graph4} alt="" style={{ width: "100%", objectFit: "contain" }} />
        <input
          type="text"
          placeholder="75"
          style={{
            width: "35px",
            height: "24px",
            position: "absolute",
            bottom: "120px",
            right: "300px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="20"
          style={{
            width: "35px",
            height: "24px",
            position: "absolute",
            bottom: "72px",
            right: "217px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="75"
          style={{
            width: "35px",
            height: "24px",
            position: "absolute",
            bottom: "0px",
            right: "268px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="75"
          style={{
            width: "35px",
            height: "24px",
            position: "absolute",
            bottom: "75px",
            right: "383px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />

        <input
          type="text"
          placeholder="75"
          style={{
            width: "35px",
            height: "24px",
            position: "absolute",
            bottom: "120px",
            right: "84px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="30"
          style={{
            width: "35px",
            height: "24px",
            position: "absolute",
            bottom: "74px",
            right: "14px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="75"
          style={{
            width: "35px",
            height: "24px",
            position: "absolute",
            bottom: "0px",
            right: "50px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="20"
          style={{
            width: "35px",
            height: "24px",
            position: "absolute",
            bottom: "75px",
            right: "160px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
      </Grid> */}
      <Grid container>
  <Grid lg={12} xs={12} xm={12} style={{textAlign : "center"}}><span style={{fontSize : "14px" ,fontWeight : "bold"}}>Wrist</span></Grid>
            <Grid item lg={6} xs={12} sm={6} pt={2} mb={4} className="ptGrph1">
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
                left: "94px",
                fontStyle : "italic"
              }}>L</p>
            </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="75"
                  style={{ width: "50px", position: "absolute", top: -40, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -10,fontStyle : "italic"}}>Flx75<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="75"
                  style={{ width: "50px", position: "absolute", bottom: -150,left : -32 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : 125,left : 28,fontStyle : "italic"}}>Ext75<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 0,zIndex : 5}}>
                {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
                <input
                  type="text" className="boxInput"
                  placeholder="30"
                  style={{ width: "50px", position: "absolute", bottom: 35, left: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Uln30<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 147,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="20"
                  style={{ width: "50px", position: "absolute", bottom: 35, right: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Rad20<sup>o</sup></p>
                </div>
              </div>
            </Grid>

            <Grid item lg={6} xs={12} sm={6} pt={2} className="padingTopGrpah ptGrph2">
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
                left: "94px",
                fontStyle : "italic"
              }}>R</p>
            </div>
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="75"
                  style={{ width: "50px", position: "absolute", top: -37, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -10,fontStyle : "italic"}}>Flx75<sup>o</sup></p>
                </div>
               
                <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="75"
                  style={{ width: "50px", position: "absolute", bottom: -147,left : -30 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : 125,left : 28,fontStyle : "italic"}}>Ext75<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 0,zIndex : 5}}>
                {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
                <input
                  type="text" className="boxInput"
                  placeholder="20"
                  style={{ width: "50px", position: "absolute", bottom: 35, left: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Rad20<sup>o</sup></p>
                </div>

                <div style={{width : "50px",position : "absolute",top : 151,left : 147,zIndex : 5}}>
                <input
                  type="text" className="boxInput"
                  placeholder="30"
                  style={{ width: "50px", position: "absolute", bottom: 35, right: 0, zIndex: 5 }}
                />
                <p style={{fontSize : "13px",position : "absolute",top : -34,left : 0,fontStyle : "italic"}}>Uln30<sup>o</sup></p>
                </div>
              </div>
            </Grid>
            </Grid>
    </>
  );
};

export default ImageComponent5;

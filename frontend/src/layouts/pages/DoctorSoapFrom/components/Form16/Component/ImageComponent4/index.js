import { Grid } from "@mui/material";
import React from "react";
import graph3 from "assets/images/graph3.png";

const ImageComponent4 = () => {
  return (
    <>
      {/* <Grid lg={6} sm={12} xs={12} style={{ position: "relative" }}>
        <img src={graph3} alt="" style={{ width: "100%", objectFit: "contain" }} />
        <input
          type="text"
          placeholder="Fix 180"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "133px",
            right: "255px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="IR 80"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "115px",
            right: "202px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="ER 90"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "116px",
            right: "307px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="Add 60"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "75px",
            right: "193px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="Ext 60"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "-9px",
            right: "250px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "15px",
          }}
        />
        <input
          type="text"
          placeholder="Add 60"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "75px",
            right: "140px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />

        <input
          type="text"
          placeholder="Fix 180"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "134px",
            right: "78px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="ER 90"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "118px",
            right: "28px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="IR 80"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "117px",
            right: "127px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="Add 60"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "67px",
            right: "362px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "13px",
          }}
        />
        <input
          type="text"
          placeholder="Ext 60"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "-9px",
            right: "80px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "15px",
          }}
        />
        <input
          type="text"
          placeholder="180"
          style={{
            width: "42px",
            height: "19px",
            position: "absolute",
            bottom: "75px",
            right: "6px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
            fontSize: "12px",
          }}
        />
      </Grid> */}
<Grid container >
  <Grid lg={12} xs={12} sm={12} style={{textAlign : "center"}}><span style={{fontSize : "14px" ,fontWeight : "bold"}}>Shoulder</span></Grid>
<Grid lg={5} xs={12} sm={6} >
          <div
          className="graph3"
            style={{
              height: "250px",
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              margin : "auto",
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
            <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="180"
              style={{ width: "50px", position: "absolute", top: 22, zIndex: 5 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : 50,left: -23,fontStyle : "italic"}}>Fix180<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="60"
              style={{ width: "50px", position: "absolute", bottom: -92 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : 42,left: -17,fontStyle : "italic"}}>Ext60<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,left : -3,zIndex : 5}}>
            {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
            <input
              type="text" className="boxInput class18090"
              placeholder="18090"
              style={{ width: "50px", position: "absolute", bottom: -4, left: 16, zIndex: 5 }}
            />
            <p className="class18090Label" style={{fontSize : "13px",position : "absolute",top : -50,left:14,fontStyle : "italic" }}>Abd180<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput classAdd60"
              placeholder="60"
              style={{ width: "50px", position: "absolute", bottom: -4, right: 30, zIndex: 5 }}
            />
            <p className="classAdd60Label" style={{fontSize : "13px",position : "absolute",top : -50,left:-25,fontStyle : "italic" }}>Add60<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="80"
              style={{ width: "50px", position: "absolute", top: -70, right: 30, zIndex: 5 }}
            />
             <p style={{fontSize : "13px",position : "absolute",top : -43,left:-31 ,fontStyle : "italic"}}>IR80<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",left : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput ER90"
              placeholder="90"
              style={{ width: "50px", position: "absolute", top: -70, left: 10, zIndex: 5 }}
            />
            <p className="ER90Label" style={{fontSize : "13px",position : "absolute",top : -43,left:0,fontStyle : "italic" }}>ER90<sup>o</sup></p>
            </div>
            <div style={{width : "85px",position : "absolute",left : 0,zIndex : 5}}>
              <p style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "103px",
                width: "100%",
                left: "28px",
                fontStyle : "italic"
              }}>Left GH ROM</p>
            </div>
          </div>
        </Grid>

        <Grid lg={5} xs={12} sm={6} className="image4Parenet padingTopGrpah" >
          <div
          className="graph4"
            style={{
              height: "250px",
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              margin : "auto",
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
            <div style={{width : "50px",position : "absolute",top : 22,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="180"
              style={{ width: "50px", position: "absolute", top: 22, zIndex: 5 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : 50,left: -23,fontStyle : 'italic'}}>Fix180<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="60"
              style={{ width: "50px", position: "absolute", bottom: -92 }}
            />
            <p style={{fontSize : "13px",position : "absolute",top : 42,left: -17,fontStyle : 'italic'}}>Ext60<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,left : -3,zIndex : 5}}>
            {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
            <input
              type="text" className="boxInput classAdd60"
              placeholder="60"
              style={{ width: "50px", position: "absolute", bottom: -4, left: 25, zIndex: 5 }}
            />
            <p className="classAdd60Label" style={{fontSize : "13px",position : "absolute",top : -50,left:25,fontStyle : 'italic' }}>Add60<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput class18090"
              placeholder="180"
              style={{ width: "50px", position: "absolute", bottom: -4, right: 10, zIndex: 5 }}
            />
            <p className="class18090Label" style={{fontSize : "13px",position : "absolute",top : -48,left:-12,fontStyle : 'italic' }}>Abd180<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="90"
              style={{ width: "50px", position: "absolute", top: -70, right: 12, zIndex: 5 }}
            />
             <p style={{fontSize : "13px",position : "absolute",top : -43,left:6 ,fontStyle : 'italic'}}>ER90<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",left : 0,zIndex : 5}} >
            <input
              type="text" className="boxInput IR80"
              placeholder="80"
              style={{ width: "50px", position: "absolute", top: -70, left: 30, zIndex: 5 }}
            />
            <p className="IR80Lable" style={{fontSize : "13px",position : "absolute",top : -41,left:53,fontStyle : 'italic' }}>IR80<sup>o</sup></p>
            </div>
            <div style={{width : "95px",position : "absolute",left : 0,zIndex : 5}}>
              <p className="rightGhRom" style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "103px",
                width: "100%",
                left: "190px",
                fontStyle : "italic"
              }}>Right GH ROM</p>
            </div>
          </div>
        </Grid>
        </Grid>
    </>
  );
};

export default ImageComponent4;

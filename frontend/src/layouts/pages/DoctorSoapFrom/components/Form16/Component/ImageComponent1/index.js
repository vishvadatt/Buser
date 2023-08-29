import { Grid } from "@mui/material";
import React from "react";
import graph1 from "assets/images/graph1.png";
import PropTypes from "prop-types";

const ImageComponent1 = ({formik}) => {
  return (
    <>
      {/* <Grid item lg={6} xs={12} sm={6} mt={2} style={{ position: "relative", marginTop: "20px" }}>
        <img src={graph1} alt="" style={{ width: "100%", objectFit: "contain" }} />
        <input
          type="text"
          placeholder="60"
          style={{
            width: "43px",
            height: "23px",
            position: "absolute",
            bottom: "139px",
            right: "85px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
          }}
        />
        <input
          type="text"
          placeholder="40"
          style={{
            width: "46px",
            height: "23px",
            position: "absolute",
            bottom: "127px",
            right: "137px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
          }}
        />
        <input
          type="text"
          placeholder="80"
          style={{
            width: "46px",
            height: "23px",
            position: "absolute",
            bottom: "82px",
            right: "158px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
          }}
        />
        <input
          type="text"
          placeholder="50"
          style={{
            width: "46px",
            height: "23px",
            position: "absolute",
            bottom: "12px",
            right: "22px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
          }}
        />
        <input
          type="text"
          placeholder="80"
          style={{
            width: "46px",
            height: "23px",
            position: "absolute",
            bottom: "92px",
            right: "0px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
          }}
        />
        <input
          type="text"
          placeholder="40"
          style={{
            width: "46px",
            height: "23px",
            position: "absolute",
            bottom: "141px",
            right: "0px",
            background: "#F1F4FF",
            border: "none",
            outline: "none",
          }}
        />
      </Grid> */}

<Grid lg={6} xs={12} sm={6} mt={2} >
          <div
          className="image1Compo"
            style={{
              height: "230px",
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin : "auto",
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
              placeholder="60"
              style={{ width: "50px", position: "absolute", top: 22, zIndex: 5 }}
            />
            <p style={{fontSize : "15px",position : "absolute",top : 50,fontStyle : "italic"}}>60<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="50"
              style={{ width: "50px", position: "absolute", bottom: -75 }}
            />
            <p style={{fontSize : "15px",position : "absolute",top : 25,fontStyle : "italic"}}>50<sup>o</sup></p>
            </div>

            {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
            <div style={{width : "50px",position : "absolute",top : 225,left : -3,zIndex : 5}}>
            <input
              type="text" className="boxInput right80"
              placeholder="80"
              style={{ width: "50px", position: "absolute", bottom: 11, left: 10, zIndex: 5 }}
            />
            <p className="right80Label" style={{fontSize : "15px",position : "absolute",top : -65,left:10 ,fontStyle : "italic"}}>80<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput right80"
              placeholder="80"
              style={{ width: "50px", position: "absolute", bottom: 11, right: 10, zIndex: 5 }}
            />
            <p className="right80Label" style={{fontSize : "15px",position : "absolute",top : -65,left:10 ,fontStyle : "italic"}}>80<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="40"
              style={{ width: "50px", position: "absolute", bottom: 42, right: 10, zIndex: 5 }}
            />
            <p style={{fontSize : "15px",position : "absolute",top : -43,left:6 ,fontStyle : "italic"}}>40<sup>o</sup></p>
            </div>
            
            <div style={{width : "50px",position : "absolute",left : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="40"
              style={{ width: "50px", position: "absolute", bottom: 42, right: -10, zIndex: 5 }}
            />
            <p style={{fontSize : "15px",position : "absolute",top : -43,left:18,fontStyle : "italic" }}>40<sup>o</sup></p>
            </div>
            <div style={{width : "60px",position : "absolute",left : 0,zIndex : 5}}>
              <p style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "111px",
                width: "100%",
                left: "57px",
                fontStyle : "italic"
              }}>CS ROM</p>
            </div>
          </div>
        </Grid>
    </>
  );
};
ImageComponent1.propTypes = {
    formik : PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
}
export default ImageComponent1;

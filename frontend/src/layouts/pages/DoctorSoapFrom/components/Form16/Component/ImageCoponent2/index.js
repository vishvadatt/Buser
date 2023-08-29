import { Grid } from '@mui/material'
import React from 'react'
import graph2 from "assets/images/graph2.png";

const ImageComponent2 = () => {
  return (
    <>
{/* <Grid item lg={6} xs={12} sm={6} style={{ position: "relative" }}>
                      <img src={graph2} alt="" style={{ width: "100%", objectFit: "contain" }} />
                      <input
                        type="text"
                        placeholder="90"
                        style={{
                          width: "46px",
                          height: "23px",
                          position: "absolute",
                          bottom: "180px",
                          right: "83px",
                          background: "#F1F4FF",
                          border: "none",
                          outline: "none",
                        }}
                      />
                      <input
                        type="text"
                        placeholder="20"
                        style={{
                          width: "55px",
                          height: "25px",
                          position: "absolute",
                          bottom: "153px",
                          right: "135px",
                          background: "#F1F4FF",
                          border: "none",
                          outline: "none",
                        }}
                      />
                      <input
                        type="text"
                        placeholder="30"
                        style={{
                          width: "57px",
                          height: "28px",
                          position: "absolute",
                          bottom: "95px",
                          right: "146px",
                          background: "#F1F4FF",
                          border: "none",
                          outline: "none",
                        }}
                      />
                      <input
                        type="text"
                        placeholder="30"
                        style={{
                          width: "64px",
                          height: "27px",
                          position: "absolute",
                          bottom: "3px",
                          right: "36px",
                          background: "#F1F4FF",
                          border: "none",
                          outline: "none",
                        }}
                      />
                      <input
                        type="text"
                        placeholder="30"
                        style={{
                          width: "58px",
                          height: "28px",
                          position: "absolute",
                          bottom: "95px",
                          right: "0px",
                          background: "#F1F4FF",
                          border: "none",
                          outline: "none",
                        }}
                      />
                      <input
                        type="text"
                        placeholder="20"
                        style={{
                          width: "58px",
                          height: "27px",
                          position: "absolute",
                          bottom: "154px",
                          right: "10px",
                          background: "#F1F4FF",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </Grid> */}

<Grid lg={6} xs={12} sm={6} className="padingTopGrpah">
          <div
          className="image2Compo"
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
              placeholder="90"
              style={{ width: "50px", position: "absolute", top: 22, zIndex: 5 }}
            />
            <p style={{fontSize : "15px",position : "absolute",top : 50,fontStyle : "italic"}}>90<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="30"
              style={{ width: "50px", position: "absolute", bottom: -93 }}
            />
            <p style={{fontSize : "15px",position : "absolute",top : 43,fontStyle : "italic"}}>30<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,left : -3,zIndex : 5}}>
            {/* <input type="text" placeholder="30" style={{width : "50px",position : "absolute",bottom : 15,left : 10,zIndex : 5}}/> */}
            <input
              type="text" className="boxInput right30"
              placeholder="30"
              style={{ width: "50px", position: "absolute", bottom: -5, left: 10, zIndex: 5 }}
            />
            <p className='right30Label' style={{fontSize : "15px",position : "absolute",top : -50,left:10,fontStyle : "italic" }}>30<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",top : 225,right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput right30"
              placeholder="30"
              style={{ width: "50px", position: "absolute", bottom: -7, right: 7, zIndex: 5 }}
            />
            <p className='right30Label' style={{fontSize : "15px",position : "absolute",top : -50,left:10,fontStyle : "italic" }}>30<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",right : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="20"
              style={{ width: "50px", position: "absolute", top: -70, right: 10, zIndex: 5 }}
            />
            <p style={{fontSize : "15px",position : "absolute",top : -43,left:6,fontStyle : "italic" }}>20<sup>o</sup></p>
            </div>

            <div style={{width : "50px",position : "absolute",left : 0,zIndex : 5}}>
            <input
              type="text" className="boxInput"
              placeholder="20"
              style={{ width: "50px", position: "absolute", top: -70, left: 10, zIndex: 5 }}
            />
            <p style={{fontSize : "15px",position : "absolute",top : -43,left:18,fontStyle : "italic" }}>20<sup>o</sup></p>
            </div>
            {/* <p style={{position : 'absolute',color : "red"}}>cs Rom</p> */}
            <div style={{width : "60px",position : "absolute",left : 0,zIndex : 5}}>
              <p className='lsRom' style={{
                fontSize: "14px",
                color: "red",
                position: "absolute",
                top: "111px",
                width: "100%",
                left: "57px",
                fontStyle : "italic"
              }}>LS ROM</p>
            </div>
          </div>
        </Grid>
    </>
  )
}

export default ImageComponent2
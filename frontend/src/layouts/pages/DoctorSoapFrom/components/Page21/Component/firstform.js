import { Button, Grid } from "@mui/material";
import React from "react";
import "../style.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "react-photo-view/dist/react-photo-view.css";

function firstform() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={3} xs={12} sm={6}>
          <Button disabled style={{ width: "90%",background : "rgba(0, 0, 0, 0.12)",height:"45px" }}>
            Upload Front
          </Button>
          <div className="bodyImage">
            <PhotoProvider>
              <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU">
                <img
                  style={{ height: "100%", width: "90%", objectFit: "contain" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Button disabled style={{ width: "90%",background : "rgba(0, 0, 0, 0.12)",height:"45px" }}>
            Upload Back
          </Button>
          <div className="bodyImage">
            <PhotoProvider>
              <PhotoView src="https://previews.123rf.com/images/mhaprang/mhaprang1507/mhaprang150700023/43449930-beautiful-design-of-human-anatomy-back-side-with-description.jpg">
                <img
                  style={{ height: "100%", width: "90%", objectFit: "contain" }}
                  src="https://previews.123rf.com/images/mhaprang/mhaprang1507/mhaprang150700023/43449930-beautiful-design-of-human-anatomy-back-side-with-description.jpg"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Button disabled style={{ width: "90%",background : "rgba(0, 0, 0, 0.12)",height:"45px" }}>
            Upload Left
          </Button>
          <div className="bodyImage">
            <PhotoProvider>
              <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU">
                <img
                  style={{ height: "100%", width: "90%", objectFit: "contain" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Button disabled style={{ width: "90%",background : "rgba(0, 0, 0, 0.12)",height:"45px" }}>
            Upload Right
          </Button>
          <div className="bodyImage">
            <PhotoProvider>
              <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU">
                <img
                  style={{ height: "100%", width: "90%", objectFit: "contain" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </Grid>

        <Grid item lg={3} xs={12} sm={6}>
          <Button disabled style={{ width: "90%",background : "rgba(0, 0, 0, 0.12)",height:"45px" }}>
            Upload HOH
          </Button>
          <div className="bodyImage">
            <PhotoProvider>
              <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU">
                <img
                  style={{ height: "100%", width: "90%", objectFit: "contain" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Button disabled style={{ width: "90%",background : "rgba(0, 0, 0, 0.12)",height:"45px" }}>
            Upload PT
          </Button>
          <div className="bodyImage">
            <PhotoProvider>
              <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU">
                <img
                  style={{ height: "100%", width: "90%", objectFit: "contain" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Button disabled style={{ width: "90%",background : "rgba(0, 0, 0, 0.12)",height:"45px" }}>
            Upload Both
          </Button>
          <div className="bodyImage">
            <PhotoProvider>
              <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU">
                <img
                  style={{ height: "100%", width: "90%", objectFit: "contain" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Grid container height="370px">
            <Grid item lg={12} xs={12} sm={12} height="180px">
              <Button disabled style={{ width: "90%",background : "rgba(0, 0, 0, 0.12)",height:"45px" }}>
                Upload Cat
              </Button>
              <div className="bodyImage1">
                <PhotoProvider>
                  <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU">
                    <img
                      style={{ height: "150px", width: "230px", objectFit: "contain" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU"
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </Grid>
            <Grid item lg={12} xs={12} sm={12} height="180px">
              <Button disabled style={{ width: "90%",background : "rgba(0, 0, 0, 0.12)",height:"45px",marginTop : "5%" }}>
                Upload Dog
              </Button>
              <div className="bodyImage1">
                <PhotoProvider>
                  <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU">
                    <img
                      style={{ height: "150px", width: "230px", objectFit: "contain" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbuZRxSy5I2XLnVbBYxDD3TwS8qQT9gmFelGlG8lzGb6IkwhRQxBv3v6TpBiNczhdC0&usqp=CAU"
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default firstform;

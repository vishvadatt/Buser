import React from "react";
import SoftButton from "components/SoftButton";
import PropTypes from "prop-types";

const VideoTherapy = ({ e, videoTherapyData }) => {

  return (
    <>
      {videoTherapyData?.messages && videoTherapyData?.messages?.length > 0 ? (
        videoTherapyData?.messages?.map((data, i) => {
          return (
            <div
            key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="uploadimage"
                style={{
                  height: "206px",
                  width: "18%",
                  padding: "1px",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={data?.file?.url}
                  className="uploadimageshow"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
                <video
                  src={data?.file?.url}
                  className="uploadimageshow"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div style={{ display: "grid", placeItems: "center", width: "18%" }}>
                {" "}
                <SoftButton
                  onClick={() => navigate(`/viewmore?root=viewmore&id=${e?._id}`)}
                  style={{ color: "#344767", marginLeft: "1rem" }}
                >
                  view more
                </SoftButton>
              </div>
            </div>
          );
        })
      ) : (
        <h5>No Data Found</h5>
      )}
    </>
  );
};

VideoTherapy.propTypes = {
  e: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  videoTherapyData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default VideoTherapy;

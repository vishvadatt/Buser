import { Grid, Modal, IconButton, Box } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import PageLayout from "examples/LayoutContainers/PageLayout";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EDUCATION_VIDEOS_LIST_ACTION } from "store/actions/actions";
import "./Videos.scss";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import CloseIcon from "@mui/icons-material/Close";

const Videos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchText, setSearchText] = useState("");
  const token = useSelector((state) => state.auth.auth.idToken);
  const educationVideosList = useSelector((state) => state.auth.educationVideosList);

  console.log(educationVideosList, "ed");

  useEffect(() => {
    dispatch(EDUCATION_VIDEOS_LIST_ACTION({ searchText, token }));
  }, [searchText]);

  const chunkSize = 105;
  const chunks = [];

  for (let i = 0; i < educationVideosList.length; i += chunkSize) {
    chunks.push(educationVideosList.slice(i, i + chunkSize));
  }
  const handleModalOpen = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };
  // console.log(selectedVideo, "ax");
  return (
    <PageLayout>
      <Box position={"relative"} px={10} py={6}>
        <SoftBox className="video-page-header">
          <SoftBox>
            <SoftTypography className="video-page-title">
              Buser Institute Exercise Education Archives
            </SoftTypography>
          </SoftBox>
          <SoftBox className="video-page-header-action">
            <SoftButton
              onClick={() => {
                navigate(-1);
              }}
              variant="gradient"
              color="dark"
              sx={{
                position: "absolute",
                top: 55,
                left: 55,
              }}
            >
              Back
            </SoftButton>
            <input
              placeholder="Search here..."
              className="input-style"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </SoftBox>
        </SoftBox>
        <Grid container spacing={2}>
          {chunks.map((chunk, columnIndex) => (
            <Grid item xs={12} md={4} key={columnIndex}>
              <ul>
                {chunk.map((video, index) => (
                  <li
                    key={index}
                    onClick={() => handleModalOpen(video)}
                    style={{ cursor: "pointer" }}
                  >
                    {video.name}
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal open={modalOpen}>
        <div className="modal-content">
          <div className="close-icon">
            <CloseIcon onClick={handleModalClose} className="icon" />
          </div>
          <div className="video-div">
            <ReactPlayer url={selectedVideo?.link} controls width="100%" height="100%" />
          </div>
        </div>
      </Modal>
    </PageLayout>
  );
};

export default Videos;

import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Zoom = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("code");
  const navigate = useNavigate();
  useEffect(async () => {
    if (id) {
      const res = await axios.post(`https://api.buserinstitute.com/api/zoom/${id}`);
      console.log(res, "response of submit Authtoken");
      navigate("/profile");
    }
  }, [id]);
  return <div>Zoom</div>;
};

export default Zoom;

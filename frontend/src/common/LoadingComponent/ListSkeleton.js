import React from "react";
import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";
const ListSkeleton = ({ width, height }) => {
  return <Skeleton variant="rounded" width={width} height={height} />;
};

export default ListSkeleton;

ListSkeleton.propTypes = {
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
};

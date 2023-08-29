import React from "react";
// routes config
import Routes from "../routes/index";

const AuthLayout = () => {
  console.log('hi')
  return (
  
		<Routes.Routers />
  );
};

export default React.memo(AuthLayout);
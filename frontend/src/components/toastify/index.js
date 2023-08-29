import React ,{ useState } from "react";
import SoftSnackbar from "components/SoftSnackbar";


export const successToaster = (message , open) => {
    // const [successSB, setSuccessSB] = useState(open);
	// const openSuccessSB = () => setSuccessSB(true);
    // const closeSuccessSB = () => setSuccessSB(false);
	return (<SoftSnackbar 
      color="success"
      icon="check"
      title="Soft UI Dashboard"
      content={message}
      open={open}
	//   onClose={closeSuccessSB}
    //   close={closeSuccessSB}
      bgWhite
    />)
	
};

export const warningToaster = (message , open) => {
	// const [warningSB, setWarningSB] = useState(open);
	// const closeWarningSB = () => setWarningSB(false);
	// const openWarningSB = () => setWarningSB(true);

	return (<SoftSnackbar
		color="warning"
		icon="star"
		title="Soft UI Dashboard"
		content={message}
		open={open}
		// onClose={closeWarningSB}
		// close={closeWarningSB}
		bgWhite
	  />)
	
};

export const errorToaster = (message ,open) => {
	// const [errorSB, setErrorSB] = useState(open);
	// const closeErrorSB = () => setErrorSB(false);
	// const openErrorSB = () => setErrorSB(true);
	return (<SoftSnackbar color="warning"
	icon="star"
	title="Soft UI Dashboard"
	content={message}
	open={open}
	// onClose={closeErrorSB}
	// close={closeErrorSB}
	bgWhite
  />)
	
};


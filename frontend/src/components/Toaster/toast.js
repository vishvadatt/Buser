import React, { useState } from "react";
import { toast } from "react-toastify";
import SoftSnackbar from "components/SoftSnackbar";
import { useDispatch } from "react-redux";
import { clearMessage } from "store/actions/actions";

export const successToast = (message) => {
  return toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const errorToast = (message) => {
  return toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const SuccessSoft = (message) => {
  const dispatch = useDispatch();
  const [successSB, setSuccessSB] = useState(message !== "" ? true : false);
  const openSuccessSB = () => {
    setSuccessSB(true);
  };
  const closeSuccessSB = () => {
    setSuccessSB(false);
    dispatch(clearMessage());
  };

  return (
    <SoftSnackbar
      color="success"
      icon="check"
      title="Buser Instituted"
      content={message}
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );
};

export const WarningSoft = (message, open) => {
  const dispatch = useDispatch();
  const [warningSB, setWarningSB] = useState(open);
  const closeWarningSB = () => {
    setWarningSB(false);
    dispatch(clearMessage());
  };
  const openWarningSB = () => {
    setWarningSB(true);
  };

  return (
    <SoftSnackbar
      color="warning"
      icon="star"
      title="Buser Institute"
      content={message}
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );
};

export const ErrorSoft = (message) => {
  const dispatch = useDispatch();
  const [errorSB, setErrorSB] = useState(message !== "" ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const openErrorSB = () => {
    setErrorSB(true);
  };
  return (
    <SoftSnackbar
      color="error"
      icon="star"
      title="Buser Institute"
      content={message}
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );
};

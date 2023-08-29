import moment from "moment";

const initialValues = {
  page1: [
    {
      understand: "",
      consent: "",
      consent2: "",
      Effect: "",
      ClientName: "",
      ClientSignature: "",
      OfficeSignature: "",
      Date1: "",
      Date2: "",
      Agreement: "",
      formCreatedDate: moment().format("DD-MM-YYYY"),
    },
  ],
};
export default initialValues;

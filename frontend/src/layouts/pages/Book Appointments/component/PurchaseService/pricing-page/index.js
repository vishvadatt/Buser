import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import PricingCards from "./components/PricingCards/index";
import { useSelector } from "react-redux";
import "./style.css";
import { axiosInstance } from "services/AxiosInstance";

function PricingPage({ serviceName }) {
  // let userType = useSelector((state) => state.auth.auth.userType);
  // userType !== "student" ? userType : (userType = "doctor");
  // const plans = useSelector((state) => state.auth.plansData);
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState([]);
  const userID = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.auth.idToken);
  // console.log("clientId", userID._id);console.log(plans,"sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
  const clientId = userID._id;

  const fetchPlans = async () => {
    setLoading(true);
    const data = {
      therapyType: serviceName,
    };
    try {
      const response = await axiosInstance.post(`plan/clientServicePlanList/${clientId}`, data, {
        headers: {
          authorization: token,
        },
      });

      console.log(response?.data?.data?.result, "plans");
      setPlans(response?.data?.data?.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPlans();
  }, []);
  // -------------------------test------------------------

  return (
    <div className="pricing_card_container">
      <Container>
        <PricingCards plans={plans} loading={loading} serviceName={serviceName} />
      </Container>
    </div>
  );
}

PricingPage.propTypes = {
  serviceName: PropTypes.checkPropTypes.string,
};

export default PricingPage;

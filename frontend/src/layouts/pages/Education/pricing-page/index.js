import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import PricingCards from "./components/PricingCards/index";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getAllPlanAction } from "store/actions/actions";

function PricingPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const plans = useSelector((state) => state?.auth?.plansData);
  const userID = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.auth.idToken);
  const clientId = userID._id;

  useEffect(() => {
    dispatch(getAllPlanAction({ clientId, token }));
    setLoading(false);
  }, []);

  return (
    <div className="pricing_card_container">
      <Container>
        <PricingCards plans={plans} loading={loading} />
      </Container>
    </div>
  );
}

export default PricingPage;

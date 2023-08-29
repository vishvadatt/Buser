// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAutoDebitAction } from "store/actions/actions";
import { useLocation } from "react-router-dom";
import "../style.css";
function DefaultPricingCard({ badgeD, badge, price, specifications, action, description }) {
  console.log("price--", specifications);

  const dispatch = useDispatch();
  const location = useLocation();
  const autoDebitValue = useSelector((state) => state.auth.autodebit);

  const renderSpecifications = specifications.map(({ label, includes, autodebit }) => {
    return (
      <>
        <SoftBox key={label} display="flex" alignItems="center" p={1} height="5rem">
          <SoftBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="1rem"
            height="1rem"
            borderRadius="50%"
            shaodw="md"
            bgColor={includes ? "success" : "secondary"}
            variant="gradient"
            mr={2}
          >
            <SoftTypography variant="button" color="white" sx={{ lineHeight: 0 }}>
              <Icon sx={{ fontWeight: "bold" }}>{includes ? "done" : "remove"}</Icon>
            </SoftTypography>
          </SoftBox>
          <SoftTypography variant="body2" color="text">
            {label}
          </SoftTypography>
        </SoftBox>
      </>
    );
  });

  const renderSpecifications1 = specifications.map(({ label, includes, autodebit }) => {
    return (
      <>
        <Card>
          <SoftBox key={label} display="flex" alignItems="center" p={1} mt={9} height="5rem">
            <SoftBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="1rem"
              height="1rem"
              borderRadius="50%"
              shaodw="md"
              // bgColor={includes ? "success" : "secondary"}
              variant="gradient"
              mr={2}
            ></SoftBox>
            <SoftTypography>
              <p
                style={{
                  fontSize: "15px",
                  fontStyle: "italic",
                  color: "#67748e",
                }}
              >
                {description?.description}
              </p>
            </SoftTypography>
          </SoftBox>
        </Card>
      </>
    );
  });

  return (
    <Card>
      <SoftBox pt={1} pb={1} px={2} textAlign="center">
        <SoftBox>
          <SoftBadge
            variant="contained"
            color={badge.color}
            size="sm"
            badgeContent={badge.label}
            circular
            container
            style={{ paddingRight: "0.6rem" }}
          />
          {badgeD?.label && (
            <SoftBadge
              variant="contained"
              color={badgeD.color}
              size="sm"
              badgeContent={badgeD.label}
              circular
              container
              pr={1}
            />
          )}
        </SoftBox>

        <SoftBox my={1}>
          <SoftTypography variant="h6" className="price">
            <SoftTypography display="inline" component="small" variant="h6">
              {price.currency}
            </SoftTypography>
            {price.value}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox pb={2} px={3} textAlign="left" className="check1">
        {renderSpecifications}
        <SoftBox display="flex" alignItems="center" p={1} mt={4} height="5rem">
          <SoftBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="1rem"
            height="1rem"
            borderRadius="50%"
            shaodw="md"
            // bgColor={includes ? "success" : "secondary"}
            variant="gradient"
            mr={2}
          ></SoftBox>
          <SoftTypography>
            <p
              style={{
                fontSize: "15px",
                fontStyle: "italic",
                color: "#67748e",
              }}
            >
              {description?.description}
            </p>
          </SoftTypography>
        </SoftBox>
        {/* <SoftBox mt={3} display="flex" alignItems="center" height="5rem">
          <SoftBox 
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="1rem"
            height="1rem"
            borderRadius="50%"
            shaodw="md"
            // bgColor={includes ? "success" : "secondary"}
            variant="gradient"
            mr={4} ml={4}>
            <SoftTypography>
              <p style={{
                fontSize: "15px", fontStyle: "italic", color: "#67748e"
              }}>{description?.description}</p>
            </SoftTypography>
          </SoftBox>
        </SoftBox> */}
        {location.pathname === "/dashbordplan" ? (
          <>
            <SoftBox display="flex" alignItems="center" pl={3} mt={4} className="autoDebit">
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={autoDebitValue}
                    onChange={(e) => dispatch(setAutoDebitAction(e.target.checked))}
                  />
                }
                label="Auto Debit"
                labelPlacement="end"
              />
            </SoftBox>
          </>
        ) : (
          ""
        )}
        {action.type === "internal" ? (
          <SoftBox mt={3}>
            {/* <SoftButton
              component={Link}
              to={action.route}
              variant="gradient"
              color={action.color}
              fullWidth
            > */}
            {action.label}&nbsp;
            {/* <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            {/* </SoftButton> */}
          </SoftBox>
        ) : (
          <SoftBox mt={3}>
            <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              color={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </SoftButton>
          </SoftBox>
        )}
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  badgeD: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  // name: PropTypes.shape({
  //   value: PropTypes.string.isRequired,
  // }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
  }).isRequired,
  // description : PropTypes.shape({
  description: PropTypes.string.isRequired,
  // }).isRequired
};

export default DefaultPricingCard;

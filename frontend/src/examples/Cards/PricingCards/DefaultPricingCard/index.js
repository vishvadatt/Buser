/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

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
import { Checkbox, Chip, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAutoDebitAction } from "store/actions/actions";
import { useLocation } from "react-router-dom";

function DefaultPricingCard({ badge, price, note, credit, specifications, action, description }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const autoDebitValue = useSelector((state) => state.auth.autodebit);
  const renderSpecifications = specifications.map(({ label, includes, autodebit }) => {
    return (
      <>
        <SoftBox key={label} display="flex" p={0.7}>
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
            mr={1}
            mt="5px"
          >
            <SoftTypography variant="button" color="white" sx={{ lineHeight: 0 }}>
              <Icon sx={{ fontWeight: "bold" }}>{includes ? "done" : "remove"}</Icon>
            </SoftTypography>
          </SoftBox>
          <SoftTypography variant="body2" color="text" p={0}>
            {label}
          </SoftTypography>
        </SoftBox>
      </>
    );
  });

  console.log(specifications);
  return (
    <Card>
      <SoftBox pt={3} pb={2} px={2} textAlign="center">
        {badge.label && (
          <SoftBadge
            variant="contained"
            color={badge?.color}
            size="sm"
            badgeContent={badge?.label}
            circular
            container
          />
        )}
        <SoftBox my={1}>
          <SoftTypography variant="h6">
            <SoftTypography display="inline" component="small" variant="h6">
              {price.currency}
            </SoftTypography>
            {price.value}
          </SoftTypography>
          {/* <SoftTypography display="inline" component="small" variant="h6">
            {name.value}
          </SoftTypography> */}
        </SoftBox>
      </SoftBox>

      <SoftBox key={credit} display="flex" alignItems="center" height="1rem" pb={1} px={3}>
        <SoftBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          shaodw="md"
          variant="gradient"
          mr={9}
        ></SoftBox>
        <SoftTypography variant="body2" style={{ color: "#cb0c9f" }}>
          {credit.credit.length > 0 ? (
            <>
              {`Remaining Credit ${
                credit.credit[0].remainingCredit ? credit.credit[0].remainingCredit : 0
              }`}
            </>
          ) : (
            ` Remaining Credit ${0}`
          )}
        </SoftTypography>
      </SoftBox>
      <SoftBox pb={3} pt={3} px={3}>
        {renderSpecifications}

        {specifications[0]?.label === "1 Introductory In-Person Travel Session" ? (
          <SoftBox mt={2} ml={2}>
            <p
              style={{
                fontSize: "15px",
                fontStyle: "italic",
                color: description?.description?.toLowerCase().includes("best value")
                  ? "green"
                  : "#67748e",
              }}
            >
              Note: New client introductory sessions are required for all new clients and are for
              new clients only (not for existing clients). IMPORTANT: Please be sure to read The
              Buser Institute&apos;s Travel Consultations Cancellation Policy. Can be viewed in full
              <span
                style={{color: "dodgerblue", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => navigate("/live-in-person-portal")}
              >
                {" "}
                here
              </span>
            </p>
          </SoftBox>
        ) : specifications[0]?.label === "1 In-Person Travel Session" ? (
          <SoftBox mt={2} ml={2}>
            <p
              style={{
                fontSize: "15px",
                fontStyle: "italic",
                color: description?.description?.toLowerCase().includes("best value")
                  ? "green"
                  : "#67748e",
              }}
            >
              IMPORTANT: Please be sure to read The Buser Institute&apos;s Travel Consultations
              Cancellation Policy. Can be viewed in full
              <span
                style={{ color: "dodgerblue", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => navigate("/live-in-person-portal")}
              >
                {" "}
                here
              </span>
            </p>
          </SoftBox>
        ) : (
          <SoftBox mt={2} ml={2}>
            <p
              style={{
                fontSize: "15px",
                fontStyle: "italic",
                color: description?.description?.toLowerCase().includes("best value")
                  ? "green"
                  : "#67748e",
              }}
            >
              {description?.description}
            </p>
          </SoftBox>
        )}

        {note?.note && (
          <SoftBox pt={1} px={3}>
            <p style={{ color: "red", fontSize: "14px" }}>{note?.note}</p>
          </SoftBox>
        )}

        {location.pathname === "/dashbordplan" ? (
          <>
            <SoftBox display="flex" alignItems="center" pl={3}>
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
            {/* <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              color={action.color}
              fullWidth
            > */}
            {action.label}&nbsp;
            {/* <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            {/* </SoftButton> */}
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
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  // name: PropTypes.shape({
  //   value: PropTypes.string.isRequired,
  // }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  credit: PropTypes.arrayOf(PropTypes.object).isRequired,
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
  description: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
  note: PropTypes.shape({
    note: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultPricingCard;

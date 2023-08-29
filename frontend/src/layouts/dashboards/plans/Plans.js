import axios from 'axios'
import PropTypes from "prop-types";
import PricingPage from 'layouts/pages/pricing-page'
// import PricingCards from 'layouts/pages/pricing-page/components/PricingCards'
import React, { useEffect, useState } from 'react'
// import "../plans/plans.css"


// const getPlan = axios.get("https://www.postman.com/collections/c5350162edbe27c00919")

const Plans = ({ tabValue }) => {

    return (<>
        <PricingPage tabValues={tabValue} />
    </>
    )
}

Plans.propTypes = {
    tabValue: PropTypes.string.isRequired,
};

export default Plans

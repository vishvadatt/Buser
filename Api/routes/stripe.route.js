const router = require('express').Router();
const stripeCtrl = require('../controllers/stripe.controller');
const { protect } = require('../middleware/auth');

// create stripe product api
// router.route('/create-product')
//     .post(stripeCtrl.createProduct);

// router.route('/create-price')
//     .post(stripeCtrl.createPrice);

// router.route('/create-user')
//     .post(stripeCtrl.createUser);

// router.route('/update-user')
//     .put(stripeCtrl.updateUser);

// router.route('/create-subscription')
//     .post(stripeCtrl.createSubscription);

// router.route('/create-payment-method')
//     .post(stripeCtrl.createPaymentMethod);

// router.route('/cancel-subscription')
//     .post(stripeCtrl.cancelSubscription);

// router.route('/create-checkout')
//     .post(stripeCtrl.createCheckout);

    // In use 

router.route('/purchase-service')
    .post(stripeCtrl.purchaseService);

router.route('/checkout-detail')
    .post(stripeCtrl.retriveCheckout);

// router.route('/add-service-purchase-detail')
//     .put(stripeCtrl.addServicePurchaseDetails);

// router.route('/add-dashord-purchase-detail')
//     .put(stripeCtrl.addDashbordPurchaseDetails);

router.route('/retriveSession')
    .post(stripeCtrl.retriveSession);

router.route('/create-webhook')
    .post(stripeCtrl.webhook);

// router.route('/create-webhook1')
//     .post(stripeCtrl.webhook1);

router.route('/payment-methods').get(protect,stripeCtrl.paymentMethods);
module.exports = router;
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const resPattern = require("../helpers/resPattern");
const { productValidation, priceValidation, paymentMethodValidation, updateUserValidation, cancelValidation, createSubscriptValidation, userValidation } = require('../helpers/validation');
const db = require("../index");
const product = db.collection("product");
const service = db.collection("service");
const product_price = db.collection("productPrice");
const customer = db.collection("customer");
const subscription = db.collection("subscription");
const serviceColl = db.collection("servicePlan");
const dashbordColl = db.collection("dashbordPlan");
const moment = require('moment');
const userColl = db.collection("user");
const { ObjectId } = require('mongodb');
const planColl = db.collection("plan");
const educationalMaterialsColl = db.collection("educationalMaterials");
const purchaseEducationProductColl = db.collection("purchaseEducationProduct");

const query = require("../query/query");
// client
stripe = require('stripe')('sk_test_51LTRs5DCf23U0HEkmMIgbzMdvi0QOGQAktZ1kL6CLXczJSrysxmPDuHeO1tTePzZy31mF1UOM33kwvVMPAvw5lY800awmwvsFH');

// const stripe = require('stripe')('sk_test_51HtEbMCYTVhqPCYdZYwQNvlpuRvxOW9GQnIi02LeCuYUnUP4ZPvZC61pYOmNkhgFxPXLeLhembLKNbzwwaU2Dzfa008wZle5GF');

// 1
// create product
const createProduct = async (req, res, next) => {
    try {
        const { errors, isValid } = await productValidation(req.body);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const createProduct = await stripe.products.create({
            name: req.body.product
        });

        const insertdata = await query.insert(product, createProduct);
        if (insertdata.ops.length > 0) {
            const obj = resPattern.successPattern(httpStatus.OK, insertdata.ops[0], `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        }

    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

// 2
// create price of product
const createPrice = async (req, res, next) => {
    try {
        const requestData = req.body;
        const { errors, isValid } = await priceValidation(requestData);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }

        const createPrice = await stripe.prices.create({
            unit_amount: requestData.unit_amount,
            currency: requestData.currency,
            recurring: {
                interval: requestData.interval
            },
            product: requestData.product
        });
        const insertdata = await query.insert(product_price, createPrice);
        if (insertdata.ops.length > 0) {
            const obj = resPattern.successPattern(httpStatus.OK, insertdata.ops[0], `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

// 3
// create user

const createUser = async (req, res, next) => {
    try {
        const requestData = req.body;

        const { errors, isValid } = await userValidation(requestData);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }

        const createCustomer = await stripe.customers.create({
            email: requestData.email,
            name: requestData.name,
        });
        const insertdata = await query.insert(customer, createCustomer);
        if (insertdata.ops.length > 0) {
            const obj = resPattern.successPattern(httpStatus.OK, insertdata.ops[0], `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

// 4
// create payment method
const createPaymentMethod = async (req, res, next) => {
    try {
        const requestData = req.body;

        const { errors, isValid } = await paymentMethodValidation(requestData);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const paymentMeth = await stripe.paymentMethods.create({
            type: requestData.type,
            card: {
                number: requestData.card.number,
                exp_month: requestData.card.exp_month,
                exp_year: requestData.card.exp_year,
                cvc: requestData.card.cvc,
            },
        });

        console.log("paymentMeth..", paymentMeth);
        const paymentMethodAttach = await stripe.paymentMethods.attach(
            paymentMeth.id,
            { customer: requestData.customer }
        );

        const obj = resPattern.successPattern(httpStatus.OK, paymentMethodAttach, `success`);
        return res.status(obj.code).json({
            ...obj,
        });

    } catch (e) {
        console.log("e..", e);
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

// 5
// update user
const updateUser = async (req, res, next) => {
    try {
        const requestData = req.body;
        const { errors, isValid } = await updateUserValidation(requestData);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const customerUpdate = await stripe.customers.update(
            requestData.customer,
            {
                invoice_settings: {
                    default_payment_method: requestData.paymentMethodId
                }
            }
        );

        const insertdata = await query.insert(customer, customerUpdate);
        if (insertdata.ops.length > 0) {
            const obj = resPattern.successPattern(httpStatus.OK, insertdata.ops[0], `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}


// 6
// create subscription
const createSubscription = async (req, res, next) => {
    try {
        const requestData = req.body;
        const { errors, isValid } = await createSubscriptValidation(requestData);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const createSubscription = await stripe.subscriptions.create({
            customer: requestData.customer,
            items: [
                { price: requestData.price },
            ],
        });
        const insertdata = await query.insert(subscription, createSubscription);
        if (insertdata.ops.length > 0) {
            const obj = resPattern.successPattern(httpStatus.OK, insertdata.ops[0], `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const cancelSubscription = async (req, res, next) => {
    try {
        const requestData = req.body;
        const { errors, isValid } = await cancelValidation(requestData);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const subscription = await stripe.subscriptions.retrieve(requestData.id);
        console.log("subscription..", subscription);

        const updateSubscription = await stripe.subscriptions.update(
            subscription.id,
            { cancel_at_period_end: true }
        );

        const obj = resPattern.successPattern(httpStatus.OK, updateSubscription, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}


const createCheckout = async (req, res, next) => {
    try {
        const requestData = req.body;
        const { errors, isValid } = await cancelValidation(requestData);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const session = await stripe.checkout.sessions.create({
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
            line_items: [
                { price: requestData.price, quantity: requestData.qty },
            ],
            mode: 'payment',
        });

        const get_session = await stripe.checkout.sessions.retrieve(
            get_session.id
        );

        const obj = resPattern.successPattern(httpStatus.OK, session, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const purchaseService = async (req, res, next) => {
    try {
        const requestData = req.body;
        let session;
        if (requestData.autoDebit) {
            console.log("autodebit true")
            session = await stripe.checkout.sessions.create({
                customer: requestData.customerId,
                success_url: `${requestData.successURL}?sessionId={CHECKOUT_SESSION_ID}`,
                cancel_url: requestData.cancelURL,
                line_items: [
                    { price: requestData.priceId, quantity: requestData.qty },
                ],
                mode: 'subscription'
            });
        } else {
            console.log("autodebit false")
            session = await stripe.checkout.sessions.create({
                customer: requestData.customerId,
                success_url: `${requestData.successURL}?sessionId={CHECKOUT_SESSION_ID}`,
                cancel_url: requestData.cancelURL,
                line_items: [
                    { price: requestData.priceId, quantity: requestData.qty },
                ],
                mode: 'payment',

                payment_method_options: {
                    card: {
                        setup_future_usage: "off_session"
                    }
                }
            });
        }
        const obj = resPattern.successPattern(httpStatus.OK, session, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const retriveCheckout = async (req, res, next) => {
    try {
        const id = req.body.checkoutId
        const getSession = await stripe.checkout.sessions.retrieve(id);

        // if(getSession.payment_intent !== null){
        const paymentIntent = await stripe.paymentIntents.retrieve("pi_1LRv1FCYTVhqPCYdeShKbRHN");
        console.log("paymentIntent..", paymentIntent);
        const userDetails = await stripe.customers.update(
            paymentIntent.customer,
            {
                invoice_settings: {
                    default_payment_method: paymentIntent.payment_method
                }
            }
        );
        // }


        const createPaymentIntent = await stripe.paymentIntents.create({
            amount: 45000,
            currency: 'usd',
            customer: userDetails.id,
            // confirm : true
            description: userDetails.invoice_settings.default_payment_method

        });


        const confirmPayment = await stripe.paymentIntents.confirm(
            createPaymentIntent.id,
            { payment_method: userDetails.invoice_settings.default_payment_method }
        );

        const obj = resPattern.successPattern(httpStatus.OK, confirmPayment, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log("e.", e);
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const addServicePurchaseDetails = async (req, res, next) => {
    try {
        const requestData = req.body;
        const result = await query.insert(serviceColl, requestData);
        const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const addDashbordPurchaseDetails = async (req, res, next) => {
    try {
        const requestData = req.body;
        const result = await query.insert(dashbordColl, requestData);
        const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}
const retriveSession = async (req, res, next) => {
    const type = req.body.type;
    const requestData = req.body;
    console.log("requestData..", requestData);
    try {
        const session = await stripe.checkout.sessions.retrieve(
            req.query.sessionId
        );
        let status = session.status;
        if (status === "complete") {
            if (type === "dashbord") {
                requestData.transactionDetails = session
                requestData.createdDate = moment().format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
                console.log("requestData..", requestData);
                await query.insert(dashbordColl, requestData);
            } else {
                requestData.transactionDetails = session
                requestData.createdDate = moment().format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
                console.log("requestData..", requestData);
                await query.insert(serviceColl, requestData);
            }
            let obj = resPattern.successPattern(
                httpStatus.OK,
                session,
                "success"
            );
            return res.status(obj.code).json(obj);
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const webhook = async (req, res, next) => {
    try {
        const requestData = req.body;
        console.log("requestData.........", requestData.type);
        let bodyData = {}

        switch (requestData.type) {
            case 'checkout.session.completed':
                const checkout_session_completed = requestData.data.object;
                const customerId1 = checkout_session_completed.customer;
                const retrieve_session = await stripe.checkout.sessions.retrieve(
                    checkout_session_completed.id
                );
                console.log("retrieve_session..", retrieve_session);
                const session = await stripe.checkout.sessions.listLineItems(
                    checkout_session_completed.id
                );

                const PriceId = session.data[0].price.id
                const price = await stripe.prices.retrieve(PriceId);
                const isEducation = retrieve_session.metadata.isEducation;
                console.log("isEducation..", isEducation);
                if (isEducation) {
                    console.log("isEducation...", isEducation);
                    const oneTimePriceId = session.data[0].price.id
                    const oneTimeProduct = await query.findOne(educationalMaterialsColl, { oneTimePriceId: oneTimePriceId });
                    console.log("recurringProduct...", oneTimeProduct);
                    bodyData.transactionDetails = retrieve_session
                    bodyData.productId = oneTimeProduct._id
                    bodyData.customerId = customerId1
                    const result = await query.insert(purchaseEducationProductColl, bodyData);
                    const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
                    res.status(obj.code).json({
                        ...obj,
                    });
                } else {
                    console.log("isEducation false");
                    if (price.type === "one_time") {
                        console.log("one timme product...")
                        const oneTimePriceId = session.data[0].price.id

                        console.log("oneTimePriceId..", oneTimePriceId);
                        const oneTimeProduct = await query.findOne(planColl, { oneTimePriceId: oneTimePriceId });
                        console.log("oneTimeProduct...", oneTimeProduct);
                        var planTypeExpDateName = oneTimeProduct.planTypeExpDateName;
                        console.log("planTypeExpDateName...", planTypeExpDateName);
                        console.log("oneTimeProduct..", oneTimeProduct);
                        let updateBody1 = {}
                        let currentDate = moment().format("YYYY-MM-DDThh:mm:ss");
                        Object.defineProperty(updateBody1, planTypeExpDateName,
                            {
                                value: moment(currentDate).add(1, oneTimeProduct.interval ? oneTimeProduct.interval : 'month').format("YYYY-MM-DDThh:mm:ss"),
                                writable: true,
                                enumerable: true,
                                configurable: true
                            })

                        // updateBody1.isDashBordAutoDebit = false
                        await query.findOneAndUpdate(userColl,
                            { customerId: customerId1 },
                            { $set: updateBody1 },
                            { returnOriginal: false }
                        );

                        const incVal = {}
                        // const remainingBalance = {}
                        if (oneTimeProduct.userType === "client") {
                            if (oneTimeProduct.Video_Messaging_and_Photo_Therapy_Balance) {
                                incVal["Video_Messaging_and_Photo_Therapy_Balance"] = oneTimeProduct.Video_Messaging_and_Photo_Therapy_Balance
                            } else if (oneTimeProduct.live_Video_Online_Exercise_Therapy_Balance) {
                                incVal["live_Video_Online_Exercise_Therapy_Balance"] = oneTimeProduct.live_Video_Online_Exercise_Therapy_Balance
                            } else if (oneTimeProduct.live_In_Person_and_Travel_Exercise_Therapy_Balance) {
                                incVal["live_In_Person_and_Travel_Exercise_Therapy_Balance"] = oneTimeProduct.live_In_Person_and_Travel_Exercise_Therapy_Balance
                            }
                            else if (oneTimeProduct.Clinical_Guideline_Logic_and_Suggested_Sequences_AI_Plug_In_Balance) {
                                incVal["Clinical_Guideline_Logic_and_Suggested_Sequences_AI_Plug_In_Balance"] = oneTimeProduct.Clinical_Guideline_Logic_and_Suggested_Sequences_AI_Plug_In_Balance
                            }
                            console.log("incVal...", incVal);
                            await query.findOneAndUpdate(userColl,
                                { customerId: customerId1 },
                                { $inc: incVal },
                                { returnOriginal: false }
                            )
                        }

                        if (oneTimeProduct.userType === "doctor") {
                            if (oneTimeProduct.Practitioner_Client_Case_Consultation_Balance) {
                                incVal["Practitioner_Client_Case_Consultation_Balance"] = oneTimeProduct.Practitioner_Client_Case_Consultation_Balance
                            }
                            else if (oneTimeProduct.Clinical_Guideline_Logic_and_Suggested_Sequences_AI_Plug_In_Balance) {
                                incVal["Clinical_Guideline_Logic_and_Suggested_Sequences_AI_Plug_In_Balance"] = oneTimeProduct.Clinical_Guideline_Logic_and_Suggested_Sequences_AI_Plug_In_Balance
                            }
                            else if (oneTimeProduct.Practitioner_Educational_Client_Case_Study_Consultation_Live_or_Video_Message_Balance) {
                                incVal["Practitioner_Educational_Client_Case_Study_Consultation_Live_or_Video_Message_Balance"] = oneTimeProduct.Practitioner_Educational_Client_Case_Study_Consultation_Live_or_Video_Message_Balance
                            }
                            else if (oneTimeProduct.Buser_Institute_Grande_Round_Education_Archives_Message_Balance) {
                                incVal["Buser_Institute_Grande_Round_Education_Archives_Message_Balance"] = oneTimeProduct.Buser_Institute_Grande_Round_Education_Archives_Message_Balance
                            }
                            else if (oneTimeProduct.Advanced_Education_Topic_Seminars_Balance) {
                                incVal["Advanced_Education_Topic_Seminars_Balance"] = oneTimeProduct.Advanced_Education_Topic_Seminars_Balance
                            }
                            else if (oneTimeProduct.Clinical_Guideline_Logic_and_Suggested_Sequences_AI_Plug_In_Balance) {
                                incVal["Clinical_Guideline_Logic_and_Suggested_Sequences_AI_Plug_In_Balance"] = oneTimeProduct.Clinical_Guideline_Logic_and_Suggested_Sequences_AI_Plug_In_Balance
                            }
                            else if (oneTimeProduct.Practitioner_Educational_Case_Study_Live_Video_Consultation_Balance) {
                                incVal["Practitioner_Educational_Case_Study_Live_Video_Consultation_Balance"] = oneTimeProduct.Practitioner_Educational_Case_Study_Live_Video_Consultation_Balance
                            }
                            else if (oneTimeProduct.Practitioner_Educational_Case_Study_Video_Messaging_Consultation_Balance) {
                                incVal["Practitioner_Educational_Case_Study_Video_Messaging_Consultation_Balance"] = oneTimeProduct.Practitioner_Educational_Case_Study_Video_Messaging_Consultation_Balance
                            }
                            else if (oneTimeProduct.Practitioner_Client_Case_Live_Video_Consultation_Balance) {
                                incVal["Practitioner_Client_Case_Live_Video_Consultation_Balance"] = oneTimeProduct.Practitioner_Client_Case_Live_Video_Consultation_Balance
                            }
                            else if (oneTimeProduct.Practitioner_Client_Case_Video_Messaging_Consultation_Balance) {
                                incVal["Practitioner_Client_Case_Video_Messaging_Consultation_Balance"] = oneTimeProduct.Practitioner_Client_Case_Video_Messaging_Consultation_Balance
                            }
                            else if (oneTimeProduct.Level_I_Education_Module_Seminars_COMING_SOON_Balance) {
                                incVal["Level_I_Education_Module_Seminars_COMING_SOON_Balance"] = oneTimeProduct.Level_I_Education_Module_Seminars_COMING_SOON_Balance
                            }
                            else if (oneTimeProduct.Buser_Institute_Exercise_Education_Archives_Balance) {
                                incVal["Buser_Institute_Exercise_Education_Archives_Balance"] = oneTimeProduct.Buser_Institute_Exercise_Education_Archives_Balance
                            }
                            else if (oneTimeProduct.Buser_Institute_Foundations_Course_7_hour_Lecture_on_demand_video_series_Balance) {
                                incVal["Buser_Institute_Foundations_Course_7_hour_Lecture_on_demand_video_series_Balance"] = oneTimeProduct.Buser_Institute_Foundations_Course_7_hour_Lecture_on_demand_video_series_Balance
                            }
                            else if (oneTimeProduct.Exercise_Sequence_Generator_Software_Program_Plug_In_Balance) {
                                incVal["Exercise_Sequence_Generator_Software_Program_Plug_In_Balance"] = oneTimeProduct.Exercise_Sequence_Generator_Software_Program_Plug_In_Balance
                            } else if (oneTimeProduct.Exercise_Profiling_Library_Plug_In_Balance) {
                                incVal[" Exercise_Profiling_Library_Plug_In_Balance"] = oneTimeProduct.Exercise_Profiling_Library_Plug_In_Balance
                            } else if (oneTimeProduct.Practitioner_Locator_Plug_In_Balance) {
                                incVal["Practitioner_Locator_Plug_In_Balance"] = oneTimeProduct.Practitioner_Locator_Plug_In_Balance
                            }
                            console.log("incVal...", incVal);
                            await query.findOneAndUpdate(userColl,
                                { customerId: customerId1 },
                                { $inc: incVal },
                                { returnOriginal: false }
                            )
                        }

                        bodyData.transactionDetails = retrieve_session
                        bodyData.serviceId = oneTimeProduct.serviceId
                        bodyData.planId = oneTimeProduct._id
                        bodyData.customerId = customerId1
                        console.log("data--", bodyData)
                        const serviceResult = await query.insert(serviceColl, bodyData);
                        const response = {
                            incVal,
                            serviceResult
                        }
                        const obj = resPattern.successPattern(httpStatus.OK, response, `success`);
                        res.status(obj.code).json({
                            ...obj,
                        });
                    } else {
                        console.log("Recurring product...")
                        const recurringPriceId = session.data[0].price.id
                        const recurringProduct = await query.findOne(planColl, { recurringPriceId: recurringPriceId });
                        console.log("recurringProduct...", recurringProduct);
                        bodyData.transactionDetails = retrieve_session
                        bodyData.serviceId = recurringProduct.serviceId
                        bodyData.planId = recurringProduct._id
                        bodyData.customerId = customerId1
                        const dashboardResult = await query.insert(dashbordColl, bodyData);
                        const obj = resPattern.successPattern(httpStatus.OK, dashboardResult, `success`);
                        res.status(obj.code).json({
                            ...obj,
                        });
                    }
                }




                // bodyData.transactionDetails = retrieve_session
                // bodyData.serviceId = oneTimeProduct.serviceId
                // bodyData.planId = oneTimeProduct._id
                // bodyData.customerId = customerId1

                // if(oneTimeProduct.planType === 'service'){ 
                //     await query.insert(serviceColl,bodyData);
                // }else{
                //     await query.insert(dashbordColl,bodyData);
                // }
                // const response1 = {
                //     checkout_session_completed,
                //     retrieve_session,
                //     session,
                //     incVal
                // }
                // console.log("response1..",response1);
                // const obj = resPattern.successPattern(httpStatus.OK, response1, `success`);
                // res.status(obj.code).json({
                //     ...obj,
                // });
                break;

            case 'customer.subscription.created':
                const customer_subscription_created = requestData.data.object;
                const customerId = customer_subscription_created.customer;

                const subscription = await stripe.subscriptions.retrieve(customer_subscription_created.id);
                const priceId = subscription.plan.id

                const findPlan = await query.findOne(planColl, { recurringPriceId: priceId });
                console.log("findPlan..", findPlan);
                var planTypeExpDateName = findPlan.planTypeExpDateName;
                console.log("planTypeExpDateName...", planTypeExpDateName);
                let updateBody = {}
                Object.defineProperty(updateBody, planTypeExpDateName,
                    {
                        value: moment.unix(customer_subscription_created.current_period_end)
                            .format("YYYY-MM-DDThh:mm:ss"),
                        writable: true,
                        enumerable: true,
                        configurable: true
                    })

                // updateBody.isDashBordAutoDebit = true
                console.log("updateBody..", updateBody);
                await query.findOneAndUpdate(userColl,
                    { customerId: customerId },
                    { $set: updateBody },
                    { returnOriginal: false }
                );
                const response = {
                    customer_subscription_created,
                    subscription,
                    findPlan
                }
                console.log("response..", response);
                const obj1 = resPattern.successPattern(httpStatus.OK, response, `success`);
                res.status(obj1.code).json({
                    ...obj1,
                });
                break;

            case 'customer.subscription.updated':
                const customer_subscription_updated = requestData.data.object;
                //  console.log("customer_subscription_updated...",customer_subscription_updated);
                // const customerId2 = customer_subscription_updated.customer;
                // console.log("customerId2..",customerId2);
                // const subscription_updated = await stripe.subscriptions.retrieve(customer_subscription_updated.id);
                // console.log("subscription_updated..",subscription_updated);
                // const update_subscription_priceId = subscription_updated.plan.id
                // console.log("update_subscription_priceId..",update_subscription_priceId);
                // const findRecurreingPlan = await query.findOne(planColl,{recurringPriceId : update_subscription_priceId});
                // var planTypeExpDateName = findRecurreingPlan.planTypeExpDateName;

                // let updateBody2 = {}
                // Object.defineProperty(updateBody2, planTypeExpDateName, 
                // { 
                //     value: moment.unix(customer_subscription_updated.current_period_end)
                //     .format("YYYY-MM-DDThh:mm:ss"),
                //         writable: true,
                //         enumerable: true,
                //         configurable: true
                //     })

                // // updateBody.isDashBordAutoDebit = true
                // await query.findOneAndUpdate(userColl,
                //     {customerId : customerId2},
                //     {$set : updateBody2},
                //     {returnOriginal : false}    
                // );
                // return customer_subscription_updated;
                const obj2 = resPattern.successPattern(httpStatus.OK, customer_subscription_updated, `success`);
                res.status(obj2.code).json({
                    ...obj2,
                });
                break;

            default:
                console.log(`Unhandled requestData type ${requestData.type}`);
        }


    } catch (e) {
        console.log("e..", e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}


// const webhook1 = async(req,res,next) => {
//     try {
//         const endpointSecret = "whsec_bc86d51fea663b6c16e04e84fd2d26ac99731e2b320baba9495034c630d380f1";

//         const sig = req.headers['stripe-signature'];
//         // const sig = "wOmDLifRRpS4UwMUTO3d7zsl9lXiA9Zw"

//         let event = req.body;

//         try {
//             // event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//             // console.log("event...",event);

//             console.log("event type...",event.type);
//         // Handle the event
//         switch (event.type) {
//             case 'checkout.session.async_payment_failed':
//             const session1 = event.data.object;
//             console.log("session1..",session1);
//             // Then define and call a function to handle the event checkout.session.async_payment_failed
//             break;
//             case 'checkout.session.async_payment_succeeded':
//             const session2 = event.data.object;
//             console.log("session2..",session2);
//             // Then define and call a function to handle the event checkout.session.async_payment_succeeded
//             break;
//             case 'checkout.session.completed':
//             const session3 = event.data.object;
//             console.log("session3..",session3);
//             res.status(200).json(session3)
//             // Then define and call a function to handle the event checkout.session.completed
//             break;
//             case 'checkout.session.expired':
//             const session4 = event.data.object;
//             console.log("session4..",session4);
//             // Then define and call a function to handle the event checkout.session.expired
//             break;
//             case 'customer.subscription.created':
//             const subscription1 = event.data.object;
//             console.log("subscription1..",subscription1);
//             res.status(200).json(subscription1)
//             // Then define and call a function to handle the event customer.subscription.created
//             break;
//             case 'customer.subscription.updated':
//             const subscription2 = event.data.object;
//             console.log("subscription2..",subscription2);

//             // Then define and call a function to handle the event customer.subscription.updated
//             break;
//             // ... handle other event types
//             default:
//             console.log(`Unhandled event type ${event.type}`);
//         }

//         // Return a 200 response to acknowledge receipt of the event
//         // res.send();

//         } catch (err) {
//             // res.status(400).send(`Webhook Error: ${err.message}`);
//             console.log("err....",err);
//             return;
//         }


//     } catch (e) {
//         console.log("e..",e)
//         return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
//     }
// }

const paymentMethods = async (req, res, next) => {
    try {
        const customerId = req.user.customerId;
        const result = await stripe.customers.listPaymentMethods(customerId, { type: 'card' });
        let obj = resPattern.successPattern(httpStatus.OK, result, "success");
        return res.status(obj.code).json(obj);
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

module.exports = {
    createProduct,
    createPrice,
    createUser,
    createSubscription,
    createPaymentMethod,
    updateUser,
    cancelSubscription,
    createCheckout,
    purchaseService,
    retriveCheckout,
    addServicePurchaseDetails,
    addDashbordPurchaseDetails,
    retriveSession,
    webhook,
    paymentMethods,
    // webhook1
}
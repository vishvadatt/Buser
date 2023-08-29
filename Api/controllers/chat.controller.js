
const db = require("../index");
const chatColl = db.collection("Chat");
const userColl = db.collection("user");
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const { ObjectId } = require('mongodb');
const { contactUsValidation } = require('../helpers/validation');



exports.userSendFriendRequest = async (req, res, next) => {
    try {
        const senderId = ObjectId(req.body.senderId);
        const receiverId = ObjectId(req.body.receiverId);

        const requestdata = {
            senderId: senderId, receiverId: receiverId
        };
        const userData = await query.findOne(chatColl, requestdata);
        if (userData) {
            const message = `You have already Send Friend Request`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        } else {
            const chatData = req.body;
            if (req.body.senderId) {
                chatData.senderId = senderId;
            }
            if (req.body.receiverId) {
                chatData.receiverId = receiverId;
            }
            chatData.status = "Pending";
            const insertdata = await query.insert(chatColl, chatData);
            if (insertdata.ops.length > 0) {
                await userColl.update({ _id: receiverId },
                    {
                        $push: {
                            friendRequest: senderId
                        },
                        $inc: { totalRequest: 1 }
                    })

                const obj = resPattern.successPattern(
                    httpStatus.OK,
                    insertdata.ops[0],
                    `success`
                );
                return res.status(obj.code).json({
                    ...obj,
                });

            } else {
                const message = `Something went wrong, Please try again.`;
                return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
            }
        }

    } catch (e) {
        console.log("e..", e);
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
};

exports.AcceptedFriendRequest = async (req, res, next) => {
    try {
        const doctorId = ObjectId(req.body.doctorId);
        const userId = ObjectId(req.body.userId);
        const result = await query.findOneAndUpdate(chatColl,
            {
                senderId: userId,
                receiverId: doctorId
            },
            {
                $set: {
                    status: req.body.status
                }
            },
            { returnOriginal: false }
        );
        if (result) {
            const Doctor = await userColl.update({
                _id: doctorId,
                friendsList: { $ne: userId }
            }, {
                $push: {
                    friendsList: userId
                },
                $pull: {
                    friendRequest: userId
                }, $inc: { totalRequest: -1 }
            });
            if (Doctor) {
                await userColl.update({
                    _id: userId,
                    friendsList: { $ne: doctorId }
                }, {
                    $push: {
                        friendsList: doctorId
                    }
                });
            }

        }
        const obj = resPattern.successPattern(httpStatus.OK, result.value, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
};



exports.totalFriendRequest = async (req, res, next) => {
    try {
        const doctorId = ObjectId(req.params.id);
        const result = await userColl.aggregate([
            {
                $match: {
                    _id: doctorId,
                }
            },
            { $project: { "totalRequest": 1 } }
        ]).toArray();
        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}



exports.myfriendList = async (req, res, next) => {
    try {
        const doctorId = ObjectId(req.params.id);
        const doctorData = await query.findOne(userColl, { _id: doctorId });
        if (doctorData) {
            const doctorRes = doctorData.friendsList
            const userIDs = doctorRes.map((user) => {
                return user
            })
            console.log(userIDs)

            const result = await userColl.aggregate([
                {
                    $match: {
                        _id: { $in: userIDs }
                    }
                },
                { $project: { "name": 1, "email": 1, "mobile_no": 1 } }
            ]).toArray();
            const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        }
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}
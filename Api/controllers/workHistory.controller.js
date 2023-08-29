const db = require("../index");
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const workHistory = db.collection("workHistory");
const { ObjectId } = require('mongodb');

const getWorkHistoryData = async (req, res, next) => {
  try {
    const id = ObjectId(req.params.id);
    console.log("id--", id)
    const { pageNo, limit } = req.query;
    const totalCount = await query.count(workHistory, { practionerId: id })
    const result = await workHistory
      .aggregate([
        {
          $match: {
            practionerId: id,
          },
        },
        {
          $lookup: {
            from: "user",
            localField: "UserId",
            foreignField: "_id",
            as: "userData",
          },
        },
        {
          $lookup: {
            from: "bookAppointment",
            localField: "appointmentId",
            foreignField: "_id",
            as: "BookAppointment",
          },
        },
        {
          $lookup: {
            from: "service",
            localField: "serviceId",
            foreignField: "_id",
            as: "serviceDetails",
          },
        },
        // {
        //   $lookup: {
        //     from: "dailyUpdates",
        //     localField: "painDetailId",
        //     foreignField: "_id",
        //     as: "PainDetails",
        //   },
        // },
        {
          $unwind: {
            path: "$userData",
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $unwind: {
            path: "$serviceDetails",
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $unwind: {
            path: "$BookAppointment",
            preserveNullAndEmptyArrays: false,
          },
        },
        // {
        //   $unwind: {
        //     path: "$PainDetails",
        //     preserveNullAndEmptyArrays: false,
        //   },
        // },
        // {
        //   $unwind: {
        //     path: "$PainDetails.employeePainData",
        //     preserveNullAndEmptyArrays: false,
        //   },
        // },
        {
          $project: {
            Name: "$userData.name",
            email: "$userData.email",
            userType: "$userData.userType",
            ServiceName: "$serviceDetails.serviceName",
            painName: "$BookAppointment.painDetails",
            Date: 1
          },
        },
        { $skip: parseInt(limit) * parseInt(pageNo) },
        { $limit: parseInt(limit) },
      ])
      .toArray();
    console.log("result..", result);
    const obj = resPattern.successPattern(httpStatus.OK, { totalCount, result }, `success`);
    return res.status(obj.code).json({
      ...obj,
    });
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
};


module.exports = {
  getWorkHistoryData
}
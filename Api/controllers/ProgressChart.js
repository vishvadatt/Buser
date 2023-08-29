const db = require("../index");
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const dailyUpdatesColl = db.collection("dailyUpdates");
const { ObjectId } = require("mongodb");

exports.chartsData = async (req, res, next) => {
  try {

    const { startDate, endDate } = req.body;

    //console.log("startDate----", new Date(startDate), "EndDate----", new Date(endDate))

    const id = req.params.id;
    const painName = req.body.painName;
    console.log("id..", id);

    let result;
    result = await dailyUpdatesColl
      .aggregate([
        {
          $match: {
            userId: ObjectId(id),
          },
        },
        {
          $project: {
            createdAt: 1,
            painDetails: {
              $filter: {
                input: "$employeePainData",
                as: "empPain",
                cond: {
                  $and: [{ $eq: ["$$empPain.painName", painName] }],
                },
              },
            },
          },
        },
        {
          $unwind: {
            path: "$painDetails",
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $project:
          {
            painName: "$painDetails.painName",
            painLevel: "$painDetails.painLevel",
            painFrequency: {
              $switch: {
                branches: [
                  { case: { $eq: ['$painDetails.painFrequency', 'Daily'] }, then: 2 },
                  { case: { $eq: ['$painDetails.painFrequency', 'Weekly'] }, then: 1 },
                  { case: { $eq: ['$painDetails.painFrequency', 'Monthly'] }, then: 0 }],
                default: 1
              }
            },
            PainType: "$painDetails.PainType",
            painDuration: "$painDetails.painDuration",
            createdAt: "$createdAt"
          }
        },
        { $sort: { createdAt: -1 } }
      ])
      .toArray();

    if (startDate && endDate) {

      function DecrementOneDay(date) {
        date.setDate(date.getDate() + 0);
        return date;
      }

      function addOneDay(date) {
        date.setDate(date.getDate() + 1);
        return date;
      }

      const date = new Date(startDate);
      const StartDate = DecrementOneDay(date);
      console.log("startDate--", startDate, date, StartDate)

      const enddate = new Date(endDate);
      const EndDate = addOneDay(enddate);

      console.log("Date--", StartDate, EndDate)

      result = await dailyUpdatesColl
        .aggregate([
          {
            $project: {
              createdAt: {
                $dateFromString: {
                  dateString: '$createdAt'
                }
              },
              Date: 1,
              userId: 1,
              Nutrition: 1,
              Sequence: 1,
              timeofNutrition: 1,
              timeofSequence: 1,
              employeePainData: 1
            }
          },
          {
            $match: {
              userId: ObjectId(id),
              createdAt: {
                $gte: date,
                $lte: EndDate,
              },
            },
          },
          {
            $project: {
              createdAt: 1,
              painDetails: {
                $filter: {
                  input: "$employeePainData",
                  as: "empPain",
                  cond: {
                    $and: [{ $eq: ["$$empPain.painName", painName] }],
                  },
                },
              },
            },
          },
          {
            $unwind: {
              path: "$painDetails",
              preserveNullAndEmptyArrays: false,
            },
          },
          {
            $project:
            {
              painName: "$painDetails.painName",
              painLevel: "$painDetails.painLevel",
              painFrequency: {
                $switch: {
                  branches: [
                    { case: { $eq: ['$painDetails.painFrequency', 'Daily'] }, then: 2 },
                    { case: { $eq: ['$painDetails.painFrequency', 'Weekly'] }, then: 1 },
                    { case: { $eq: ['$painDetails.painFrequency', 'Monthly'] }, then: 0 }],
                  default: 1
                }
              },
              PainType: "$painDetails.PainType",
              painDuration: "$painDetails.painDuration",
              createdAt: "$createdAt"
            }
          },
          { $sort: { createdAt: -1 } }
        ])
        .toArray();
    }
    if (result.length > 0) {
      const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
      return res.status(obj.code).json({
        ...obj,
      });
    } else {
      const message = `data not found with this Pain Name`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
  } catch (e) {
    console.log("error---", e);
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
};


exports.getPainFrequencyDetails = async (req, res, next) => {
  try {

    const { startDate, endDate } = req.body;

    const id = req.params.id;
    const painName = req.body.painName;

    let result;
    result = await dailyUpdatesColl
      .aggregate([
        {
          $match: {
            userId: ObjectId(id),
          },
        },
        {
          $project: {
            painDetails: {
              $filter: {
                input: "$employeePainData",
                as: "empPain",
                cond: {
                  $and: [{ $eq: ["$$empPain.painName", painName] }],
                },
              },
            },
          },
        },
        {
          $unwind: {
            path: "$painDetails",
            preserveNullAndEmptyArrays: false,
          },
        },
        // {
        //   $group: {
        //      _id: null,
        //      count: { $count: { } }
        //   }
        // }
        // {
        //   $project: {
        //     painName: "$painDetails.painName",
        //     painLevel: "$painDetails.painLevel",
        //     painFrequency: "$painDetails.painFrequency",
        //     PainType: "$painDetails.PainType",
        //     painDuration: "$painDetails.painDuration",
        //   },
        // },
      ])
      .toArray();
    console.log("result...", result);

    if (result.length > 0) {
      const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
      return res.status(obj.code).json({
        ...obj,
      });
    } else {
      const message = `User not found with this ID.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
  } catch (e) {
    console.log("error---", e);
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
};
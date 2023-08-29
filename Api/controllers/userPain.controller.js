const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const resPattern = require("../helpers/resPattern");
const db = require("../index");
const servicColl = db.collection("service");
const painColl = db.collection("dailyUpdates");
const userPain = db.collection("buserPain")
const query = require('../query/query');
const { ObjectId } = require('mongodb');

// add new pain details
const dailyPainUpdateDetails = async (req, res, next) => {
  try {
    const requestData = req.body;
    requestData.userId = ObjectId(requestData.userId);
    const findUser = await query.findOne(painColl, { userId: ObjectId(requestData.userId) });
    console.log("findUser.", findUser);
    let insertdata;
    // if(findUser){
    //     insertdata = await query.findOneAndUpdate(painColl,
    //         {userId : ObjectId(requestData.userId)},
    //         {$set : requestData},
    //         {returnOriginal : false}    
    //     );
    //     console.log("up..",insertdata);
    //     const obj = resPattern.successPattern(httpStatus.OK,insertdata.value,`success`);
    //       return res.status(obj.code).json({
    //         ...obj,
    //       });
    // }else{
    insertdata = await query.insert(painColl, requestData);
    if (insertdata.ops.length > 0) {
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
    // }
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
}
// find all pain details of user
const userPainDetails = async (req, res, next) => {
  try {
    const id = req.user._id;
    const result = await query.find(painColl, { userId: id }, {}, { createdAt: -1 });
    console.log("result..", result);
    if (result.length > 0) {
      const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
      return res.status(obj.code).json({
        ...obj,
      });
    } else {
      const message = `Something went wrong, Please try again.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
}

// update pain details of user
const updatePainDetails = async (req, res, next) => {
  try {
    const requestData = req.body;
    const id = ObjectId(req.params.id);
    requestData.userId = ObjectId(requestData.userId);
    const findUser = await query.findOne(painColl, { _id: id });
    console.log("findUser.", findUser);
    let insertdata;
    if (findUser) {
      insertdata = await query.findOneAndUpdate(painColl,
        { _id: id },
        { $set: requestData },
        { returnOriginal: false }
      );
      console.log("up..", insertdata);
      const obj = resPattern.successPattern(httpStatus.OK, insertdata.value, `success`);
      return res.status(obj.code).json({
        ...obj,
      });
    } else {
      const message = `user not found with this ID.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
}

const findOnePainDetail = async (req, res, next) => {
  try {
    const id = ObjectId(req.params.id);
    const result = await query.findOne(painColl, { _id: id });
    console.log("findUser.", result);
    if (result) {
      const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
      return res.status(obj.code).json({
        ...obj,
      });
    } else {
      const message = `user not found with this ID.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
}

const deletePainDetail = async (req, res, next) => {
  try {
    const id = ObjectId(req.params.id);
    const result = await query.deleteOne(painColl, { _id: id });
    console.log("result..", result.deletedCount);
    if (result.deletedCount === 1) {
      const obj = resPattern.successPattern(httpStatus.OK, "Deleted Successfully...!", `success`);
      return res.status(obj.code).json({
        ...obj,
      });
    } else {
      const message = `user not found with this ID.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }

  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
}

const painList = async (req, res, next) => {
  try {
    const result = await query.find(userPain);

    const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
    return res.status(obj.code).json({
      ...obj,
    });
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
}


const user_painDetailList = async (req, res, next) => {
  try {
    const id = ObjectId(req.params.id);
    const { searchText } = req.query;

    let search = "";
    if (searchText) {
      search = searchText
    }

    // const result = await userPain.aggregate([
    //   {
    //     $match: {
    //       _id: id
    //     }
    //   },
    //   {
    //     $lookup: {
    //       from: 'buserPainDetail',
    //       localField: '_id',
    //       foreignField: 'painId',
    //       as: 'painDetail'
    //     }
    //   },
    //]).toArray();

    const result = await userPain.aggregate([
      {
        $match: {
          _id: id
        }
      },
      {
        $lookup: {
          from: "buserPainDetail",
          let: {
            gid: "$_id",
          },
          pipeline: [{
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ['$painId', '$$gid']
                  }
                ]
              },
              "code": { $regex: search, $options: 'i' }
            },
          },
          ],
          as: 'painDetail',
        },
      },
    ]).toArray();

    const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
    return res.status(obj.code).json({
      ...obj,
    });
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
}


module.exports = {
  dailyPainUpdateDetails,
  userPainDetails,
  updatePainDetails,
  findOnePainDetail,
  deletePainDetail,
  painList,
  user_painDetailList
}
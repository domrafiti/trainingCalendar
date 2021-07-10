const mongoose = require("mongoose");
//can i use bcrypt to encrypt and unencrypt data
//const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  user_id: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  date_imported: { type: Date, default: Date.now() },
  activity_data: [], //Schema.Types.ObjectId
});

const Activities = mongoose.model("Activities", activitySchema);

module.exports = Activities;

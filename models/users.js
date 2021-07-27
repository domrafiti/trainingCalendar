//currently 100% borrowed from haggle.

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_dt: { type: Date, default: Date.now() },
  workout_templates: [],
  activities: [{ type: Schema.Types.ObjectId, ref: "Activities" }], //Schema.Types.ObjectId
});

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

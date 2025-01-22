const { Schema, model } = require('mongoose');

const UserShema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
  },
  { timestemps: true }
);

module.exports = model('User', UserShema);

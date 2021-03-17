var mongoose = require("mongoose");

//schema
var userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  tickets: {
    type: Array,
    required: false,

    title: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: false,
    },
    toDepartment: {
      type: String,
      required: false,
    },
    priority: {
      type: String,
      required: false,
    },
    ticketDetails: {
      type: String,
      required: false,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Export User Model
var User = (module.exports = mongoose.model("user", userSchema));

module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};

const mongoose = require("mongoose");

/**
 * Defines the schema for a user object.
 */
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    purchase: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { versionKey: "version" }
);

/**
 * Represents a user in the database.
 */
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};

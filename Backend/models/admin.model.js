const mongoose = require("mongoose");

/**
 * Defines the schema for a admin object.
 */
const adminSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  { versionKey: "version" }
);

/**
 * Represents a admin in the database.
 */
const Admin = mongoose.model("Admin", adminSchema);

module.exports = {
  Admin
};

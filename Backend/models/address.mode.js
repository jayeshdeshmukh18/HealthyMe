const mongoose = require("mongoose");

/**
 * Defines the schema for a admin object.
 */
const addressSchema = mongoose.Schema(
  {
    email: String,
    firstName: String,
    Address1: String,
    Address2: String,
    countryName: String,
    Phone: String,
    lastName: String,
    state: String,
    city: String,
  },
  { versionKey: "version" }
);

/**
 * Represents a admin in the database.
 */
const Address = mongoose.model("Address", addressSchema);

module.exports = {
  Address
};

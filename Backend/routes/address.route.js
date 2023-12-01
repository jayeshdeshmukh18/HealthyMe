const express = require("express");
const { address } = require("../controller/address.controller");

const deliveryRoute = express.Router();

// submit deliveryAddress
deliveryRoute.post("/address", address);


module.exports = {
    deliveryRoute
}
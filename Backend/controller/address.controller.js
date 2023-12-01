const { Address } = require("../models/address.mode");


const address = async (req, res) => {
    try {
      const userAdd = new Address(req.body);
      await userAdd.save();
      res.status(201).json({msg:"Delivery address submitted",userAdd});
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  };

  module.exports={
    address
  }
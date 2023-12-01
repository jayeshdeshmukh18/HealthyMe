const { Product } = require("../models/product.model");
const { User } = require("../models/user.model");





//add to cart--------------------------

const addToCart = async (req, res) => {
  const { userID } = req.body;
  const isUserPresent = await User.findOne({ _id: userID });
  //  product.purchase.push(req.params.id);
  console.log(isUserPresent, "isUserPresent");
  const valid = await Product.findOne({ _id: req.params.id });
  console.log(valid, "valid product");
  if (valid) {
    isUserPresent.purchase.push(req.params.id);
    await isUserPresent.save();
    res.status(201).json({ msg: "Product added successfully", isUserPresent });
  } else {
    res.status(500).json({ msg: "Invalid id" });
  }
};

//removeProduct ------------------------------------------------------------

const removeProduct = async (req, res) => {
  const { userID } = req.body;
  const { productID } = req.params;
  const isUserPresent = await User.findOne({ _id: userID });
  console.log(isUserPresent, "isUserPresent");

  const result = await User.updateOne(
    { _id: userID },
    { $pull: { purchase: { $in: [req.params.id] } } }
  );
  console.log(result, "result data.........");
  res.send({ msg: "delete successfully", result });
};


const updateQuantity = async (req, res) => {
  const { userID } = req.body;
  const { id } = req.params;

  const isUserPresent = await User.findOne({ _id: userID });
  console.log(isUserPresent, "isUserPresent");

  const result = await User.updateOne(
    { 
      _id: userID,
      "purchase._id": req.params.id 
    },
    { 
      $set: { "purchase.$.quantity": req.body.quantity } 
    }
  );
  console.log(result, "result data.........");
  res.send({ msg: "Quantity updated successfully", result });
};


// availablePruductInCart ----------------------------------------------------------------------

const availablePruductInCart = async (req, res) => {
  let userID = req.body.userID;
  console.log(userID, "userid..");
  let data = await User.findOne({ _id: userID }).populate("purchase");
  res.send({ msg: "Available product in cart", data });
};

module.exports = {
  addToCart,
  removeProduct,
  availablePruductInCart,
  updateQuantity
};

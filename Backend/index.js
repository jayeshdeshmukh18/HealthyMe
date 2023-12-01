const express = require("express");
const app = express();

require("dotenv").config();
const { User } = require("./models/user.model");
const { connection } = require("./config/db");
const cookieParser = require("cookie-parser");
const { userRouter } = require("./routes/user.route");
const { Product } = require("./models/product.model");
const { productRoute } = require("./routes/product.route");
const { authenticated } = require("./middleware/authenticator.middleware");
const { admintRoute } = require("./routes/admin.route");
const cors = require("cors");
const { deliveryRoute } = require("./routes/address.route");
const Razorpay = require("razorpay");

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world!");
});

// ============== PAYMENT INTEGRATION SETUP ==============================================

const razorpayInstance = new Razorpay({
  //  key_id
  key_id: "rzp_test_FNJDYsapCj7Bdm",

  //  key_secret
  key_secret: "qX5Fsu6bJnyRNBxxdbzTcrqH",
});

// createOrder
app.post("/createOrder", (req, res) => {
  // STEP 1:
  const { amount, currency, receipt, notes } = req.body;
  // STEP 2:
  razorpayInstance.orders.create(
    { amount, currency, receipt, notes },
    (err, order) => {
      //STEP 3 and 4:
      if (!err) res.json(order);
      else res.send(err);
    }
  );
});

// =================================================================================

// User routes;
app.use("/api", userRouter);

// product route routes;
app.use("/api", productRoute);

//admin route;
app.use("/api", admintRoute);

//delivery address
app.use("/api", deliveryRoute);

// Start the server and establish a database connection
app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log("Connected to database");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
});

// updated..

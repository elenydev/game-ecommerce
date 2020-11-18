import Order from "../models/order.js";
import Product from "../models/product.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const handleAmountOfLeftProducts = (productsArray) => {
  productsArray.map(async (product) => {
    const exisitingProduct = await Product.findOne({
      productName: product.productName,
      device: product.device,
    });

    exisitingProduct.availableAmount =
      exisitingProduct.availableAmount - product.amount;

    await exisitingProduct.save();
  });
};

export const createOrder = async (req, res, next) => {
  const products = req.body.products;
  const user = req.body.user;
  const prize = req.body.prize;

  const mailOptions = {
    from: "online.gaming.dummy@gmail.com",
    to: user.email,
    subject: "Order",
    text: "It works",
    html: `<h2>Thank you for selecting Online-Gaming </h2>
    <div>
    <h3>Your order:</h3>
    ${products.map(
      (product) => `<p>${product.productName} x${product.amount}</p>`
    )}

    <h3>Your order prize is: ${prize}$</h3>
    <small>Have a nice day! Online-Gaming team. You can reply direct to this email or catch us on: online.gaming.dummy@gmail.com</small></p>
    </div>`,
  };

  try {
    const order = new Order({
      customerFirstName: user.firstName,
      customerLastName: user.lastName,
      customerEmail: user.email,
      products,
      prize,
      date: new Date().toLocaleDateString(),
      status: "Accepted",
    });
    await order.save();
    res.send({ order });
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
      }
    });
    handleAmountOfLeftProducts(products);
    next();
  } catch (err) {
    res.send({ message: "Some error occured, try again" });
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.send({ orders });
    next();
  } catch (err) {
    res.send({ message: "Something went wrong with fetching orders" });
    next();
  }
};

export const changeStatus = async (req, res, next) => {
  const order = req.body.order;
  const orderStatus = req.body.status;

  try {
    const specificOrder = await Order.findOne({ _id: order._id });
    specificOrder.status = orderStatus;
    await specificOrder.save();
    res.send({ order });
    next();
  } catch (err) {
    res.send({ message: "Something went wrong, try again" });
    next();
  }
};

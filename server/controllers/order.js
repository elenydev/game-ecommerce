import Order from "../models/order.js";
import Product from "../models/product.js";
import socket from "../socket.js";
import bcrypt from "bcryptjs";

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

  try {
    const order = new Order({
      customerFirstName: user.firstName,
      customerLastName: user.lastName,
      customerEmail: user.email,
      products,
      prize,
      date: new Date().toISOString(),
    });
    await order.save();
    res.send({ order });
    handleAmountOfLeftProducts(products);
    next();
  } catch (err) {
    res.send({ message: "Some error occured, try again" });
    next(err);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.send({ products: products });
  } catch (err) {
    res.send({ message: "Something went wrong with fetching products" });
  }
};

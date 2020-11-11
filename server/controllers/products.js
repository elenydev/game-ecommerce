import Product from "../models/product.js";
import socket from "../socket.js";
import bcrypt from "bcryptjs";

export const addProduct = async (req, res, next) => {
  const productName = req.body.productName;
  const productDescription = req.body.productDescription;
  const gameType = req.body.gameType;
  const prize = req.body.prize;
  const amount = req.body.amount;
  const device = req.body.device;
  const productFile = req.file;

  if (!productFile) {
    return res
      .status(422)
      .send({ message: "Error with product image occured" });
  }

  try {
    const existingProduct = await Product.find({ productName: productName });
    if (existingProduct.length === 0) {
      const productImg = productFile.path;
      const product = new Product({
        productName,
        productDescription,
        gameType,
        prize,
        amount,
        productImg,
        device,
      });
      await product.save();
      res.send({
        product: product,
      });
    } else {
      res.send({ message: "Product already exist" });
    }
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

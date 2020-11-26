import Product from "../models/product.js";
import socket from "../socket.js";
import bcrypt from "bcryptjs";

export const addProduct = async (req, res, next) => {
  const productName = req.body.productName;
  const productDescription = req.body.productDescription;
  const gameType = req.body.gameType;
  const prize = req.body.prize;
  const availableAmount = req.body.availableAmount;
  const device = req.body.device;
  const productFile = req.file;

  if (!productFile) {
    return res
      .status(422)
      .send({ message: "Error with product image occured" });
  }

  try {
    const existingProduct = await Product.find({
      productName: productName,
      device: device,
    });
    if (existingProduct.length === 0) {
      const productImg = productFile.filename;
      console.log(productImg);
      const product = new Product({
        productName,
        productDescription,
        gameType,
        prize,
        availableAmount,
        productImg,
        device,
        amount: 1,
      });
      await product.save();
      res.status(201).send({
        product: product,
      });
    } else {
      res.status(400).send({ message: "Product already exist" });
    }
    next();
  } catch (err) {
    res.status(400).send({ message: "Some error occured, try again" });
    next(err);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).send({ products: products });
    next();
  } catch (err) {
    res
      .status(400)
      .send({ message: "Something went wrong with fetching products" });
    next();
  }
};

export const changeAmount = async (req, res, next) => {
  const productId = req.body.productId;
  const productAmount = req.body.productAmount;
  try {
    const product = await Product.findOne({ _id: productId });
    product.availableAmount = productAmount;
    await product.save();
    res.status(201).send({ message: "Amount changed" });
    next();
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" });
    next();
  }
};


export const deleteProduct = async (req, res, next) => {
  const productId = req.body.productId;

  const checkIfExist = await Product.findOne({ _id: productId });
  if (checkIfExist) {
    try {
      await checkIfExist.deleteOne();
      res.status(201).send({ productId });
    } catch (err) {
      res.status(500).send({ message: "Some error occured, please try again" });
    }
  } else {
    res.status(500).send({ message: "We can't find that product, try again" });
  }
};
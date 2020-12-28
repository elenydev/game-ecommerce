import { RequestHandler } from "express"
import { IncomingProduct, ProductAmount } from "../interfaces/interfaces.js"

import Product from "../models/product.js"

export const addProduct: RequestHandler = async (req, res, next) => {
  const {
    productName,
    productDescription,
    gameType,
    prize,
    availableAmount,
    device,
  }: IncomingProduct = req.body
  const productFile = req.file

  if (!productFile) {
    return res.status(422).send({ message: "Error with product image occured" })
  }

  try {
    const existingProduct = await Product.find({
      productName: productName,
      device: device,
    })
    if (existingProduct.length === 0) {
      const productImg = productFile.filename
      const product = new Product({
        productName,
        productDescription,
        gameType,
        prize,
        availableAmount,
        productImg,
        device,
        amount: 1,
      })
      await product.save()
      res.status(201).send({
        product: product,
        message: "Product successfully added to offer",
      })
    } else {
      res.status(404).send({ message: "Product already exist" })
    }
    next()
  } catch (err) {
    res.status(404).send({ message: "Some error occured, try again" })
    next(err)
  }
}

export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await Product.find()
    res
      .status(200)
      .send({ products: products, message: "Products successfully fetched" })
    next()
  } catch (err) {
    res
      .status(404)
      .send({ message: "Something went wrong with fetching products" })
    next()
  }
}

export const changeAmount: RequestHandler = async (req, res, next) => {
  const { productId, productAmount }: ProductAmount = req.body
  try {
    const product = await Product.findOne({ _id: productId })
    product.availableAmount = productAmount
    await product.save()
    res.status(201).send({ message: "Amount changed" })
    next()
  } catch (err) {
    res.status(404).send({ message: "Something went wrong, try again" })
    next()
  }
}

export const deleteProduct: RequestHandler = async (req, res, next) => {
  const { productId }: { productId: string } = req.body
  const checkIfExist = await Product.findOne({ _id: productId })
  if (checkIfExist) {
    try {
      await checkIfExist.deleteOne()
      res
        .status(201)
        .send({ productId, message: "Product successfully deleted" })
    } catch (err) {
      res.status(404).send({ message: "Some error occured, please try again" })
    }
  } else {
    res.status(404).send({ message: "We can't find that product, try again" })
  }
}

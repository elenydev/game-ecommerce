import Order from "../models/order.js"
import Product from "../models/product.js"
import { sendEmailAfterOrder } from "./mailers.js"

const checkIfProductsAreAvailable = async (userProducts) => {
  const availableProducts = await Product.find()
  const unvailableProducts = []

  userProducts.filter((userProduct) => {
    availableProducts.forEach((availableProduct) => {
      if (
        userProduct.device === availableProduct.device &&
        userProduct.productName === availableProduct.productName
      ) {
        if (availableProduct.availableAmount < userProduct.amount) {
          unvailableProducts.push(userProduct)
        }
      }
    })
  })

  return unvailableProducts
}

const handleAmountOfLeftProducts = async (productsArray) => {
  productsArray.forEach(async (product) => {
    const exisitingProduct = await Product.findOne({
      productName: product.productName,
      device: product.device,
    })

    exisitingProduct.availableAmount =
      exisitingProduct.availableAmount - product.amount
    await exisitingProduct.save()
  })
}

export const createOrder = async (req, res, next) => {
  const { products, user, prize } = req.body

  const notAvailableProducts = await checkIfProductsAreAvailable(products)

  if (notAvailableProducts.length > 0) {
    res.status(400).send({
      message: `Someone just bought ${notAvailableProducts.map(
        (product) => `${product.productName}, `
      )} delete it from the cart to make the order.`,
    })
    return
  }

  try {
    const order = new Order({
      customerFirstName: user.firstName,
      customerLastName: user.lastName,
      customerEmail: user.email,
      products,
      prize,
      date: new Date().toLocaleDateString(),
      status: "Accepted",
    })
    await order.save()
    res.status(201).send({ order, message: "Order successfully created" })
    sendEmailAfterOrder(products, user.email, prize)
    handleAmountOfLeftProducts(products)
    next()
  } catch (err) {
    res.status(400).send({ message: "Some error occured, try again" })
    next(err)
  }
}

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find()
    res.status(200).send({ orders, message: "Orders successfully fetched" })
    next()
  } catch (err) {
    res
      .status(400)
      .send({ message: "Something went wrong with fetching orders" })
    next()
  }
}

export const changeStatus = async (req, res, next) => {
  const { order, orderStatus } = req.body
  try {
    const specificOrder = await Order.findOne({ _id: order._id })
    specificOrder.status = orderStatus
    await specificOrder.save()
    res.status(201).send({ order, message: "Status successfully changed" })
    next()
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" })
    next()
  }
}

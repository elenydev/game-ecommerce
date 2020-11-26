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

const sendEmailAfterOrder = (products, customerEmail, prize) => {
  const mailOptions = {
    from: "online.gaming.dummy@gmail.com",
    to: customerEmail,
    subject: "Order",
    text: "It works",
    html: `<h2>Thank you for selecting Online-Gaming </h2>
    <div>
    <h3>Your order:</h3>
    ${products.map(
      (product) => `<p>${product.productName} x${product.amount}</p>`
    )}
    <h3>Your order prize is: ${prize}$</h3>
    <small>Have a nice day! Online-Gaming team. You can reply directly to this email or catch us on: online.gaming.dummy@gmail.com</small></p>
    </div>`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err);
    }
  });
};

const checkIfProductsAreAvailable = async (userProducts) => {
  const availableProducts = await Product.find();
  const unvailableProducts = [];

  userProducts.filter((userProduct) => {
    availableProducts.map((availableProduct) => {
      if (
        userProduct.device === availableProduct.device &&
        userProduct.productName === availableProduct.productName
      ) {
        if (availableProduct.availableAmount < userProduct.amount) {
          unvailableProducts.push(userProduct);
        }
      }
    });
  });

  return unvailableProducts;
};

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

  const notAvailableProducts = await checkIfProductsAreAvailable(products);

  if (notAvailableProducts.length > 0) {
    res.status(400).send({
      unavailableProducts: `Someone just bought ${notAvailableProducts.map(
        (product) => `${product.productName}, `
      )} delete it from the cart to make the order.`,
    });
    return;
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
    });
    await order.save();
    res.status(201).send({ order });
    sendEmailAfterOrder(products, user.email, prize);
    handleAmountOfLeftProducts(products);
    next();
  } catch (err) {
    res.status(400).send({ message: "Some error occured, try again" });
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).send({ orders });
    next();
  } catch (err) {
    res
      .status(400)
      .send({ message: "Something went wrong with fetching orders" });
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
    res.status(201).send({ order });
    next();
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" });
    next();
  }
};

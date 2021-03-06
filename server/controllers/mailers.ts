import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { Product } from "../models/product"
dotenv.config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

export const sendEmailAfterOrder = (
  products: Product[],
  customerEmail: string,
  prize: number
) => {
  const mailOptions = {
    from: process.env.EMAIL,
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
  }

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err)
    }
  })
}

export const sendEmailAfterUserRegister = (
  userFirstName: string,
  email: string
): void => {
  const mailOptions = {
    from: "online.gaming.dummy@gmail.com",
    to: email,
    subject: "Online-gaming shop account",
    html: `<h3>Thank you for joining our Online-Gaming ${userFirstName}</h3>
    <br/>
    <div>
    <p>Hi ${userFirstName},</p>
    <p>We are very glad that u decided to join our community. Now you buy our products and enjoy gaming like us.</p>
    <p>Stay tuned for new products and check your email carefully for getting discount codes from us :)</p>
    <br/>
    <br/>
    <small>Have a nice day! Online-Gaming team. You can reply direct to this email or catch us on: online.gaming.dummy@gmail.com</small></p>
    </div>`,
  }
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err)
    }
  })
}

export const sendEmailAfterRemindPassword = (
  email: string,
  newPassword: string
): void => {
  const mailOptions = {
    from: "online.gaming.dummy@gmail.com",
    to: email,
    subject: "Online-gaming shop account",
    html: `<h3>It looks like you forgot your password</h3>
    <br/>
    <div>
    <p>Hi ${email},</p>
    <p>Your new password is: ${newPassword}. You can now log in and change it for your own :)</p>
    <br/>
    <p>If you doesn't tried to remind your password, immediately contact with us!</p>
    <small>Have a nice day! Online-Gaming team. You can reply direct to this email or catch us on: online.gaming.dummy@gmail.com</small></p>
    </div>`,
  }
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err)
    }
  })
}

export const sendEmail = (
  email: string,
  customerName: string,
  message: string
): void => {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Email from site: ${customerName}`,
    html: `<h3>Email from: ${customerName}</h3>
    <br/>
    <div>
    <p>${message}</p>
    <br/>
    <small>Reply to the customer: ${email}</small></p>
    </div>`,
  }
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err)
    }
  })
}

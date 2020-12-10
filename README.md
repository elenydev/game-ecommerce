


### LIVE VERSION : https://game-ecommerce.vercel.app/
## game-ecommerce is an "Online-Gaming" dummy Shop with front in next/react and backend in node/mongodb

### Dummy Accounts: 

## Admin account:
* email: admin@admin.com
* password: admin@admin

## User account:
* email: user@user.com
* password: user@user


### Core functionallity:
* Creating an account with avatar in shop and announce of creating account in your email
* Resetting the password
* Feature for changing the password and avatar
* Authentication with email/password
* Adding products to card(You have to be logged in)
* Creating an order with email announce of order in your email
* Sending emails to Online-Gaming company via form(to admin panel and also gmail account)
* You can join to newsletter of the Online-Gaming shop

### From admin account
* Adding products to offer
* Deleting products from offer
* Changing amount of available products on shop
* Displaying the orders
* Changing status of the order
* Displaying incoming emails to company in application and also on google email
* Sending emails directly to the email sender
* Displaying subscribers




### Used technologies:
* Nextjs/React
* Redux toolkit
* Styled Components
* Universal Cookie
* Material UI
* React Hook Form
* NodeJS/express
* MongoDB/Mongoose


## Setup
To run this project, install it locally using npm:

* cd ../front
* npm i
* npm run dev

## To run server locally you have to:
 * cd ../server
 * Create your env variables for:
  * secret(JWT)
  * email(for nodemailer from gmail)
  * password(for nodemailer from gmail)
  * mongoURI
 * node app.js



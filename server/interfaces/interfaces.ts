import { Order } from "../models/order"
import { Product } from "../models/product"

export interface User {
  firstName: string
  lastName: string
  email: string
  password: string
  avatar: File
  policy: string
  userId?: string
}

export interface IncomingOrder {
  products: Product[]
  user: User
  prize: number
}

export interface IncomingProduct {
  productName: string
  productDescription: string
  gameType: string
  prize: number
  availableAmount: number
  device: string
}

export interface OrderStatus {
  order: Order
  orderStatus: string
}

export interface ProductAmount {
  productId: string
  productAmount: number
}

export interface TokenInterface {
  user: {
    email: string
    name: string
    userId: number
  }
}

export interface IncomingEmail {
  customerName: string
  message: string
  email: string
}

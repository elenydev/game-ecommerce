export interface AddProductFormData {
  productName: string
  productDescription: string
  gameType: string
  prize: string | Blob
  availableAmount: string | Blob
  productImg: string
  device: string
}

export interface Product {
  _id: string
  productName: string
  productDescription: string
  gameType: string
  prize: number
  productImg: string
  availableAmount: number
  amount: number
  device: string
}

export interface User {
  firstName: string
  lastName: string
  email: string
  avatar: string
  userId: string
}

export interface Order {
  customerFirstName: string
  customerLastName: string
  customerEmail: string
  products: Product[]
  prize: number
  date: string
  status: string | "Accepted" | "Delivered" | "In progress"
}

export interface Email {
  email: string
  customerName: string
  message: string
  _id: string
}

export interface AddUserFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  avatar: string
  policy: string | Blob
}

export interface Routes {
  text: string
  icon: JSX.Element
  destination: string
}

export interface Email {
  email: string
}

export interface Subscribtion {
  email: string
}

export interface ChangePasswordFormData {
  password: string
  newPassword: string
}

export interface ContactFormData {
  customerName: string
  email: string
  message: string
}

export interface ChangeStatusData {
  order: Order
  status: string | "Accepted" | "Delivered" | "In progress"
  userId: string
}

export interface CreateOrderData {
  cartProducts: Product[]
  user: User
  prize: number
  userId: string
}

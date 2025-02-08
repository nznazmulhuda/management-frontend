import { z } from "zod"

// single sell data schema
export const singleSellSchema = z.object({
  size: z.enum(["M", "L", "XL", "XXL"]),
  color: z.string().min(3, {
    message: "Please select a valid color"
  }),
  single_price: z.string().min(3, {
    message: "The price should be three digits"
  }),
  costing_per_tshirt: z.string().min(2, {
    message: "The costing price should be two digits"
  }),
  order_status: z.enum([
    'cancle',
    'ordered',
    'rejected',
    'delivered',
    'in-transit',
    'not-delivery',
  ]),
  money_status: z.enum(['unpaid', 'paid']),
  customer_name: z.string().min(4, {
    message: "Enter a valid name"
  }),
  customer_number: z.string().min(11, {
    message: "Enter a valid number"
  }),
  customer_address: z.string().min(10, {
    message: "Address must be 10 characters"
  }),
  who_get_the_order: z.string().min(4, {
    message: "Select the valid name"
  }),
})

// multiple sell data schema
export const multipleSellSchema = z.object({
  size: z.enum(["M", "L", "XL", "XXL"]),
  color: z.string().min(3, {
    message: "Please select a valid color"
  }),
  quantity: z.string().min(1, {
    message: "Quantity must be at least 2",
  }),
  total_price: z.string().min(3, {
    message: "The price should be three digits"
  }),
  total_costing: z.string().min(2, {
    message: "The costing price should be two digits"
  }),
  order_status: z.enum([
    'cancle',
    'ordered',
    'rejected',
    'delivered',
    'in-transit',
    'not-delivery',
  ]),
  money_status: z.enum(['unpaid', 'paid']),
  customer_name: z.string().min(4, {
    message: "Enter a valid name"
  }),
  customer_number: z.string().min(11, {
    message: "Enter a valid number"
  }),
  customer_address: z.string().min(10, {
    message: "Address must be 10 characters"
  }),
  who_get_the_order: z.string().min(4, {
    message: "Select the valid name"
  })
})
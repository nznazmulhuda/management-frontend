import { z } from "zod"
import { multipleSellSchema, singleSellSchema } from "@/components/AddNewSell/sellDataVelidator"
import axios from "axios";
import { toast } from "@/hooks/use-toast";

// type of sell data
interface SellData {
  size: string;
  color: string;
  quantity: number;
  total_costing: number;
  costing_per_tshirt: number;
  single_tshirt_profit: number;
  total_price: number;
  single_price: number;
  profit: number;
  order_status: string;
  money_status: string;
  customer_name: string;
  customer_number: string;
  customer_address: string;
  who_get_the_order: string;
}

// add data on database
const addsellData = (data: SellData) => {
  axios.post("/sell", data)
    .then((res) => res.data.success ? toast({
      variant: "default",
      title: res.data.message
    }) : toast({
      variant: "destructive",
      title: "Somthing went wrong!"
    }))
    .catch((error) => toast({
      variant: "destructive",
      title: error.response.message
    }))
}

// get single sell data from single sell form
export const onSingleDataSubmit = (values: z.infer<typeof singleSellSchema>) => {
  const SellData: SellData = {
    customer_name: values.customer_name,
    customer_number: values.customer_number,
    customer_address: values.customer_address,
    quantity: 1,
    single_price: Number(values.single_price),
    costing_per_tshirt: Number(values.costing_per_tshirt),
    total_costing: Number(values.costing_per_tshirt),
    total_price: Number(values.single_price),
    single_tshirt_profit: Number(values.single_price) - Number(values.costing_per_tshirt),
    profit: Number(values.single_price) - Number(values.costing_per_tshirt),
    color: values.color,
    size: values.size,
    money_status: values.money_status,
    order_status: values.order_status,
    who_get_the_order: values.who_get_the_order
  }

  // pass the data on database
  addsellData(SellData)
}

// get multiple sell data from multiple sell form
export const onMultipleDataSubmit = (values: z.infer<typeof multipleSellSchema>) => {
  const SellData: SellData = {
    customer_name: values.customer_name,
    customer_number: values.customer_number,
    customer_address: values.customer_address,
    quantity: Number(values.quantity),
    single_price: Number(values.total_price) / Number(values.quantity),
    costing_per_tshirt: Number(values.total_costing) / Number(values.quantity),
    total_costing: Number(values.total_costing),
    total_price: Number(values.total_price),
    profit: Number(values.total_price) - Number(values.total_costing),
    single_tshirt_profit: (Number(values.total_price) - Number(values.total_costing)) / Number(values.quantity),
    color: values.color,
    size: values.size,
    money_status: values.money_status,
    order_status: values.order_status,
    who_get_the_order: values.who_get_the_order
  }

  // pass the data on database
  addsellData(SellData)
}
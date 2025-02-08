import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { colors } from "@/constant/color";
import { sizes } from "@/constant/size";
import { agents } from "@/constant/agent";
import { money_status } from "@/constant/moneyStatus";
import { order_status } from "@/constant/orderStatus";
import { singleSellSchema } from "@/components/AddNewSell/sellDataVelidator"
import { onSingleDataSubmit } from "@/services/sells/addSellData"


const formFieldNames = ["customer_name", "customer_number", "customer_address", "single_price", "costing_per_tshirt"] as const;
type FormFieldName = typeof formFieldNames[number];

export const formField: { name: FormFieldName, label: string, placeholder: string, formDescription: string, isTextArea: boolean, }[] = [
  {
    name: 'customer_name',
    label: 'Customer name',
    placeholder: 'Ex: Nazmul Huda',
    formDescription: 'Enter the customer name who will get the order.',
    isTextArea: false,
  },
  {
    name: 'customer_number',
    label: 'Customer number',
    placeholder: 'Ex: 01580507352',
    formDescription: 'Enter the customer number.',
    isTextArea: false,
  },
  {
    name: 'customer_address',
    label: 'Customer address',
    placeholder: 'Ex: Mizmizi dokkhin para, Siddhirganj, Narayanganj, Dhaka',
    formDescription: 'Enter the customer full address.',
    isTextArea: true,
  },
  {
    name: 'single_price',
    label: 'T-shirt price',
    placeholder: 'Ex: 350',
    formDescription: 'Enter the total price.',
    isTextArea: false,
  },
  {
    name: 'costing_per_tshirt',
    label: 'Costing',
    placeholder: 'Ex: 160',
    formDescription: 'Enter the costing of t-shirts.',
    isTextArea: false,
  },
]

function AddSingleSellData() {
  // Define your form.
  const singleDataForm = useForm<z.infer<typeof singleSellSchema>>({
    resolver: zodResolver(singleSellSchema),
    defaultValues: {
      size: "M",
      color: "black",
      single_price: '350',
      costing_per_tshirt: '160',
      order_status: "not-delivery",
      money_status: "unpaid",
      customer_name: "",
      customer_number: "",
      customer_address: "",
      who_get_the_order: "nahid",
    },
  })

  return (
    <Form {...singleDataForm}>
      <form onSubmit={singleDataForm.handleSubmit(onSingleDataSubmit)} className="space-y-4">
        {
          formField.map((fieldData) => fieldData.isTextArea ?
            <FormField
              control={singleDataForm.control}
              name={fieldData.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{fieldData.label}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={fieldData.placeholder} {...field} />
                  </FormControl>
                  <FormDescription>
                    {fieldData.formDescription}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> :
            <FormField
              control={singleDataForm.control}
              name={fieldData.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{fieldData.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={fieldData.placeholder} {...field} />
                  </FormControl>
                  <FormDescription>
                    {fieldData.formDescription}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )
        }

        {/* size and color filed */}
        <div className="flex items-center justify-between w-full gap-4">
          {/* size field */}
          <FormField
            name="size"
            control={singleDataForm.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>T-shirt size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"M"}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ex: M" className="placeholder:text-white" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      sizes.map((size) => <SelectItem key={size.value} className="cursor-pointer hover:bg-slate-900" value={size.value}>{size.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the t-shirt size.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* color field */}
          <FormField
            control={singleDataForm.control}
            name="color"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>T-shirt Color</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"black"}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ex: Black" className="placeholder:text-white" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      colors.map(color => <SelectItem key={color.value} className="cursor-pointer hover:bg-slate-900" value={color.value}>{color.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the t-shirt color.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* money status, order status */}
        <div className="flex items-center justify-between w-full gap-4">
          {/* money status field */}
          <FormField
            control={singleDataForm.control}
            name="money_status"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Money status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"unpaid"}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ex: Unpaid" className="placeholder:text-white" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      money_status.map((status) => <SelectItem key={status} className="cursor-pointer hover:bg-slate-900" value={status}>{status.split("")[0].toUpperCase() + status.slice(1)}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* order status field */}
          <FormField
            control={singleDataForm.control}
            name="order_status"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Order status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"not-delivery"}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ex: Not delivery" className="placeholder:text-white" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      order_status.map((status) => <SelectItem key={status} className="cursor-pointer hover:bg-slate-900" value={status}>{status.split("")[0].toUpperCase() + status.slice(1)}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>

        {/* who get the order field */}
        <FormField
          control={singleDataForm.control}
          name="who_get_the_order"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Who get the order</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={"nahid"}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Ex: Nahid" className="placeholder:text-white" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    agents.map((agent) => <SelectItem key={agent.name} className="cursor-pointer hover:bg-slate-900" value={agent.value}>{agent.name}</SelectItem>)
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default AddSingleSellData
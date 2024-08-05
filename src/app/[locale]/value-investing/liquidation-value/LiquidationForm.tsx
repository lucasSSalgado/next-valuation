'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LiquidationResponse, useCustomForm, liquidationCalculator } from "./liquidationMath"
import { handleCurrencyInput } from "@/app/[locale]/real-estate/flip-calculator/helper"
import BasicDialog from "../BasicDialog"

export default function LiquidationForm() {
    const [fairValue, setFairValue] = useState<LiquidationResponse>()
    const [openDialog, setOpenDialog] = useState(false)

    const form = useCustomForm()

    const onSubmit = () => {
        const resp = liquidationCalculator(form.getValues())
        setFairValue(resp)
        setOpenDialog(true)
    }

    return (
        <div className="">
            <Form {...form}>
            
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Price per Share: </FormLabel>
                        <FormControl>
                            <Input placeholder="$10" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="numberOfShares"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Number of Share: </FormLabel>
                        <FormControl>
                            <Input placeholder="658,883,304" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="cash"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Cash and Equivalent: </FormLabel>
                        <FormControl>
                            <Input placeholder="$100,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="bookValue"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Book Value of Assets: </FormLabel>
                        <FormControl>
                            <Input placeholder="$50,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="discount"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Discount on Book Value (%): </FormLabel>
                        <FormControl>
                            <Input placeholder="35%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="liabilities"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>All Liabilities: </FormLabel>
                        <FormControl>
                            <Input placeholder="$80,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <Button className="mt-4" type="submit">Submit</Button>
            </form>
            </Form>

            {
                openDialog && 
                fairValue &&
                <BasicDialog 
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    fairValue={fairValue.fairValue}
                    discount={fairValue.discount}
                    dialog_title="Liquidation Value"
                    dialog_value="Liquidation Value: "
                    dialog_discount="Discount: "
                />
            }
        </div>
    )
}
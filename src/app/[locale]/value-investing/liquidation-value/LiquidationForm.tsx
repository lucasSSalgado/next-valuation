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

interface Props {
    price_label: string
    number_label: string
    cash_label: string
    book_label: string
    discount_label: string
    liabilities_label: string
    submit: string

    dialog_title: string
    dialog_value: string
    dialog_discount: string
}

export default function LiquidationForm({
    price_label, number_label, cash_label, book_label, discount_label, liabilities_label, submit,
    dialog_title, dialog_value, dialog_discount
}: Props) {
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
                        <FormLabel>{ price_label }</FormLabel>
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
                        <FormLabel>{ number_label }</FormLabel>
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
                        <FormLabel>{ cash_label }</FormLabel>
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
                        <FormLabel>{ book_label }</FormLabel>
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
                        <FormLabel>{ discount_label }</FormLabel>
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
                        <FormLabel>{ liabilities_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="$80,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <Button className="mt-4" type="submit">{ submit }</Button>
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
                    dialog_title={dialog_title}
                    dialog_value={dialog_value}
                    dialog_discount={dialog_discount}
                />
            }
        </div>
    )
}
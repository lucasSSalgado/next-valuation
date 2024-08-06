'use client'

import { useState } from "react"
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
import { GordonResponse, useCustomForm, gordonCalculator } from "./gordonMath"
import { handleCurrencyInput } from "@/app/[locale]/real-estate/flip-calculator/helper"
import BasicDialog from "../BasicDialog"

interface Props {
    stock_label: string
    dividend_label: string
    growth_label: string
    discount_label: string
    submit: string

    dialog_title: string
    dialog_value: string
    dialog_discount: string
}

export default function GordonForm({
    stock_label, dividend_label, growth_label, discount_label, submit,
    dialog_title, dialog_value, dialog_discount
}: Props) {
    const [openDialog, setOpenDialog] = useState(false)
    const [fairValue, setFairValue] = useState<GordonResponse>()
    const form = useCustomForm()

    const onSubmit = () => {
        const resp = gordonCalculator(form.getValues())
        setFairValue(resp)
        setOpenDialog(true)
    }

    return (
        <div>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ stock_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="$20.50" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="dividend"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ dividend_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="$25.00" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="divGrowth"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ growth_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="5%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="basicRate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ discount_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="12%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
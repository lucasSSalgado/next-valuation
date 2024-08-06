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
import { GrahamResponse, grahamCalculator, useCustomForm } from "./grahamMath"
import { handleCurrencyInput } from "@/app/[locale]/real-estate/flip-calculator/helper"
import BasicDialog from "../BasicDialog"

interface Props {
    price_label: string
    eps_label: string
    btv_label: string
    submit: string

    dialog_title: string
    dialog_value: string
    dialog_discount:string
}

export default function GrahamForm({
    price_label, eps_label, btv_label, submit,
    dialog_title, dialog_value, dialog_discount
}: Props) {
    const [openDialog, setOpenDialog] = useState(false)
    const [fairValue, setfairValue] = useState<GrahamResponse>()

    const form = useCustomForm()
    const onSubmit = () => {
        const resp = grahamCalculator(form.getValues())
        setfairValue(resp)
        setOpenDialog(true)
    }

    return (
        <div className="">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ price_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="$20.50" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="eps"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ eps_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="$2.50" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="btv"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ btv_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="$10.50" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />  
                </div>
                
                <Button type="submit">{ submit }</Button>
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
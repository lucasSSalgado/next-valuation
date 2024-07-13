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
import { handleCurrencyInput } from "@/app/real-estate/flip-calculator/helper"
import BasicDialog from "../BasicDialog"

export default function GrahamForm() {
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
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Stock Price: </FormLabel>
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
                    <FormLabel>Earning per Share: </FormLabel>
                    <FormControl>
                        <Input placeholder="$2.50" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="btv"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Book Value per Share: </FormLabel>
                    <FormControl>
                        <Input placeholder="$10.50" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />  
                </div>
                
                <Button type="submit">Submit</Button>
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
                    title="Graham Model"
                />
            }
        </div>
    )
}
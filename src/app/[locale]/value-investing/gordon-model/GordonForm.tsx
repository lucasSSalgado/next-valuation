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

export default function GordonForm() {
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
                    name="dividend"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Expected Dividend Pay in the next year: </FormLabel>
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
                        <FormLabel>Growth in Dividend Rate To The Next Years (%): </FormLabel>
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
                        <FormLabel>Discounted Basic Rate (%): </FormLabel>
                        <FormControl>
                            <Input placeholder="12%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                    dialog_title="Gordon Growth Model"
                    dialog_value="dialog value"
                    dialog_discount="dialog discount"
                />
            }
        </div>
    )
}
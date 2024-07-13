'use client'

import { useState } from "react"
import { DcfResponse, useCustomForm, dcfCalculator } from "./dcfMath"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { handleCurrencyInput } from "@/app/real-estate/flip-calculator/helper"
import BasicDialog from "../BasicDialog"

export default function DiscountedForm() {
    const [resp, setResp] = useState<DcfResponse>()
    const [openDialog, setOpenDialog] = useState(false)

    const form = useCustomForm()

    const onSubmit = () => {
        const resp = dcfCalculator(form.getValues())
        setResp(resp)
        setOpenDialog(true)
    }

    return (
        <div>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} >
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="stockPrice"
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
                        <FormLabel>Earning Per Share: </FormLabel>
                        <FormControl>
                            <Input placeholder="$2.50" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="firstRate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Gowth rate in the first period (%): </FormLabel>
                        <FormControl>
                            <Input placeholder="8%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="firstYears"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Number of years of the first growth rate: </FormLabel>
                        <FormControl>
                            <Input placeholder="4" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="secondRate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Gowth rate in the second period (%): </FormLabel>
                        <FormControl>
                            <Input placeholder="3%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="secondYears"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Number of years of the second growth rate: </FormLabel>
                        <FormControl>
                            <Input placeholder="8" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="discountedRate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Discounted rate (%): </FormLabel>
                        <FormControl>
                            <Input placeholder="5%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                resp && 
                    <BasicDialog
                        openDialog={openDialog}
                        setOpenDialog={setOpenDialog}
                        fairValue={resp.fairValue}
                        discount={resp.discount}
                        title="Discounted Cash Flow"
                    />
            }
        </div>
    )
}
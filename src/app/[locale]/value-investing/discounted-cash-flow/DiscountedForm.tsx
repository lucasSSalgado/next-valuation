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
import { handleCurrencyInput } from "@/app/[locale]/real-estate/flip-calculator/helper"
import BasicDialog from "../BasicDialog"

interface Props {
    stock_label: string
    eps_label: string
    fgrowth_label: string
    fyears_label: string
    sgrowth_label: string
    syears_label: string
    discount_label: string
    btn: string
    dialog_title: string
    dialog_value: string
    dialog_discount: string
}

export default function DiscountedForm({
    stock_label, eps_label, fgrowth_label, fyears_label, 
    sgrowth_label, syears_label, discount_label, btn,
    dialog_title, dialog_value, dialog_discount
}: Props) {
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
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="stockPrice"
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
                    name="eps"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ eps_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="$2.50" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="firstRate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ fgrowth_label }</FormLabel>
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
                        <FormLabel>{ fyears_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="4" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="secondRate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ sgrowth_label }</FormLabel>
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
                        <FormLabel>{ syears_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="8" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="discountedRate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ discount_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="5%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <Button className="mt-4" type="submit">{ btn }</Button>
            </form>
            </Form>

            {
                resp && 
                    <BasicDialog
                        openDialog={openDialog}
                        setOpenDialog={setOpenDialog}
                        fairValue={resp.fairValue}
                        discount={resp.discount}
                        dialog_title={ dialog_title }
                        dialog_value={ dialog_value }
                        dialog_discount={ dialog_discount }
                    />
            }
        </div>
    )
}
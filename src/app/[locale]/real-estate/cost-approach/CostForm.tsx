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
import { formSchema, useCustomForm, costCalculator, CostValuation } from "./costMath"
import { z } from "zod"
import CostDialog from "./CostDialog"
import { handleCurrencyInput } from "../flip-calculator/helper"

interface Props {
    land_label: string
    build_label: string
    property_label: string
    time_label: string
    age_label: string
    lifetime_label: string
    opportunity_label: string
    price_label: string
    submit: string

    title: string
    fair_value: string
    discount_label: string
    quality_label: string
}

export default function CostForm({
    land_label, build_label, property_label, time_label, age_label, 
    lifetime_label, opportunity_label, price_label, submit,
    title, fair_value, discount_label, quality_label
}: Props) {
    const [fairValue, setfairValue] = useState<CostValuation>()
    const [openDialog, setOpenDialog] = useState(false)

    const form = useCustomForm()
    const onSubmit = (data: z.infer<typeof formSchema>) => {
        const resp = costCalculator(data)
        setfairValue(resp)
        setOpenDialog(true)
    }

    return (
        <div>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="landCost"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ land_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="$50,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="costBuild"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ build_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="$5,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="squareFoot"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ property_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="70" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="buildTime"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ time_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="6" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="propertyAge"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ age_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="10" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="propertyLifetime"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ lifetime_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="50" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="opportunityCost"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ opportunity_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="6%" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{ price_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="$200,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <Button className="mt-3" type="submit">{ submit }</Button>
            </form>
            </Form>

            {
                fairValue && 
                openDialog &&
                <CostDialog 
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    fairValue={fairValue.fairValue}
                    discont={fairValue.discount}

                    title={ title }
                    fair_value={ fair_value }
                    discount_label={ discount_label }
                    quality_label={ quality_label }
                />
            }
        </div>
    )
}
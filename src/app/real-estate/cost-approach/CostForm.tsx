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

export default function CostForm() {
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
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="landCost"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Land Cost: </FormLabel>
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
                    <FormLabel>Build Cost Per Square Foot: </FormLabel>
                    <FormControl>
                        <Input placeholder="$5,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="squareFoot"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Property Square Foot: </FormLabel>
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
                    <FormLabel>Build Time in Months: </FormLabel>
                    <FormControl>
                        <Input placeholder="6" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="propertyAge"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Property Age (in years): </FormLabel>
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
                    <FormLabel>Property Lifetime (genarally 50 years): </FormLabel>
                    <FormControl>
                        <Input placeholder="50" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                <FormField
                control={form.control}
                name="opportunityCost"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Opportunity Cost (%): </FormLabel>
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
                    <FormLabel>Property Requested Price:  </FormLabel>
                    <FormControl>
                        <Input placeholder="$200,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <Button className="mt-3" type="submit">Calculate</Button>
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
                />
            }
        </div>
    )
}
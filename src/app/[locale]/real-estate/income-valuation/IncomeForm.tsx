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
import { useCustomForm, incomeValuation, formSchema, IncomeValuation } from "./incomeMath"
import { z } from "zod"
import { handleCurrencyInput } from "../flip-calculator/helper"
import IncomeDialog from "./IncomeDialog"

interface Props {
    income_label: string
    risk_free_label: string
    risk_premiun_label: string
    growth_label: string
    vacancy_label: string
    price_label: string
    submit: string

    dialog_title: string
    dialog_fair_value: string
    dialog_price: string
    dialog_discount: string
    dialog_quality: string
}

export default function IncomeForm({
    income_label, risk_free_label, risk_premiun_label, growth_label, vacancy_label, price_label, submit,
    dialog_title, dialog_fair_value, dialog_price, dialog_discount, dialog_quality
}: Props) {
    const [fairValue, setFairValue] = useState<IncomeValuation>()
    const [openDialog, setOpenDialog] = useState(false)

    const form = useCustomForm()
    const onSubmit = (data: z.infer<typeof formSchema>) => {
        const resp = incomeValuation(data)
        console.log(resp)
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
                    name="anullyIncome"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ income_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="$200,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="riskFreeRate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{ risk_free_label }</FormLabel>
                        <FormControl>
                            <Input placeholder="10%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="riskPremiun"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{ risk_premiun_label }</FormLabel>
                            <FormControl>
                                <Input placeholder="3%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="expectedGrowth"
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
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="vacancyRate"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{ vacancy_label }</FormLabel>
                            <FormControl>
                                <Input placeholder="7%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                openDialog && fairValue &&
                <IncomeDialog 
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    fairPrice={fairValue?.fairValue}
                    price={fairValue?.price}
                    discount={fairValue?.discount} 
                    
                    dialog_title={ dialog_title } 
                    dialog_fair_value={ dialog_fair_value } 
                    dialog_price={ dialog_price } 
                    dialog_discount={ dialog_discount } 
                    dialog_quality={ dialog_quality }
                />
            }
        </div>
    )
}
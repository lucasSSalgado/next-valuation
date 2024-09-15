'use client'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { compoundCalculator, CompoundResult, useCustomForm } from "./compountMath"
import { handleCurrencyInput } from "@/app/[locale]/real-estate/flip-calculator/helper"
import { useState } from "react"
import { formatCurrency } from "@/lib/formatter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
    month_label: string
    interest_label: string
    time_label: string
    monthly: string
    annually: string
    times_label: string
    calcular_btn: string
    dialog_title: string
    final_value: string
    total_interest: string
    total_cost: string
}

export default function CompoundCalculatorForm
    ({ 
        month_label, interest_label, time_label, monthly, annually, 
        times_label, calcular_btn, dialog_title, final_value, total_interest,
        total_cost 
    }: Props) {
    const [result, setResult] = useState<CompoundResult>()
    const form = useCustomForm()
    const onSubmit = () => {
        const result = compoundCalculator(form.getValues())
        setResult(result)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-primary">
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="principal"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Principal: </FormLabel>
                            <FormControl>
                            <Input placeholder="$100,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={form.control}
                        name="monthlyPayment"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>{ month_label } </FormLabel>
                            <FormControl>
                            <Input placeholder="$10,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="rate"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>{ interest_label} </FormLabel>
                            <FormControl>
                            <Input placeholder="10%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="rateType"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>{ time_label }</FormLabel>
                            <FormControl>
                                <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                            >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="monthly" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                    { monthly }
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="annually" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                    { annually }
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                            </FormControl>
                        </FormItem>
                        )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>{ times_label } </FormLabel>
                            <FormControl>
                            <Input placeholder="15" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <Button type="submit">{ calcular_btn }</Button>
                </form>
            </Form>
            
            {
                result &&
                    <>
                        <Card className="mt-8">
                            <CardHeader>
                                <CardTitle>{ dialog_title }</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{  final_value } { formatCurrency(result.finalValue)  }</p>
                                <p>{ total_interest } { formatCurrency(result.interest) }</p>
                                <p>{ total_cost } { formatCurrency(result.investment) }</p>
                            </CardContent>
                        </Card> 
                    </>
            }
        </div>
    )
}
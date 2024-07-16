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
import { handleCurrencyInput } from "@/app/real-estate/flip-calculator/helper"
import { useState } from "react"
import { formatCurrency } from "@/lib/formatter"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompoundCalculatorForm() {
    const [result, setResult] = useState<CompoundResult>()
    const form = useCustomForm()
    const onSubmit = () => {
        const result = compoundCalculator(form.getValues())
        setResult(result)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
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
                            <FormLabel>Monthly Payment: </FormLabel>
                            <FormControl>
                            <Input placeholder="$10,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="rate"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Interest Rate (%): </FormLabel>
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
                            <FormLabel>choose the time interval:</FormLabel>
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
                                    Monthly
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="annually" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                    Annually
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                            </FormControl>
                        </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Times: </FormLabel>
                            <FormControl>
                            <Input placeholder="15" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                result &&
                    <>
                        <Card className="mt-8">
                            <CardHeader>
                                <CardTitle>Results</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Final Value: { formatCurrency(result.finalValue)  }</p>
                                <p>Total Interest: { formatCurrency(result.interest) }</p>
                                <p>Total Cost: { formatCurrency(result.investment) }</p>
                            </CardContent>
                        </Card> 
                    </>
            }
        </div>
    )
}
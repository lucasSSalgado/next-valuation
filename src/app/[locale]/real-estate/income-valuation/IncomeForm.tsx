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
import { Separator } from "@/components/ui/separator"
import IncomeAlert from "./IncomeAlert"


export default function IncomeForm() {
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
                        <FormLabel>Anually Real Income: </FormLabel>
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
                        <FormLabel>Risk Free Rate (%): </FormLabel>
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
                            <FormLabel>Risk Premiun (%): </FormLabel>
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
                            <FormLabel>Expected Growth (%): </FormLabel>
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
                            <FormLabel>Anually Vacancy (%): </FormLabel>
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
                            <FormLabel>Property Price: </FormLabel>
                            <FormControl>
                                <Input placeholder="$200,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className="mt-3" type="submit">Submit</Button>
            </form>
            </Form>

            {
                openDialog && fairValue &&
                <IncomeAlert 
                    openDialog={openDialog} 
                    setOpenDialog={setOpenDialog} 
                    fairPrice={fairValue?.fairValue} 
                    price={fairValue?.price} 
                    discount={fairValue?.discount} />
            }
        </div>
    )
}
'use client'

import { z } from "zod"
 
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

import { calculateLoan, formSchema, useCustomForm } from "./loanMath"
import { handleCurrencyInput } from "./helper"

export default function LoanCalculator() {     
    const form = useCustomForm();

    function onSubmit(values: z.infer<typeof formSchema>) {
        const resp = calculateLoan(values)
        console.log(resp)
    }  

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Purchansing Price: </FormLabel>
                        <FormControl>
                            <Input placeholder="$200,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Sell Price: </FormLabel>
                        <FormControl>
                            <Input placeholder="$300,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="downPayment"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Down Payment (%): </FormLabel>
                        <FormControl>
                            <Input placeholder="10%" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="interatesRate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Interate Rates Anually (%): </FormLabel>
                        <FormControl>
                            <Input placeholder="7%" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="financingYears"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Financing Years: </FormLabel>
                        <FormControl>
                            <Input placeholder="30 years" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />   
                    <FormField
                    control={form.control}
                    name="rehab"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rehab Cost: </FormLabel>
                            <FormControl>
                            <Input placeholder="$50.000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="hodingCosts"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>All Holding Cost (utilities, insurance, taxes, fees. Excluding loan payment) by Month: </FormLabel>
                            <FormControl>
                            <Input placeholder="$50.000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="documentation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Documentation Cost: </FormLabel>
                            <FormControl>
                            <Input placeholder="$50.000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="discountInSell"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Discount in sell (%): </FormLabel>
                            <FormControl>
                            <Input placeholder="5%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="localFees"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Local Fees (%): </FormLabel>
                            <FormControl>
                            <Input placeholder="2%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="leiloeiroComission"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Fees in for the leiloeiro (%): </FormLabel>
                            <FormControl>
                            <Input placeholder="2%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField 
                    control={form.control}
                    name="sellerComission"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Seller Comission if applicable (%): </FormLabel>
                            <FormControl>
                                <Input placeholder="5%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField 
                    control={form.control}
                    name="otherCosts1"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Optional Costs 1 (specific taxes, loyer, bla bla): </FormLabel>
                            <FormControl>
                                <Input placeholder="Loyer..." {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField 
                    control={form.control}
                    name="otherCosts2"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Optional Costs 2 (More taxes? Really?): </FormLabel>
                            <FormControl>
                                <Input placeholder="more legal fees..." {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                        name="timeToSell"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Time to sell (in months): </FormLabel>
                            <FormControl>
                            <Input placeholder="12" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                        name="taxesOnProfit"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Taxes on Profit (%): </FormLabel>
                            <FormControl>
                            <Input placeholder="15%" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button className="mt-2" type="submit">Submit</Button>
                </form>
            </Form>
        </div>
      )
}
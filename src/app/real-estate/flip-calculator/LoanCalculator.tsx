'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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

import { calculateLoan, formSchema } from "./loanMath"
import { Checkbox } from "@/components/ui/checkbox"
import { handleCurrencyInput } from "./helper"

export default function LoanCalculator() {     
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: '',
            sell: '',
            downPayment: '',
            interatesRate: '',
            interatesRateTaxes: false,
            financingYears: '',
            rehab: '',
            rehabTaxes: false,
            hodingCosts: '',
            hodingCostsTaxes: false,
            localFees: '',
            localFeesTaxes: false,
            buyerComission: '',
            sellerComission: '',
            sellerComissionTaxes: false,
            otherCosts1: '',
            otherCost1Taxes: false,
            otherCosts2: '',
            otherCost2Taxes: false,
            timeToSell: '',
            taxesOnProfit: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const resp = calculateLoan(values)
    }  


    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
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
                    name="sell"
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
                    name="interatesRateTaxes"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                            </FormControl>
                            <FormLabel className="text-sm ml-2">
                            can be deducted from tax (monthly installment payment)
                            </FormLabel>
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
                    <p>Add all deductible costs here</p>
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
                    name="rehabTaxes"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                            </FormControl>
                            <FormLabel className="text-sm ml-2">
                            can be deducted from tax
                            </FormLabel>
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
                    name="hodingCostsTaxes"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                            </FormControl>
                            <FormLabel className="text-sm ml-2">
                            can be deducted from tax
                            </FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField 
                    control={form.control}
                    name="localFees"
                    render={({ field }) => (
                            <FormItem>
                                <FormLabel>Local Fees: </FormLabel>
                                <FormControl>
                                    <Input placeholder="local fees..." {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                    )}
                    />
                    <FormField 
                    control={form.control}
                    name="localFeesTaxes"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="text-sm ml-2">
                                can be deducted from tax
                            </FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField 
                    control={form.control}
                    name="buyerComission"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Buyer Comission if applicable (%): </FormLabel>
                            <FormControl>
                                <Input placeholder="5%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                    name="sellerComissionTaxes"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="text-sm ml-2">
                                can be deducted from tax
                            </FormLabel>
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
                    name="otherCost1Taxes"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="text-sm ml-2">
                                can be deducted from tax
                            </FormLabel>
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
                    name="otherCost2Taxes"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="text-sm ml-2">
                                can be deducted from tax
                            </FormLabel>
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
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
      )
}
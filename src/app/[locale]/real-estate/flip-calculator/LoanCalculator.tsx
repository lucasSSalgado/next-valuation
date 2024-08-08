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
import { useState } from "react"
import { FlipResponse } from "@/app/[locale]/types"
import { formatCurrency } from "@/lib/formatter"
import ResultDialog from "./ResultDialog"

interface Props { 
    price_label: string 
    sell_label: string  
    rehab_label: string 
    documentation_label: string 
    holding_label: string 
    buyer_comission_label: string 
    seller_comission_label: string 
    option1_label: string 
    option2_label: string 
    time_label: string 
    profit_label: string 
    submit: string

    down_label: string,
    interest_label: string,
    years_label: string,
    discount_label: string,
    fees_label: string

    dialog_title: string
    dialog_profit: string
    dialog_roi: string
    dialog_cash: string
    dialog_quality: string
  }

export default function LoanCalculator({
    price_label, sell_label, rehab_label, documentation_label, holding_label, buyer_comission_label, 
    seller_comission_label, option1_label, option2_label, time_label, profit_label, submit,
    dialog_title, dialog_profit, dialog_roi, dialog_cash, dialog_quality,
    down_label, interest_label, years_label, discount_label, fees_label
}: Props) {     
    const form = useCustomForm();
    const [resp, setResp] = useState<FlipResponse>()
    const [openDialog, setOpenDialog] = useState(false)

    function onSubmit(values: z.infer<typeof formSchema>) {
       setResp(calculateLoan(values))
       setOpenDialog(true)
    }  

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto">
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
                        <FormField
                        control={form.control}
                        name="value"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{ sell_label }</FormLabel>
                            <FormControl>
                                <Input placeholder="$300,000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                        <FormField
                        control={form.control}
                        name="downPayment"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{ down_label }</FormLabel>
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
                            <FormLabel>{ interest_label }</FormLabel>
                            <FormControl>
                                <Input placeholder="7%" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                        <FormField
                        control={form.control}
                        name="financingYears"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{ years_label }</FormLabel>
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
                                <FormLabel>{ rehab_label }</FormLabel>
                                <FormControl>
                                <Input placeholder="$50.000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    
                    <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                        <FormField
                        control={form.control}
                        name="hodingCosts"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{ holding_label }</FormLabel>
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
                                <FormLabel>{ documentation_label }</FormLabel>
                                <FormControl>
                                <Input placeholder="$50.000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    
                    <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                        <FormField
                        control={form.control}
                        name="discountInSell"
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
                        <FormField
                        control={form.control}
                        name="localFees"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{ fees_label }</FormLabel>
                                <FormControl>
                                <Input placeholder="2%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                        <FormField
                        control={form.control}
                        name="leiloeiroComission"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{ buyer_comission_label }</FormLabel>
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
                                <FormLabel>{ seller_comission_label }</FormLabel>
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
                        name="otherCosts1"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{ option1_label }</FormLabel>
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
                                <FormLabel>{ option2_label }</FormLabel>
                                <FormControl>
                                    <Input placeholder="more legal fees..." {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    
                    <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                        <FormField
                        control={form.control}
                            name="timeToSell"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>{ time_label }</FormLabel>
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
                                <FormLabel>{ profit_label } </FormLabel>
                                <FormControl>
                                <Input placeholder="15%" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    
                    <Button className="mt-3" type="submit">{ submit }</Button>
                </form>
            </Form>

            { resp && 
                <ResultDialog 
                    openDialog={openDialog} 
                    setOpenDialog={setOpenDialog}
                    profit={formatCurrency(resp.netProfit)} 
                    roi={resp.roi} 
                    cashNeed={formatCurrency(resp.necessaryCash)} 

                    dialog_title={dialog_title}
                    dialog_profit={dialog_profit}
                    dialog_cash={dialog_cash}
                    dialog_quality={dialog_quality}
                    dialog_roi={dialog_roi}
                />
            }
        </div>
      )
}
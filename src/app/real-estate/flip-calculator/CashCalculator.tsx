"use client"

import type { FlipResponse } from '@/app/types'
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
import { Checkbox } from "@/components/ui/checkbox"
import { formSchema, calculateCash } from "./cashMath"
import { useState } from "react"
import { handleCurrencyInput } from './helper'

export default function CachCalculator() {    
  const [resp, setResp] = useState<FlipResponse>()

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
          price: '',
          sell: '',
          rehab: '',
          rehabTaxes: false,
          hodingCosts: '',
          hodingCostsTaxes: false,
          otherCosts1: '',
          otherCost1Taxes: false,
          otherCosts2: '',
          otherCost2Taxes: false,
          timeToSell: '',
          taxesOnProfit: '',
      },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    const responseObj = calculateCash(
        values.price,
        values.sell,
        values.rehab,
        values.rehabTaxes as boolean,
        values.hodingCosts,
        values.hodingCostsTaxes as boolean,
        values.otherCosts1 as string,
        values.otherCost1Taxes as boolean,
        values.otherCosts2 as string,
        values.otherCost2Taxes as boolean,
        values.timeToSell,
        values.taxesOnProfit
    )

    setResp(responseObj)
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
                  <Input placeholder="$200.000" { ...field } onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                  <Input placeholder="$250.000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                <FormLabel>All Holding Cost (utilities, insurance, taxes, fees, etc) by Month: </FormLabel>
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
              name="otherCosts1"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>Optional Costs 1 (Selling Costs, more fees, more taxes): </FormLabel>
                      <FormControl>
                          <Input placeholder="legal fees..." {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                          <Input placeholder="legal fees..." {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
    
      { 
        resp && 
        <div>
          the profit is ${ resp.netProfit } the ROI is { resp.roi.toFixed(4) }% and the monthly equivalent yield is { resp.monthlyRoi.toFixed(4) }%
        </div> 
      }
    </div>
  )
}

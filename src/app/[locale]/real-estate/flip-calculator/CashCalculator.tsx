"use client"

import type { FlipResponse } from '@/app/[locale]/types'
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
import { formSchema, calculateCash, useCustomForm } from "./cashMath"
import ResultDialog from "./ResultDialog"
import { useState } from "react"
import { handleCurrencyInput } from './helper'
import { formatCurrency } from '@/lib/formatter'

/*
"price_label": "Preço de Compra:",
"sell_label": "Preço de Venda:",
"rehab_label": "Reforma:",
" ": "Documentação:",
"holding_label": "Todos os custos de Holding (luz, agua, seguro, taxas, etc)por mês:",
"buyer_comission_label": "Comissão ao Comprador/Leiloeiro se aplicável (%):",
"seller_comission_label": "Comissão de venda se aplicável (%):",
"option1_label": "Custo opicional 1 (Custos de venda, advogado, mais taxas, etc):",
"option2_label": "Custo opicional 2 (Mais impostos? Sério?):",
"time_label": "Tempo para vender (em meses):",
"profit_label": "Impostos sobre o lucro(%):"
*/

interface Props {
  price_label: string 
  sell_label: string  
  rehab_label: string 
  documentation_label: string 
  holding_label: string 
  buyer_comission_label: string 
  seller_comission_label: string 
  discount_label: string
  fees_label: string
  option1_label: string 
  option2_label: string 
  time_label: string 
  profit_label: string 
  submit: string

  dialog_title: string
  dialog_profit: string
  dialog_roi: string
  dialog_cash: string
  dialog_quality: string
}

export default function CachCalculator({
  price_label, sell_label, rehab_label, documentation_label, holding_label, buyer_comission_label, 
  seller_comission_label, discount_label, fees_label, option1_label, option2_label, time_label, profit_label, submit,
  dialog_title, dialog_profit, dialog_roi, dialog_cash, dialog_quality
}: Props) {    
  const [resp, setResp] = useState<FlipResponse>()
  const [openDialog, setOpenDialog] = useState(false)

  const form = useCustomForm()

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResp(calculateCash(values))
    setOpenDialog(true)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{ price_label }</FormLabel>
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
                  <FormLabel>{ sell_label }</FormLabel>
                  <FormControl>
                    <Input placeholder="$250.000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
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
            <FormField
              control={form.control}
              name="documentation"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>{ documentation_label }</FormLabel>
                      <FormControl>
                      <Input placeholder="$5.000" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                    <Input placeholder="$500" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                      <FormLabel>{ buyer_comission_label }</FormLabel>
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
            

            <FormField
              control={form.control}
              name="discountInSell"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{ discount_label }</FormLabel>
                  <FormControl>
                    <Input placeholder="3%" {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
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
            <FormField 
                control={form.control}
                name="otherCosts1"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>{ option1_label }</FormLabel>
                    <FormControl>
                        <Input placeholder="legal fees..." {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
          </div>
          <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
            <FormField 
              control={form.control}
              name="otherCosts2"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>{ option2_label }</FormLabel>
                      <FormControl>
                          <Input placeholder="legal fees..." {...field} onChange={(e) => field.onChange(handleCurrencyInput(e.target.value))} />
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
                  <FormLabel>{ time_label }</FormLabel>
                  <FormControl>
                    <Input placeholder="12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
          <FormField
            control={form.control}
            name="taxesOnProfit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{ profit_label }</FormLabel>
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
'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"

import CachCalculator from "./CashCalculator"
import LoanCalculator from "./LoanCalculator"
import { Separator } from "@/components/ui/separator"

type cashOrLoan = 'cash' | 'loan' | undefined

interface Props {
    cash_label: string
    loan_label: string

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

export default function FlipForm(
    { 
        cash_label, loan_label, 
        price_label, sell_label, rehab_label, documentation_label, holding_label, buyer_comission_label, 
        seller_comission_label, option1_label, option2_label, time_label, profit_label, submit,
        dialog_title, dialog_profit, dialog_roi, dialog_cash, dialog_quality,
        down_label, interest_label, years_label, discount_label, fees_label
    } : Props) {
    const [paymentType, setPaymentType] = useState<cashOrLoan>(undefined)

    return (
        <div>
            <div className="flex gap-4 mt-4 justify-evenly mx-auto">
                <Button variant="outline" onClick={() => setPaymentType('cash')}>{ cash_label }</Button>
                <Button onClick={() => setPaymentType('loan')}>{ loan_label }</Button>
            </div>

            <Separator className="my-4" />
            <div>
                { 
                    paymentType === 'cash' && 
                    <CachCalculator 
                        price_label={price_label}
                        sell_label={sell_label}
                        rehab_label={rehab_label}
                        documentation_label={documentation_label}
                        holding_label={holding_label}
                        buyer_comission_label={buyer_comission_label}
                        seller_comission_label={seller_comission_label}
                        option1_label={option1_label}
                        option2_label={option2_label}
                        time_label={time_label}
                        profit_label={profit_label}
                        submit={submit}

                        dialog_title={dialog_title}
                        dialog_profit={dialog_profit}
                        dialog_cash={dialog_cash}
                        dialog_quality={dialog_quality}
                        dialog_roi={dialog_roi}
                    /> 
                }
                { 
                    paymentType === 'loan' && 
                    <LoanCalculator 
                        price_label={price_label}
                        sell_label={sell_label}
                        rehab_label={rehab_label}
                        documentation_label={documentation_label}
                        holding_label={holding_label}
                        buyer_comission_label={buyer_comission_label}
                        seller_comission_label={seller_comission_label}
                        option1_label={option1_label}
                        option2_label={option2_label}
                        time_label={time_label}
                        profit_label={profit_label}
                        submit={submit}

                        down_label={down_label} 
                        interest_label={interest_label} 
                        years_label={years_label} 
                        discount_label={discount_label}
                        fees_label={fees_label}

                        dialog_title={dialog_title}
                        dialog_profit={dialog_profit}
                        dialog_cash={dialog_cash}
                        dialog_quality={dialog_quality}
                        dialog_roi={dialog_roi}
                    /> 
                }
            </div>
        </div>
    )   
}
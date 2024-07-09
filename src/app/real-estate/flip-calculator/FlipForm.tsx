'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"

import CachCalculator from "./CashCalculator"
import LoanCalculator from "./LoanCalculator"

type cashOrLoan = 'cash' | 'loan' | undefined

export default function FlipForm() {
    const [paymentType, setPaymentType] = useState<cashOrLoan>(undefined)

    return (
        <div>
            <div className="flex gap-4 mt-4">
                <Button variant="outline" onClick={() => setPaymentType('cash')}>Cash</Button>
                <Button onClick={() => setPaymentType('loan')}>Loan</Button>
            </div>

            <div>
                { paymentType === 'cash' && <CachCalculator /> }
                { paymentType === 'loan' && <LoanCalculator /> }
            </div>
        </div>
    )   
}
'use client'

import { useState } from "react"
import CachCalculator from "./CashCalculator"
import LoanCalculator from "./LoanCalculator"

type cashOrLoan = 'cash' | 'loan' | undefined

export default function FlipForm() {
    const [paymentType, setPaymentType] = useState<cashOrLoan>(undefined)

    return (
        <div>
            <div className="flex">
                <button className="bg-green-500 p-1 rounded-md" onClick={() => setPaymentType('cash')}>Cash</button>
                <button className="bg-green-500 p-1 rounded-md" onClick={() => setPaymentType('loan')}>Loan</button>
            </div>

            <div>
                { paymentType === 'cash' && <CachCalculator /> }
                { paymentType === 'loan' && <LoanCalculator /> }
            </div>
        </div>
    )   
}
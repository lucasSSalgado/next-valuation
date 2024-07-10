'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

export default function DiscountedForm() {
    const [eps, setEps] = useState(0)
    const [firstYears, setFirstYears] = useState(0)
    const [firstRate, setFirstRate] = useState(0)
    const [secondYears, setSecondYears] = useState(0)
    const [secondRate, setSecondRate] = useState(0)
    const [fairValue, setFairValue] = useState(0)
    const [discountedRate, setDiscountedRate] = useState(0)

    const [stockPrice, setStockPrice] = useState(0)

    const handleCalculator = () => {
        let value = 0
        const rate1 = firstRate / 100
        const rate2 = secondRate / 100
        const discoutedPercent = discountedRate / 100
        const totalYears = firstYears + secondYears

        for (let i = 1; i <= firstYears; i++) {
            value += (eps * Math.pow((1 + rate1), i)) / Math.pow((1 + discoutedPercent), i)
        }
        for (let j = (totalYears - firstYears + 1); j <= totalYears; j++) {
            value += (eps * Math.pow((1 + rate2), j)) / Math.pow((1 + discoutedPercent), j)
        }
        setFairValue(value)
    }

    return (
        <div className="bg-zinc-200 p-4 mt-4 rounded-md">
            <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Discounted Cash Flow From</h1>
            <p className="text-sm font-medium leading-none italic mb-3">All data is yearly</p>
            <Label htmlFor="stockPrice">Actual Stock Price: </Label>
            <Input type="text" name="stockPrice" id="stockPrice" onChange={(e) => setStockPrice(Number(e.target.value))}/>

            <form>
                <Label htmlFor="eps">Earning Per Share: </Label>
                <Input type="text" id="eps" onChange={(e) => setEps(Number(e.target.value))} /> <br />
                <Label htmlFor="firstY">Years of first growth rate: </Label>
                <Input type="text" id="firstY" onChange={(e) => setFirstYears(Number(e.target.value))} /> <br />
                <Label htmlFor="rateF">First growth rate (% yearly): </Label>
                <Input type="text" id="rateF" onChange={(e) => setFirstRate(Number(e.target.value))} /> <br />
                <Label htmlFor="secondY">Years of second growth rate: </Label>
                <Input type="text" id="secondY" onChange={(e) => setSecondYears(Number(e.target.value))} /> <br />
                <Label htmlFor="rateS">Second growth rate: </Label>
                <Input type="text" id="rateS" onChange={(e) => setSecondRate(Number(e.target.value))} /> <br />
                <Label htmlFor="perp">Discouted rate: </Label>
                <Input type="text" id="perp" onChange={(e) => setDiscountedRate(Number(e.target.value))} /> <br />
                <Button type="button" onClick={ handleCalculator }>
                    Calculator
                </Button>
            </form>

            {
                fairValue === 0 
                ? null :
                <p> The fair value of this stock is ${ fairValue.toFixed(2) } the margin of safety is { (((fairValue - stockPrice) / stockPrice)*100).toFixed(2) }%</p>
            }
        </div>
    )
}
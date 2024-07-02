'use client'

import { useState } from "react"

export default function DiscountedForm() {
    const [eps, setEps] = useState(0)
    const [firstYears, setFirstYears] = useState(0)
    const [firstRate, setFirstRate] = useState(0)
    const [secondYears, setSecondYears] = useState(0)
    const [secondRate, setSecondRate] = useState(0)
    const [fairValue, setFairValue] = useState(0)
    const [discountedRate, setDiscountedRate] = useState(0)

    const handleCalculator = () => {
        let value = 0
        const rate1 = firstRate / 100
        const rate2 = secondRate / 100
        const discoutedPercent = discountedRate / 100
        let currentEps = eps

        for (let i = 1; i <= firstYears; i++) {
            currentEps += (currentEps * (1 + rate1)) / (1 + discoutedPercent)
            console.log(currentEps)
        }
        for (let j = 1; j <= secondYears; j++) {
            currentEps += (currentEps * (1 + rate2)) / (1 + discoutedPercent)
            console.log(currentEps)
        }
        setFairValue(value)
    }

    return (
        <div className="bg-zinc-200 p-4 mt-4 rounded-md">
            <h1 className="text-2xl mb-2">Discounted Cash Flow From</h1>
            <p>All data is yearly</p>

            <form>
                <label htmlFor="eps">Earning Per Share: </label>
                <input type="text" id="eps" onChange={(e) => setEps(Number(e.target.value))} /> <br />
                <label htmlFor="firstY">Years of first growth rate: </label>
                <input type="text" id="firstY" onChange={(e) => setFirstYears(Number(e.target.value))} /> <br />
                <label htmlFor="rateF">First growth rate (% yearly): </label>
                <input type="text" id="rateF" onChange={(e) => setFirstRate(Number(e.target.value))} /> <br />
                <label htmlFor="secondY">Years of second growth rate: </label>
                <input type="text" id="secondY" onChange={(e) => setSecondYears(Number(e.target.value))} /> <br />
                <label htmlFor="rateS">Second growth rate: </label>
                <input type="text" id="rateS" onChange={(e) => setSecondRate(Number(e.target.value))} /> <br />
                <label htmlFor="perp">Discouted rate: </label>
                <input type="text" id="perp" onChange={(e) => setDiscountedRate(Number(e.target.value))} /> <br />
                <button className="bg-green-500 p-1 rounded-md" type="button" onClick={ handleCalculator }>
                    Calculator
                </button>
            </form>
            <p>{ fairValue }</p>
        </div>
    )
}
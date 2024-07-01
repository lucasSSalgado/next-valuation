'use client'

import { useState } from "react"

export default function GordonForm() {
    const [dividend, setDividend] = useState(0)
    const [basicRate, setBasicRate] = useState(0)
    const [divGrowth, setDivGrowth] = useState(0)
    const [fairValue, setFairValue] = useState(0)

    const handleCalculate = () => {
        const value = dividend / ((basicRate /100) - (divGrowth / 100))
        console.log(value)
        setFairValue(value)
    }

    return (
        <div className="bg-zinc-200 p-4 mt-4 rounded-md">
            <h1 className="text-2xl mb-2">Gordon Model From</h1>
            <p>All data is yearly</p>
            <form>
                <label htmlFor="dividend">Dividend Next Year: </label>
                <input type="text" id="dividend" onChange={(e) => setDividend(Number(e.target.value))} /> <br />
                <label htmlFor="rate">Rate of Return (% yearly): </label>
                <input type="text" id="rate" onChange={(e) => setBasicRate(Number(e.target.value))} /> <br />
                <label htmlFor="divGrowth">Dividend growth (% yearly): </label>
                <input type="text" id="divGrowth" onChange={(e) => setDivGrowth(Number(e.target.value))} /> <br />
                <button onClick={handleCalculate} className="bg-green-500 p-1 rounded-md" type="button">
                    Calculate
                </button>
            </form>
            <p>{ fairValue.toFixed(2) }</p>
        </div>
    )
}
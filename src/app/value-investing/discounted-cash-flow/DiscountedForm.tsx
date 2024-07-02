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
        console.log(fairValue, stockPrice)
    }

    return (
        <div className="bg-zinc-200 p-4 mt-4 rounded-md">
            <h1 className="text-2xl mb-2">Discounted Cash Flow From</h1>
            <p>All data is yearly</p>
            <label className="text-xl text-green-600" htmlFor="stockPrice">Actual Stock Price: </label>
            <input type="text" name="stockPrice" id="stockPrice" onChange={(e) => setStockPrice(Number(e.target.value))}/>

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
            {
                fairValue === 0 
                ? null :
                <p> The fair value of this stock is ${ fairValue.toFixed(2) } the margin of safety is { (((fairValue - stockPrice) / stockPrice)*100).toFixed(2) }%</p>
            }
        </div>
    )
}
'use client'

import { useState } from "react"

export default function IncomeForm() {
    const [riskFree, setRiskFree] = useState(0)
    const [riskPremium, setRiskPremium] = useState(0)
    const [normalIncome, setNormalIncome] = useState(0)
    const [vacancy, setVacancy] = useState(0)
    const [years, setYears] = useState(0)
    const [result, setResult] = useState(0) 
    const [growthRate, setGrowthRate] = useState(0)
    const [propertyPrice, setPropertyPrice] = useState(0)

    const handleCalculate = () => {
        let value = 0
        const discountRate = (riskFree + riskPremium) / 100
        for (let i = 0; i < years; i++) {
            const income = (normalIncome * (1 + growthRate) * (1 - (vacancy/100)))
            const currentVal = income / Math.pow((1 + discountRate), i)
            console.log(income, vacancy)
            value += currentVal
        }
        setResult(value)
    }

    return (
        <div className="bg-zinc-200 p-4 mt-4 rounded-md">
            <h1 className="text-2xl mb-2">Income Valuation From</h1>
            <p>All data is yearly</p>
            <form>
                <label htmlFor="">Free Risk Rate (%): </label>
                <input type="text" onChange={(e) => setRiskFree(Number(e.target.value))}/> <br />
                <label htmlFor="">Risk Premium (%): </label>
                <input type="text" onChange={(e) => setRiskPremium(Number(e.target.value))}/> <br />
                <label htmlFor="">Growth Rate (%): </label>
                <input type="text" onChange={(e) => setGrowthRate(Number(e.target.value))}/> <br />
                <label htmlFor="">Annualy Vancacy (%):</label>
                <input type="text" onChange={(e) => setVacancy(Number(e.target.value))}/> <br />
                <label htmlFor="">Current Income: </label>
                <input type="text" onChange={(e) => setNormalIncome(Number(e.target.value))}/> <br />
                <label htmlFor="">Years: </label>
                <input type="text" onChange={(e) => setYears(Number(e.target.value))}/> <br />
                <label htmlFor="">Property Price: </label>
                <input type="text" onChange={(e) => setPropertyPrice(Number(e.target.value))}/> <br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded" type="button" onClick={ handleCalculate }>
                    Calculate
                </button>
            </form>
            {
                propertyPrice === 0 ? 
                <p> The fair value of this property is: ${result.toFixed(2)}</p> :
                <p> The fair value of this property is: ${result.toFixed(2)} and the discount you pay is { (((propertyPrice / result) -1) * -100).toFixed(2)}%</p>
            }
        </div>
    )
}
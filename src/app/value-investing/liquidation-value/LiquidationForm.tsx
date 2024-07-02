'use client'

import { useState } from "react"

export default function LiquidationForm() {
    const [price, setPrice] = useState(0)
    const [cash, setCash] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [bookValue, setBookValue] = useState(0)
    const [liabilities, setLliabilities] =  useState(0)
    const [fairValue, setFairValue] = useState(0)

    const handleCalculator = () => {
        let value = cash + (bookValue * (1 - discount/100)) - liabilities
        setFairValue(value)
    }

    return (
        <div className="bg-zinc-200 p-4 mt-4 rounded-md">
            <h1 className="text-2xl mb-2">Liquidation From</h1>
            <form>
                <label htmlFor="price">Actual Stock Price: </label>
                <input type="text" id="price" onChange={(e) => setPrice(Number(e.target.value))} /> <br />   
                <label htmlFor="cash">Cash and availabilities: </label>
                <input type="text" id="cash" onChange={(e) => setCash(Number(e.target.value))} /> <br />    
                <label htmlFor="discount">Discount on sell of book value (%): </label>
                <input type="text" id="cash" onChange={(e) => setDiscount(Number(e.target.value))} /> <br />   
                <label htmlFor="bookValue">Value of Book Values: </label>
                <input type="text" id="bookValue" onChange={(e) => setBookValue(Number(e.target.value))} /> <br /> 
                <label htmlFor="bookValue">Total Liabilities: </label>
                <input type="text" id="bookValue" onChange={(e) => setLliabilities(Number(e.target.value))} /> <br /> 
                <button className="bg-green-500 p-1 rounded-md" type="button" onClick={handleCalculator}>
                    calculator    
                </button> 
            </form>
            <p>
                The fair value is ${ fairValue.toFixed(2) } 
                { fairValue !== 0 ? ` and the discout is ${((fairValue-price) / price *100).toFixed(2)}% `
                : ''}
            </p>
        </div>
    )
}
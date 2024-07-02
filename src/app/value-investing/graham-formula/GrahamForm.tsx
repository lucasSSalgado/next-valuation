'use client'

import { useState } from "react"

export default function GrahamForm() {
    const [price, setPrice] = useState(0)
    const [btv, setBtn] = useState(0)
    const [eps, setEps] = useState(0)
    const [fairValue, setfairValue] = useState(0)

    const handleCalculate = () => {
        const value =  Math.pow((btv * eps * 22.5), 0.5)
        setfairValue(value)
    }

    return (
        <div className="bg-zinc-200 p-4 mt-4 rounded-md">
            <h1 className="text-2xl mb-2">Graham Model From</h1>
            <label htmlFor="price">Actual Stock Price: </label>
            <input type="text" id="price" onChange={(e) => setPrice(Number(e.target.value))} />
            <form>
                <label htmlFor="eps">Earing per Share: </label>
                <input type="text" id="eps" onChange={(e) => setEps(Number(e.target.value))} /> <br />
                <label htmlFor="btv">Boot Value per share: </label>
                <input type="text" id="btv" onChange={(e) => setBtn(Number(e.target.value))} /> <br />
                <button onClick={handleCalculate} className="bg-green-500 p-1 rounded-md" type="button">
                    Calculate
                </button>
            </form>
            <p>The fair price is: ${ fairValue.toFixed(2) } { price !== 0 ? `and the discout is ${((fairValue-price) / price *100).toFixed(2)}% ` : "" }</p>
        </div>
    )
}
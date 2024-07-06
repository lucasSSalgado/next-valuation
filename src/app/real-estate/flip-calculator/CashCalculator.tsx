'use client'

import { useState } from "react"

export default function CachCalculator()  {
    const [pprice, setPprice] = useState(0);
    const [sprice, setSprice] = useState(0);
    const [rehab, setRehab] = useState(0);
    const [taxes, setTaxes] = useState(0);
    const [timeToSell, setTimeToSell] = useState(0);
    const [opportunityCost, setOpportunityCost] = useState(0);
    const [otherExpenses, setOtherExpenses] = useState(0);
    const [deductPprice, setDeductPprice] = useState(false);
    const [deductSprice, setDeductSprice] = useState(false);
    const [deductRehab, setDeductRehab] = useState(false);
    const [deductTaxes, setDeductTaxes] = useState(false);
    const [deductTimeToSell, setDeductTimeToSell] = useState(false);
    const [deductOpportunityCost, setDeductOpportunityCost] = useState(false);
    const [deductOtherExpenses, setDeductOtherExpenses] = useState(false);

    const handleCalculator = () => {
        // Calculation logic
    };

    return (
        <form>
            <label htmlFor="pprice">Purchasing Price: </label>
            <input type="text" id="pprice" onChange={(e) => setPprice(Number(e.target.value))} /> <br />

            <label htmlFor="sprice">Selling Price: </label>
            <input type="text" id="sprice" onChange={(e) => setSprice(Number(e.target.value))} /> <br />

            <label htmlFor="rehab">Rehab Cost: </label>
            <input type="text" id="rehab" onChange={(e) => setRehab(Number(e.target.value))} />
            <input type="checkbox" checked={deductRehab} onChange={(e) => setDeductRehab(e.target.checked)} /> Deduct for taxes <br />

            <label htmlFor="otherExpenses">Other Expenses: </label>
            <input type="text" id="otherExpenses" onChange={(e) => setOtherExpenses(Number(e.target.value))} />
            <input type="checkbox" checked={deductOtherExpenses} onChange={(e) => setDeductOtherExpenses(e.target.checked)} /> Deduct for taxes <br />

            <label htmlFor="timeToSell">Time to Sell: </label>
            <input type="text" id="timeToSell" onChange={(e) => setTimeToSell(Number(e.target.value))} /> <br />

            <label htmlFor="taxes">Taxes in Profit (%): </label>
            <input type="text" id="taxes" onChange={(e) => setTaxes(Number(e.target.value))} /> <br />

            <label htmlFor="opportunityCost">Opportunity Cost: </label>
            <input type="text" id="opportunityCost" onChange={(e) => setOpportunityCost(Number(e.target.value))} />

            <button type="button" onClick={handleCalculator} className="bg-green-500 p-1 rounded">
                Calculate
            </button>
        </form>
    );
}
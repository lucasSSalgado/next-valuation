'use client'

import { useState } from "react"

export default function CostForm() {
    const [landCost, setLandCost] = useState(0)
    const [costBuild, setCostBuild] = useState(0)
    const [squareFoot, setSquareFoot] = useState(0)
    const [propertyAge, setPropertyAge] = useState(0)
    const [propertyLifetime, setPropertyLifetime] = useState(0)
    const [buildTime, setBuildTime] = useState(0)
    const [opportunityCost, setOpportunityCost] = useState(0)
    const [fairValue, setfairValue] = useState(0)

    const handleCalculate = () => {
        const depreciationPercent = 1 - (propertyAge / propertyLifetime)
        const buildTotalCost = costBuild * squareFoot 
        const mothRate = Math.pow((1 + (opportunityCost/100)), 1/12)  - 1
        const value = landCost + (buildTotalCost * (depreciationPercent))
        const opportunityVal = value * Math.pow((1 + mothRate), buildTime)
        setfairValue(opportunityVal)
    }

    return (
        <div className="bg-zinc-200 p-4 mt-4 rounded-md">
            <h1 className="text-2xl mb-2">Cost Valuation From</h1>
            <p>All data is yearly</p>
            <form>
                <label htmlFor="land-cost">Land Cost: </label>
                <input type="text" id="land-cost" onChange={(e) => setLandCost(Number(e.target.value))} /> <br />
                <label htmlFor="cost-build">Cost of Square Foot: </label>
                <input type="text" id="cost-build" onChange={(e) => setCostBuild(Number(e.target.value))} /> <br />
                <label htmlFor="sqtrFoot">Number of Square Foot: </label>
                <input type="text" id="sqtrFoot" onChange={(e) => setSquareFoot(Number(e.target.value))} /> <br />
                <label htmlFor="age">Property Age: </label>
                <input type="text" id="age" onChange={(e) => setPropertyAge(Number(e.target.value))} /> <br />
                <label htmlFor="lifetime">Property Usefull Lifetime: </label>
                <input type="text" id="lifetime" onChange={(e) => setPropertyLifetime(Number(e.target.value))} /> <br />
                <label htmlFor="build-time">Time to build (in months): </label>
                <input type="text" id="build-time" onChange={(e) => setBuildTime(Number(e.target.value))} /> <br />
                <label htmlFor="opportunity-cost">Opportunity Cost (% yearly): </label>
                <input type="text" id="opportunity-cost" onChange={(e) => setOpportunityCost(Number(e.target.value))} /> <br />
                <button className="bg-green-500 p-1 rounded-md" type="button" onClick={ handleCalculate }>
                    Calculate
                </button>
            </form>
            <p>The fair value of this property is: ${ fairValue.toFixed(2) } </p>
        </div>
    )
}
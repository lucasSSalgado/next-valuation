'use client'

import { useState } from "react"

export default function SalesForm() {
    let initialInputs: propertyStatus[] = [
        { sqtrFeets: 0, price: 0 },
        { sqtrFeets: 0, price: 0 },
        { sqtrFeets: 0, price: 0 }
    ]

    const [propertyList, setPropertyList] = useState<propertyStatus[]>(initialInputs)
    const [mean, setMean] = useState(0)
    const [targetProperty, setTargetProperty] = useState(0)

    const addNewInput = () => {
        setPropertyList([...propertyList, { sqtrFeets: 0, price: 0 }])
    }
    const removeInput = (index: number) => {
        setPropertyList(propertyList.filter((_, i) => i !== index))
    }
    const calculateMean = () => {
        let mean = 0
        let priceTotal = 0
        let totalArea = 0
        propertyList.forEach(val => {
            priceTotal += val.price
            totalArea += val.sqtrFeets
        })
        mean = priceTotal / totalArea
        setMean(mean)
    }

    return (
        <div className="bg-zinc-200 p-4 mt-4 rounded-md">
            <h1 className="text-2xl">Sales Comparation</h1>
            <p>Enter your target property</p>
            <label htmlFor="">Square feet: </label>
            <input type="number" name="sqtrFeets" id="sqtrFeets" onChange={(e) => setTargetProperty(Number(e.target.value))} />

            <form>
                {
                    propertyList.map((property, index) => {
                        return (
                            <div className="mt-2" key={index}>
                                <label htmlFor="sqtrFeets">Area: </label>
                                <input type="number" name="sqtrFeets" id="sqtrFeets" onChange={(e) => property.sqtrFeets = Number(e.target.value)}/>
                                <label htmlFor="price">Price: </label>
                                <input type="number" name="price" id="price" onChange={(e) => property.price = Number(e.target.value)}/>
                                <button className="bg-red-500 text-white p-1 rounded-md" type="button" onClick={() => removeInput(index) }>Remove</button>
                            </div>
                        )
                    })
                }
            </form>
            <button className="bg-green-500 p-1 rounded-md mt-1" onClick={ addNewInput }>
                add new input
            </button>
            <br />
            <button className="bg-green-500 p-1 rounded-md mt-1" onClick={ calculateMean }>
                Calculate
            </button>

            <p className="mt-4"> The mean square feet price in the region is $ { mean.toFixed(2) } and your target property value is $ { (targetProperty * mean).toFixed(2) } </p>
        </div>
    )
}

type propertyStatus = {
    sqtrFeets: number
    price: number
}
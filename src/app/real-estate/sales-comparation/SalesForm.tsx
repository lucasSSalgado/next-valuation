'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
            <Label htmlFor="sqtrFeetsTarget">Square feet: </Label>
            <Input type="text" name="sqtrFeets" id="sqtrFeetsTarget" onChange={(e) => setTargetProperty(Number(e.target.value))} />
            <form>
                {
                    propertyList.map((property, index) => {
                        return (
                            <div className="mt-2" key={index}>
                                <Label htmlFor="sqtrFeets">Area: </Label>
                                <Input type="text" name="sqtrFeets" id="sqtrFeets" onChange={(e) => property.sqtrFeets = Number(e.target.value)}/>
                                <Label htmlFor="price">Price: </Label>
                                <Input type="text" name="price" id="price" onChange={(e) => property.price = Number(e.target.value)}/>
                                <Button variant="destructive" type="button" onClick={() => removeInput(index) }>Remove</Button>
                            </div>
                        )
                    })
                }
            </form>
            <Button className="" onClick={ addNewInput }>
                add new input
            </Button>
            <br />
            <Button className="" onClick={ calculateMean }>
                Calculate
            </Button>

            <p className="mt-4"> The mean square feet price in the region is $ { mean.toFixed(2) } and your target property value is $ { (targetProperty * mean).toFixed(2) } </p>
        </div>
    )
}

type propertyStatus = {
    sqtrFeets: number
    price: number
}
'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function SalesForm() {
    let initialInputs: propertyStatus[] = [
        { sqtrFeets: 0, price: 0 },
        { sqtrFeets: 0, price: 0 },
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
        console.log(propertyList)
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
        <div>
            <Separator className="my-4" />
            <Label htmlFor="sqtrFeetsTarget">Square feet of target property: </Label>
            <Input type="text" name="sqtrFeets" id="sqtrFeetsTarget" onChange={(e) => setTargetProperty(Number(e.target.value))} />
            <form>
                {
                    propertyList.map((property, index) => {
                    // Only render a new row for each pair
                    if (index % 2 === 0) {
                        return (
                            <div className="grid grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4" key={index}>
                                <div className="border-gray-950 p-4">
                                <Label htmlFor={`sqtrFeets-${index}`}>Area: </Label>
                                <Input
                                    type="text"
                                    name={`sqtrFeets-${index}`}
                                    id={`sqtrFeets-${index}`}
                                    onChange={(e) => propertyList[index].sqtrFeets = Number(e.target.value)}
                                />
                                <Label htmlFor={`price-${index}`}>Price: </Label>
                                <Input
                                    type="text"
                                    name={`price-${index}`}
                                    id={`price-${index}`}
                                    onChange={(e) => propertyList[index].price = Number(e.target.value)}
                                />
                                <Button className="mt-2" variant="destructive" type="button" onClick={() => removeInput(index)}>Remove</Button>
                                </div>

                                {/* Check if the next item exists before rendering */}
                                {propertyList[index + 1] && (
                                <div className="border-gray-950 p-4">
                                    <Label htmlFor={`sqtrFeets-${index + 1}`}>Area: </Label>
                                    <Input
                                    type="text"
                                    name={`sqtrFeets-${index + 1}`}
                                    id={`sqtrFeets-${index + 1}`}
                                    onChange={(e) => propertyList[index + 1].sqtrFeets = Number(e.target.value)}
                                    />
                                    <Label htmlFor={`price-${index + 1}`}>Price: </Label>
                                    <Input
                                    type="text"
                                    name={`price-${index + 1}`}
                                    id={`price-${index + 1}`}
                                    onChange={(e) => propertyList[index + 1].price = Number(e.target.value)}
                                    />
                                    <Button className="mt-2" variant="destructive" type="button" onClick={() => removeInput(index + 1)}>Remove</Button>
                                </div>
                                )}
                            </div>
                            );
                        }
                    return null;
                    })
                }
            </form>

            <Button className="" onClick={ addNewInput }>
                add new input
            </Button>
            <br />
            <Button variant="outline" className="mt-2" onClick={ calculateMean }>
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
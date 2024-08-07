'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { propertyStatus } from "./salesMath"
import { formatCurrency } from "@/lib/formatter"
import { handleCurrencyInput, parseCorrencyToNumber } from "../flip-calculator/helper"
  
interface Props {
    price_label: string
    square_label: string
    add_btn: string
    calculate_btn: string
    dialog_response: string
}

export default function SalesForm({
    price_label, square_label, add_btn, calculate_btn, dialog_response
}: Props) {  
    const initialList = [
        { id: 0, price: '', sqtrFeets: 0 },
        { id: 1, price: '', sqtrFeets: 0 },
        { id: 2, price: '', sqtrFeets: 0 },
    ]

    const [propertyList, setPropertyList] = useState<propertyStatus[]>(initialList)
    const [meanPrice, setMeanPrice] = useState(0)

    const addNewProperty = () => {
        const newId = propertyList.length + 1
        setPropertyList([...propertyList, { id: newId, sqtrFeets: 0, price: '' }])
    }
    const calculateMean = () => {
        let sumPrice = 0
        let sumSqtrFeets = 0

        for (let i = 0; i < propertyList.length; i++) {
            sumPrice += parseCorrencyToNumber(propertyList[i].price) 
            sumSqtrFeets += propertyList[i].sqtrFeets
        }

        setMeanPrice(sumPrice / sumSqtrFeets)
    }

    return (
        <div>            
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">{ price_label }</TableHead>
                        <TableHead className="text-center">{ square_label }</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                        {
                            propertyList.map((property, index) => (
                                <TableRow key={ property.id }>
                                    <TableCell className="text-center">
                                        <Input
                                            type="text"
                                            placeholder="$200,000"
                                            value={ property.price }
                                            onChange={(e) => {
                                                const newPropertyList = [...propertyList]
                                                newPropertyList[index].price = handleCurrencyInput(e.target.value)
                                                setPropertyList(newPropertyList)
                                            } }
                                        />
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Input
                                            type="text"
                                            placeholder="65"
                                            value={ property.sqtrFeets }
                                            onChange={ (e) => {
                                                const newPropertyList = [...propertyList]
                                                newPropertyList[index].sqtrFeets = Number(e.target.value)
                                                setPropertyList(newPropertyList)
                                            } }
                                        />
                                    </TableCell>    
                                </TableRow>
                            ))
                        }
                </TableBody>
            </Table>

            <div className="flex justify-evenly">
                <Button className="" onClick={ addNewProperty }>{ add_btn }</Button>
                <Button className="" variant="outline" onClick={ calculateMean }>{ calculate_btn }</Button>        
            </div>  

            {
                meanPrice !== 0 && 
                meanPrice > 0 &&
                    <p className="text-center mt-6 bg-slate-600 rounded-sm p-4 w-9/12 mx-auto text-white text-lg">
                        { dialog_response } { formatCurrency(meanPrice) }
                    </p>
            }
        </div>
    )
}

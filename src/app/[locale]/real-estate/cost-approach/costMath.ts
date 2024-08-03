import { z } from "zod"
import { parseCorrencyToNumber, validatePositiveCurrency } from "../flip-calculator/helper"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export const formSchema = z.object({
    landCost: z.string().refine((val) => validatePositiveCurrency(val), { message: "Lend Cost must be a positive number." }),
    costBuild: z.string().refine((val) => validatePositiveCurrency(val), { message: "Cost Build must be a positive number." }),
    squareFoot: z.string().refine((val) => validatePositiveCurrency(val), { message: "Square Foot must be a positive number." }),
    propertyAge: z.string().refine((val) => validatePositiveCurrency(val), { message: "Property Age must be a positive number." }),
    propertyLifetime: z.string().refine((val) => validatePositiveCurrency(val), { message: "Property Lifetime must be a positive number." }),
    buildTime: z.string().refine((val) => validatePositiveCurrency(val), { message: "Build Time must be a positive number." }),
    opportunityCost: z.string().refine((val) => validatePositiveCurrency(val), { message: "Opportunity Cost must be a positive number." }),
    price: z.string().optional().refine((val) => validatePositiveCurrency(val), { message: "Price must be a positive number." }),
})


export const useCustomForm = () => {
    return useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            landCost: '',
            costBuild: '',
            squareFoot: '',
            propertyAge: '',
            propertyLifetime: '',
            buildTime: '',
            opportunityCost: '',
            price: ''
        },
    })
}

export const costCalculator = (data: z.infer<typeof formSchema>): CostValuation => {
    const landCost = parseCorrencyToNumber(data.landCost)
    const costBuild = parseCorrencyToNumber(data.costBuild)
    const squareFoot = parseCorrencyToNumber(data.squareFoot)
    const propertyAge = parseInt(data.propertyAge)
    const propertyLifetime = parseInt(data.propertyLifetime)
    const buildTime = parseInt(data.buildTime)
    const opportunityCost = parseFloat(data.opportunityCost)
    const price = data.price ? parseCorrencyToNumber(data.price) : 0

    const depreciationPercent = 1 - (propertyAge / propertyLifetime)
    const buildTotalCost = costBuild * squareFoot 
    const mothRate = Math.pow((1 + (opportunityCost/100)), 1/12)  - 1
    const value = landCost + (buildTotalCost * (depreciationPercent)) + (buildTotalCost * ((mothRate * Math.pow((1 + mothRate), buildTime)) / (Math.pow((1 + mothRate), buildTime) - 1)))
    let discount: number | null = null
    
    if (price > 0) {
        discount = (value - price) / price * 100
    }
    return {
        fairValue: value,
        discount: discount
    }
}

export type CostValuation = {
    fairValue: number,
    discount: number | null
}
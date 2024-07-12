import { parseCorrencyToNumber, validatePositiveCurrency } from "@/app/real-estate/flip-calculator/helper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
export const formSchema = z.object({
    stockPrice: z.string().refine((val) => validatePositiveCurrency(val), { message: "Stock Price must be a positive number." }),
    eps: z.string().refine((val) => validatePositiveCurrency(val), { message: "EPS must be a positive number." }),
    firstYears: z.string().refine((val) => parseFloat(val) > 0, { message: "First Years must be a positive number." }),
    firstRate: z.string().refine((val) => parseFloat(val) > 0, { message: "First rate must be a positive number." }),
    secondYears: z.string().refine((val) => parseFloat(val) > 0, { message: "Second Years must be a positive number." }),
    secondRate: z.string().refine((val) => parseFloat(val) > 0, { message: "Second rate must be a positive number." }),
    discountedRate: z.string().refine((val) => parseFloat(val) > 0, { message: "Discounted Rate must be a positive number." }),
})


export const useCustomForm = () => {
    return useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            stockPrice: "",
            eps: "",
            firstYears: "",
            firstRate: "",
            secondYears: "",
            secondRate: "",
            discountedRate: "",
        },
    })
} 

export const dcfCalculator = (data: z.infer<typeof formSchema>): DcfResponse => {
    const price = parseCorrencyToNumber(data.stockPrice)
    const eps = parseCorrencyToNumber(data.eps)
    const firstYears = parseFloat(data.firstYears)
    const firstRate = parseFloat(data.firstRate)
    const secondYears = parseFloat(data.secondYears)
    const secondRate = parseFloat(data.secondRate)
    const discountedRate = parseFloat(data.discountedRate)
    let value = 0
    const rate1 = firstRate / 100
    const rate2 = secondRate / 100
    const discoutedPercent = discountedRate / 100
    const totalYears = firstYears + secondYears

    for (let i = 1; i <= firstYears; i++) {
        value += (eps * Math.pow((1 + rate1), i)) / Math.pow((1 + discoutedPercent), i)
    }
    for (let j = (totalYears - firstYears + 1); j <= totalYears; j++) {
        value += (eps * Math.pow((1 + rate2), j)) / Math.pow((1 + discoutedPercent), j)
    }
    return {
        fairValue: value,
        discount: (value - price) / price * 100
    }
}

export type DcfResponse = {
    fairValue: number,
    discount: number
}
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { parseCorrencyToNumber, validatePositiveCurrency } from "../flip-calculator/helper"

export const formSchema = z.object({
    anullyIncome: z.string().refine((val) => validatePositiveCurrency(val), { message: "Anually Income must be a positive number." }),
    vacancyRate: z.string().refine((val) => parseInt(val) > 0, { message: "Vancy Rate must be a positive number." }),
    riskFreeRate: z.string().refine((val) => parseInt(val) > 0, { message: "Risk Free Rate must be a positive number." }),
    riskPremiun : z.string().refine((val) => parseInt(val) > 0, { message: "Risk Premiun must be a positive number." }),
    expectedGrowth: z.string().refine((val) => parseInt(val) > 0, { message: "Expected Growth must be a positive number." }),
    price: z.string().optional(),
})

export const useCustomForm = () => {
    return useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            anullyIncome: '',
            vacancyRate: '',
            riskFreeRate: '',
            riskPremiun: '',
            expectedGrowth: '',
            price: '',
        },
    })
}

export const incomeValuation = (data: z.infer<typeof formSchema>): IncomeValuation => {
    const denominator = (parseInt(data.riskFreeRate) / 100) + (parseInt(data.riskPremiun) / 100) - (parseInt(data.expectedGrowth) / 100)
    const incomeNum = parseCorrencyToNumber(data.anullyIncome)
    const numerator = incomeNum - (incomeNum * (parseInt(data.vacancyRate) / 100))
    const fairValue = numerator / denominator
    const price = data.price ? parseCorrencyToNumber(data.price) : 0

    return {
        fairValue: fairValue,
        price: price,
        discount: (fairValue - price) / price * 100
    }
}

export type IncomeValuation = {
    fairValue: number
    price: number
    discount: number
}
import { parseCorrencyToNumber, validatePositiveCurrency } from "@/app/real-estate/flip-calculator/helper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const formSchema = z.object({
    price: z.string().refine((val) => validatePositiveCurrency(val), { message: "Price must be a positive number." }),
    dividend: z.string().refine((val) => validatePositiveCurrency(val), { message: "Dividend must be a positive number." }),
    basicRate: z.string().refine((val) => parseFloat(val) > 0, { message: "Basic Rate must be a positive number." }),
    divGrowth: z.string().refine((val) => parseFloat(val) > 0, { message: "Dividend Growth must be a positive number." }),
})

export const useCustomForm = () => {
    return useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: '',
            dividend: '',
            basicRate: '',
            divGrowth: '',
        },
    })
}

export const gordonCalculator = (data: z.infer<typeof formSchema>): GordonResponse => {
    const dividend = parseCorrencyToNumber(data.dividend)
    const basicRate = parseFloat(data.basicRate)
    const divGrowth = parseFloat(data.divGrowth)
    const price = parseCorrencyToNumber(data.price)

    const value = dividend / ((basicRate /100) - (divGrowth / 100))
    return {
        fairValue: value,
        discount: (value - price) / price * 100
    }
}

export type GordonResponse = {
    fairValue: number,
    discount: number
}
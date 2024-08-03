import { parseCorrencyToNumber, validatePositiveCurrency } from "@/app/[locale]/real-estate/flip-calculator/helper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const formSchema = z.object({
    price: z.string().refine((val) => validatePositiveCurrency(val), { message: "Price must be a positive number." }),
    cash: z.string().refine((val) => validatePositiveCurrency(val), { message: "Cash must be a positive number." }),
    discount: z.string().refine((val) => parseFloat(val) > 0, { message: "Discount must be a positive number." }),
    bookValue: z.string().refine((val) => parseFloat(val) > 0, { message: "Book Value must be a positive number." }),
    liabilities: z.string().refine((val) => validatePositiveCurrency(val), { message: "Liabilities must be a positive number." }),
    numberOfShares: z.string().refine((val) => parseFloat(val) > 0, { message: "Number of Shares must be a positive number." }),
})

export const useCustomForm = () => {
    return useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: '',
            cash: '',
            discount: '',
            bookValue: '',
            liabilities: '',
            numberOfShares: '',
        }
    })
}

export const liquidationCalculator = (data: z.infer<typeof formSchema>): LiquidationResponse => {
    const price = parseCorrencyToNumber(data.price)
    const cash = parseCorrencyToNumber(data.cash)
    const discount = parseFloat(data.discount) /100
    const bookValue = parseCorrencyToNumber(data.bookValue)
    const liabilities = parseCorrencyToNumber(data.liabilities)
    const numberOfShares = parseCorrencyToNumber(data.numberOfShares)

    const value = ((bookValue * (1 - discount) + cash) - liabilities) / numberOfShares

    return {
        fairValue: value,
        discount: (value - price) / price * 100
    }
}

export type LiquidationResponse = {
    fairValue: number
    discount: number
}
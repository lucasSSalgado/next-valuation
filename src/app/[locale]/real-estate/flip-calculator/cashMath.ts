import { FlipResponse } from "@/app/[locale]/types";
import { z } from "zod"
import { parseCorrencyToNumber, validatePositiveCurrency } from "./helper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const formSchema = z.object({
    price: z.string().refine((val) => validatePositiveCurrency(val), { message: "Price must be a positive number." }),
    sell: z.string().refine((val) => validatePositiveCurrency(val), { message: "Sell must be a positive number." }),
    rehab: z.string().refine((val) => validatePositiveCurrency(val), { message: "Rehab must be a positive number." }),
    documentation: z.string().refine((val) => validatePositiveCurrency(val), { message: "documentation must be a positive number." }),
    hodingCosts: z.string().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be positive." }),
    leiloeiroComission: z.string().optional(),
    sellerComission: z.string().optional(),
    localFees: z.string().optional(),
    discountInSell: z.string().optional(),
    otherCosts1: z.string().optional(),
    otherCosts2: z.string().optional(),
    timeToSell: z.string().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be a positive number." }),
    taxesOnProfit: z.string().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be a positive number." }),
})

export const useCustomForm = () => {
    return useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: '',
            sell: '',
            rehab: '',
            documentation: '',
            hodingCosts: '',
            leiloeiroComission: '',
            sellerComission: '',
            localFees: '',
            discountInSell: '',
            otherCosts1: '',
            otherCosts2: '',
            timeToSell: '',
            taxesOnProfit: '',
        },
    })
}

export const calculateCash = (data: z.infer<typeof formSchema>): FlipResponse => {
    const price = parseCorrencyToNumber(data.price)
    const sell = parseCorrencyToNumber(data.sell)
    const rehab = parseCorrencyToNumber(data.rehab)
    const documentation = parseCorrencyToNumber(data.documentation)
    const holdingCosts = parseCorrencyToNumber(data.hodingCosts)
    const leiloeiroComission = data.leiloeiroComission ? parseInt(data.leiloeiroComission) / 100 : 0
    const sellerComission = data.sellerComission ? parseInt(data.sellerComission) / 100 : 0
    const localFees = data.localFees ? parseInt(data.localFees) / 100 : 0
    const discountInSell = data.discountInSell ? parseInt(data.discountInSell) : 0
    const otherCosts1 = parseCorrencyToNumber(data.otherCosts1 ? data.otherCosts1 : '0')
    const otherCosts2 = parseCorrencyToNumber(data.otherCosts2 ? data.otherCosts2 : '0')
    const timeToSell = parseInt(data.timeToSell) 
    const taxes = parseInt(data.taxesOnProfit) / 100

    const allDedicbleCosts = price + rehab + documentation + (holdingCosts * timeToSell) + (price * leiloeiroComission) + (sellerComission * sell) + ((price * localFees /100))
    const allNonDedicbleCosts = otherCosts1 + otherCosts2
    const allCosts = allDedicbleCosts + allNonDedicbleCosts

    const profit = (sell - (1 - discountInSell)) - allDedicbleCosts
    const netProfit = profit - (profit * taxes) - allNonDedicbleCosts


    return {
        netProfit: netProfit,
        necessaryCash: allCosts,
        roi: (netProfit / allCosts) * 100,
        monthlyRoi: Math.pow((profit / allCosts) * 100, 1/12)
    }
}


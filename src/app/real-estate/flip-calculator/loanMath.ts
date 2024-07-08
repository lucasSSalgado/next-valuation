import { FlipResponse } from "@/app/types";
import { z } from "zod"
import { parseCorrencyToNumber, validatePositiveCurrency } from "./helper";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export const formSchema = z.object({
    price: z.string().refine((val) => validatePositiveCurrency(val), { message: "Price must be a positive number." }),
    value: z.string().refine((val) => validatePositiveCurrency(val), { message: "Sell must be a positive number." }),
    downPayment: z.string().refine((val) => validatePositiveCurrency(val), { message: "Down Payment must be a positive number." }),
    interatesRate: z.string().refine((val) => validatePositiveCurrency(val), { message: "Interest Rate must be a positive number." }), 
    financingYears: z.string().refine((val) => validatePositiveCurrency(val), { message: "Financing Years must be a positive number." }), 
    rehab: z.string().refine((val) => validatePositiveCurrency(val), { message: "Rehab must be a positive number." }),
    hodingCosts: z.string().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be positive." }),
    documentation: z.string().optional().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be positive." }),
    discountInSell: z.string().optional(),
    localFees: z.string().optional(),
    leiloeiroComission: z.string().optional(),
    sellerComission: z.string().optional(),
    otherCosts1: z.string().optional(),
    otherCosts2: z.string().optional().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be a positive number." }),
    timeToSell: z.string().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be a positive number." }),
    taxesOnProfit: z.string().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be a positive number." }),
})

export const useCustomForm = () => {
    return useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: '',
            value: '',
            downPayment: '',
            interatesRate: '',
            financingYears: '',
            rehab: '',
            hodingCosts: '',
            documentation: '',
            discountInSell: '',
            localFees: '',
            leiloeiroComission: '',
            sellerComission: '',
            otherCosts1: '',
            otherCosts2: '',
            timeToSell: '',
            taxesOnProfit: '',
        },
    })
}

export const calculateLoan = (data: z.infer<typeof formSchema>): FlipResponse => {
    const price = parseCorrencyToNumber(data.price);
    const value = parseCorrencyToNumber(data.value);
    const downPayment = parseCorrencyToNumber(data.downPayment);
    const interatesRate = parseCorrencyToNumber(data.interatesRate);
    const financingYears = parseCorrencyToNumber(data.financingYears);
    const rehab = parseCorrencyToNumber(data.rehab);
    const hodingCosts = parseCorrencyToNumber(data.hodingCosts);
    const documentation = parseCorrencyToNumber(data.documentation as string); 
    const discountInSell = parseFloat(data.discountInSell as string);
    const localFees = parseFloat(data.localFees as string);
    const leiloeiroComission = parseFloat(data.leiloeiroComission as string)
    const sellerComission = parseFloat(data.sellerComission as string);
    const otherCosts1 = parseCorrencyToNumber(data.otherCosts1 as string);
    const otherCosts2 = parseCorrencyToNumber(data.otherCosts2 as string);
    const timeToSell = parseCorrencyToNumber(data.timeToSell);
    const taxesOnProfit = parseCorrencyToNumber(data.taxesOnProfit);

    const { quota, restOfLoan } = priceMonthQuota(price * (1 - downPayment / 100), interatesRate/100, financingYears, timeToSell);

    const sellingPrice = value * (1 - discountInSell/100)
    const entrada = price * (downPayment / 100)
    const parcelasFinaciamneto = (timeToSell * quota)
    const saldoDevedor = restOfLoan
    const condominioEiptu = (timeToSell * hodingCosts)
    const outrasDespesas = rehab + otherCosts1 + otherCosts2
    const comissaoDoLeiloeiro = (price * leiloeiroComission / 100)
    const itbi = (price * localFees / 100)  

    const aquisicao = entrada + parcelasFinaciamneto + saldoDevedor + condominioEiptu + outrasDespesas + documentation + itbi + comissaoDoLeiloeiro
    const cashNeed = entrada + parcelasFinaciamneto + condominioEiptu + documentation + itbi + comissaoDoLeiloeiro + outrasDespesas

    const taxes = (sellingPrice - aquisicao) * (taxesOnProfit/100)
    const netProfit = sellingPrice - (sellingPrice * sellerComission/100) - taxes - aquisicao

    return {
        netProfit: netProfit,
        necessaryCash: cashNeed,
        roi: (netProfit / cashNeed) * 100,
        monthlyRoi: Math.pow(1, 1/12)
    }
}

const priceMonthQuota = (value: number, interest: number, years: number, timeToSell: number) => {
    const mothRate = (Math.pow((1 + interest), 1/12) -1)
    const quota = value * ((mothRate * Math.pow((1 + mothRate), years*12)) / (Math.pow((1 + mothRate), years*12) - 1))

    const loan = restOfLoan(value, quota, timeToSell, mothRate)
    return {
        quota: quota,
        restOfLoan: loan
    }
}

const restOfLoan = (value: number, quota: number, timeToSell: number, interestMonth: number) => {
    let restLoan = value
    for (let i = 0; i < timeToSell; i++) {
        const interest = restLoan * interestMonth
        restLoan -= (quota - interest)
    }
    return restLoan
}
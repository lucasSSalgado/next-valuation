import { FlipResponse } from "@/app/types";
import { z } from "zod"
import { parseCorrencyToNumber, validatePositiveCurrency } from "./helper";

export const formSchema = z.object({
    price: z.string().refine((val) => validatePositiveCurrency(val), { message: "Price must be a positive number." }),
    sell: z.string().refine((val) => validatePositiveCurrency(val), { message: "Sell must be a positive number." }),
    downPayment: z.string().refine((val) => validatePositiveCurrency(val), { message: "Down Payment must be a positive number." }),
    interatesRate: z.string().refine((val) => validatePositiveCurrency(val), { message: "Interest Rate must be a positive number." }), 
    interatesRateTaxes: z.coerce.boolean().optional(),
    financingYears: z.string().refine((val) => validatePositiveCurrency(val), { message: "Financing Years must be a positive number." }), 
    rehab: z.string().refine((val) => validatePositiveCurrency(val), { message: "Rehab must be a positive number." }),
    rehabTaxes: z.coerce.boolean().optional(),
    hodingCosts: z.string().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be positive." }),
    hodingCostsTaxes: z.coerce.boolean().optional(),
    otherCosts1: z.string().optional().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be positive." }),
    otherCost1Taxes: z.coerce.boolean().optional(),
    otherCosts2: z.string().optional().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be a positive number." }),
    otherCost2Taxes: z.coerce.boolean().optional(),
    timeToSell: z.string().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be a positive number." }),
    taxesOnProfit: z.string().refine((val) => validatePositiveCurrency(val), { message: "Other Costs must be a positive number." }),
})


export const calculateLoan = (data: z.infer<typeof formSchema>): FlipResponse => {
    const price = parseCorrencyToNumber(data.price);
    const sell = parseCorrencyToNumber(data.sell);
    const downPayment = parseCorrencyToNumber(data.downPayment);
    const interatesRate = parseCorrencyToNumber(data.interatesRate);
    const interatesRateTaxes = data.interatesRateTaxes
    const financingYears = parseCorrencyToNumber(data.financingYears);
    const rehab = parseCorrencyToNumber(data.rehab);
    const rehabTaxes = data.rehabTaxes;
    const hodingCosts = parseCorrencyToNumber(data.hodingCosts);
    const hodingCostsTaxes = data.hodingCostsTaxes;
    const otherCosts1 = parseCorrencyToNumber(data.otherCosts1 as string); 
    const otherCost1Taxes = data.otherCost1Taxes;
    const otherCosts2 = parseCorrencyToNumber(data.otherCosts2 as string);
    const otherCost2Taxes = data.otherCost2Taxes;
    const timeToSell = parseCorrencyToNumber(data.timeToSell);
    const taxesOnProfit = parseCorrencyToNumber(data.taxesOnProfit);


    const {quota, restOfLoan} = priceMonthQuota(price * (1 - downPayment / 100), interatesRate/100, financingYears, timeToSell);

    const allQuotaCosts = quota * timeToSell
    const allHoldingCost = hodingCosts * timeToSell   
    
    let deductibleCosts = (rehabTaxes ? rehab : 0) + (hodingCostsTaxes ? allHoldingCost : 0) + (otherCost1Taxes ? otherCosts1 : 0) + (otherCost2Taxes ? otherCosts2 : 0) + (interatesRateTaxes ? allQuotaCosts : 0)
    let nonDeductibleCosts = (rehabTaxes ? 0 : rehab) + (hodingCostsTaxes ? 0 : allHoldingCost) + (otherCost1Taxes ? 0 : otherCosts1) + (otherCost2Taxes ? 0 : otherCosts2) + (interatesRateTaxes ? 0 : allQuotaCosts)


    const taxes = (sell - (price + deductibleCosts)) * (taxesOnProfit / 100)
    const allCosts = (price * downPayment / 100) + nonDeductibleCosts + deductibleCosts
    const realProfit = sell - allCosts - restOfLoan

    console.log("taxes: ", taxes, "allcost: ", allCosts, "realProfit: ", realProfit)
    const roi = (realProfit) / allCosts

    return {
        netProfit: realProfit,
        roi: roi,
        monthlyRoi: Math.pow(roi, 1/12)
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
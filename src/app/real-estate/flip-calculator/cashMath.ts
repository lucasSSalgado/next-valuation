import { FlipResponse } from "@/app/types";
import { z } from "zod"
import { parseCorrencyToNumber, validatePositiveCurrency } from "./helper";

export const formSchema = z.object({
    price: z.string().refine((val) => validatePositiveCurrency(val), { message: "Price must be a positive number." }),
    sell: z.string().refine((val) => validatePositiveCurrency(val), { message: "Sell must be a positive number." }),
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

export const calculateCash = 
    (price: string, sell: string, rehab: string, rehabTaxes: boolean, 
    hodingCosts: string, hodingCostsTaxes: boolean, otherCosts1: string, otherCost1Taxes: boolean,
    otherCosts2: string, otherCost2Taxes: boolean, timeToSell: string, taxesOnProfit: string): FlipResponse => {

    const priceNum = parseCorrencyToNumber(price)
    const sellNum = parseCorrencyToNumber(sell)
    const rehabNum = parseCorrencyToNumber(rehab)
    const hodingCostsNum = parseCorrencyToNumber(hodingCosts)
    const otherCosts1Num = parseCorrencyToNumber(otherCosts1)
    const otherCosts2Num = parseCorrencyToNumber(otherCosts2)
    const timeToSellNum = parseCorrencyToNumber(timeToSell)
    const taxesOnProfitNum = parseCorrencyToNumber(taxesOnProfit)

    const allHoldingCost = hodingCostsNum * timeToSellNum    
    let deductibleCosts = (rehabTaxes ? rehabNum : 0) + (hodingCostsTaxes ? allHoldingCost : 0) + (otherCost1Taxes ? otherCosts1Num : 0)
    let nonDeductibleCosts = (rehabTaxes ? 0 : rehabNum) + (hodingCostsTaxes ? 0 : allHoldingCost) + (otherCost1Taxes ? 0 : otherCosts1Num) + (otherCost2Taxes ? 0 : otherCosts2Num);

    const taxes = (sellNum - (priceNum + deductibleCosts)) * (taxesOnProfitNum / 100)
    const allCosts = priceNum + nonDeductibleCosts + deductibleCosts + taxes
    const realProfit = sellNum - allCosts
    const roi = (realProfit / allCosts) *100

    return {
        netProfit: realProfit,
        roi: roi,
        monthlyRoi: Math.pow(roi, 1/12)
    }
}


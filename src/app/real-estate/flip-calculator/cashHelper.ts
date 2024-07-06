import { z } from "zod"

export const formSchema = z.object({
    price: z.string().refine((val) => Number(val) > 0, { message: "Price must be positive." }),
    sell: z.string().refine((val) => Number(val) > 0, { message: "Sell must be a positive number." }),
    rehab: z.string().refine((val) => Number(val) > 0, { message: "Rehab must be a positive number." }),
    rehabTaxes: z.coerce.boolean().optional(),
    hodingCosts: z.string().refine((val) => Number(val) > 0, { message: "Other Costs must be positive." }),
    hodingCostsTaxes: z.coerce.boolean().optional(),
    otherCosts1: z.string().optional().refine((val) => Number(val) > 0, { message: "Other Costs must be positive." }),
    otherCost1Taxes: z.coerce.boolean().optional(),
    otherCosts2: z.string().optional().refine((val) => Number(val) > 0, { message: "Other Costs must be a positive number." }),
    otherCost2Taxes: z.coerce.boolean().optional(),
    timeToSell: z.string().refine((val) => Number(val) > 0, { message: "Other Costs must be a positive number." }),
    taxesOnProfit: z.string().refine((val) => Number(val) > 0, { message: "Other Costs must be a positive number." }),
})

export const handleCurrencyInput = (numStr: string): string => {
    numStr = numStr.replace(/,/g, '');
    const endsWithDecimal = numStr.endsWith('.');
    const num = parseFloat(numStr);

    // If parsing fails or the string ends with a decimal, return the original string with commas inserted only before the decimal
    if (isNaN(num)) {
        return numStr;
    }

    const formattedStr = num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    return endsWithDecimal ? `${formattedStr}.` : formattedStr;
}
import { parseCorrencyToNumber } from "@/app/[locale]/real-estate/flip-calculator/helper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const formSchema = z.object({
    principal: z.string().refine((val) => parseFloat(val) > 0, { message: "Principal must be a positive number." }),
    monthlyPayment: z.string().refine((val) => parseFloat(val) > 0, { message: "Monthly Payment must be a positive number." }),
    rate: z.string().refine((val) => parseFloat(val) > 0, { message: "Rate must be a positive number." }),
    rateType: z.enum(["monthly", "annually"]),
    time: z.string().refine((val) => parseFloat(val) > 0, { message: "Time must be a positive number." }),
})

export const useCustomForm = () => {
    return useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            principal: "",
            monthlyPayment: "",
            rate: "",
            rateType: "monthly",
            time: "",
        }
    })
}

export const compoundCalculator = (data: z.infer<typeof formSchema>): CompoundResult => {
    const principal = parseCorrencyToNumber(data.principal);
    const monthlyPayment = parseCorrencyToNumber(data.monthlyPayment);
    const rate = parseFloat(data.rate);
    const time = parseFloat(data.time);
    const rateType = data.rateType;
    console.log(rateType)
    const r = rateType === "monthly" ? rate/100 : Math.pow(1 + rate / 100, 1 / 12) - 1;
    const n = rateType === "monthly" ? time : time * 12;

    let finalValue = 0
    let interest = 0
    let investment = 0

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            const juros = (principal * r)
            finalValue = principal + juros
            interest += juros
            investment += principal
        } 
        if(i == n) {
            finalValue += monthlyPayment
            investment += monthlyPayment
        } else {
            const juros = ((finalValue + monthlyPayment) * r)
            const parcela = ((finalValue + monthlyPayment) * r) + monthlyPayment
            finalValue += parcela
            interest += juros
            investment += monthlyPayment
        }
    }
    
    return {
        finalValue,
        interest,
        investment
    };
}

export type CompoundResult = {
    finalValue: number
    interest: number
    investment: number
}
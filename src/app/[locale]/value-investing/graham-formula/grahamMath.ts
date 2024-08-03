import { parseCorrencyToNumber, validatePositiveCurrency } from "@/app/[locale]/real-estate/flip-calculator/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
    price: z.string().refine((val) => validatePositiveCurrency(val), { message: "Price must be a positive number." }),
    btv: z.string().refine((val) => validatePositiveCurrency(val), { message: "Book Value must be a positive number." }),
    eps: z.string().refine((val) => validatePositiveCurrency(val), { message: "EPS must be a positive number." }),
})

export const useCustomForm = () => {
    return useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: '',
            btv: '',
            eps: '',
        },
    });
}

export const grahamCalculator = (data: z.infer<typeof formSchema>): GrahamResponse => {
    const price = parseCorrencyToNumber(data.price)
    const btv = parseCorrencyToNumber(data.btv)
    const eps = parseCorrencyToNumber(data.eps)

    const value = Math.pow((btv * eps * 22.5), 0.5)

    return {
        fairValue: value,
        discount: ((value - price) / price) * 100
    }
}


export type GrahamResponse = {
    fairValue: number
    discount: number
}
    
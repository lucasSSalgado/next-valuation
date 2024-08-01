'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import ResultDialog from "./ResultDialog"

export default function BaggerCalculator() {
    const [result, setResult] = useState(0)
    const [dialog, setDialog] = useState(false)
    const formSchema = z.object({
        time: z.string().refine((val) => val === 'true' || val === 'false'),
        growthPossibility: z.string().refine((val) => val === 'true' || val === 'false' || val === "fst"),
        pe: z.string(),
        owner: z.string().refine((val) => val === 'true' || val === 'false'),
        managerRecord: z.string().refine((val) => val === 'true' || val === 'false'),
        roe: z.string(),
        sallesGrowth: z.string(),
        pegRatio: z.string(),
        buyBackStocks: z.string().refine((val) => val === 'true' || val === 'false' || val === 'any'),
        deluteOwner: z.string().refine((val) => val === 'true' || val === 'false' || val === 'any'),
        moat: z.string().refine(val => {
            const num = parseFloat(val);
            return num >= 1 && num <= 10;
        }, {
            message: "Moat must be a string representing a number between 1 and 10"
        }),
        changeIndustry: z.string().refine((val) => val === 'true' || val === 'false' || val === 'any'),
        grossMargin: z.string().refine((val) => val === 'true' || val === 'false' || val === 'any'),
        companyTrackRecord: z.string().refine((val) => val === 'true' || val === 'false' || val === 'any'),
        undestand: z.string().refine((val) => val === 'true' || val === 'false' || val === 'any'),
        salesWithRoe: z.string().refine((val) => val === 'true' || val === 'false' || val === 'any'),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            time: 'true',
            growthPossibility: 'true',
            pe: '11',
            owner: 'true',
            managerRecord: 'true',
            roe: '20',
            sallesGrowth: '10',
            pegRatio: '1',
            buyBackStocks: 'true',
            deluteOwner: 'false',
            moat: '5',
            changeIndustry: 'false',
            grossMargin: 'true',
            companyTrackRecord: 'false',
            undestand: 'false',
            salesWithRoe: 'false'
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        let change = 100
        if (values.time === 'false' || values.growthPossibility === 'false' || values.undestand === 'false') {
            change = change / 1.7
        } if (values.undestand === 'any') {
            change = change / 1.3333
        } if (values.growthPossibility === 'fst') {
            change = change / 1.25
        } if (values.pe) {
            const pe = parseFloat(values.pe)
            if (pe >= 30) {
                change = change / 1.25
            } else if (pe < 30 && pe >= 20) {
                change = change / 1.15
            } else if (pe < 20 && pe >= 10) {
                change = change
            } else {
                change = change * 1.05
            }
        } if (values.owner === 'false') {
            change = change / 1.3333
        } if (values.managerRecord === 'false') {
            change = change / 1.15
        } if (values.roe) {
            const roe = parseFloat(values.roe)
            if (roe >= 20) {
                change = change
            } else if (roe < 20 && roe >= 15) {
                change = change / 1.05
            } else if (roe < 15 && roe > 10){
                change = change / 1.15
            } else {
                change = change / 1.25
            }
        } if (values.sallesGrowth) {
            const sg = parseFloat(values.sallesGrowth)
            if (sg >= 10) {
                change = change 
            } else if (sg < 10 && sg >= 7) {
                change = change / 1.15
            } else {
                change = change / 1.25
            }
        } if (values.pegRatio) {
            const peg = parseFloat(values.pegRatio)
            if (peg < 1 && peg > 0) {
                change = change
            } else {
                change = change / 1.15 
            } 
        } if (values.buyBackStocks === 'false' || values.buyBackStocks === 'any') {
            change = change / 1.3
        } if (values.deluteOwner) {
            if (values.deluteOwner === 'true') {
                change = change / 1.20
            } else if (values.deluteOwner === 'false') {
                change = change * 1.05
            }
        } if (values.moat) {
            const moat = parseFloat(values.moat)
            if (moat >= 9) {
                change = change * 1.1
            } else if (moat < 9 && moat >= 7) {
                change = change * 1.05
            } else if (moat < 7 && moat >= 5) {
                change = change * 1.05
            } else if (moat < 3) {
                change = change / 1.15
            }
        } if (values.changeIndustry) {
            if (values.changeIndustry === 'true') {
                change = change / 1.15
            } else if (values.changeIndustry === 'any') {
                change = change / 1.05
            }
        } if (values.grossMargin) {
            if (values.grossMargin === 'true') {
                change = change * 1.2
            } else if (values.grossMargin === 'any') {
                change = change * 1
            } else {
                change = change / 1.15
            }
        } if (values.companyTrackRecord) {
            if (values.companyTrackRecord === 'true') {
                change = change * 1.1
            } else if (values.companyTrackRecord === 'any') {
                change = change 
            } else {
                change = change / 1.1
            }
        } if (values.salesWithRoe) {
            if (values.salesWithRoe === 'true') change = change * 1.1
            else if (values.salesWithRoe === 'any') change = change
            else change = change / 1.15
        }

        if (change > 100) change = 100
        setResult(change)
        setDialog(true)
    }

    return (
        <div className="mt-10 bg-slate-100 p-5 rounded-sm">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Can you hold the stock for at least 10 years, even when it faces bad times?</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="true" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        Yes
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="false" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        No
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        </FormItem>
                    )}/>
                    <FormField
                    control={form.control}
                    name="growthPossibility"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>The company can growth in its market for many years to come?</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="true" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        Yes
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="fst" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        For some time
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="false" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        No
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        </FormItem>
                    )}/>
                </div> 
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="pe"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Current P/E ratio:</FormLabel>
                            <FormControl>
                                <Input placeholder="15" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                    control={form.control}
                    name="owner"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>The CEO and board staff have lots of stocks in the company?</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="true" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        Yes
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="false" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        No
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        </FormItem>
                    )}/>
                </div>  
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                    control={form.control}
                    name="managerRecord"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>The manegent team already have a good track record?</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="true" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        Yes
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="false" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        No
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        </FormItem>
                    )}/>
                    <FormField
                        control={form.control}
                        name="roe"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Mean ROE in the last four years (%):</FormLabel>
                            <FormControl>
                                <Input placeholder="20%" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="sallesGrowth"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>The average sales growth for the last four years:</FormLabel>
                            <FormControl>
                                <Input placeholder="10%" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="pegRatio"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>The average Peg Ratio for the last four years:</FormLabel>
                            <FormControl>
                                <Input placeholder="1" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="buyBackStocks"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>At some time is the past the company buy it own stock at a good price?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="true" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            They buyback at any time
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            </FormItem>
                        )}/>
                        <FormField
                        control={form.control}
                        name="deluteOwner"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>The company is deluting owner via stock option and stock incentives?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="true" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Pero no much
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            </FormItem>
                        )}/>
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="moat"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>In a scale of 1 - 10, how strong is the competitive advantage of this company (moat):</FormLabel>
                            <FormControl>
                                <Input placeholder="5" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="changeIndustry"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>The company is in a fast changing industry?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="true" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            More or Less
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                        </FormItem>
                    )}/>
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="grossMargin"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>In the last four years the company present a high gross margin relative to the industry?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="true" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Equivalent to the indstry
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                        </FormItem>
                    )}/>
                    <FormField
                        control={form.control}
                        name="companyTrackRecord"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>The company is showing incrise in it finances in the last four years (growth eps, profitability, margins, etc)   ?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="true" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Equivalent to the indstry
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                        </FormItem>
                    )}/>
                </div>
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto mt-4">
                    <FormField
                        control={form.control}
                        name="undestand"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Do you undestand how the company make money, can you explain it to someone alse?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="true" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            More or Less
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                        </FormItem>
                    )}/>
                    <FormField
                        control={form.control}
                        name="salesWithRoe"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>When the sales growth incrise, the ROE and gross margin remain high?</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="true" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No applicable
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                        </FormItem>
                    )}/>
                </div>
                <Button type="submit">Submit</Button>              
            </form>
            </Form>

            {
                result > 0 && dialog && <ResultDialog change={result} openDialog={dialog} setOpenDialog={setDialog} />
            }
        </div>
    )
}
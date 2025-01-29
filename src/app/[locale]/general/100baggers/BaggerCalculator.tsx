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

interface Props {
    time_label: string
    growth_label: string
    pe_label: string,
    owner_label: string,
    track_label: string,
    roe_label: string,
    average_growth_label: string,
    peg_label: string,
    buyback_label: string,
    delute_label: string,
    moat_label: string,
    change_label: string,
    margin_label: string
    yes: string
    no: string
    for_some_time: string
    buyback_option: string
    nomuch_option: string
    more_less: string
    equivalent: string
    no_aplicable: string
    company_label: string
    undertand_label: string
    sales_roe_label: string
    submit: string
    dialog_title: string
    dialog_result: string
    dialog_realistc: string
    good_lock: string
    dialog_messages_1: string
    dialog_messages_2: string
    dialog_messages_3: string
    dialog_messages_4: string
}

export default function BaggerCalculator(
        { 
            time_label, growth_label, pe_label, owner_label, track_label, roe_label, 
            average_growth_label, peg_label, buyback_label, moat_label, yes, no, for_some_time,
            buyback_option, delute_label, nomuch_option, change_label, more_less, margin_label,
            equivalent, no_aplicable, company_label, undertand_label, sales_roe_label, submit,
            dialog_result, dialog_realistc, dialog_title, good_lock, dialog_messages_1,dialog_messages_2,
            dialog_messages_3, dialog_messages_4 
        } : Props) {
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
        <div className="mt-10 bg-secondary/90 p-5 rounded-sm">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 min-w-full max-w-sm items-center gap-5 mx-auto">
                    <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{time_label}</FormLabel>
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
                                        { yes }
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="false" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        { no }
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
                        <FormLabel>{ growth_label }</FormLabel>
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
                                        { yes }
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="fst" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        { for_some_time }
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="false" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        { no }
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
                            <FormLabel>{ pe_label }</FormLabel>
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
                        <FormLabel> { owner_label }</FormLabel>
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
                                        { yes }
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="false" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        { no }
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
                        <FormLabel> { track_label } </FormLabel>
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
                                        { yes }
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="false" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        { no }
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
                            <FormLabel> { roe_label } </FormLabel>
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
                            <FormLabel>{ average_growth_label }</FormLabel>
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
                            <FormLabel>{ peg_label }</FormLabel>
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
                            <FormLabel>{ buyback_label }</FormLabel>
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
                                            { yes }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { no }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { buyback_option }
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
                            <FormLabel>{ delute_label }</FormLabel>
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
                                            { yes }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { no }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { nomuch_option }
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
                            <FormLabel>{ moat_label }</FormLabel>
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
                            <FormLabel>{ change_label }</FormLabel>
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
                                            { yes }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { no }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { more_less }
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
                            <FormLabel>{ margin_label }</FormLabel>
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
                                            { yes }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { no }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { equivalent }
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
                            <FormLabel>{ company_label }</FormLabel>
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
                                            { yes }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { no }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { equivalent }
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
                            <FormLabel>{ undertand_label }</FormLabel>
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
                                            { yes }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { no }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { more_less }
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
                            <FormLabel>{ sales_roe_label }</FormLabel>
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
                                            { yes }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { no }
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="any" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            { no_aplicable }
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                        </FormItem>
                    )}/>
                </div>
                <Button type="submit">{ submit }</Button>              
            </form>
            </Form>

            {
                result > 0 && 
                dialog && 
                <ResultDialog 
                    change={result} 
                    openDialog={dialog} 
                    setOpenDialog={setDialog} 
                    dialog_result={dialog_result}
                    dialog_realistc={dialog_realistc}
                    dialog_title={dialog_title}
                    good_lock={good_lock}
                    dialog_messages_1={dialog_messages_1}
                    dialog_messages_2={dialog_messages_2}
                    dialog_messages_3={dialog_messages_3}
                    dialog_messages_4={dialog_messages_4}
                />
            }
        </div>
    )
}
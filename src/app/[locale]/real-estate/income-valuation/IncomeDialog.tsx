'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface Props {
    openDialog: boolean
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
    fairPrice: number
    price: number
    discount: number

    dialog_title: string
    dialog_fair_value: string
    dialog_price: string
    dialog_discount: string
    dialog_quality: string
}

export default function IncomeDialog(
    { 
        openDialog, setOpenDialog, fairPrice, price, discount,
        dialog_title, dialog_fair_value, dialog_price, dialog_discount, dialog_quality 
    }
    : Props) {

    let dealQuality: string
    if (discount < 0) {
        dealQuality = '★'
    } else if (discount < 5) {
        dealQuality = '★★'
    } else if (discount >= 5 && discount < 20) {
        dealQuality = '★★★★'
    } else {
        dealQuality = '★★★★★'
    }
    
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center p-2 scroll-m-20 text-2xl font-semibold tracking-tight">{ dialog_title }</DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-lg italic">
                    { dialog_fair_value }{`${fairPrice.toFixed(2)}`} <br/>
                    { dialog_price }{`${price.toFixed(2)}`} <br/>
                    { dialog_discount }{`${discount.toFixed(2)}%`} <br/>
                    { dialog_quality }{ dealQuality } <br />
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(false)}>Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
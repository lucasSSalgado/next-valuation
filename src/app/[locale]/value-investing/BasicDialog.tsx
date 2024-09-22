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
import { formatCurrency } from "@/lib/formatter"

interface Props {
    openDialog: boolean
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
    fairValue: number
    discount: number
    dialog_title: string
    dialog_value: string
    dialog_discount: string
}

export default function BasicDialog(
    { 
        openDialog, setOpenDialog, fairValue, discount, dialog_title, dialog_value, dialog_discount 
    } : Props) {
    
    let quality: string
    if (discount < 0) {
        quality = 'The numbers are not in your side.'
    } else if (discount < 12) {
        quality = 'Dangerous! There is no margin of safety.'
    } else if (discount >= 12 && discount < 20) {
        quality = 'Good!'
    } else {
        quality = 'Excellent!'
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center p-2 scroll-m-20 text-2xl font-semibold tracking-tight">
                    { dialog_title }
                </DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-lg italic">
                    { dialog_value } {formatCurrency(fairValue)} <br/>
                    { dialog_discount } {discount.toFixed(2)}% <br/>
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(false)}>Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
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

export default function BasicDialog(
    { openDialog, setOpenDialog, fairValue, discount, title }
    : 
    { openDialog: boolean, setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>, fairValue: number, discount: number, title: string }) {
    
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
                    { title }
                </DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-black text-lg italic">
                    Fair Value: {formatCurrency(fairValue)} <br/>
                    Discount: {discount.toFixed(2)}% <br/>
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(false)}>Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
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

export default function IncomeAlert(
    { openDialog, setOpenDialog, fairPrice, price, discount }
    : 
    { openDialog: boolean, setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>, fairPrice: number, price: number,  discount: number }
    ) {

    let dealQuality: string
    if (discount < 0) {
        dealQuality = 'Dangerous! The numbers are not in your side.'
    } else if (discount < 5) {
        dealQuality = 'Dangerous! There is no margin of safety.'
    } else if (discount >= 5 && discount < 20) {
        dealQuality = 'Good!'
    } else {
        dealQuality = 'Excellent!'
    }
    
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center p-2 scroll-m-20 text-2xl font-semibold tracking-tight">Income valuation Expectations</DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-black text-lg italic">
                    Fair Price: {`${fairPrice.toFixed(2)}`} <br/>
                    Price: {`${price.toFixed(2)}`} <br/>
                    Discount: {`${discount.toFixed(2)}%`} <br/>
                    Deal Quality: {dealQuality} <br />
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(false)}>Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
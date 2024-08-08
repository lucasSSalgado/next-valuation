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

//  dialog_title, dialog_profit, dialog_roi, dialog_cash, dialog_quality

interface Props {
    openDialog: boolean
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
    profit: string
    roi: number
    cashNeed: string

    dialog_title: string
    dialog_profit: string
    dialog_roi: string
    dialog_cash: string
    dialog_quality: string
}
  
export default function ResultDialog(
    { 
        openDialog, setOpenDialog, profit, roi, cashNeed,
        dialog_title, dialog_profit, dialog_roi, dialog_cash, dialog_quality
    }
    : Props) {

    let dealQuality: string
    if (roi < 15) {
        dealQuality = '★'
    } else if (roi >= 15 && roi < 25) {
        dealQuality = '★★'
    } else if (roi >= 25 && roi < 50) {
        dealQuality = '★★★★'
    } else {
        dealQuality = '★★★★★'
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center p-2 scroll-m-20 text-2xl font-semibold tracking-tight">{ dialog_title }</DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-black text-lg italic">
                    {dialog_profit}{profit} <br/>
                    {dialog_roi}{`${roi.toFixed(2)}%`} <br/>
                    {dialog_cash}{cashNeed} <br />
                    {dialog_quality}{dealQuality}
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(false)}>Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

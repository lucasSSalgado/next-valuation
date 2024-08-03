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

export default function CostDialog(
    { openDialog, setOpenDialog, fairValue, discont }
    : 
    { openDialog: boolean, setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>, fairValue: number, discont: number | null }) {
    
    let quality: string
    if (discont === null) {
        quality = 'Unknown'
    } else if (discont < 0) {
        quality = 'Is better to construct a new home from scratch.'
    } else if (discont < 7) {
        quality = 'Dangerous! There is no margin of safety.'
    } else if (discont >= 7 && discont < 20) {
        quality = 'Good!'
    } else {
        quality = 'Excellent!'
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center p-2 scroll-m-20 text-2xl font-semibold tracking-tight">Cost Approach Expectations</DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-black text-lg italic">
                    Fair Value: {formatCurrency(fairValue)} <br/>
                    {
                        discont !== null ? 
                            `Discount: ${discont.toFixed(2)}%` 
                            : '' 
                    } <br />
                    {
                        discont !== null ? 
                            `Deal Quality: ${quality}` 
                            : ''
                    }
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(false)}>Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
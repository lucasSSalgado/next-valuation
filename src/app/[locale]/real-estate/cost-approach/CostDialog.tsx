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
    discont: number | null

    title: string
    fair_value: string
    discount_label: string
    quality_label: string
}
 
export default function CostDialog(
    { 
        openDialog, setOpenDialog, fairValue, discont,
        title, fair_value, discount_label, quality_label
    }
    : Props) {
    
    let quality: string
    if (discont === null) {
        quality = '?'
    } else if (discont < 0) {
        quality = '★'
    } else if (discont < 7) {
        quality = '★★'
    } else if (discont >= 7 && discont < 20) {
        quality = '★★★★'
    } else {
        quality = '★★★★★'
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center p-2 scroll-m-20 text-2xl font-semibold tracking-tight">{ title }</DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-black text-lg italic">
                    { fair_value } {formatCurrency(fairValue)} <br/>
                    {
                        discont !== null ? 
                            `${ discount_label } ${discont.toFixed(2)}%` 
                            : '' 
                    } <br />
                    {
                        discont !== null ? 
                            `${ quality_label } ${ quality }` 
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
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

export default function ResultDialog(
    { openDialog, setOpenDialog, change }
    : 
    { openDialog: boolean, setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>, change: number }) {
    
    let message: string = ''
    if (change === 100) {
        message = 'You have a treasure in your hands! This company is go to the moon.'
    } else if (change < 100 && change >= 80) {
        message = 'This company have high changes of success, go for it!'
    } else if (change < 80 && change >= 65) {
        message = 'Is a good company, could be better, but have its changes'
    } else if (change < 65 && change >= 50) {
        message = 'Is problaby a good stock, but handly will be a 100 bagger'
    } else if (change < 50 && change >= 30) {
        message = 'Thare is always hope, but we will need tons of luck'
    } else {
        message = 'There is always hope, but I the odds are agaist you'
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center p-2 scroll-m-20 text-2xl font-semibold tracking-tight">100 Bagger Result</DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-black text-lg italic">
                    {message} <br />
                    Calculator Result: {change.toFixed(2)}% <br />
                    Realistic Expectations: {(change / 5).toFixed(2)}% <br />
                    Good Luck
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(false)}>Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
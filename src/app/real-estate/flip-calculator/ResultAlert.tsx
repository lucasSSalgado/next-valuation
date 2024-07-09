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
  
export default function ResultAlert(
    { openDialog, setOpenDialog, profit, roi, cashNeed }
    : { openDialog: boolean, setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>, profit: string, roi: number, cashNeed: string }
    ) {

    let dealQuality: string
    if (roi < 25) {
        dealQuality = 'Dangerous, there is no margin of safety'
    } else if (roi >= 25 && roi < 50) {
        dealQuality = 'Good Deal'
    } else {
        dealQuality = 'Excellent Deal'
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center p-2 scroll-m-20 text-2xl font-semibold tracking-tight">Flip Expectations</DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-black">
                    Expected Profit: {profit} <br/>
                    ROI: {`${roi.toFixed(2)}%`} <br/>
                    Cash Needed: {cashNeed} <br />
                    Deal Quality: {dealQuality}
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(false)}>Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

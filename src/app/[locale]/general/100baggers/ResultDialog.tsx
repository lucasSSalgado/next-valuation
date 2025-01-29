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
    change: number
    dialog_title: string
    dialog_result: string
    dialog_realistc: string
    good_lock: string
    dialog_messages_1: string
    dialog_messages_2: string
    dialog_messages_3: string
    dialog_messages_4: string
}

export default function ResultDialog(
    {   
        openDialog, setOpenDialog, change,
        dialog_title, dialog_result, dialog_realistc,
        good_lock, dialog_messages_1, dialog_messages_2,
        dialog_messages_3, dialog_messages_4 
    }:  Props) {
    
    let message: string = ''
    if (change === 100) {
        message = dialog_messages_1
    } else if (change < 100 && change >= 80) {
        message = dialog_messages_2
    } else if (change < 80 && change >= 65) {
        message = dialog_messages_3
    } else {
        message = dialog_messages_4
    }

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center p-2 scroll-m-20 text-2xl font-semibold tracking-tight">
                    { dialog_title }
                </DialogTitle>
                <DialogDescription className="p-2 leading-7 [&:not(:first-child)]:mt-6 text-lg italic">
                    {message} <br />
                    { dialog_result } {change.toFixed(2)}% <br />
                    { dialog_realistc } {(change / 5).toFixed(2)}% <br />
                    { good_lock }
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(false)}>Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
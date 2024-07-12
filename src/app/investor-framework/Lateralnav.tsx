import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Lateralnav() {
    return (
        <div className="flex flex-col bg-slate-700 p-10">
            <Button variant="link">
                <Link className="text-secondary" href="/investor-framework">Home</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/investor-framework/waffen-buffet">Waffen Buffet</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/investor-framework/peter-lynch">Peter Lynch</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/investor-framework/philip-fisher">Philip Fisher</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/investor-framework/terry-smith">Terry Smith</Link>
            </Button>
        </div>
    )
}
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Lateralnav() {
    return (
        <div className="flex flex-col bg-slate-500 p-6 text-secondary">
            <Button variant="link">
                <Link className="text-secondary" href="/general">Home</Link>
            </Button> 
            <Button variant="link">
                <Link className="text-secondary" href="/general/porter-forces">Porters Five Forces</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/general/crypto">Cryptocurrency</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/general/100baggers">100x Bagger Calculator</Link>
            </Button>
        </div>
    )
}
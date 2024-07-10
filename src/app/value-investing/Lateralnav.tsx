import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Lateralnav() {
    return (
        <div className="flex flex-col bg-slate-500 p-6">
            <Button variant="link">
                <Link className="text-secondary" href="/value-investing">Home</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/value-investing/all-in-one">All in One</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/value-investing/discounted-cash-flow">Discouted Cash Flow</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/value-investing/gordon-model">Gordon Dividend model</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/value-investing/liquidation-value">Liquidation Value</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/value-investing/graham-formula">Graham Valuation Formula</Link>
            </Button>
        </div>
    )
}
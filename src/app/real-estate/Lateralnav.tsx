import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Lateralnav() {
    return (
        <div className="flex flex-col bg-slate-700 p-10">
            <Button variant="link">
                <Link className="text-secondary" href="/real-estate">Home</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/real-estate/sales-comparation">Sales Comparation</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/real-estate/cost-approach">Cost Approach</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/real-estate/income-valuation">Income valuation</Link>
            </Button>
            <Button variant="link">
                <Link className="text-secondary" href="/real-estate/flip-calculator">flip calculator</Link>
            </Button>
        </div>
    )
}
import Link from "next/link"

export default function Lateralnav() {
    return (
        <div className="flex flex-col bg-zinc-400 p-6">
            <Link href="/real-estate">Back</Link>
            <Link href="/real-estate/sales-comparation">Sales Comparation</Link>
            <Link href="/real-estate/cost-approach">Cost Approach</Link>
            <Link href="/real-estate/income-valuation">Income valuation</Link>
            <Link href="/real-estate/flip-calculator">flip calculator</Link>
        </div>
    )
}
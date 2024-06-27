import Link from "next/link"

export default function Lateralnav() {
    return (
        <div className="flex flex-col bg-zinc-400 p-6">
            <Link href="/value-investing">Back</Link>
            <Link href="/value-investing/discounted-cash-flow">Discouted Cash Flow</Link>
            <Link href="/value-investing/gordon-model">Gordon Dividend model</Link>
            <Link href="/value-investing/liquidation-value">Liquidation Value</Link>
            <Link href="/value-investing/graham-formula">Graham Valuation Formula</Link>
        </div>
    )
}
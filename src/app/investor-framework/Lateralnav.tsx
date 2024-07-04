import Link from "next/link"

export default function Lateralnav() {
    return (
        <div className="flex flex-col bg-zinc-400 p-6">
            <Link href="/investor-framework">Back</Link>
            <Link href="/waffen-buffet">Waffen Buffet</Link>
            <Link href="/terry-smith">Terry Smith</Link>
            <Link href="/peter-lynch">Peter Lynch</Link>
            <Link href="/philip-fisher">Philip A. Fisher</Link>
        </div>
    )
}
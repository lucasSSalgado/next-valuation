import Link from "next/link";

export default function Lateralnav() {
    return (
        <div className="flex flex-col bg-zinc-400 p-6">
            <Link href="/investor-framework">Back</Link>
            <Link href="/investor-framework/waffen-buffet">Waffen Buffet</Link>
            <Link href="/investor-framework/peter-lynch">Peter Lynch</Link>
            <Link href="/investor-framework/philip-fisher">Philip Fisher</Link>
            <Link href="/investor-framework/terry-smith">Terry Smith</Link>
        </div>
    )
}
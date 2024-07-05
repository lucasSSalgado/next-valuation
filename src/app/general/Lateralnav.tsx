import Link from "next/link";

export default function Lateralnav() {
    return (
        <div className="flex flex-col bg-zinc-400 p-6">
            <Link href="/general">Home</Link>
            <Link href="/general/porter-forces">Porters Five Forces</Link>
            <Link href="/general/crypto">Cryptocurrency</Link>
        </div>
    )
}
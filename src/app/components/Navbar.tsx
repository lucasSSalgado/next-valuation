import Link from "next/link"

export default function Navbar() {
    return (
        <header className="flex bg-zinc-800 p-6 text-white justify-evenly">
            <div className="font-bold flex-1 text-center">Logo</div>
            <nav className="flex flex-1 justify-center">
                <Link className="flex-1" href="/">Home</Link>
                <Link className="flex-1" href="/value-investing">Value Investing</Link>
                <Link className="flex-1" href="/real-estate">Real Estate</Link>
            </nav>
        </header>
    )
}
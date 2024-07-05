import Link from "next/link"

export default function Navbar() {
    return (
        <header className="bg-zinc-800 p-6 text-white justify-evenly">
            <nav className="flex w-10/12 mx-auto">
                <div className="font-bold flex-1 pl-5">
                    <Link href="/">Logo</Link>    
                </div>
                <nav className="">
                    <Link className="text-center px-4" href="/general">Geral</Link>
                    <Link className="text-center px-4" href="/value-investing">Value Investing</Link>
                    <Link className="text-center px-4" href="/real-estate">Real Estate</Link>
                    <Link className="text-center px-4" href="/investor-framework">Investing Framework</Link>
                    <Link className="text-center px-4" href="/contact">Contact</Link>
                </nav>
            </nav>
        </header>
    )
}
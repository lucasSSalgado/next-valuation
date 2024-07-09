import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className="bg-primary p-6 text-white justify-evenly">
            <nav className="flex w-10/12 mx-auto">
                <div className="font-bold flex-1 pl-5">
                <Button variant="link">
                    <Link className="text-secondary text-lg" href="/">Logo</Link> 
                </Button>
                </div>
                <nav>
                    <Button variant="link">
                        <Link className="text-secondary" href="/general">Geral</Link>
                    </Button>
                    <Button variant="link">
                        <Link className="text-secondary" href="/value-investing">Value Investing</Link>
                    </Button>
                    <Button variant="link">
                        <Link className="text-secondary" href="/real-estate">Real Estate</Link>
                    </Button>
                    <Button variant="link">
                        <Link className="text-secondary" href="/investor-framework">Investing Framework</Link>
                    </Button>
                    <Button variant="link">
                        <Link className="text-secondary" href="/contact">Contact</Link>
                    </Button>
                </nav>
            </nav>
        </header>
    )
}
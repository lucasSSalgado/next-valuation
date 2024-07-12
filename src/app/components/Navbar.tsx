'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-slate-800 p-6 text-white">
            <nav className="flex items-center justify-between w-10/12 mx-auto">
                <div className="font-bold pl-5">
                    <Button variant="link">
                        <Link className="text-secondary text-xl font-bold" href="/">Valth</Link>
                    </Button>
                </div>
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
                <nav className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'}`}>
                    <Button variant="link">
                        <Link className="text-secondary font-bold" href="/general">Geral</Link>
                    </Button>
                    <Button variant="link">
                        <Link className="text-secondary font-bold" href="/value-investing">Value Investing</Link>
                    </Button>
                    <Button variant="link">
                        <Link className="text-secondary font-bold" href="/real-estate">Real Estate</Link>
                    </Button>
                    <Button variant="link">
                        <Link className="text-secondary font-bold" href="/investor-framework">Investors Framework</Link>
                    </Button>
                    <Button variant="link">
                        <Link className="text-secondary font-bold" href="/contact">Contact</Link>
                    </Button>
                </nav>
            </nav>
        </header>
    );
}

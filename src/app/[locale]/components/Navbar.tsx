'use client';

import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

interface Props {
    value: string
    real_estate: string
    framework: string
    contact:  string
}

export default function Navbar({ value, real_estate, framework, contact }: Props) {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [path, setPath] = useState('');

    useEffect(() => {
        const windom = getOnlyFirstPath(pathname);
        setPath(windom);
    }, [pathname]);

    const getOnlyFirstPath = (path: string) => {
        const paths = path.split('/');
        return paths[2];
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-slate-800 shadow w-full">
            <nav className="">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Button className="flex items-center space-x-3 rtl:space-x-reverse" variant="link">
                        <Link className="self-center text-2xl font-semibold whitespace-nowrap text-secondary" href="/">Valth</Link>
                    </Button>
                    <button 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="navbar-default" 
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Button variant="link">
                                    <Link 
                                        href="/general" 
                                        className={`text-secondary ${path === 'general' ? 'font-bold text-yellow-400 underline' : ''}`} 
                                        aria-current="page">Geral</Link>
                                </Button>
                            </li>
                            <li>    
                                <Button variant="link">
                                    <Link 
                                        className={`text-secondary ${path === 'value-investing' ? 'font-bold text-yellow-400 underline' : ''}`} 
                                        href="/value-investing">{ value }</Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant="link">
                                    <Link 
                                        className={`text-secondary ${path === 'real-estate' ? 'font-bold text-yellow-400 underline' : ''}`} 
                                        href="/real-estate">{ real_estate }</Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant="link">
                                    <Link 
                                        className={`text-secondary ${path === 'investor-framework' ? 'font-bold text-yellow-400 underline' : ''}`} 
                                        href="/investor-framework">{ framework }</Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant="link">
                                    <Link 
                                        className={`text-secondary ${path === 'contact' ? 'font-bold text-yellow-400 underline' : ''}`} 
                                        href="/contact">{ contact }</Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

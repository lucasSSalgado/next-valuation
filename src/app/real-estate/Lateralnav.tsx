import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdConstruction } from "react-icons/md";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { SlCalculator } from "react-icons/sl";

export default function Lateralnav() {
    return (
        <div className="bg-slate-700 ">
            <div className="flex flex-col text-secondary gap-4 mt-8 px-4">
                <Button variant="link">
                    <Link className="text-secondary" href="/real-estate">
                        <span className="md:hidden"><GoHome size={24} /></span>
                        <span className="hidden md:block">Home</span>
                    </Link>
                </Button> 
                <Button variant="link">
                    <Link className="text-secondary"  href="/real-estate/sales-comparation">
                        <span className="md:hidden"><LiaBalanceScaleSolid size={24} /></span>
                        <span className="hidden md:block">Sales Comparation</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary" href="/real-estate/cost-approach">
                        <span className="md:hidden"><MdConstruction size={24} /></span>
                        <span className="hidden md:block">Cost Approach</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary" href="/real-estate/income-valuation">
                        <span className="md:hidden"><MdOutlinePayments size={24} /></span>
                        <span className="hidden md:block">Income valuation</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary" href="/real-estate/flip-calculator">
                        <span className="md:hidden"><SlCalculator size={24} /></span>
                        <span className="hidden md:block">Flip Calculator</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

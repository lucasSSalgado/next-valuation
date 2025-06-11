'use client';
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GoHome } from "react-icons/go";
import { MdConstruction } from "react-icons/md";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { SlCalculator } from "react-icons/sl";
import { usePathname } from "next/navigation";
import { getLinkClassName } from "@/lib/utils";

interface Props {
    sales: string,
    cost: string,
    income: string,
    flip: string,
    reit: string
}

export default function Lateralnav({ sales, cost, income, flip, reit }: Props) {
    const path = usePathname();

    return (
        <div className="bg-secondary-foreground/90 dark:bg-secondary/70 dark:text-secondary-foreground">
            <div className="flex flex-col gap-4 mt-8 px-4">
                <Button variant="link">
                    <Link className={getLinkClassName(path, "/")} href="/real-estate">
                        <span className="md:hidden"><GoHome size={24} /></span>
                        <span className="hidden md:block">Home</span>
                    </Link>
                </Button> 
                <Button variant="link">
                    <Link className={getLinkClassName(path, "sales-comparation")} href="/real-estate/sales-comparation">
                        <span className="md:hidden"><LiaBalanceScaleSolid size={24} /></span>
                        <span className="hidden md:block">{ sales }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName(path, "cost-approach")} href="/real-estate/cost-approach">
                        <span className="md:hidden"><MdConstruction size={24} /></span>
                        <span className="hidden md:block">{ cost }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName(path, "income-valuation")} href="/real-estate/income-valuation">
                        <span className="md:hidden"><MdOutlinePayments size={24} /></span>
                        <span className="hidden md:block">{ income }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName(path, "flip-calculator")} href="/real-estate/flip-calculator">
                        <span className="md:hidden"><SlCalculator size={24} /></span>
                        <span className="hidden md:block">{ flip }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName(path, "reit")} href="/real-estate/reit">
                        <span className="md:hidden"><SlCalculator size={24} /></span>
                        <span className="hidden md:block">{ reit }</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

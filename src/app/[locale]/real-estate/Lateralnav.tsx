import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GoHome } from "react-icons/go";
import { MdConstruction } from "react-icons/md";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { SlCalculator } from "react-icons/sl";
import { useTranslations } from "next-intl";

export default function Lateralnav() {
    const t = useTranslations('lateralnav-real-estate')

    return (
        <div className="bg-secondary-foreground/90 dark:bg-secondary/70 dark:text-secondary-foreground">
            <div className="flex flex-col gap-4 mt-8 px-4">
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/real-estate">
                        <span className="md:hidden"><GoHome size={24} /></span>
                        <span className="hidden md:block">Home</span>
                    </Link>
                </Button> 
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/real-estate/sales-comparation">
                        <span className="md:hidden"><LiaBalanceScaleSolid size={24} /></span>
                        <span className="hidden md:block">{ t('sales') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/real-estate/cost-approach">
                        <span className="md:hidden"><MdConstruction size={24} /></span>
                        <span className="hidden md:block">{ t('cost') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/real-estate/income-valuation">
                        <span className="md:hidden"><MdOutlinePayments size={24} /></span>
                        <span className="hidden md:block">{ t('income') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/real-estate/flip-calculator">
                        <span className="md:hidden"><SlCalculator size={24} /></span>
                        <span className="hidden md:block">{ t('flip') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/real-estate/reit">
                        <span className="md:hidden"><SlCalculator size={24} /></span>
                        <span className="hidden md:block">{ t('reit') }</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

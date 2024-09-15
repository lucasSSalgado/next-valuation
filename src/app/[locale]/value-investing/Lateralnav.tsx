import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GoHome } from "react-icons/go";
import { CiDiscount1 } from "react-icons/ci";
import { LiaCoinsSolid } from "react-icons/lia";
import { PiBombLight } from "react-icons/pi";
import { RiFormula } from "react-icons/ri";
import { useTranslations } from "next-intl";

export default function Lateralnav() {
    const t = useTranslations('lateralnav-value')

    return (
        <div className="bg-secondary-foreground/90 dark:bg-secondary/70 dark:text-secondary-foreground">
            <div className="flex flex-col text-secondary gap-4 mt-8 px-4">
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/value-investing">
                        <span className="md:hidden"><GoHome size={24} /></span>
                        <span className="hidden md:block">Home</span>
                    </Link>
                </Button> 
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/value-investing/discounted-cash-flow">
                        <span className="md:hidden"><CiDiscount1 size={24} /></span>
                        <span className="hidden md:block">{ t('dcf') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/value-investing/gordon-model">
                        <span className="md:hidden"><LiaCoinsSolid size={24} /></span>
                        <span className="hidden md:block">{ t('gordon') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/value-investing/liquidation-value">
                        <span className="md:hidden"><PiBombLight size={24} /></span>
                        <span className="hidden md:block">{ t('liquidation') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/value-investing/graham-formula">
                        <span className="md:hidden"><RiFormula size={24} /></span>
                        <span className="hidden md:block">{ t('graham') }</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
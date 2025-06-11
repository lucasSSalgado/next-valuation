'use client';
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GoHome } from "react-icons/go";
import { CiDiscount1 } from "react-icons/ci";
import { LiaCoinsSolid } from "react-icons/lia";
import { PiBombLight } from "react-icons/pi";
import { RiFormula } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { getLinkClassName } from "@/lib/utils";

interface Props {
    dcf: string
    gordon: string
    liquidation: string
    graham: string
}

export default function Lateralnav({ dcf, gordon, liquidation, graham }: Props) {
    const path = usePathname();

    return (
        <div className="bg-secondary-foreground/90 dark:bg-secondary/70 dark:text-secondary-foreground">
            <div className="flex flex-col text-secondary gap-4 mt-8 px-4">
                <Button variant="link">
                    <Link className={getLinkClassName(path, "/")} href="/value-investing">
                        <span className="md:hidden"><GoHome size={24} /></span>
                        <span className="hidden md:block">Home</span>
                    </Link>
                </Button> 
                <Button variant="link">
                    <Link className={getLinkClassName(path, "discounted-cash-flow")} href="/value-investing/discounted-cash-flow">
                        <span className="md:hidden"><CiDiscount1 size={24} /></span>
                        <span className="hidden md:block">{ dcf }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName(path, "gordon-model")} href="/value-investing/gordon-model">
                        <span className="md:hidden"><LiaCoinsSolid size={24} /></span>
                        <span className="hidden md:block">{ gordon }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName(path, "liquidation-value")} href="/value-investing/liquidation-value">
                        <span className="md:hidden"><PiBombLight size={24} /></span>
                        <span className="hidden md:block">{ liquidation }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName(path, "graham-formula")} href="/value-investing/graham-formula">
                        <span className="md:hidden"><RiFormula size={24} /></span>
                        <span className="hidden md:block">{ graham }</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
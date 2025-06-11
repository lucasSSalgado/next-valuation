'use client';
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { CiCalculator2 } from "react-icons/ci";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { CiBitcoin } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { usePathname } from "next/navigation";

interface Props {
    calculator: string
    porter: string
    crypto: string
    graph: string
}

export default function Lateralnav({ calculator, porter, crypto, graph }: Props) {
    const path = usePathname();
    
    const getLinkClassName = (targetPath: string) => {
        return path.includes(targetPath) 
            ? "text-yellow-400 dark:text-yellow-400" 
            : "text-secondary dark:text-primary";
    };

    return (
        <div className="bg-secondary-foreground/90 dark:bg-secondary/70 dark:text-secondary-foreground">
            <div className="flex flex-col gap-4 mt-8 px-4">
                <Button variant="link">
                    <Link className={getLinkClassName("compound-interest")} href="/general/compound-interest">
                        <span className="md:hidden"><CiCalculator2 size={24} /></span>
                        <span className="hidden md:block">{ calculator }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName("porter-forces")} href="/general/porter-forces">
                        <span className="md:hidden"><HiOutlineViewfinderCircle size={24} /></span>
                        <span className="hidden md:block">{ porter }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName("crypto")} href="/general/crypto">
                        <span className="md:hidden"><CiBitcoin size={24} /></span>
                        <span className="hidden md:block">{ crypto }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className={getLinkClassName("100baggers")} href="/general/100baggers">
                        <span className="md:hidden"><BsGraphUpArrow size={24} /></span>
                        <span className="hidden md:block">{ graph }</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

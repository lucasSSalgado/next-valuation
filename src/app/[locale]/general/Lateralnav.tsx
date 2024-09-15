import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { CiCalculator2 } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { CiBitcoin } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { useTranslations } from "next-intl";

export default function Lateralnav() {
    const t = useTranslations('lateralnav-geral')

    return (
        <div className="bg-secondary-foreground/90 dark:bg-secondary/70 dark:text-secondary-foreground">
            <div className="flex flex-col gap-4 mt-8 px-4">
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/general">
                        <span className="md:hidden"><GoHome size={24} /></span>
                        <span className="hidden md:block">Home</span>
                    </Link>
                </Button> 
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/general/compound-interest">
                        <span className="md:hidden"><CiCalculator2 size={24} /></span>
                        <span className="hidden md:block">{ t('calculator') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/general/porter-forces">
                        <span className="md:hidden"><HiOutlineViewfinderCircle size={24} /></span>
                        <span className="hidden md:block">{ t('porter') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/general/crypto">
                        <span className="md:hidden"><CiBitcoin size={24} /></span>
                        <span className="hidden md:block">{ t('crypto') }</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary dark:text-primary" href="/general/100baggers">
                        <span className="md:hidden"><BsGraphUpArrow size={24} /></span>
                        <span className="hidden md:block">{ t('100') }</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

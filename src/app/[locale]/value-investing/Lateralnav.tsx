import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GoHome } from "react-icons/go";
import { CiDiscount1 } from "react-icons/ci";
import { LiaCoinsSolid } from "react-icons/lia";
import { PiBombLight } from "react-icons/pi";
import { RiFormula } from "react-icons/ri";

export default function Lateralnav() {
    return (
        <div className="bg-slate-700">
            <div className="flex flex-col text-secondary gap-4 mt-8 px-4">
                <Button variant="link">
                    <Link className="text-secondary" href="/value-investing">
                        <span className="md:hidden"><GoHome size={24} /></span>
                        <span className="hidden md:block">Home</span>
                    </Link>
                </Button> 
                <Button variant="link">
                    <Link className="text-secondary" href="/value-investing/discounted-cash-flow">
                        <span className="md:hidden"><CiDiscount1 size={24} /></span>
                        <span className="hidden md:block">Discouted Cash Flow</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary" href="/value-investing/gordon-model">
                        <span className="md:hidden"><LiaCoinsSolid size={24} /></span>
                        <span className="hidden md:block">Gordon Dividend model</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary" href="/value-investing/liquidation-value">
                        <span className="md:hidden"><PiBombLight size={24} /></span>
                        <span className="hidden md:block">Liquidation Value</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary" href="/value-investing/graham-formula">
                        <span className="md:hidden"><RiFormula size={24} /></span>
                        <span className="hidden md:block">Graham Valuation Formula</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GoHome } from "react-icons/go";
export default function Lateralnav() {
    return (
        <div className="bg-slate-700">
            <div className="flex flex-col text-secondary gap-4 mt-8 px-4">
                <Button variant="link">
                    <Link className="text-secondary" href="/investor-framework">
                        <span className="md:hidden"><GoHome size={24} /></span>
                        <span className="hidden md:block">Home</span>
                    </Link>
                </Button> 
                <Button variant="link">
                    <Link className="text-secondary" href="/investor-framework/waffen-buffet">
                        <span className="md:hidden">W.B.</span>
                        <span className="hidden md:block">Waffen Buffet</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary" href="/investor-framework/peter-lynch">
                        <span className="md:hidden">P.L.</span>
                        <span className="hidden md:block">Peter Lynch</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary" href="/investor-framework/philip-fisher">
                        <span className="md:hidden">P.F.</span>
                        <span className="hidden md:block">Philip Fisher</span>
                    </Link>
                </Button>
                <Button variant="link">
                    <Link className="text-secondary" href="/investor-framework/terry-smith">
                        <span className="md:hidden">T.S.</span>
                        <span className="hidden md:block">Terry Smith</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
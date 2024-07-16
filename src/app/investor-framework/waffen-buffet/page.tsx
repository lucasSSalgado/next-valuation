import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
  

export default function WaffenBuffetPage() {
    return (
        <div className="p-8 w-3/4 mx-auto">
            <Card>
            <CardHeader>
                <CardTitle>Warren Edward Buffett</CardTitle>
                <CardDescription className="hover:underline">
                    <a href="https://finance.yahoo.com/news/warren-buffett-shares-earn-whopping-102900347.html">
                        Track Record: 19.8% annualize between 1965 and 2023
                    </a>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text mb-2">
                    Warren Buffett, the &quot;Oracle of Omaha,&quot; is a renowned investor and CEO of Berkshire Hathaway. 
                    Born in 1930 in Omaha, Nebraska, he developed a passion for business early, studying at the University of 
                    Nebraska-Lincoln and Columbia Business School under Benjamin Graham. Buffetts investment philosophy focuses on 
                    value investing, seeking undervalued companies with strong fundamentals, good management and a deep moat. 
                    He prefers simple, understandable businesses and holds stocks long-term.
                </p>
            </CardContent>
            <CardFooter>
                <div className="">
                    <p className="italic p-1">Book by Buffett (kind of): </p>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <a href="#">The Essays of Warren Buffett</a>
                        </Button>
                        <Button variant="outline">
                            <a href="#">The Snowball: Warren Buffett and the Business of Life</a>
                        </Button>
                    </div>
                </div>
            </CardFooter>
            </Card>   
            <Separator className="my-4"/>
            <h4 className="scroll-m-20 text-base font-semibold tracking-tight">Sumary comming soon....</h4>
            <Separator className="my-4"/>
        </div>
    )
}
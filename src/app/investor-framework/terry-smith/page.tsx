import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function TerrySmithPage() {
    return (
        <div className="p-8 w-3/4 mx-auto">
        <Card>
            <CardHeader>
                <CardTitle>Terry Smith</CardTitle>
                <CardDescription className="hover:underline">
                    <a href="https://finance.yahoo.com/news/warren-buffett-shares-earn-whopping-102900347.html">
                        Track Record: 29.2% annualize between 1977 and 1990
                    </a>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text mb-2">
                Terry Smith, born in 1953, is a prominent British investor and the founder of Fundsmith, one of the 
                UKs top-performing funds. Known for his straightforward, long-term investment strategy, Smith focuses on buying
                high-quality businesses at reasonable prices and holding them indefinitely. He emphasizes investing in companies
                with strong fundamentals, durable competitive advantages, and resilient business models. Smiths
                approach is often compared to Warren Buffetts style, with a clear preference for simplicity and patience
                in investing. His notable works include the book &quot;Accounting for Growth&quot; where he critiques accounting
                practices and stresses the importance of understanding financial statements. Under his leadership, Fundsmith 
                has consistently delivered impressive returns, making Smith a respected figure in the investment world. 
                </p>
            </CardContent>
            <CardFooter>
                <div className="">
                    <p className="italic p-1">Book by Terry: </p>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <a href="#">Accounting for Growth</a>
                        </Button>
                    </div>
                </div>
            </CardFooter>
            </Card>   
        </div>
    )
}
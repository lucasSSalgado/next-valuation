import UsefulLinks from "@/app/components/UsefulLinks"
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

export default function TerrySmithPage() {
    return (
        <div className="p-8 w-3/4 mx-auto">
        <Card>
            <CardHeader>
                <CardTitle>Terry Smith</CardTitle>
                <CardDescription className="hover:underline">
                    <a href="https://www.fundsmith.co.uk/factsheet/" target="_blank">
                        Track Record: 15.4% annualised between 2011 and 2024
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
                            <a href="#">Investing for Growth</a>
                        </Button>
                    </div>
                </div>
            </CardFooter>
            </Card>  

            <Separator className="my-4"/>
            <h4 className="scroll-m-20 text-base font-semibold tracking-tight">Sumary comming soon....</h4>
            <Separator className="my-4"/>

            <UsefulLinks 
                articles={[
                    {
                        name: "Ten Golden Rules of Investment - Fundsmith",
                        url: "https://www.fundsmith.co.uk/news/2013/2070-financial-times-ten-golden-rules-of-investment/"
                    }
                ]}
                videos={[
                    {
                        name: "The Swedish Investor Sumary",
                        url: "https://www.youtube.com/watch?v=16OTs9Tql7Y"
                    },
                    {
                        name: "Terry Smith on Quality Companies",
                        url: "https://www.youtube.com/watch?v=B_-YBTI_EYw"
                    },
                    {
                        name: "We Study Billionaires Sumary",
                        url: "https://www.youtube.com/watch?v=rc9EiTNlEmo"
                    },
                    {
                        name: "Terry Smith on Analyzing Stocks",
                        url: "https://www.youtube.com/watch?v=VfqMytX4bpY&list=WL&index=15"
                    },
                    {
                        name: "Terry Smith on How Much to Pay",
                        url: "https://www.youtube.com/watch?v=GqKcrtKDF8g&list=WL&index=16"
                    }
                ]}
            /> 
        </div>
    )
}
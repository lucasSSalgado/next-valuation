import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function PeterLynchPage() {
    return (
        <div className="p-8 w-3/4 mx-auto">
            <Card>
            <CardHeader>
                <CardTitle>Peter Lynch</CardTitle>
                <CardDescription className="hover:underline">
                    <a href="https://finance.yahoo.com/news/warren-buffett-shares-earn-whopping-102900347.html">
                        Track Record: 29.2% annualize between 1977 and 1990
                    </a>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text mb-2">
                    Peter Lynch, born in 1944 in Newton, Massachusetts, is a legendary investor best known for managing the
                    Fidelity Magellan Fund from 1977 to 1990, where he achieved an average annual return of 29%, growing the 
                    funds assets from $18 million to $14 billion. Lynch studied at Boston College and earned an MBA from the 
                    Wharton School. He is famous for his &quot;invest in what you know&quot; philosophy, encouraging investors to 
                    buy stocks of companies they understand and believe in, and for popularizing the &quot;growth at a reasonable 
                    price&quot; (GARP) strategy. His investment approach was flexible, spanning various industries and company sizes.
                    Lynch authored influential books like &quot;One Up On Wall Street&quot; and &quot;Beating the Street,&quot; 
                    demystifying investing for the average person and leaving a legacy of practical investment advice and exceptional
                    performance.   
                </p>
            </CardContent>
            <CardFooter>
                <div className="">
                    <p className="italic p-1">Book by Lynch: </p>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <a href="#">One Up On Wall Street</a>
                        </Button>
                        <Button variant="outline">
                            <a href="#">Beating the Street</a>
                        </Button>
                    </div>
                </div>
            </CardFooter>
            </Card>   
        </div>
    )
}
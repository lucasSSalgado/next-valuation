import FlipForm from "./FlipForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function FlipCalculatorPage() {
    return (
        <div className="p-5 w-3/4 mx-auto mt-10">
            <Card>
                <CardHeader>
                    <CardTitle>The all in one flip calculator</CardTitle>
                    <CardDescription>
                        This is a very custbale flip calculator make to be possible its use in difference countries, 
                        difference way of payment, different interest rates and diferent taxes systems, enjoy.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>First you need to choose if will pay in cach or lavarege with a financing, this change everything.</p>
                </CardContent>
            </Card>

            <FlipForm />
        </div>
    )
}
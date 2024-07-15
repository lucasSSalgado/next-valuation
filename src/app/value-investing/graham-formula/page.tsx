import { Separator } from "@/components/ui/separator";
import GrahamForm from "./GrahamForm";
import ValuationDescription from "../ValuationDescription";

export default function GrahamFormulaPAge() {
    return (
        <div className="p-8 w-3/4">

            <ValuationDescription 
                title="Graham Formula"
                useCase="Companies with a lot of hard assets in the balance sheet and stable growth"
                formula="&#x221A; [(earning per share * 15) + (book value per share * 1,5)]"
                description={[
                    `The Graham Formula or Graham Number is a simplistic and fast way to determine the maximum price 
                    a stock value based on the earing per share and book value per share. Is not a sofisticated way to value
                    stocks and has many limitation, it is good for companies with lots of hard assets in the balance sheet.`,
                    `It is named after the legendary value investor Benjamin Graham, mentor of Warrem Buffet and father of the 
                    value investing. He also the inventor of very important concepts like the <a href="#">Margin of safety</a>
                    and the <a href="#">Mrs. Market</a>. He was a excellent writter too, his two most foumous book are the 
                    <a href="#">The Intelisgent Investor</a> and the bible of value investing <a href="#">Security analises</a>.`,
                    `The Idea behind the Graham Formula is to set the maximum a investor should pay for a stock. At most 15 times earning
                    and at most 1,5 times the book value. It can be used to start a valuation process in a assets intensive campany.
                    The formula is the follow: <span className="font-semibold">square root of [(earning per share * 15) + (book value per share * 1,5)]</span>`
                ]}
            />
            <Separator className="my-4" />
            <GrahamForm />
        </div>
    )
}
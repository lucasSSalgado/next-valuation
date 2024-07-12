import { Separator } from "@/components/ui/separator";
import DiscountedForm from "./DiscountedForm";

export default function DiscoutedCashPage() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Discounted Cash Flow</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    Discouted cash flow is one of the famous and more versatile valuation methods. It value a business 
                    estimating the future cash flows and bring then to present value. There is infinity ways of doing DCF,
                    and like many other valuation methods your estimatives determine the success of your analysis, usually the 
                    wacc (weighted average cost of capital) is used to bring the future values into the present. 
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    Wacc is the cost of capital of a company, how expensive is to finance the besiness, given the current ratio 
                    between equity and bonds in the balance sheet of the company. Is not the porpose of this site teach thinks in deth
                    or given any kind of finance adivice, if you want to know more about wacc you can find links at the end of the page.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    In this calculator we used the values per share (so valuating to the equity), but if you know what you doing be free to use
                    whatever you like. Remember that your assumptiosn can be wrong and modify a lot the final value,
                    so give yourself a margin of safity when uisng this method.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    This calculator used a two parts valuation, considering a growth rate in the next years, a second growth rate in the next years
                    and a final growth rate for perpertuity. If you want .......
                </p>
            </div>
            <Separator className="my-4" />
            <DiscountedForm />
        </div>
    )
}
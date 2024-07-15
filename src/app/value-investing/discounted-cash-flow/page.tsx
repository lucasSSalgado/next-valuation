import { Separator } from "@/components/ui/separator";
import DiscountedForm from "./DiscountedForm";
import ValuationDescription from "../ValuationDescription";

export default function DiscoutedCashPage() {
    return (
        <div className="p-8 w-3/4">
            <ValuationDescription 
                title="Discounted Cash Flow"
                formula="&#x2211;[(EPS * (1 + growth rate))^ years / (1 + discount rate)^ years]"
                useCase="General"
                description={[
                    `Discounted Cash Flow (DCF) is one of the most renowned and versatile valuation methods. 
                    It values a business by estimating future cash flows and bringing them to present value. 
                    There are infinite ways to perform a DCF analysis, and like many other valuation methods, 
                    your estimates determine the success of your analysis. Typically, the Weighted Average Cost of Capital 
                    (WACC) is used to discount future values to their present value.`,
                    `WACC represents a company's cost of capital, reflecting how expensive it is to finance the business 
                    given the current ratio between equity and bonds on the company's balance sheet. This site does not aim
                    to teach these concepts in depth or provide any financial advice. If you want to learn more about WACC,
                    you can find helpful links at the end of the page.`,
                    `In this calculator, we use values per share (thus valuing the equity), but if you know what you are doing, 
                    feel free to use whatever method you prefer. Remember that your assumptions can be incorrect and can significantly 
                    impact the final value, so always allow yourself a margin of safety when using this method.`
                ]}
            />

            <Separator className="my-4" />
            <DiscountedForm />
        </div>
    )
}
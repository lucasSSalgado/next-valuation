import { Separator } from "@/components/ui/separator";
import LiquidationForm from "./LiquidationForm";
import ValuationDescription from "../ValuationDescription";

export default function LiquidationValuePage() {
    return (
        <div className="p-8 w-3/4">
            <ValuationDescription 
                title="Liquidation Value"
                useCase="Bankruptcies and Liquidations"
                formula="Cash + Book value of Hard assets * (1 - discount) - total liabilities"
                description={[
                    `Liquidation value refers to the estimated amount that would be received if all of a company's assets were sold off and its liabilities paid.
                    This valuation method is crucial in scenarios such as bankruptcy, mergers and acquisitions, and distressed asset sales.`,
                    `Liquidation value provides an accurate estimate of what stakeholders might receive if a company is liquidated, 
                    making it particularly useful in bankruptcy proceedings and for creditors determining their potential recovery. 
                    However, it often undervalues a company that could be worth more if it continues operations. Market conditions can significantly
                    affect liquidation values, especially during economic downturns. Additionally, liquidation value typically results in a lower valuation 
                    compared to methods like book value or market value.`,
                    `To use a proper discount, consider factors like the age of the hard assets, alternative uses of the assets 
                    (specific machinery can be hard to sell), and desirability. For example, a car fleet or real estate is easier to sell and has 
                    a lesser discount compared to very specific machinery.`
                ]}
            />
            <Separator className="my-4" />
            <LiquidationForm />
        </div>
    )
}
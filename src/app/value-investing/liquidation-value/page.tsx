import LiquidationForm from "./LiquidationForm";

export default function LiquidationValuePage() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Liquidation Value</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    Liquidation value refers to the estimated amount that would be received if all of a companys assets
                    were sold off and its liabilities paid off. This valuation method is crucial in scenarios such as bankruptcy, 
                    mergers and acquisitions, and distressed asset sales.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    Liquidation value has its advantages and disadvantages in the context of investing. On the positive side, 
                    it provides an accurate estimate of what stakeholders might receive if a company is liquidated, making it 
                    particularly useful in bankruptcy proceedings and for creditors determining their potential recovery. 
                    The method is based on actual market values of assets, offering an objective assessment. However, it has several 
                    downsides: it often undervalues a company that could be worth more if it continues operations, and market conditions
                    can significantly affect liquidation values, especially during economic downturns. Additionally, liquidation value 
                    typically results in a lower valuation compared to other methods like book value or market value, which can be a 
                    drawback when evaluating the true worth of a company.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The formula is the follow: Liquidation value of assets minus total liability. In a liquidation scenario the hard assets 
                    like inventory and machinery are sold with a discount, so you need to consider this in the calculation. So for this 
                    calculator the formula is the follow: <span className="font-semibold">Cash + Book value of Hard assets * (1 - discount) - total liabilities</span>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    To use a proper discount you need to figure some things: the age of the hard assets, the alternatives uses of the assets 
                    (specific machinary can be hard to sell), the desiriability, etc. Use the reason, a car fleet, real estate are easy to sell
                    and with a lesser discounted then a very specific machine.
                </p>
            </div>

            <LiquidationForm />
        </div>
    )
}
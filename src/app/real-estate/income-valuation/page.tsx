import IncomeForm from "./IncomeForm";

export default function IncameValuationPage() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Income valuation Method</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The income valuation method is one of the three methods use to value a real estate investiment, is 
                    used to determined the fair price of a property based on the income it can generate
                    for us compare with the available options in the market. The idea is that you can pay more for a property that
                    generate more income then for a property that generate less. 
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    Here like in many valuation method with stocks we will use a discounted cash flow to bring the future cash flow 
                    into present value and see how much is ok to pay for the property. 
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    So in the calculator above add the risk free rate in your country (usually the sort term tresuary bond rate) 
                    and the risk premium (a realistic one) you need to make a investment. So add the normal yearly income of similar
                    properties in the same region. Also add the growth rate in the income (based on your expectation of the future 
                    of the region) and for how many years you want to calculate (10 years is a good start).
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    Additionally you can also add the price you want to pay for the given property.
                </p>
            </div>
           
            <IncomeForm />
            <div>
                Usefull links: 
                <ul>
                    <li>
                        <a className="text-blue-500" href="https://www.investopedia.com/terms/i/income-approach.asp" target="_blank">
                            Cost Approach Investopidia
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
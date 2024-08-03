import { Separator } from "@/components/ui/separator";
import IncomeForm from "./IncomeForm";
import UsefulLinks from "@/app/[locale]/components/UsefulLinks";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function IncameValuationPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);

    return (
        <div className="p-4 md:p-8 text-center">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Income valuation Method</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The income valuation method is one of the three methods use to value a real estate investiment, is 
                    used to determined the fair price of a property based on the income it can generate
                    for us compare with the available options in the market. The idea is that you can pay more for a property that
                    generate more income then for a property that generate less. 
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The formula is the follow: <span className="font-semibold">Fair Price = (NOI - (NOI * Vancancy Rate))  / Market Cap Rate</span>.
                    Where NOI is the Net Operation Income, all the rent pay minus all the oprational costs, but do not consider taxes here. 
                    Market Cap rate is usually calculate by <span className="font-semibold">NOI  / Property Market value</span>. But I dislike
                    this way of calculate, for me look like a circular thinking. So here de denominator will be 
                    <span className="font-semibold">Free rate of return + Risk premium - Expected growth</span>.
                    So now the formula is using the market conditions to value the future cash flow of the income, and not the Market value of similar 
                    properties.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    Additionally you can also add the price you want to pay for the given property to get the current discount.
                </p>
            </div>

            <Separator className="my-4" />
            <IncomeForm />
            <Separator className="my-4" />

            <UsefulLinks 
                articles={[
                    {
                        name: "Income Approach Investopidia",
                        url: "https://www.investopedia.com/terms/i/income-approach.asp"
                    },
                ]}

            />
        </div>
    )
}
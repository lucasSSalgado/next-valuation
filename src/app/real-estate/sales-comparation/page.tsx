import UsefulLinks from "@/app/components/UsefulLinks";
import SalesForm from "./SalesForm";
import { Separator } from "@/components/ui/separator";

export default function SalesComparationPage() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Sales comparation method</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The sales comparation method is used to determined the fair price of a property based on the market price of 
                    equivalent property in the same region. A investor should be aware of the equivalent property concept in this sense,
                    properties in the same region has different sizes, age, and luxury. Some apartements have two garage space and some 
                    hava just one, is import to find the most similar property possible, to the valuation be more precise.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The factor that the investor should be aware and that most influence the price of a property are: Location and neighborhood,
                    features (bedrooms, bathrooms, garage, pool, etc.), age and conditions. All being equal the differences in square foot 
                    problably will differenciat the price of the properties.
                </p>
            </div>

            <SalesForm />
            <Separator className="my-4" />
            <UsefulLinks 
                articles={[
                    {
                        name: "Sales Comparation Investopidia",
                        url: "https://www.investopedia.com/terms/s/sales-comparison-approach.asp"
                    },
                    {
                       name: "Sales Comparation The Balance",
                       url: "https://www.thebalancemoney.com/sales-comparison-approach-in-real-estate-appraisal-2867363"
                    }
                ]}
            />
        </div>
    )
}
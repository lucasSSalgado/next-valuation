import SalesForm from "./SalesForm";

export default function SalesComparationPage() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="text-2xl mb-2">Sales comparation method</h2>
            <p>
                The sales comparation method is used to determined the fair price of a property based on the market price of 
                equivalent property in the same region. A investor should be aware of the equivalent property concept in this sense,
                properties in the same region has different sizes, age, and luxury. Some apartements have two garage space and some 
                hava just one, is import to find the most similar property possible, to the valuation be more precise.
            </p>
            <p>
                The factor that the investor should be aware and that most influence the price of a property are: Location and neighborhood,
                features (bedrooms, bathrooms, garage, pool, etc.), age and conditions. All being equal the differences in square foot 
                problably will differenciat the price of the properties.
            </p>

            <SalesForm />
            <div>
                Usefull links: 
                <ul>
                    <li>
                        <a className="text-blue-500" href="https://www.investopedia.com/terms/s/sales-comparison-approach.asp" target="_blank">
                            Sales Comparation Investopidia
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
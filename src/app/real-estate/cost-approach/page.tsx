import { Separator } from "@/components/ui/separator"
import CostForm from "./CostForm"

export default function CostApproachPage() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Cost Approach Method</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The Cost Approach method is one of the three methods used to value a real estate investiment, is less
                    reliable then the other ones for most cases, but can be the alternative when the other two are no applicable.
                    Like in scenarios when that is no data about the recent sales in the region, or when you cannot count on the 
                    income for the property. For example, a holiday home in a small town or a very unique house in the neighborhood.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The logic behind the cost approuch method is that the price of the property should not be higher then the cost to 
                    by a new house in the same place, considering the opportunity costs, time and efford. Is good to have in mind that
                    this method is the less pricese one, once the materials and the finishing cost, or even the land can differ when buinding
                    a new house in the region. So when using the cost approach method is good to have a good knowledge of the region and 
                    constructor in the region or apply a bigger margin of safety.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The formula is the follow: <span className="font-semibold">Land Value + Cost of Construction - Depreciation + Opportunity Cost</span>.
                    In general is used the cost per square foot and for the matter of this calculator we will use the Straight Line Depreciation method, 
                    that consider the age of the property and the useful lifetime. We also need to consider the opportunity cost and the time take to construct 
                    the new house, because a property today value more then a property tomorrow.
                </p>
            </div>
            <Separator className="my-4" />
            <CostForm />
            <Separator className="my-4" />
            
            <div>
                Usefull links: 
                <ul>
                    <li>
                        <a className="text-blue-500" href="https://www.investopedia.com/terms/c/cost-approach.asp" target="_blank">
                            Cost Approach Investopidia
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
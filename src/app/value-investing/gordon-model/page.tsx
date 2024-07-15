import { Separator } from "@/components/ui/separator";
import GordonForm from "./GordonForm";
import ValuationDescription from "../ValuationDescription";

export default function GordonModelPage() {
    return (
        <div className="p-8 w-3/4">
            <ValuationDescription
                title="Gordon Growth Model Valuation"
                useCase="Dividend payers with stable growth"
                formula="Next Dividend / ( rate of return - growth in perpertuty)"
                description={[
                    `The gordon growth model is a variation of the dividend discount model. It consider the future series of dividend payed
                    at a discount rate. the discount rate consider the rate of return and the growth of the dividend to find the fair price.
                    It is ideal for big and stable companies with constant growth (generally a small one), Like a coca-cola, a bank of America, etc.`
                ]}
            />
            <Separator className="my-4" />
            <GordonForm />
        </div>
    )
}
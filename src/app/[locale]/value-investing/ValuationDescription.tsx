import MathFormula from "../components/MathFormula"


type props = {
    title: string
    useCase: string
    formula: string
    description: string[]
}

export default function ValuationDescription(props: props) {
    return <div className="sm:text-left text-center">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
            {props.title}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-2 text-xl underline">
            {props.useCase}
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-2 font-light italic p-2">
           Formula: <MathFormula formula={props.formula} /> 
        </p>
        <div className="mt-3">
            {
                props.description.map((paragraph, index) => <p key={index} className="leading-7 [&:not(:first-child)]:mt-2">
                    {paragraph}
                </p>)
            }
        </div>
    </div>
}
import CompoundCalculatorForm from "./CompoundCalculatorForm"


export default function CompoundCalculator() {
    return <div className="p-8 w-3/4 mx-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            compound interest calculator
        </h2>

        <CompoundCalculatorForm />
    </div>
}
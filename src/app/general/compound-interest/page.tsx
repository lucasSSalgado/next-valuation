import CompoundCalculatorForm from "./CompoundCalculatorForm"


export default function CompoundCalculator() {
    return <div className="md:p-8 p-4 md:w-3/4 mx-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
            Compound Interest Calculator
        </h2>

        <CompoundCalculatorForm />
    </div>
}
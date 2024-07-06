import FlipForm from "./FlipForm";

export default function FlipCalculatorPage() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="text-2xl mb-2">The all in one flip calculator</h2>
            <p>
                This is a very custbale flip calculator make to be possible its use in difference countries, 
                difference way of payment, different interest rates and diferent taxes systems, enjoy.
            </p>
            <p>
                First you need to choose if will pay in cach or lavarege with a financing, this change everything.
            </p>
            <FlipForm />
        </div>
    )
}
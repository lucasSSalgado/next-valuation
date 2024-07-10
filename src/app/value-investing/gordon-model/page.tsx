import GordonForm from "./GordonForm";

export default function GordonModelPage() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Gordon Model Method</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The gordon growth model is a variation of the dividend discount model. It consider the future series of dividend payed
                    at a discount rate. the discount rate consider the rate of return and the growth of the dividend to find the fair price.
                    It is ideal for big and stable companies with constant growth (generally a small one), Like a coca-cola, a bank of America, etc.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The formula is the follow: <span className="font-semibold">Fair Price = Future Dividend / ( rate of return - growth in perpertuty)</span> 
                </p>
            </div>
            
            <GordonForm />
        </div>
    )
}
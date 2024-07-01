import GordonForm from "./GordonForm";

export default function GordonModelPage() {
    return (
        <div className="p-8 w-3/4">
            <h1>Gordon Model Method</h1>
            <p>
                The gordon growth model is a variation of the dividend discount model. It consider the future series of dividend payed
                at a discount rate. the discount rate consider the rate of return and the growth of the dividend to find the fair price.
                It is ideal for big and stable companies with constant growth (generally a small one), Like a coca-cola, a bank of America, etc.
            </p>
            <p>
                The formula is the follow: Fair Price = Future Dividend dividend by rate of return minus growth in perpertuty.
            </p>
            <GordonForm />
        </div>
    )
}
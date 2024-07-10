import GrahamForm from "./GrahamForm";

export default function GrahamFormulaPAge() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Graham Formula</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The Graham Formula or Graham Number is a simplistic and fast way to determine the maximum price 
                    a stock value based on the earing per share and book value per share. Is not a sofisticated way to value
                    stocks and has many limitation, it is good for companies with lots of hard assets in the balance sheet.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    It is named after the legendary value investor Benjamin Graham, mentor of Warrem Buffet and father of the 
                    value investing. He also the inventor of very important concepts like the <a href="#">Margin of safety</a>
                    and the <a href="#">Mrs. Market</a>. He was a excellent writter too, his two most foumous book are the 
                    <a href="#">The Intelisgent Investor</a> and the bible of value investing <a href="#">Security analises</a>.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    The Idea behind the Graham Formula is to set the maximum a investor should pay for a stock. At most 15 times earning
                    and at most 1,5 times the book value. It can be used to start a valuation process in a assets intensive campany.
                    The formula is the follow: <span className="font-semibold">square root of [(earning per share * 15) + (book value per share * 1,5)]</span>
                </p>
            </div>

            <GrahamForm />
        </div>
    )
}
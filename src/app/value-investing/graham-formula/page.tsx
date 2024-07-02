import GrahamForm from "./GrahamForm";

export default function GrahamFormulaPAge() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="text-2xl mb-2">Graham Formula</h2>
            <p>
                The Graham Formula or Graham Number is a simplistic and fast way to determine the maximum price 
                a stock value based on the earing per share and book value per share. Is not a sofisticated way to value
                stocks and has many limitation, it is good for companies with lots of hard assets in the balance sheet.
            </p>
            <p>
                It is named after the legendary value investor Benjamin Graham, mentor of Warrem Buffet and father of the 
                value investing. He also the inventor of very important concepts like the <a href="#">Margin of safety</a>
                and the <a href="#">Mrs. Market</a>. He was a excellent writter too, his two most foumous book are the 
                <a href="#">The Intelisgent Investor</a> and the bible of value investing <a href="#">Security analises</a>.
            </p>
            <p>
                The Idea behind the Graham Formula is to set the maximum a investor should pay for a stock. At most 15 times earning
                and at most 1,5 times the book value. It can be used to start a valuation process in a assets intensive campany.
            </p>

            <GrahamForm />
        </div>
    )
}
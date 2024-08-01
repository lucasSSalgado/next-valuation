import BaggerCalculator from "./BaggerCalculator";

export default function baggerPage() {
    return <div className="md:p-8 p-4 md:w-3/4 mx-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">100 Bagger Calculator</h2>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            A 100 bagger calculator aims to estimate the potential of an investment to multiply 100-fold over time. While intriguing,
            such calculations have inherent limitations. Predicting future performance is inherently uncertain due to varios factors.
        </p>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            Despite these uncertainties, certain traits are common among companies that achieve 100 bagger status. Typically, 
            these companies exhibit robust growth potential, high return on investment, and are often led by owner-operators who are 
            deeply invested in the businesss success. Strong competitive advantages, innovative products or services, and effective
            management practices also contribute to their extraordinary growth. While the calculator can provide a rough estimate, 
            its essential to conduct thorough research and consider a comprehensive range of factors before making investment decisions.
        </p>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            And even if you have all in your favor, you need time and patience, lots of patience. This calculator was made inspired by the book:
             <a className="text-blue-700 text-wrap text-sm" href="https://www.amazon.com.br/100-Baggers-Stocks-100-1/dp/1621291650">100 Baggers: Stocks That Return 100-to-1 and How To Find Them</a>
            by Christopher W Mayer and his intelectual predecessor <br /> 
            Thomas W. Phelps how write <a className="text-blue-700 text-wrap text-sm" href="https://www.amazon.com.br/100-Stock-Market-Distinguished-Opportunities-ebook/dp/B09BNRXZJ4/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1">
            100 to 1 in the Stock Market: A Distinguished Security Analyst Tells How to Make More of Your Investment Opportunities.</a> In Christopher the average
            time a stock need to become a 100 baggers was 26 years, even thouth the time needed is swiking. If there is a secrete, is it to have patience.
        </p>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            If is possible to give a quick sumary of what is need to a stock be a 100 bagger it usually need: Growth in sales and earning, expantion of multiples, 
            ability to invest at high rates (which usually means: high return of capital invested, high margins), a good management team (prefer ownors operatiors),
            the ability to maintain this growth above average for many years (a durable moat).
        </p>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            This calculator gives you the probability of have a 100 bagger. If the stars are align and you have a very good company at your hands, nothing garantee
            a sucessfull investment, no one can see into the future. But to be easy to understand the calculators give you 100% if all things are align and this number 
            divided by 5, to give you the true change of find a 100 bagger, this number 5 is totaly arbitrary.
        </p>

        <BaggerCalculator />
    </div>
}
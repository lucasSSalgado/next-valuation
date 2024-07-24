import UsefulLinks from "@/app/components/UsefulLinks"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TerrySmithPage() {
    return (
        <div className="md:p-8 p-2 mx-auto">
        <Card>
            <CardHeader>
                <CardTitle>Terry Smith</CardTitle>
                <CardDescription className="hover:underline">
                    <a href="https://www.fundsmith.co.uk/factsheet/" target="_blank">
                        Track Record: 15.4% annualised between 2011 and 2024
                    </a>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text mb-2">
                Terry Smith, born in 1953, is a prominent British investor and the founder of Fundsmith, one of the 
                UKs top-performing funds. Known for his straightforward, long-term investment strategy, Smith focuses on buying
                high-quality businesses at reasonable prices and holding them indefinitely. He emphasizes investing in companies
                with strong fundamentals, durable competitive advantages, and resilient business models. Smiths
                approach is often compared to Warren Buffetts style, with a clear preference for simplicity and patience
                in investing. His notable works include the book &quot;Accounting for Growth&quot; where he critiques accounting
                practices and stresses the importance of understanding financial statements. Under his leadership, Fundsmith 
                has consistently delivered impressive returns, making Smith a respected figure in the investment world. 
                </p>
            </CardContent>
            <CardContent>
                <h1 className="text-sm mb-2">Strategy in One Quote: </h1>
                <p className="text-sm italic">
                    Invest in good companies. Don’t overpay. Do nothing.
                </p>
            </CardContent>
            <CardFooter>
                <div className="">
                    <p className="italic p-1">Book by Terry: </p>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <a href="#">Investing for Growth</a>
                        </Button>
                    </div>
                </div>
            </CardFooter>
            </Card>  

            <div>   
                <div className="p-2 text-center md:text-left">
                    <h2 className="scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight first:mt-8">Invest in good companies. Don’t overpay. Do nothing.: </h2>
                    <ul className="list-decimal mt-2 p-2">
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight">
                                What is a good company?
                            </h4>
                            <div className="mt-3 border-l-2 pl-6">
                                In his book, Sir Terry Smith tell over and again what is a good business. In his annual letter to shareholders in his fund Fundsmith
                                he always tell us the metrics he look at: 
                                <ul className="list-decimal text-sm pl-4 mt-2">
                                    <li><strong>Return on Capital Employed (ROCE)</strong>: cash operating profit divided by the sum of shareholders’ equity and long-term liabilities.</li>
                                    <li><strong>High Gross Margin</strong></li>
                                    <li><strong>High Operation Profit Margin</strong></li>
                                    <li><strong>High Conversion Rate</strong>: the convertion off earnings in cash</li>
                                    <li><strong>Less Levarage</strong></li>
                                    <li><strong>High Interest Cover</strong>: the profit of the company divided by interest change</li>
                                </ul>
                            </div>
                            <div className="mt-3 border-l-2 pl-6">
                                If a company can borrow money at 5% and invest it at 10%, so the business will do good, if it borrow money at 5% and 
                                apply it a 3% it will lose value over time, simple as that. But return on capital alone will not provide a sourse of growth,
                                the company need to be able to growth in some direction and deploy more capital at this higher rate.
                            </div>
                            <div className="mt-3 border-l-2 pl-6">
                                Other things that Sir Smith usually talk about is the track record of the company, he like to invest in old companies. And 
                                in companies that have a Moat.
                            </div>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;... is to invest in a portfolio of equities in good companies
                                which can be relied upon to compound in value over time. Such companies
                                have been around for decades or longer, have good financial results (high
                                returns on capital, high margins, good cash conversion of profits and
                                moderate debt levels) even at the bottom of the economic cycle.
                                They also have identifiable competitive advantages which should enable
                                those returns to persist despite their obvious attraction to competitors..&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;We are seeking companies that offer a superior
                                product and/or service to customers which enables them to generate these
                                impressive financial returns and prevent competition from eroding them.&quot;
                            </blockquote>
                            <div className="mt-3 border-l-2 pl-6">
                                A good company should be reconize as so. It should be easy to explain why this one is a good company and why this one is a 
                                bad one, and the accounting need to reflect this strong finacial performance. If you need much explanation and esoteric thinking to
                                explain why something is good, is probably not.
                            </div>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">
                                Valuation Matter
                            </h4>
                            <div className="mt-3 border-l-2 pl-6">
                                When I first listen of quality and growth investing I belive that this strategy dosent care about the valuations. But I was 
                                wrong. Even though this stratagy focus on quality of business, there is no such thing as a good deal regardless the price.
                            </div>
                            <div className="mt-3 border-l-2 pl-6">
                                But Sir Smith have a very unique approach on valuation, the primary indicator for him is the 
                                <strong> free cash flow (FCF) yield: free cash flow divided by their market value.</strong> And dont usually look to P/E ratios.
                                He argue that not all earning are made the same, so to value a company is better to look at the cash it generate compare to its total assets.
                                PE ratios also suffer from other flaws, they disconsider the capinal employed to generate this earnings.
                            </div>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;We prefer instead to rely upon free cash flow yields when evaluating our
                                investments, as not all Es – or Earnings – are created equal. Our
                                portfolio companies’ businesses are less capital intensive than the
                                market as whole. As their earnings are generated with less capital,
                                their return on capital employed is much higher than the average,
                                which we regard as the primary test of their performance. The return
                                on capital of the companies in our portfolio averages 34%. This
                                compares with an average of about 19% for the non-financial stocks
                                in both the S&P 500 and the FTSE 100.&quot;
                            </blockquote>
                            <div className="mt-3 border-l-2 pl-6">
                                Even though valuation matter, and Sir Smith sells and buys considering it, it is only a secondary indicator, low valuations and share
                                price are not the most important information, the fundamental performance is. Looks like he is a big fan of 
                                Charlie Munger, the right hand man of Warren Buffet and will always refer to this quote when have the chance.
                            </div>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot; ‘Over the long term, it’s hard for a stock to earn a much better return than the business which
                                underlies it earns. If the business earns 6% on capital over 40 years and you hold it for that 40
                                years, you’re not going to make much different than a 6% return – even if you originally buy it at
                                a huge discount. Conversely, if a business earns 18% on capital over 20 or 30 years, even if you
                                pay an expensive looking price, you’ll end up with a fine result.’ (Emphasis added.) <br />
                                I have no idea why Mr Munger chose those particular rates of return but
                                what I do know is that he is not voicing an opinion. What he is describing is
                                a mathematical certainty. If you invest for the long term in companies
                                which can deliver high returns on capital, and which invest at least a
                                significant portion of the cash flows they generate to earn similarly high
                                returns, over time that has far more impact on the performance of the shares
                                than the price you pay for them.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">Do Nothing</h4>
                            <div className="mt-3 border-l-2 pl-6">
                                Sir Smith is the first fund mannager that I see higilitting the low turnouver of his fund. He argue that taxes, transaction costs
                                and other expenses can really hurt the performance ofthe investor. He look influenced by John C. Bogle, creator of the Vanguard Group
                                and the fist advocator to a low cost portfolio. He there is no much to add, is a math fact that cost on tradding, fees and taxes will
                                disminish the performance.
                            </div>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">What Look for?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;People often say to us: “Oh, you try to pick winners.” 
                                The reality is that we don’t seek to predict who will win, but rather to bet on a company that has
                                already won.&quot;
                            </blockquote>

                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;At Fundsmith we do not seek
                                to pick winners in the sense that most punters do, which is studying form,
                                viewing the horses in the ring and then betting.
                                We seek to emulate Alex Bird – we wait until we know who has won and
                                then wait for the bookmakers to offer us odds against them winning.&quot;
                            </blockquote>
                            
                            <div className="mt-3 border-l-2 pl-6">
                                A interesting part of Fundsmith strategy is to invest in companies that we all know are good, we are know are the winners in
                                the field they act and wait to mr. market bet agaist then. He argue that is really hard to discover how will win in the market, 
                                is easy and profit to bet on the ones that already won. Some of this companies are: Colgate, Facebook, Microsoft, Nestle, etc.
                                There are times when even this titanic business can be bottled at a reasonable price.
                            </div>

                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;There are some companies where we do not need to speculate on whether
                                they have won in the sense of being successful and dominating certain
                                product categories. Nestlé is the world’s largest food and beverage company
                                and has been in business for 148 years with only one loss. Colgate
                                Palmolive has 45% of the world market for toothpaste and 35% for
                                toothbrushes. It is also the leader in liquid soap and third in pet food. We
                                simply need to wait until the market misprices these shares in order to get
                                our chance to bet on a certain winner.
                                This can happen for many reasons, for example when a panic occurs such
                                as the whole market experienced in 2008–09.&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;Or currency moves
                                such as the recent rise in the Swiss franc, which sent Nestlé’s shares down
                                by more than 10% even though 98% of its business is outside Switzerland.
                                Situations such as these can all provide chances to invest by betting on a
                                certain winner if they drive the valuation to a level which does not reflect
                                these companies’ sustainable returns.&quot;
                            </blockquote> 
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;Yet Facebook is on an historic PE of 19.7× – about the same as the S&P
                                500. Unless there is going to be a much more severe deterioration in
                                Facebook’s operational performance than we have seen to date or
                                reasonably expect, this looks cheap to us.&quot;

                                &quot;I strongly suspect that most people’s judgement of Facebook is based upon
                                their personal experience and prejudices. But 69% of Facebook’s DAU and
                                73% of its MAU are outside the United States and Europe. How much do
                                you think they care about allegations of misuse of data in a US election?&quot;
                            </blockquote>  
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;One of the lessons this illustrates is that you may only get to invest in really
                                good businesses at a cheap rating when they have a problem. Our Microsoft
                                investment coincided with the troubled period under its previous CEO when
                                it managed to come third in a two-horse race in mobile devices and second
                                in a one-horse race in online search. Our job is to determine whether such
                                problems are a temporary glitch that presents an opportunity for us as
                                investors or an existential threat.&quot;
                            </blockquote>  
                        </li>
                    </ul>
                </div>
            </div>
            
            <h2 className="scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight mt-8 text-center">Additional Knowledge: </h2>
            <Card className="mt-5">
            <CardHeader>
                <CardTitle className="text-center">Dividends: </CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;This is illustrated by the performance of Warren Buffett’s Berkshire
                    Hathaway, which has never paid a dividend during the 50 years he has run
                    it. Mr Buffett correctly concluded that if the rate of return he could obtain
                    by reinvesting funds at Berkshire was higher than the rate of return on the
                    S&P 500 Index, it would produce a better performance for investors if he
                    retained all the earnings and reinvested them.
                    You might think you could get the same result if Berkshire paid a dividend
                    and you reinvested it. Not if you pay income tax on your investment
                    income, as you would only have the amount of the dividend net of tax to
                    reinvest.
                    So it is not the dividend that is important, or even just the reinvestment of
                    the dividend, but rather it is the rate of return on reinvestment of the
                    dividend that drives the return&quot;
                </blockquote>
            </CardContent>
            <CardHeader>
                <CardTitle className="text-center">Diversification: </CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;The risk falls sharply as the portfolio
                    increases in number from just one stock, but by the time it has reached
                    about 20 to 30 stocks most of the reduction in risk that can be attained has
                    already been achieved.
                    The problem is that increasing the number of stocks beyond this not only
                    fails to achieve any significant further risk reduction, but it also leads to
                    other problems. <br />
                    Ultimately, if you own too many stocks, your performance will match that
                    of the benchmark or index which is composed of those stocks. There is no
                    point in managing a portfolio or paying a fund manager to do so if you are
                    going to do this. It is cheaper to simply buy an index fund.&quot;
                </blockquote>
            </CardContent>
            <CardHeader>
                <CardTitle className="text-center">Mesure Performance: </CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;But a quarter is too short a period to judge performance reasonably, and
                    even a year is just the time it takes the earth to go round the sun. It is not a
                    natural time period over which to measure the performance of any business
                    or investment unless it is linked to the earth’s orbit.&quot;
                </blockquote>
            </CardContent>
            <CardHeader>
                <CardTitle className="text-center">Shares Buybacks: </CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;The main criteria which determine whether a share buyback creates value
                    for remaining shareholders are a) the shares should be trading below
                    intrinsic value; and b) there should be no better alternative use for the cash
                    that would deliver superior returns than the buyback.&quot;
                </blockquote>
            </CardContent>
            </Card>

            <UsefulLinks 
                articles={[
                    {
                        name: "Ten Golden Rules of Investment - Fundsmith",
                        url: "https://www.fundsmith.co.uk/news/2013/2070-financial-times-ten-golden-rules-of-investment/"
                    }
                ]}
                videos={[
                    {
                        name: "The Swedish Investor Sumary",
                        url: "https://www.youtube.com/watch?v=16OTs9Tql7Y"
                    },
                    {
                        name: "Terry Smith on Quality Companies",
                        url: "https://www.youtube.com/watch?v=B_-YBTI_EYw"
                    },
                    {
                        name: "We Study Billionaires Sumary",
                        url: "https://www.youtube.com/watch?v=rc9EiTNlEmo"
                    },
                    {
                        name: "Terry Smith on Analyzing Stocks",
                        url: "https://www.youtube.com/watch?v=VfqMytX4bpY&list=WL&index=15"
                    },
                    {
                        name: "Terry Smith on How Much to Pay",
                        url: "https://www.youtube.com/watch?v=GqKcrtKDF8g&list=WL&index=16"
                    }
                ]}
            /> 
        </div>
    )
}
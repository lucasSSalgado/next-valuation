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
  

export default function PhilipFisher() {
    return (
        <div className="p-8 w-3/4 mx-auto">
            <Card>
            <CardHeader>
                <CardTitle>Philip Arthur Fisher</CardTitle>
                <CardDescription>Track Record: Unknow</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text mb-2">
                    One of the most influential investor of all times. Waren Buffet once sayd
                    that he is 75% Graham and 15% Phisher.
                    <br />
                    Phisher is one of the first Growth investor also know as Quality investor. The ones that buy rigth And
                    sit tidy. He given tremendous importance to the management of the company, the potetial of growth sales in its products,
                    and the Reshurch and devlopment sector of the company.
                    Some of his rules are easy to observe and some need a deep dive into the stock. But at the end we will also tell
                    his tips in this process.   
                </p>
            </CardContent>
            <CardFooter>
                <div className="">
                    <p className="italic p-1">Book by Fisher: </p>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <a href="#">commom stocks uncommon profits</a>
                        </Button>
                        <Button variant="outline">
                            <a href="#">dont know slep well</a>
                        </Button>
                    </div>
                </div>
            </CardFooter>
            </Card>   

            <div>
                {
                    /*
                        <p className="tracking-tight">
                        In his famous book common stocks and uncommom profists Phisher give us a set of tools to analyse stocks. In the 
                        Chapter 3 it tell was the the fifteen points to analyse in a stocks, and a good company to be good investiment
                        need to pass in the majority of them. 
                        And then in chapter 8 and 9 give us 5 &quot;DONTs&quot; for investor, what to avoid.
                        </p>
                    */
                }

                <div>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-6">The Fifteen Points to Look for in a Common Stock: </h2>
                    <ul className="list-decimal mt-2">
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                Does the company have products or services with sufficient market potential to make 
                                possible a sizable increase in sales for at least several years?
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;For lack of better terms I will call one group those that happen to be both “fortunate
                                and able” and the other group those that are “fortunate because they are able.” A high order 
                                of management ability is a must for both groups. No company grows for a long period of years just 
                                because it is lucky. It must have and continue to keep a high order of business skill, otherwise 
                                it will not be able to capitalize on its good fortune and to defend its competitive
                                position from the inroads of others.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
                                Does the management have a determination to continue to develop products or processes that will still
                                further increase total sales potentials when the growth potentials of currently attractive product
                                lines have largely been exploited?
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;It is at this point that scientific
                                research and development engineering begin to enter the picture. It is
                                largely through these means that companies improve old products and
                                develop new ones. This is the usual route by which a management not
                                content with one isolated spurt of growth sees that growth occurs in a
                                series of more or less continuous spurts.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">How effective are the company’s research and development efforts in relation to its size?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">&quot;For a large number of publicly-owned companies it is not too difficult
                            to get a figure showing the number of dollars being spent each year on
                            research and development. Since virtually all such companies report
                            their annual sales total, it is only a matter of the simplest mathematics to
                            divide the research figure by total sales and so learn the per cent of each
                            sales dollar that a company is devoting to this type of activity.&quot;</blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">&quot;Until the average investor tries it, he probably
                            will not believe how complete a picture will emerge if he asks
                            intelligent questions about a company’s research activities of a diversified
                            group of research people, some from within the company and others
                            engaged in related lines in competitive industries, in universities, and
                            in government. A simpler and often worthwhile method is to make a
                            close study of how much in dollar sales or net profits has been contributed
                            to a company by the results of its research organization during
                            a particular span, such as the prior ten years.&quot;</blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">Does the company have an above-average sales organization?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">&quot;In this competitive age, the products or services of few companies are
                            so outstanding that they will sell to their maximum potentialities if they
                            are not expertly merchandised. It is the making of a sale that is the most
                            basic single activity of any business.Without sales, survival is impossible.&quot;</blockquote>
                            <p>Example Companies: <a href="https://pt.wikipedia.org/wiki/IBM">IBM</a></p>
                            </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">Does the company have a worthwhile profit margin?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">&quot;All the sales growth in the world won’t produce the right type
                            of investment vehicle if, over the years, profits do not grow correspondingly.
                            The first step in examining profits is to study a company’s profit
                            margin, that is, to determine the number of cents of each dollar of sales
                            that is brought down to operating profit.&quot;</blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">What is the company doing to maintain or improve profit margins?</h4>
                        </li>
                        <li>Does the company have outstanding labor and personnel relations?</li>
                        <li>Does the company have outstanding executive relations?</li>
                        <li>Does the company have depth to its management?</li>
                        <li>How good are the company’s cost analysis and accounting controls?</li>
                        <li>
                            Are there other aspects of the business, somewhat peculiar to the industry involved, which will
                            give the investor important clues as to how outstanding the company may be in relation to its competition?
                        </li>
                        <li>Does the company have a short-range or long-range outlook in regard to profits?</li>
                        <li>
                            In the foreseeable future will the growth of the company require sufficient equity financing so that the
                            larger number of shares then outstanding will largely cancel the existing stockholders’ benefit from this
                            anticipated growth?
                        </li>
                        <li>
                            Does the management talk freely to investors about its affairs when things are going well but “clam
                            up” when troubles and disappointments occur?
                        </li>
                        <li>Does the company have a management of unquestionable integrity?</li>
                    </ul>
                </div>
            </div>

            <a href="https://www.compoundingquality.net/p/how-philip-fisher-selects-the-best">article english</a> <br />
            <a href="https://varos.com.br/blog/artigo/quem-foi-philip-fisher">article ptbr</a>
        </div>
    )
}
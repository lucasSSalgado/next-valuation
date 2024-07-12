import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  

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
                    Phisher is one of the first Growth investor. The ones that buy rigth And
                    sit tidy. He given tremendous importance to the management of the company, the potetial of growth sales in its products,
                    and the Reshurch and devlopment sector of the company.
                    Some of his rules are easy to observe and some need a deep dive into the stock. But at the end we will also tell
                    his tips in this process.   
                </p>
            </CardContent>
            <CardContent>
                <h1 className="text-sm mb-2">Strategy in One Quote: </h1>
                <p className="text-sm italic">
                    &quot;Is the company in, or being steered toward,
                    lines of business affording opportunities of unusual growth in sales? Are
                    these lines where, as the industry grows, it would be relatively simple for
                    newcomers to start up and displace the leading units? If the nature of
                    the business is such that there is little way of preventing newcomers
                    from entering the field, the investment value of such growth as occurs
                    may prove rather slight.&quot;
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
                            <a href="#">conservative investors sleep well</a>
                        </Button>
                    </div>
                </div>
            </CardFooter>
            </Card>   

            <div>
                <div>
                    <h2 className="scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight first:mt-8">The Fifteen Points to Look for in a Common Stock: </h2>
                    <ul className="list-decimal mt-2">
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                Does the company have products or services with sufficient market potential to make 
                                possible a sizable increase in sales for at least several years?
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;It is by no means impossible to make a fair one-time profit from companies
                                with a stationary or even a declining sales curve. Operating economies resulting from better control of costs can at times create
                                enough improvement in net income to produce an increase in the market
                                price of a company’s shares. This sort of one-time profit is eagerly
                                sought by many speculators and bargain hunters. It does not offer the
                                degree of opportunity, however, that should interest those desiring to
                                make the greatest possible gains from their investment funds.&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;I believe that in regard to a company’s future sales curve there
                                is one point that should always be kept in mind. If a company’s management
                                is outstanding and the industry is one subject to technological
                                change and development research, the shrewd investor should stay alert
                                to the possibility that management might handle company affairs so as
                                to produce in the future exactly the type of sales curve that is the first
                                step to consider in choosing an outstanding investment.&quot;
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
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;In contrast, certain other companies, including some within these
                                same industries, manage to improve profit margins by far more ingenious
                                means than just raising prices. Some companies achieve great success by
                                maintaining capital-improvement or product-engineering departments.
                                The sole function of such departments is to design new equipment that
                                will reduce costs and thus offset or partially offset the rising trend of
                                wages. Many companies are constantly reviewing procedures and methods
                                to see where economies can be brought about.The accounting function
                                and the handling of records has been a particularly fertile field for
                                this sort of activity. So has the transportation field.&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;They all require
                                close study and considerable planning ahead. The prospective investor
                                should give attention to the amount of ingenuity of the work being
                                done on new ideas for cutting costs and improving profit margins.... The companies
                                which are doing the most successful work along this line are very
                                likely to be the ones which have built up the organization with the
                                know-how to continue to do constructive things in the future. They are
                                extremely likely to be in the group offering the greatest long-range
                                rewards to their shareholders.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">Does the company have outstanding labor and personnel relations?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;The difference in the degree of profitability between a
                                company with good personnel relations and one with mediocre personnel
                                relations is far greater than the direct cost of strikes. If workers
                                feel that they are fairly treated by their employer, a background has been
                                laid wherein efficient leadership can accomplish much in increasing
                                productivity per worker. Furthermore, there is always considerable cost
                                in training each new worker.Those companies with an abnormal labor
                                turnover have therefore an element of unnecessary expense avoided by
                                better-managed enterprises.&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;One series of figures that indicates the underlying quality of
                                labor and personnel policies is the relative labor turnover in one company
                                as against another in the same area. Equally significant is the relative
                                size of the waiting list of job applicants wanting to work for one company
                                as against others in the same locality. In an area where there is no
                                labor surplus, companies having an abnormally long list of personnel
                                seeking to enter their employ are usually companies that are desirable for
                                investment from the standpoint of good labor and personnel relations.&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;The investor who buys into a situation in which a significant
                                part of earnings comes from paying below-standard wages for
                                the area involved may in time have serious trouble on his hands.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">Does the company have outstanding executive relations?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;The company offering greatest investment opportunities will be
                                one in which there is a good executive climate. Executives will have
                                confidence in their president and/or board chairman. This means,
                                among other things, that from the lowest levels on up there is a feeling
                                that promotions are based on ability, not factionalism. A ruling family is
                                not promoted over the heads of more able men. Salary adjustments are
                                reviewed regularly so that executives feel that merited increases will
                                come without having to be demanded. Salaries are at least in line with
                                the standard of the industry and the locality. Management will bring
                                outsiders into anything other than starting jobs only if there is no possibility
                                of finding anyone within the organization who can be promoted
                                to fill the position.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">Does the company have outstanding executive relations?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;Most important of these is the delegation of authority. If from the very top on
                                down, each level of executives is not given real authority to carry out
                                assigned duties in as ingenious and efficient a manner as each individual’s
                                ability will permit, good executive material becomes much like
                                healthy young animals so caged in that they cannot exercise. They do
                                not develop their faculties because they just do not have enough opportunity
                                to use them.&quot;
                            </blockquote>    
                        </li>
   
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">How good are the company’s cost analysis and accounting controls?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;No company is going to continue to have outstanding success for a
                                long period of time if it cannot break down its over-all costs with sufficient
                                accuracy and detail to show the cost of each small step in its operation.
                                It becomes almost impossible to establish pricing
                                policies that will insure the maximum obtainable over-all profit consistent
                                with discouraging undue competition. There is no way of knowing
                                which products are worthy of special sales effort and promotion.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
                                Are there other aspects of the business, somewhat peculiar to the industry involved, which will
                                give the investor important clues as to how outstanding the company may be in relation to its competition?
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;By definition, this is somewhat of a catch-all point of inquiry. This is
                                because matters of this sort are bound to differ considerably from each
                                other—those which are of great importance in some lines of business
                                can, at times, be of little or no importance in others. For example, in
                                most important operations involving retailing, the degree of skill a company
                                has in handling real estate matters—the quality of its leases, for
                                instance—is of great significance. In many other lines of business, a high
                                degree of skill in this field is less important.&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;In a number of lines of business, total insurance costs mount to an
                                important per cent of the sales dollar. At times this can matter enough so
                                that a company with, say, a 35 per cent lower overall insurance cost than
                                a competitor of the same size will have a broader margin of profit.&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;Patents are another matter having varying significance from company
                                to company. For large companies, a strong patent position is usually
                                a point of additional rather than basic strength.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">Does the company have a short-range or long-range outlook in regard to profits?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;One company will constantly make
                                the sharpest possible deals with suppliers. Another will at times pay
                                above contract price to a vendor who has had unexpected expense in
                                making delivery, because it wants to be sure of having a dependable
                                source of needed raw materials or high-quality components available
                                when the market has turned and supplies may be desperately needed.
                                The difference in treatment of customers is equally noticeable. The
                                company that will go to special trouble and expense to take care of the
                                needs of a regular customer caught in an unexpected jam may show
                                lower profits on the particular transaction, but far greater profits over
                                the years.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
                                In the foreseeable future will the growth of the company require sufficient equity financing so that the
                                larger number of shares then outstanding will largely cancel the existing stockholders’ benefit from this
                                anticipated growth?
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;Therefore, if investment is limited to outstanding situations, what really
                                matters is whether the company’s cash plus further borrowing ability is
                                sufficient to take care of the capital needed to exploit the prospects of the
                                next several years. If it is, and if the company is willing to borrow to the
                                limit of prudence, the common stock investor need have no concern as to
                                the more distant future. If the investor has properly appraised the situation,
                                any equity financing that might be done some years ahead will be at prices
                                so much higher than present levels that he need not be concerned.&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
                                Does the management talk freely to investors about its affairs when things are going well but “clam
                                up” when troubles and disappointments occur?
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;The management that does not report as freely when things
                                are going badly as when they are going well usually “clams up” in this
                                way for one of several rather significant reasons. It may not have a program
                                worked out to solve the unanticipated difficulty. It may have
                                become panicky. It may not have an adequate sense of responsibility to
                                its stockholders...&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">Does the company have a management of unquestionable integrity?</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;Any investment may still be considered interesting
                                if it falls down in regard to almost any other one of the fifteen points
                                which have now been covered, but rates an unusually high score in
                                regard to all the rest. Regardless of how high the rating may be in all
                                other matters, however, if there is a serious question of the lack of a
                                strong management sense of trusteeship for stockholders, the investor
                                should never seriously consider participating in such an enterprise.&quot;
                            </blockquote>
                         </li>
                    </ul>
                </div>
            </div>

            <h2 className="scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight mt-8">Additional Knowledge: </h2>
            <Card className="mt-5">
            <CardHeader>
                <CardTitle>Dividends: </CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic">
                    &quot;It is possible that by spending earnings not
                    as dividends but to build a new plant, to launch a new product line, or
                    to install some major cost-saving equipment in an old plant, the management
                    might have been doing much more to benefit the stockholder
                    than it would have been doing just by passing these earnings out as dividends.&quot;
                </blockquote>
            </CardContent>
            <CardHeader>
                <CardTitle>Diversification: </CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic">
                    &quot;The horrors of what can happen to those who
                    “put all their eggs in one basket” are too constantly being expounded.
                    Too few people, however, give sufficient thought to the evils of the
                    other extreme. This is the disadvantage of having eggs in so many baskets
                    that a lot of the eggs do not end up in really attractive baskets, and
                    it is impossible to keep watching all the baskets after the eggs get put
                    into them.&quot;
                </blockquote>
            </CardContent>
            </Card>   

            <div className="flex flex-col justify-center mt-8">
                <h6 className="scroll-m-20 border-b pb-3 text-xl font-semibold tracking-tight">Usefull Links: </h6>
                <div className="flex justify-evenly">
                    <Button variant="link">
                        <a href="https://www.compoundingquality.net/p/how-philip-fisher-selects-the-best" target="_blank">article english</a> <br />
                    </Button>
                    <Button variant="link">
                        <a href="https://varos.com.br/blog/artigo/quem-foi-philip-fisher" target="_blank">article ptbr</a>
                    </Button>
                    <Button variant="link">
                        <a href="https://www.youtube.com/watch?v=hyG6moy4LBA" target="_blank">Video Sumary</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
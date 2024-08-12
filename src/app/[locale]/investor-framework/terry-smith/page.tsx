import UsefulLinks from "@/app/[locale]/components/UsefulLinks"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';


export default function TerrySmithPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('terry-smith')  

    return (
        <div className="md:p-8 p-2 mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Terry Smith</CardTitle>
                    <CardDescription className="hover:underline">
                        <a href="https://www.fundsmith.co.uk/factsheet/" target="_blank">
                            { t('description') }
                        </a>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text mb-2">
                        { t('content') }
                    </p>
                </CardContent>
                <CardContent>
                    <h1 className="text-sm mb-2">{ t('content2.title') }</h1>
                    <p className="text-sm italic">
                        { t('content2.body') }
                    </p>
                </CardContent>
                <CardFooter>
                    <div className="">
                        <p className="italic p-1">{ t('footer.title') }</p>
                        <div className="flex gap-2">
                            <Button variant="outline">
                                <a href="#">{ t('footer.book1') }</a>
                            </Button>
                        </div>
                    </div>
                </CardFooter>
            </Card>  

            <div>   
                <div className="p-2 text-center md:text-left">
                    <h2 className="scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight first:mt-8">{ t('resume.title') }</h2>
                    <ul className="list-decimal mt-2 p-2">
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight">
                                { t('resume.p1.title') }
                            </h4>
                            <div className="mt-3 border-l-2 pl-6">
                                { t('resume.p1.p1') }
                                <ul className="list-decimal text-sm pl-4 mt-2">
                                    <li><strong>{ t('resume.p1.ul.roce.strong') }</strong>{ t('resume.p1.ul.roce.body') }</li>
                                    <li><strong>{ t('resume.p1.ul.gross-margin') }</strong></li>
                                    <li><strong>{ t('resume.p1.ul.profit-margin') }</strong></li>
                                    <li><strong>{ t('resume.p1.ul.convertion-rate.strong') }</strong>{ t('resume.p1.ul.convertion-rate.body') }</li>
                                    <li><strong>{ t('resume.p1.ul.laverage') }</strong></li>
                                    <li><strong>{ t('resume.p1.ul.interest-cover.strong') }</strong>{ t('resume.p1.ul.interest-cover.body') }</li>
                                </ul>
                            </div>
                            <div className="mt-3 border-l-2 pl-6">
                                { t('resume.p1.p2') }
                            </div>
                            <div className="mt-3 border-l-2 pl-6">
                                { t('resume.p1.p3') }
                            </div>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p1.q1') }&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p1.q2') }&quot;
                            </blockquote>
                            <div className="mt-3 border-l-2 pl-6">
                                { t('resume.p1.p4') }
                            </div>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">
                                { t('resume.p2.title') }
                            </h4>
                            <div className="mt-3 border-l-2 pl-6">
                                { t('resume.p2.p1') }
                            </div>
                            <div className="mt-3 border-l-2 pl-6">
                                { t('resume.p2.p2-p1') }
                                <strong>{ t('resume.p2.p2-formula') }</strong> 
                                { t('resume.p2.p2-p2') }
                            </div>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p2.q1') }&quot;
                            </blockquote>
                            <div className="mt-3 border-l-2 pl-6">
                                { t('resume.p2.p3') }
                            </div>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot; { t('resume.p2.q2') }&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p3.title') }</h4>
                            <div className="mt-3 border-l-2 pl-6">
                                { t('resume.p3.body') }
                            </div>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p4.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p4.q1') }&quot;
                            </blockquote>

                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p4.q2') }&quot;
                            </blockquote>
                            
                            <div className="mt-3 border-l-2 pl-6">
                                { t('resume.p4.p1') }
                            </div>

                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p4.q3') }&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p4.q4') }&quot;
                            </blockquote> 
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p4.q5') }&quot;

                                &quot;{ t('resume.p4.q6') }&quot;
                            </blockquote>  
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p4.q7') }&quot;
                            </blockquote>  
                        </li>
                    </ul>
                </div>
            </div>
            
            <h2 className="scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight mt-8 text-center">{ t('resume.addicional') }</h2>
            <Card className="mt-5">
            <CardHeader>
                <CardTitle className="text-center">{ t('resume.dividends') }</CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;{ t('resume.dividend-body') }&quot;
                </blockquote>
            </CardContent>
            <CardHeader>
                <CardTitle className="text-center">{ t('resume.diversification') }</CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;{ t('resume.diversification-body1') } <br />
                    { t('resume.diversification-body2') }
                    &quot;
                </blockquote>
            </CardContent>
            <CardHeader>
                <CardTitle className="text-center">{ t('resume.performance')}</CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;{ t('resume.performance-body') }&quot;
                </blockquote>
            </CardContent>
            <CardHeader>
                <CardTitle className="text-center">{ t('resume.buyback') }</CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;{ t('resume.buyback-body') }&quot;
                </blockquote>
            </CardContent>
            <CardHeader>
                <CardTitle className="text-center">{ t('resume.macro') }</CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;{ t('resume.macro-p1') }&quot; <br />

                    &quot;{ t('resume.macro-p2') }&quot;
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
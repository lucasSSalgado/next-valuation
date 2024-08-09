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
import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';  

export default function PhilipFisher({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('fisher')

    return (
        <div className="md:p-8 p-2 mx-auto">
            <Card>
            <CardHeader>
                <CardTitle>Philip Arthur Fisher</CardTitle>
                <CardDescription>{ t('description') }</CardDescription>
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
                    <div className="flex flex-col gap-2 md:flex-row">
                        <Button variant="outline" className="w-full">
                            <a className="text-wrap" href="#">{ t('footer.book1') }</a>
                        </Button>
                        <Button variant="outline">
                            <a className="text-wrap" href="#">{ t('footer.book2') }</a>
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
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                { t('resume.p1.q1') }
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                { t('resume.p1.q2') }
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">
                                { t('resume.p2.title') }
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                { t('resume.p2.q1') }
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p3.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">{ t('resume.p3.q1') }</blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">{ t('resume.p3.q2') }</blockquote>
                        </li>
                        {/* 4 */}
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p4.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">{ t('resume.p4.q1') }</blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p5.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">&quot;{ t('resume.p5.q1') }&quot;</blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p6.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p6.q1') }&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p6.q2') }&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p7.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p7.q1') }&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p7.q2') }&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p7.q3') }&quot;
                            </blockquote>
                        </li>
                        { /* 8 */ }
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p8.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p8.q1') }&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p9.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p9.q1') }&quot;
                            </blockquote>    
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p10.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p10.q1') }&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">
                                { t('resume.p11.title') }
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p11.q1') }&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p11.q2') }&quot;
                            </blockquote>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p11.q3') }&quot;
                            </blockquote>
                        </li>
                        {/* 12 */}
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p12.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p12.q1') }&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">
                                { t('resume.p13.title') }
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p13.q1') }&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">
                                { t('resume.p14.title') }
                            </h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p14.q1') }&quot;
                            </blockquote>
                        </li>
                        <li>
                            <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-3">{ t('resume.p15.title') }</h4>
                            <blockquote className="mt-3 border-l-2 pl-6 italic">
                                &quot;{ t('resume.p15.q1') }&quot;
                            </blockquote>
                         </li>
                    </ul>
                </div>
            </div>

            <h2 className="scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight mt-8 text-center">{ t('adicional-title') }</h2>
            <Card className="mt-5">
            <CardHeader>
                <CardTitle className="text-center">{ t('dividens-title') }</CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;{ t('dividens-body') }&quot;
                </blockquote>
            </CardContent>
            <CardHeader>
                <CardTitle className="text-center">{ t('diversification-title') }</CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
                    &quot;{ t('diversification-body') }&quot;
                </blockquote>
            </CardContent>
            </Card>   

            <Separator className="my-4"/>
            <UsefulLinks 
                articles={[
                    {
                        name: "Compounding Quality Article",
                        url: "https://www.compoundingquality.net/p/how-philip-fisher-selects-the-best"
                    },
                ]}
                videos={[
                    {
                        name: "The Swedish Investor Sumary",
                        url: "https://www.youtube.com/watch?v=hyG6moy4LBA"
                    }
                ]}
            />
        </div>
    )
}
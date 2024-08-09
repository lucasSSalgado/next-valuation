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


export default function PeterLynchPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('peter')

    return (
        <div className="md:p-8 p-2 mx-auto">
            <Card>
            <CardHeader>
                <CardTitle>Peter Lynch</CardTitle>
                <CardDescription className="hover:underline">
                    <a href="https://finance.yahoo.com/news/warren-buffett-shares-earn-whopping-102900347.html">
                        { t('description') }
                    </a>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text mb-2">
                    { t('content') }
                </p>
            </CardContent>
            <CardFooter>
                <div className="">
                    <p className="italic p-1">{ t('footer.title') }</p>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <Button variant="outline">
                            <a className="text-wrap" href="#">{ t('footer.book1') }</a>
                        </Button>
                        <Button variant="outline">
                            <a className="text-wrap" href="#">{ t('footer.book2') }</a>
                        </Button>
                    </div>
                </div>
            </CardFooter>
            </Card> 
            
            <Separator className="my-4"/>
            <h4 className="scroll-m-20 text-base font-semibold tracking-tight">{ t('comming') }</h4>
            <Separator className="my-4"/>  
        </div>
    )
}
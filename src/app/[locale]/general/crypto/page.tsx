import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';


export default function CryptoPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('crypto')

    return <div className="p-8 md:w-8/12 mx-auto w-11/12 text-primary">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{ t('title') }</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            { t('p1') }
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            { t('p2') }
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            { t('p3') }
        </p>

        <Separator className="my-4" />

        <div className="flex gap-4 mt-5 flex-wrap">
            <Card className="flex-1">
                <CardHeader>
                    <CardTitle>Nakamoto Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="italic text-sm">
                        { t('link1') } 
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" className="text-blue-500">
                        <a href="https://nakamotoportfolio.com/nakamoto/start" target="_blank">Nakamoto Portfolio</a>
                    </Button>
                </CardFooter>
            </Card>
            <Card className="flex-1">
                <CardHeader>
                    <CardTitle>Bitcoin is Hope</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="italic text-sm">
                        { t('link2') }
                    </p>
                </CardContent>
                <CardFooter>
                <Button variant="link" className="text-blue-500">
                        <a href="https://www.hope.com/" target="_blank">Bitcoin is Hope</a>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function ReaitPage({ params: { locale}  } : { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('reit')
    
    return (
        <div className="p-4 md:p-8 text-center md:text-left">
            <h2 className="text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{ t('title') }</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    { t('p1') }
                </p>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold mt-4 tracking-tight first:mt-0">{ t('title2') }</h2>
                <ul className="mt-4 list-disc px-4">
                    <li>
                        <p className="leading-7 [&:not(:first-child)]:mt-2">
                            { t('list.u1') }
                        </p>
                    </li>
                    <li>
                        <p className="leading-7 [&:not(:first-child)]:mt-2">
                            { t('list.u2') }
                        </p>
                    </li>
                    <li>
                        <p className="leading-7 [&:not(:first-child)]:mt-2">
                            { t('list.u3') }
                        </p>
                    </li>
                    <li>
                        <p className="leading-7 [&:not(:first-child)]:mt-2">
                            { t('list.u4') }
                        </p>
                    </li>
                </ul>
            </div>
            <Separator className="my-4" />
            <Card>
                <CardHeader>
                    <CardTitle>{ t('title3') }</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <a target="_blank" className="hover:underline" href={ t('list2.Link_0') }>{ t('list2.text_0') }</a>
                    <a target="_blank" className="hover:underline" href={ t('list2.Link_1') }>{ t('list2.text_1') }</a>
                    <a target="_blank" className="hover:underline" href={ t('list2.Link_2') }>{ t('list2.text_2') }</a>
                </CardContent>
            </Card>
        </div>
    )
}
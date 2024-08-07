import UsefulLinks from "@/app/[locale]/components/UsefulLinks";
import SalesForm from "./SalesForm";
import { Separator } from "@/components/ui/separator";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

export default function SalesComparationPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('sales-comparation')

    return (
        <div className="p-4 md:p-8 text-center md:text-left">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">{ t('title') }</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    { t('p1') }
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    { t('p2') }
                </p>
            </div>

            <SalesForm
                price_label={ t('form.price_label') }
                square_label={ t('form.square_label') }
                add_btn={ t('form.add_btn') }
                calculate_btn={ t('form.calculate_btn') }
                dialog_response={ t('dialog.response') }
            />
            <Separator className="my-4" />
            <UsefulLinks 
                articles={[
                    {
                        name: "Sales Comparation Investopidia",
                        url: "https://www.investopedia.com/terms/s/sales-comparison-approach.asp"
                    },
                    {
                       name: "Sales Comparation The Balance",
                       url: "https://www.thebalancemoney.com/sales-comparison-approach-in-real-estate-appraisal-2867363"
                    }
                ]}
            />
        </div>
    )
}
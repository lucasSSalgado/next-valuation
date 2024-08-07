import { Separator } from "@/components/ui/separator";
import IncomeForm from "./IncomeForm";
import UsefulLinks from "@/app/[locale]/components/UsefulLinks";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

export default function IncameValuationPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('income')

    return (
        <div className="p-4 md:p-8 text-center md:text-left">
            <h2 className="text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{ t('title') }</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    { t('p1') }
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    { t('p2') }
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    { t('p3') }
                </p>
            </div>

            <Separator className="my-4" />
            <IncomeForm
                income_label={ t('form.income_label') }
                risk_free_label={ t('form.risk_free_label') }
                risk_premiun_label={ t('form.risk_premiun_label') }
                growth_label={ t('form.growth_label') }
                vacancy_label={ t('form.vacancy_label') }
                price_label={ t('form.price_label') }
                submit={ t('form.submit') }

                dialog_title={ t('dialog.dialog_title') } 
                dialog_fair_value={ t('dialog.dialog_fair_value') } 
                dialog_price={ t('dialog.dialog_price') } 
                dialog_discount={ t('dialog.dialog_discount') } 
                dialog_quality={ t('dialog.dialog_quality') }
            />
            <Separator className="my-4" />

            <UsefulLinks 
                articles={[
                    {
                        name: "Income Approach Investopidia",
                        url: "https://www.investopedia.com/terms/i/income-approach.asp"
                    },
                ]}

            />
        </div>
    )
}
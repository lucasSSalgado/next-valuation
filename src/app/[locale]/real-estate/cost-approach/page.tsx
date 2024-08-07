import { Separator } from "@/components/ui/separator"
import CostForm from "./CostForm"
import UsefulLinks from "@/app/[locale]/components/UsefulLinks"
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

export default function CostApproachPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('cost-approach');

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
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    { t('p3') }
                </p>
            </div>
            <Separator className="my-4" />
            <CostForm 
                land_label={ t('form.land_label') }
                build_label={ t('form.build_label') }
                property_label={ t('form.property_label') }
                time_label={ t('form.time_label') }
                age_label={ t('form.age_label') }
                lifetime_label={ t('form.lifetime_label') }
                opportunity_label={ t('form.opportunity_label') }
                price_label={ t('form.price_label') }
                submit={ t('form.submit') }

                title={ t('dialog.title') }
                fair_value={ t('dialog.fair_value') }
                discount_label={ t('dialog.discount_label') }
                quality_label={ t('dialog.quality_label') }
            />
            <Separator className="my-4" />

            <UsefulLinks 
                articles={[
                    {
                        name: "Cost Approach Investopidia",
                        url: "https://www.investopedia.com/terms/c/cost-approach.asp"
                    },
                    {
                        name: "Cost Approach CFI",
                        url: "https://corporatefinanceinstitute.com/resources/valuation/cost-approach-real-estate/"
                    }
                ]}

            />
        </div>
    )
}
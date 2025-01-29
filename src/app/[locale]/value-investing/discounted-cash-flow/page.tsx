import { Separator } from "@/components/ui/separator";
import DiscountedForm from "./DiscountedForm";
import ValuationDescription from "../ValuationDescription";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

export default function DiscoutedCashPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('dcf')

    return (
        <div className="p-8 w-3/4">
            <ValuationDescription 
                title={ t('title') }
                formula={ t.raw('formula') }
                useCase={ t('use') }
                description={[
                    t('description.p1'),
                    t('description.p2'),
                    t('description.p3'),
                ]}
            />

            <Separator className="my-4" />
            <DiscountedForm
                eps_label={ t('form.eps_label') }
                fgrowth_label={ t('form.fgrowth_label') }
                fyears_label={ t('form.fyears_label') }
                sgrowth_label={ t('form.sgrowth_label') }
                syears_label={ t('form.syears_label') }
                stock_label={ t('form.stock_label') }
                discount_label={ t('form.discount_label') }
                btn={ t('form.btn') }
                dialog_title={ t('dialog.dialog_title') }
                dialog_value={ t('dialog.dialog_value') }
                dialog_discount={ t('dialog.dialog_discount') }
            />
        </div>
    )
}
import { Separator } from "@/components/ui/separator";
import LiquidationForm from "./LiquidationForm";
import ValuationDescription from "../ValuationDescription";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

export default function LiquidationValuePage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('liquidation');

    return (
        <div className="p-8 w-3/4">
            <ValuationDescription 
                title={t('title')}
                useCase={t('useCase')}
                formula={t.raw('formula')}
                description={[
                    t('description.p1'),
                    t('description.p2'),
                    t('description.p3'),
                ]}
            />
            <Separator className="my-4" />
            <LiquidationForm
                price_label={t('form.price_label')}
                number_label= {t('form.number_label')}
                cash_label= {t('form.cash_label')}
                book_label= {t('form.book_label')}
                discount_label= {t('form.discount_label')}
                liabilities_label= {t('form.liabilities_label')}
                submit= {t('form.submit')}

                dialog_title={t('dialog.dialog_title')}
                dialog_value={t('dialog.dialog_value')}
                dialog_discount={t('dialog.dialog_discount')}
            />
        </div>
    )
}
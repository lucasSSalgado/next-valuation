import { Separator } from "@/components/ui/separator";
import GordonForm from "./GordonForm";
import ValuationDescription from "../ValuationDescription";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

export default function GordonModelPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('gordon');

    return (
        <div className="p-8 w-3/4">
            <ValuationDescription
                title={t('title')}
                useCase={t('useCase')}
                formula={t.raw('formula')}
                description={[
                    t('description.p1'),
                ]}
            />
            <Separator className="my-4" />
            <GordonForm 
                stock_label={t('form.stock_label')}
                dividend_label={t('form.dividend_label')}
                growth_label={t('form.growth_label')}
                discount_label={t('form.discount_label')}
                submit={t('form.submit')}

                dialog_title={t('dialog.dialog_title')}
                dialog_value={t('dialog.dialog_value')}
                dialog_discount={t('dialog.dialog_discount')}
            />
        </div>
    )
}
/*
stock_label: string
dividend_label: string
growth_label: string
discount_label: string
submit: string
    */
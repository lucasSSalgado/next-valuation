import { Separator } from "@/components/ui/separator";
import GrahamForm from "./GrahamForm";
import ValuationDescription from "../ValuationDescription";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

export default function GrahamFormulaPAge({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('graham')

    return (
        <div className="p-8 w-3/4">

            <ValuationDescription 
                title={ t('title') }
                useCase={ t('useCase') }
                formula={ t('formula') }
                description={[
                    t('description.p1'),
                    t('description.p2'),
                    t('description.p3'),
                ]}
            />
            <Separator className="my-4" />
            <GrahamForm
                price_label={t('form.price_label')}
                eps_label={t('form.eps_label')}
                btv_label={t('form.btv_label')}
                submit={t('form.submit')}

                dialog_title={t('dialog.dialog_title')}
                dialog_value={t('dialog.dialog_value')}
                dialog_discount={t('dialog.dialog_discount')}
            />
        </div>
    )
}
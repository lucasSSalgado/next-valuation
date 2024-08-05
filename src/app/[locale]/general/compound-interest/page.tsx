import CompoundCalculatorForm from "./CompoundCalculatorForm"
import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';

export default function CompoundCalculator({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('compound');

    return <div className="md:p-8 p-4 md:w-3/4 mx-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
            { t('title') }
        </h2>

        <CompoundCalculatorForm
            month_label={t('month_label')}
            interest_label={t('interest_label')}
            time_label={t('time_label')}
            times_label={t('times_label')}
            monthly={t('monthly')}
            annually={t('annually')}
            calcular_btn={t('calcular_btn')}
            dialog_title={t('dialog_title')}
            final_value={t('final_value')}
            total_interest={t('total_interest')}
            total_cost={t('total_cost')}
        />
    </div>
}
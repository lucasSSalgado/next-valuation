import CompoundCalculatorForm from "./CompoundCalculatorForm"
import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';

export default function CompoundCalculator({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);

    const t = useTranslations('general.compound-interest');

    return <div className="md:p-8 p-4 md:w-3/4 mx-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
            {t('title')}
        </h2>

        <CompoundCalculatorForm />
    </div>
}
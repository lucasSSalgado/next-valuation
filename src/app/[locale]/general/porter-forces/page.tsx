import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function PoterPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('porter')

    return <div className="p-8 md:w-8/12 mx-auto w-11/12">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{ t('title') }</h2>
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
}
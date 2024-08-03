import { useTranslations } from "next-intl";
import BaggerCalculator from "./BaggerCalculator";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function BaggerPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('100bagger');

    return <div className="md:p-8 p-4 md:w-3/4 mx-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">{ t('title') }</h2>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            { t('p1') }
        </p>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            { t('p2') }
        </p>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            { t('p3_p1') }
            <a className="text-blue-700 text-wrap text-sm" href={t('p3_link1')}> { t('p3_link1_text') } </a>
            { t('p3_p2') } 
            <a className="text-blue-700 text-wrap text-sm" href={ t('p3_link2') }> { t('p3_link2_text') }</a> 
            { t('p3_p3') }
        </p>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            { t('p4') }
        </p>
        <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">
            { t('p5') }
        </p>

        <BaggerCalculator />
    </div>
}
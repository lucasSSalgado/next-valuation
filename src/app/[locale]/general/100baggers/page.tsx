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

        <BaggerCalculator 
            time_label={t('time_label')} 
            growth_label={t('growth_label')}
            pe_label={t('pe_label')}
            owner_label={t('owner_label')}
            track_label={t('track_label')}
            roe_label={t('roe_label')}
            average_growth_label={t('average_growth_label')}
            peg_label={t('peg_label')}
            buyback_label={t('buyback_label')}
            delute_label={t('delute_label')}
            moat_label={t('moat_label')}
            change_label={t('change_label')}
            margin_label={t('margin_label')}
            yes={t('yes')}
            no={t('no')}
            for_some_time={t('for_some_time')}
            buyback_option={t('buyback_option')}
            nomuch_option={t('nomuch_option')}
            more_less={t('more_less')}
            equivalent={t('equivalent')}
            no_aplicable={t('no_aplicable')}
            company_label={t('company_label')}
            undertand_label={t('undertand_label')}
            sales_roe_label={t('sales_roe_label')}
            submit={t('submit')}
            dialog_title={t('dialog_title')}
            dialog_result={t('dialog_result')}
            dialog_realistc={t('dialog_realistc')}
            good_lock={t('good_lock')}
            dialog_messages_1={t('dialog_messages_1')} 
            dialog_messages_2={t('dialog_messages_2')}
            dialog_messages_3={t('dialog_messages_3')}
            dialog_messages_4={t('dialog_messages_4')} 
        />
    </div>
}
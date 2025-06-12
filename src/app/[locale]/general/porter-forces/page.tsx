/* eslint-disable @next/next/no-img-element */
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import UsefulLinks from '../../components/UsefulLinks';

export default function PoterPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('porter')

    return <div className="p-8 md:w-8/12 mx-auto w-11/12 text-primary">
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
        <Separator className="my-4" />
        <img src={t('image')} alt="Porter Forces" width={1000} height={1000} />
        <Separator className="my-4" />
        <UsefulLinks articles={[
            { name: t('name_link1'), url: t('link1') }, 
            { name: t('name_link2'), url: t('link2') }
        ]} />
    </div>
}
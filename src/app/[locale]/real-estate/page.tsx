import { useTranslations } from "next-intl";
import UsefulLinks from "../components/UsefulLinks";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function RealEstatePAge({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('real-estate');

    return (
        <div className="p-8 md:w-8/12 mx-auto w-11/12 text-center md:text-left">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                { t('title') }
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
                { t('p1') }
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
                { t('p2') }
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
                { t('p3') }
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
                { t('p4') }
            </p>

            <UsefulLinks 
                articles={[
                    { name: "Comece aqui", url: "https://investindoemtijolos.com/"}
                ]}
            />
        </div>
    )
}
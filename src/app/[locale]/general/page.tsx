import { unstable_setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

export default function GeneralPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    redirect(`/${locale}/general/compound-interest`);
}
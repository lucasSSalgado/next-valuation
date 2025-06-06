import { redirect } from 'next/navigation';

export default function GeneralPage({params: {locale}} : {params: {locale: string}}) {
    redirect(`/${locale}/general/compound-interest`);
}
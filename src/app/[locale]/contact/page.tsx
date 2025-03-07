import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function ContactPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('contact');

    const githubLink = t('github').replace('GitHub: ', '');
    const linkedinLink = t('linkedin').replace('LinkedIn: ', '');

    return (
        <div className="md:p-8 p-4 md:w-3/4 mx-auto">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 md:text-left text-center">{ t('title') }</h2>
            <p className="mt-6 border-l-2 pl-6 italic text-center md:text-left">
                { t('p1') }
            </p>
            <Separator />
            <h4 className="mt-6 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-left text-center">{ t('contact-title') }</h4>
            <ul className="mt-6 border-l-2 pl-6 italic text-center md:text-left">
                <li><a target='_blank' className='hover:underline' href={ githubLink }>{ t('github') }</a></li>
                <li><a target='_blank' className='hover:underline' href={ linkedinLink }>{ t('linkedin') }</a></li>
                <li>{ t('email') }</li>
                <li>{ t('portfolio') }</li>
            </ul>
            <Separator />
            <h4 className="mt-6 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-left text-center">{ t('skills-title') }</h4>
            <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">{ t('languages') }</p>
            <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">{ t('time') }</p>
            <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">{ t('experience') }</p>
            <p className="mt-3 border-l-2 pl-6 italic text-center md:text-left">{ t('knowledge') }</p>
        </div>
    )
}
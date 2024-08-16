import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Home({params: {locale}} : {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('root');

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-foreground justify-between">
      <div className="p-8 md:w-8/12 mx-auto w-11/12">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{ t('title') }</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            { t('p1') }
        </p>

        <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-4">{ t('frameworks') }</h4>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            { t('p2') }
        </p>

        <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-4">{ t('calculators') }</h4>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            { t('p3') }
        </p>

        <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-4">{ t('crypto') }</h4>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            { t('p4') }
        </p>

        <h4 className="scroll-m-20 text-base font-semibold tracking-tight mt-4">{ t('next') }</h4>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            { t('p5') }
        </p>
      </div>
    </main>
  );
}

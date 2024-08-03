import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Home({params: {locale}} : {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('test');

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-foreground justify-between">
      <h1>{t('message')}</h1>;
    </main>
  );
}

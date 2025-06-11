import { useTranslations } from "next-intl";
import Lateralnav from "./Lateralnav";

export default function RealEstateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const t = useTranslations('lateralnav-geral')

    return (
        <main className="flex min-h-screen justify-between">
            <div className="w-11/12 flex text-secondary">
                <Lateralnav calculator={t('calculator')} porter={t('porter')} crypto={t('crypto')} graph={t('100')} />
                {children}
            </div>
        </main>
    )
}
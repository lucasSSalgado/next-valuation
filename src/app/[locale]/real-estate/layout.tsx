import { useTranslations } from "next-intl";
import Lateralnav from "./Lateralnav";

export default function RealEstateLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const t = useTranslations('lateralnav-real-estate')
    
    return (
        <main className="flex min-h-screen justify-between">
            <div className="w-11/12 flex">
                <Lateralnav sales={t('sales')} cost={t('cost')} income={t('income')} flip={t('flip')} reit={t('reit')} />
                {children}
            </div>
        </main>
    )
}
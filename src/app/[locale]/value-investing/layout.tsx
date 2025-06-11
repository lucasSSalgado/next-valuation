import { useTranslations } from "next-intl";
import Lateralnav from "./Lateralnav";

export default function ValueInvestingLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const t = useTranslations('lateralnav-value')
    
    return (
        <main className="flex min-h-screen justify-between">
            <div className="w-11/12 flex">
                <Lateralnav dcf={t('dcf')} gordon={t('gordon')} liquidation={t('liquidation')} graham={t('graham')} />
                {children}
            </div>
        </main>
    )
}
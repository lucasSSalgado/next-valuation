import FlipForm from "./FlipForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';


export default function FlipCalculatorPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('flip')

    return (
        <div className="p-4 md:p-8 text-center">
            <Card>
                <CardHeader>
                    <CardTitle>{ t('title') }</CardTitle>
                    <CardDescription>
                        { t('description') }
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{ t('content') }</p>
                </CardContent>
            </Card>

            <FlipForm 
                cash_label={ t('cash_label') }
                loan_label={ t('loan_label') }

                price_label={t('common_form.price_label')}
                sell_label={t('common_form.sell_label')}
                rehab_label={t('common_form.rehab_label')}
                documentation_label={t('common_form.documentation_label')}
                holding_label={t('common_form.holding_label')}
                buyer_comission_label={t('common_form.buyer_comission_label')}
                seller_comission_label={t('common_form.seller_comission_label')}
                discount_label={ t('common_form.discount_label') }
                fees_label={ t('common_form.fees_label') }
                option1_label={t('common_form.option1_label')}
                option2_label={t('common_form.option2_label')}
                time_label={t('common_form.time_label')}
                profit_label={t('common_form.profit_label')}
                submit={t('common_form.submit')}

                down_label={ t('loan_form.down_label') } 
                interest_label={ t('loan_form.interest_label') }
                years_label={ t('loan_form.years_label') }

                dialog_title={ t('dialog.dialog_title') }
                dialog_profit={ t('dialog.dialog_profit') }
                dialog_roi={ t('dialog.dialog_roi') }
                dialog_cash={ t('dialog.dialog_cash') }
                dialog_quality={ t('dialog.dialog_quality') }
            />
        </div>
    )
}
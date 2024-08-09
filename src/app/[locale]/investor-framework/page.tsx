import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function InvestorFrameworkPage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('investor')

    return (
        <div className="p-8 md:w-8/12 mx-auto w-11/12 text-center md:text-left">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{ t('title') }</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    { t('p1') }  
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    { t('p2') } <a href="#">contact us</a>
                </p>
 
                <Table className="mt-8 hidden md:block">
                    <TableCaption>{ t('table.title') }</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-medium">{ t('table.investor') }</TableHead>
                            <TableHead>{ t('table.style') }</TableHead>
                            <TableHead className="text-right">{ t('table.performance') }</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium"><Link className="hover:underline" href="/investor-framework/waffen-buffet">Waffen Buffet</Link></TableCell>
                            <TableCell>{ t('table.f-row.style') }</TableCell>
                            <TableCell className="text-right text-wrap">{ t('table.f-row.performance') }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium"><Link className="hover:underline" href="/investor-framework/philip-fisher">Philip A. Fisher</Link></TableCell>
                            <TableCell>{ t('table.s-row.style') }</TableCell>
                            <TableCell className="text-right">{ t('table.s-row.performance') }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium"><Link className="hover:underline" href="/investor-framework/peter-lynch">Peter Lynch</Link></TableCell>
                            <TableCell>{ t('table.t-row.style') }</TableCell>
                            <TableCell className="text-right">{ t('table.t-row.performance') }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium"><Link className="hover:underline" href="/investor-framework/terry-smith">Terry Smith</Link></TableCell>
                            <TableCell>{ t('table.q-row.style') }</TableCell>
                            <TableCell className="text-right">{ t('table.q-row.performance') }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
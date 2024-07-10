import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from "next/link";
  

export default function InvestorFrameworkPage() {
    return (
        <div className="p-8 w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Investor Framework</h2>
            <div className="mt-4">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Welcome to our comprehensive guide on the investment frameworks used by some of the worlds most renowned investors. 
                    This page serves as your gateway to understanding the meticulous strategies and criteria that legendary investors use to evaluate stocks. 
                    Drawing insights from their most influential books (or book about then), we break down the core principles that have guided their investment decisions
                    and led to their remarkable success.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Off course a lot of successful investor and manager will not enter that list, this is becouse not all of then leave behind techs, or have some
                    peculiar approuch that is not easy but in a framework like we intead to did here, but if you miss someone you can always <a href="#">contact us</a>
                </p>

                <Table className="mt-8">
                    <TableCaption>All investor coverage</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-medium">Investor</TableHead>
                            <TableHead>Strategy</TableHead>
                            <TableHead className="text-right">Performance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium"><Link className="hover:underline" href="/investor-framework/waffen-buffet">Waffen Buffet</Link></TableCell>
                            <TableCell>75% Value / 25% Quality</TableCell>
                            <TableCell className="text-right">19.8% annualize between 1965 and 2023</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium"><Link className="hover:underline" href="/investor-framework/philip-fisher">Philip A. Fisher</Link></TableCell>
                            <TableCell>Quality Investment</TableCell>
                            <TableCell className="text-right">Unknown</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium"><Link className="hover:underline" href="/investor-framework/peter-lynch">Peter Lynch</Link></TableCell>
                            <TableCell>Universal Style</TableCell>
                            <TableCell className="text-right">29.2% annualize between 1977 and 1990</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium"><Link className="hover:underline" href="/investor-framework/terry-smith">Terry Smith</Link></TableCell>
                            <TableCell>Quality Investment</TableCell>
                            <TableCell className="text-right">17% annualize between 2006 and 2023</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
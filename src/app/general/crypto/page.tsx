import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CryptoPage() {
    return <div className="p-8 md:w-8/12 mx-auto w-11/12">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Investing in Crypto</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            If someone tells you that they know how to properly value cryptocurrency assets, they are lying. If someone else tells you that assets without 
            cash flows have no value, they are lying too. It’s pretty obvious that some Germans in the Weimar Republic would have had a good reason to invest in 
            crypto, or my neighbors in Venezuela. The less property rights matter in a society, the more virtual scarcity matters for your well-being. In this scenario, 
            I would prefer an unconfiscable asset over the best cash flow in the world.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            Some people argue that crypto is good for failed states and criminals, but think about what it means to be a criminal now, what it meant to be a criminal in 
            the 1700s, or what it meant to be a criminal for the Soviets. The power to make monetary transactions without government permission is a legitimate demand. 
            Government control of currency, as practiced today, never existed before.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
            Anyway, if you think crypto can be of some utility, it has value. Here are some materials that can help you properly try to value them.
        </p>

        <Separator className="my-4" />

        <div className="flex gap-4 mt-5 flex-wrap">
            <Card className="flex-1">
                <CardHeader>
                    <CardTitle>Nakamoto Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="italic text-sm">
                        Offer a set of tools and models, everthing open source, to &quot;value&quot; bitcoin.
                        Some of them are: Bitcoins Schrödinger Model, The Nakamoto Gauntlet and many others. 
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" className="text-blue-500">
                        <a href="https://nakamotoportfolio.com/nakamoto/start" target="_blank">Nakamoto Portfolio</a>
                    </Button>
                </CardFooter>
            </Card>
            <Card className="flex-1">
                <CardHeader>
                    <CardTitle>Bitcoin is Hope</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="italic text-sm">
                        News, articles, podcasts and many other resources available in this site. 
                        Listen to one of the most evangeliser of bicoin today, Michael Saylor.
                    </p>
                </CardContent>
                <CardFooter>
                <Button variant="link" className="text-blue-500">
                        <a href="https://www.hope.com/" target="_blank">Bitcoin is Hope</a>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
}
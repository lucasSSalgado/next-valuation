import Lateralnav from "./Lateralnav";

export default function ValueInvestingLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex min-h-screen flex-items-center justify-between bg-zinc-100">
            <div className="w-11/12 flex">
                <Lateralnav />
                {children}
            </div>
        </main>
    )
}
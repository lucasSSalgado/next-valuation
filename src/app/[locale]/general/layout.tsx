import Lateralnav from "./Lateralnav";
export default function RealEstateLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex min-h-screen justify-between">
            <div className="w-11/12 flex">
                <Lateralnav />
                {children}
            </div>
        </main>
    )
}
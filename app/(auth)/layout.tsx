import type { Metadata } from "next";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main>
          <p className="text-white-1">First page</p>
         {children}   
         <p className="text-white-1">Last page</p>
        </main>
  );
}
                                    
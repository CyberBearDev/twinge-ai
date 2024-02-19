import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";


const IBMPlex = IBM_Plex_Sans({ 
   subsets: ["latin"],
   weight: ['200', '400', '500', '600', '700'],
   variable: '--font-ibm-plex'
});


export const metadata: Metadata = {
   title: "Twinge AI",
   description: "AI-aangedreven beeldgenerator",
};


export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ClerkProvider appearance={{
         variables: { colorPrimary: '#7857FF' }
      }}>
         <html lang="en">
            <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
               {children}
            </body>
         </html>
      </ClerkProvider>
   );
}

import type {Metadata} from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import BottomNav from "@/components/bottom-nav";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const spaceGrotesk = Space_Grotesk({subsets:['latin'],variable:'--font-heading'});

export const metadata: Metadata = {
  title: 'UNEB Master',
  description: 'Premium AI-powered UNEB learning platform',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans antialiased", inter.variable, spaceGrotesk.variable)} suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-background text-foreground pb-20 md:pb-0 safe-bottom">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="md:flex h-screen overflow-hidden">
            <main className="flex-1 h-full overflow-y-auto no-scrollbar md:p-6 w-full max-w-7xl mx-auto">
              {children}
            </main>
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

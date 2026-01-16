import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit as display font for modern/sporty look
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Vanessa Vaz Team | Consultoria Fitness de Alta Performance",
    description: "Transforme seu corpo e mente com a metodologia Vanessa Vaz Team. Consultoria online personalizada.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <head>
                <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self';" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="referrer" content="strict-origin-when-cross-origin" />
            </head>
            <body className={cn(inter.variable, outfit.variable, "bg-background text-foreground font-sans antialiased")}>
                <Header />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

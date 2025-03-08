import "@/app/globals.css";

// Packages
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

// Local imports
import { auth } from "@/auth";
import AgeRestrictionGuard from "@/components/providers/AgeRestrictionGuard";
import AppProvider from "@/components/providers/AppProvider";
import NProgress from "@/components/providers/NProgress";
import Footer from "@/components/shared/footer/mainFooter/footer";
import NewsletterPage from "@/components/shared/footer/newsletter/newsletter";
import Navbar from "@/components/shared/header/mainHeader/navbar";
import SearchBerCategories from "@/components/shared/searchBerCategories/searchBerCategories";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "sonner";
import { ChatBot } from "@/components/chatbot/chat-bot";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pacific Rim Fusion",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();


  return (
    <SessionProvider session={session}>
      <AppProvider>
        <html lang="en" >
          <body className={cn("antialiased dark:bg-white",  inter.className)}>
            <ThemeProvider attribute="class" defaultTheme="light" >
            <div>
              <Navbar loggedin={!!session} />
            </div>
            <div>
            <SearchBerCategories />
            </div>
            <AgeRestrictionGuard>{children}</AgeRestrictionGuard>

            <div>
              <NewsletterPage />
              <Footer />
            </div>
            <NProgress />
            <Toaster />
            </ThemeProvider>
            {/* <CrispProvider /> */}
            <ChatBot/>
          </body>
        </html>
      </AppProvider>
    </SessionProvider>
  );
}

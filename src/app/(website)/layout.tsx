import "@/app/globals.css";
import { auth } from "@/auth";
import AgeRestrictionGuard from "@/components/providers/AgeRestrictionGuard";
import AppProvider from "@/components/providers/AppProvider";
import NProgress from "@/components/providers/NProgress";
import NewsletterPage from "@/components/shared/footer/newsletter/page";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

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
        <html lang="en">
          <body className={cn("antialiased", inter.className)}>
            {/* <div>
            <Navbar />
          </div> */}
            <AgeRestrictionGuard>{children}</AgeRestrictionGuard>

            <div>
              <NewsletterPage />
              {/* <Footer /> */}
            </div>
            <NProgress />
            <Toaster />
          </body>
        </html>
      </AppProvider>
    </SessionProvider>
  );
}

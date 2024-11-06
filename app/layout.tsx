import { EditorControls } from "@/components/EditorControls";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/ui/sidebar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Black.ttf", weight: "800" },
    { path: "./fonts/Satoshi-Bold.ttf", weight: "700" },
    { path: "./fonts/Satoshi-Medium.ttf", weight: "500" },
    { path: "./fonts/Satoshi-Regular.ttf", weight: "400" },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "SnipLab",
  description: "Create beautiful screenshots of your code.",
  openGraph: {
    description: "Create beautiful screenshots of your code.",
  },
  keywords: [
    "code snippets",
    "developer tools",
    "Next.js",
    "screenshot code",
    "snippet",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-main antialiased`}>
        <SidebarProvider>
          <EditorControls />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}

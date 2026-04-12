import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Love Calculator",
	description: "Find if the love of your life and you are a PAIR!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn("font-sans", inter.variable)}>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
				{children}
			</body>
		</html>
	);
}

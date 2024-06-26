// core styles are required for all packages
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "~/lib/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Auth",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript defaultColorScheme="auto" />
			</head>
			<body className={inter.className}>
				<MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
			</body>
		</html>
	);
}

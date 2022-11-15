import { Inter } from "@next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={inter.className}>
			<Layout>
				<Component {...pageProps} />
				<Analytics />
			</Layout>
		</div>
	);
}

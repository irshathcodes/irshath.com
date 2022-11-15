import { Inter } from "@next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={inter.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

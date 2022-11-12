import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://rsms.me/" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>
			<body className="transition-colors dark:bg-black-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

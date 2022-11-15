import Head from "next/head";

interface Props {
	title: string;
	description?: string;
	children: React.ReactNode;
}

export default function Container({
	title,
	description = "Developer who loves creating experience on the web",
	children,
}: Props) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			{children}
		</div>
	);
}

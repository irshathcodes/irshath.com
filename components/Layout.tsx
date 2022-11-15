import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<ThemeProvider attribute="class">
				<div className="mx-auto max-w-3xl lg:max-w-4xl">
					<Navbar />
					<main className="px-6 lg:px-0">{children}</main>
					<Footer />
				</div>
			</ThemeProvider>
		</>
	);
}

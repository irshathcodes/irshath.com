import useDarkMode from "@/hooks/useDarkMode";
import Navbar from "@/components/Navbar/Navbar";

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	const [darkMode] = useDarkMode();

	return (
		<>
			<div className="transition-colors dark:bg-black-900">
				<Navbar />
				<main>{children}</main>
			</div>
		</>
	);
}

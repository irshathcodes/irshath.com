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
				<div className="mx-auto max-w-3xl  lg:max-w-4xl">
					<Navbar />
					<main className="px-4">{children}</main>
				</div>
			</div>
		</>
	);
}

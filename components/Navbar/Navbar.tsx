import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";
import myLogo from "@/public/my-logo.png";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineMenuAlt4, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "next-themes";
import MobileNav from "./MobileNav";
import Link from "next/link";

const navLinks = [
	{ id: 1, name: "projects", url: "/projects" },
	{ id: 2, name: "blogs", url: "/blog" },
	{ id: 3, name: "about", url: "/about" },
	{ id: 4, name: "contact", url: "/#contact" },
];

export default function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [showNav, setShowNav] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	const router = useRouter();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (currentScrollPos > prevScrollPos) {
				setShowNav(false);
			} else {
				setShowNav(true);
			}

			setPrevScrollPos(currentScrollPos);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	return (
		<nav
			className={cn(
				"sticky top-0 mx-auto flex max-w-3xl items-center justify-between p-4 transition-transform dark:bg-black-900 lg:max-w-4xl	 lg:p-0 lg:py-4",
				{
					"translate-y-0": showNav,
					"-translate-y-20": !showNav,
				}
			)}
		>
			<Link
				href="/"
				className="rounded-full transition-all hover:ring hover:ring-gray-300 dark:hover:ring-gray-700"
			>
				<Image src={myLogo} alt="my logo" className="h-12 w-12" />
			</Link>

			<MobileNav
				navLinks={navLinks}
				showMobileMenu={showMobileMenu}
				setShowMobileMenu={setShowMobileMenu}
			/>

			<ul className="hidden gap-8 rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-black-800 shadow-lg shadow-black-800/5 ring-1 ring-black-900/5 backdrop-blur dark:bg-black-800/90 dark:text-zinc-200 dark:ring-white/10 sm:flex">
				{navLinks.map((link) => (
					<li
						key={link.id}
						className={cn(
							" capitalize  hover:text-teal-500  dark:hover:text-teal-400",
							{
								"text-teal-500 dark:text-teal-400": router.asPath === link.url,
								"text-gray-700 dark:text-gray-100": router.asPath !== link.url,
							}
						)}
					>
						<Link href={link.url}>{link.name}</Link>
					</li>
				))}
			</ul>

			<div className="flex items-center gap-4">
				{/* show theme toggle button only after the dom loaded */}
				{mounted && (
					<button
						type="button"
						className="relative  rounded-lg bg-gray-100 py-1 px-2 shadow-sm  active:outline-none dark:bg-black-700"
						onClick={() =>
							setTheme(resolvedTheme === "dark" ? "light" : "dark")
						}
					>
						<FiSun
							className="absolute top-1/2 left-1/2 inline-block h-4 w-4 -translate-y-1/2 -translate-x-1/2 rotate-90 text-gray-900  opacity-0 transition-all duration-300 dark:rotate-0  
							dark:text-gray-200 dark:opacity-100 "
						/>
						<FiMoon className="inline-block h-6 w-6 text-gray-900 opacity-100 transition-all duration-300  dark:rotate-90 dark:text-gray-200 dark:opacity-0" />
					</button>
				)}

				{/* Mobile hamburger menu */}
				<button
					type="button"
					className="sm:hidden"
					onClick={() => setShowMobileMenu(!showMobileMenu)}
				>
					<HiOutlineMenuAlt4 className="h-8 w-8 text-gray-700 dark:text-gray-300" />
				</button>
			</div>
		</nav>
	);
}

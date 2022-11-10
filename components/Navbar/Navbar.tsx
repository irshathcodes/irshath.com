import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import myLogo from "@/public/my-logo.png";
import { FiMoon } from "react-icons/fi";
import { HiOutlineMenuAlt4, HiOutlineSun } from "react-icons/hi";
import useDarkMode from "@/hooks/useDarkMode";
import MobileNav from "./MobileNav";
import Link from "next/link";

const navLinks = [
	{ id: 1, name: "projects", url: "/projects" },
	{ id: 2, name: "blogs", url: "/blogs" },
	{ id: 3, name: "about", url: "/about" },
	{ id: 4, name: "contact", url: "/contact" },
];

const iconStyles =
	"w-6 h-6 inline-block dark:text-gray-200	  rotate-90 transition-all duration-300 opacity-0";

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const [darkMode, setDarkMode] = useDarkMode();

	return (
		<nav
			className={` flex justify-between dark:bg-black-900  mx-auto max-w-2xl lg:max-w-5xl	 items-center p-4 `}
		>
			<div>
				<Image src={myLogo} alt="my logo" className="w-12 h-12" />
			</div>

			<MobileNav
				navLinks={navLinks}
				showMenu={showMenu}
				setShowMenu={setShowMenu}
			/>
			<ul className="hidden sm:flex gap-8 rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-black-800 shadow-lg shadow-black-800/5 ring-1 ring-black-900/5 backdrop-blur dark:bg-black-800/90 dark:text-zinc-200 dark:ring-white/10">
				{navLinks.map((link) => (
					<li
						key={link.id}
						className=" text-gray-700 transition-all duration-300 hover:text-teal-500 dark:hover:text-teal-400 dark:text-gray-100 capitalize"
					>
						<Link href={link.url}>{link.name}</Link>
					</li>
				))}
			</ul>

			<div className="flex gap-4 items-center">
				<button
					type="button"
					className="relative bg-gray-100 dark:bg-black-700 shadow-sm active:outline-none py-1 px-2 rounded-lg"
					onClick={() => setDarkMode(!darkMode)}
				>
					<HiOutlineSun
						className={cn(iconStyles, "absolute", {
							"opacity-100 rotate-0": darkMode,
						})}
					/>
					<FiMoon
						className={cn(iconStyles, {
							"opacity-100 rotate-0": !darkMode,
						})}
					/>
				</button>

				<button
					type="button"
					className="sm:hidden"
					onClick={() => setShowMenu(!showMenu)}
				>
					<HiOutlineMenuAlt4 className="w-8 h-8 text-gray-700 dark:text-gray-300" />
				</button>
			</div>
		</nav>
	);
}

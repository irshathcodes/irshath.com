import React from "react";
import { FiX } from "react-icons/fi";
import cn from "classnames";
import Link from "next/link";

interface Props {
	navLinks: { id: number; name: string; url: string }[];
	showMenu: boolean;
	setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ navLinks, showMenu, setShowMenu }: Props) {
	return (
		<>
			<div
				className={`inset-0 sm:hidden block fixed transition-all backdrop-blur-sm ${
					showMenu ? "z-40 bg-black-800/40" : "-z-40"
				}`}
				onClick={() => setShowMenu(false)}
			></div>
			<div
				className={cn(
					"fixed rounded-2xl transition-all duration-300 inset-x-4 -translate-y-100 scale-0 top-4 opacity-0  sm:hidden  z-50 p-8  bg-white dark:bg-zinc-800",
					{
						"opacity-100 translate-y-0 scale-100": showMenu,
					}
				)}
			>
				<div className="flex justify-between mb-8">
					<h3 className="font-semibold text-xl dark:text-gray-300 text-gray-600">
						Navigation
					</h3>
					<button
						className="active:ring-2 px-1 active:ring-gray-400 transition-shadow duration-300 rounded "
						onClick={() => setShowMenu(false)}
					>
						<FiX className="w-6 h-6 dark:text-gray-300" />
					</button>
				</div>
				<ul className="divide-y dark:divide-gray-600">
					{navLinks.map((link) => (
						<Link href={link.url} className="block">
							<li
								key={link.id}
								className="text-gray-700 w-full dark:text-gray-300 active:bg-gray-100 active:rounded-md dark:active:bg-gray-600 font-medium capitalize tracking-tight  text-lg py-2"
							>
								{link.name}
							</li>
						</Link>
					))}
				</ul>
			</div>
		</>
	);
}

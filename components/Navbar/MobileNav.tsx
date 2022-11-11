import React from "react";
import { FiX } from "react-icons/fi";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
	navLinks: { id: number; name: string; url: string }[];
	showMobileMenu: boolean;
	setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({
	navLinks,
	showMobileMenu,
	setShowMobileMenu,
}: Props) {
	const router = useRouter();

	return (
		<>
			<div
				className={cn(
					"fixed inset-0 h-screen backdrop-blur-sm transition-all sm:hidden",
					{
						"z-40 bg-black-800/40": showMobileMenu,
						hidden: !showMobileMenu,
					}
				)}
				onClick={() => setShowMobileMenu(false)}
			></div>

			<div
				className={cn(
					"-translate-y-100 fixed inset-x-4 top-8 z-50  scale-0 rounded-2xl bg-white  p-8  opacity-0 transition-all  duration-300 dark:bg-zinc-800 sm:hidden",
					{
						"translate-y-0 scale-100 opacity-100": showMobileMenu,
					}
				)}
			>
				<div className="mb-8 flex justify-between">
					<h3 className="font-semibold text-gray-600 dark:text-gray-300">
						Navigation
					</h3>
					<button
						className="rounded px-1 transition-shadow duration-300 active:ring-2 active:ring-gray-400 "
						onClick={() => setShowMobileMenu(false)}
					>
						<FiX className="h-5 w-5 dark:text-gray-300" />
					</button>
				</div>
				<ul className="divide-y dark:divide-gray-600">
					{navLinks.map((link) => (
						<Link
							href={link.url}
							className="block"
							key={link.id}
							onClick={() => setShowMobileMenu(false)}
						>
							<li
								className={cn(
									"w-full py-2 text-lg font-medium capitalize tracking-tight active:rounded-md active:bg-gray-100 dark:active:bg-gray-600",
									{
										"text-teal-500 dark:text-teal-400":
											router.pathname === link.url,
										"text-gray-700 dark:text-gray-300":
											router.pathname !== link.url,
									}
								)}
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

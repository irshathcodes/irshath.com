import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
	return (
		<footer className="mt-20 mr-2 flex flex-col items-center justify-between gap-8 border border-transparent border-t-gray-700/20 py-10 px-6 text-gray-600 dark:border-t-gray-400/20 dark:text-gray-300 sm:flex-row sm:gap-0 lg:px-0">
			<div className="space-y-2">
				<p>Built with Next JS</p>
				<p>
					Design inspired by{" "}
					<a
						href="https://spotlight.tailwindui.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-teal-500"
					>
						TailwindUI Template
					</a>
				</p>
			</div>

			<div className="flex items-center gap-4">
				<a
					href="https://github.com/irshathcodes"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:brightness-125 active:brightness-75"
				>
					<AiFillGithub className="h-7 w-7" />
				</a>
				<a
					href="https://twitter.com/irshathcodes"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:brightness-125 active:brightness-75"
				>
					<AiOutlineTwitter className="h-7 w-7" />
				</a>
				<a
					href="https://www.linkedin.com/in/irshathcodes/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:brightness-125 active:brightness-75"
				>
					<AiFillLinkedin className="h-7 w-7" />
				</a>
			</div>
		</footer>
	);
}

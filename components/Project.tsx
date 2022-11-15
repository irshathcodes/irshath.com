import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

interface Props {
	id: number;
	name: string;
	description: string;
	tech: string;
	link: string;
	github: string;
}

export default function Project({
	name,
	description,
	tech,
	link,
	github,
}: Props) {
	return (
		<div className="custom-shadow my-8 rounded-2xl border p-6 transition-shadow duration-300 dark:border-gray-500/50 lg:my-0">
			<a href={link} target="_blank" rel="noopener noreferrer">
				<h3 className="mb-4 text-xl font-semibold tracking-tight first-letter:capitalize">
					{name}
				</h3>
				<p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
				<div className="mb-4 text-gray-700 dark:text-gray-200">
					Built with <span>{tech}</span>
				</div>
			</a>
			<div className="flex items-center justify-between gap-4">
				<a
					href={link}
					rel="noopener noreferrer"
					target="_blank"
					className="flex items-center gap-1 text-teal-500"
				>
					{/* show url only on larger screens */}
					<span className="hidden sm:inline-block">{link}</span>
					<span className="sm:hidden">Link</span>
					<HiExternalLink className="h-5 w-5 sm:hidden" />
				</a>
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:brightness-125 active:brightness-75"
				>
					<AiFillGithub className="h-7 w-7 text-gray-700 dark:text-gray-300" />
				</a>
			</div>
		</div>
	);
}

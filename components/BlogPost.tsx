import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
	title: string;
	excerpt: string;
	date: string;
	slug: string;
}

export default function BlogPost({ title, excerpt, date, slug }: Props) {
	return (
		<article className="w-fit rounded-md py-6 transition-colors lg:grid lg:grid-cols-[200px_1fr]">
			<div className="mb-4 border border-transparent border-l-gray-300 pl-2 dark:border-l-gray-800  lg:mb-0 lg:mt-6 lg:pl-4">
				<time className="text-sm text-gray-600 dark:text-gray-400 lg:text-base">
					{date}
				</time>
			</div>

			<Link href={`/blog/${slug}`}>
				<div className="rounded-xl transition-colors duration-300 lg:p-6 lg:hover:bg-black-200/70 lg:dark:hover:bg-black-800/40">
					<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
						{title}
					</h2>
					<p className="my-2 text-gray-600 dark:text-gray-400">{excerpt}</p>
					<div className="mt-4 flex items-center font-medium text-teal-500 dark:text-teal-400">
						<span>Read post</span>
						<IoIosArrowRoundForward className="h-5 w-5" />
					</div>
				</div>
			</Link>
		</article>
	);
}

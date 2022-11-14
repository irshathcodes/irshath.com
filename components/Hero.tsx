import Link from "next/link";

const buttonStyles =
	"my-4 rounded-md px-4 py-1 text-lg  font-medium capitalize ring-1 inline-block  ring-gray-900 transition-all duration-300  hover:scale-105 hover:shadow  hover:shadow-teal-500 active:scale-90 dark:text-gray-300  dark:ring-gray-600";

export default function Hero() {
	return (
		<section className="mb-24 mt-16 md:mt-20">
			<h1 className="text-4xl font-extrabold capitalize tracking-tight text-gray-800 dark:text-gray-200 sm:text-6xl">
				<span className="block pb-2">hi,</span>
				<span className="block pb-2">i'm irshath</span>
				<span className="block pb-1">web developer</span>
			</h1>
			<p className="py-4 text-left text-xl font-medium text-gray-600 dark:text-gray-400 sm:text-xl">
				Love to create experience on the web.
			</p>
			<div className="space-x-4">
				<Link href="/#contact" className={buttonStyles} scroll={false}>
					contact me
				</Link>
				<button className={buttonStyles}>resume</button>
			</div>
		</section>
	);
}

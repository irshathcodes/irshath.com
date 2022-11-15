import BlogPost from "@/components/BlogPost";
import type { Posts } from "@/lib/types";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface Props {
	posts: Posts;
}

export default function BlogOverview({ posts }: Props) {
	const featuredPosts = posts.slice(0, 2);
	return (
		<div className="mb-10">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
					Features Blogs
				</h1>
			</div>

			<div className="my-4 lg:my-0">
				{featuredPosts.map(({ slug, frontmatter }) => {
					const { title, excerpt, date } = frontmatter;

					return (
						<BlogPost
							key={slug}
							title={title}
							excerpt={excerpt}
							date={date}
							slug={slug}
						/>
					);
				})}
				<Link
					href="/blog"
					className="my-2 flex items-center gap-1 capitalize text-gray-800 hover:brightness-125 active:brightness-75 dark:text-gray-300"
				>
					<span>See all blogs</span>
					<HiOutlineArrowNarrowRight className="h-5 w-5" />
				</Link>
			</div>
		</div>
	);
}

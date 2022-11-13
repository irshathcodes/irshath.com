import BlogPost from "./BlogPost";
import type { Posts } from "@/lib/types";

interface Props {
	posts: Posts;
}

export default function BlogOverview({ posts }: Props) {
	const featuredPosts = posts.slice(0, 2);
	return (
		<div>
			<h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
				Features Blogs
			</h1>

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
		</div>
	);
}

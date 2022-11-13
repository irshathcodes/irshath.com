import { InferGetStaticPropsType } from "next";
import getPosts from "@/utils/getPosts";
import BlogPost from "@/components/BlogPost";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ posts }: Props) {
	return (
		<div className="my-8">
			<h1 className="my-8 text-3xl font-bold text-gray-800 dark:text-gray-200">
				All Posts
			</h1>
			{posts.map(({ slug, frontmatter }) => {
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

export const getStaticProps = async () => {
	const posts = getPosts();

	return {
		props: { posts },
	};
};

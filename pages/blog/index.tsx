import { InferGetStaticPropsType } from "next";
import getPosts from "@/utils/getPosts";
import BlogPost from "@/components/BlogPost";
import Container from "@/components/Container";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ posts }: Props) {
	return (
		<Container
			title="Blog - Irshath Codes"
			description="Blogs mostly about how to do stuff in javascript"
		>
			<div className="my-8">
				<h1 className="heading-styles my-8">All Posts</h1>
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
		</Container>
	);
}

export const getStaticProps = async () => {
	const posts = getPosts();

	return {
		props: { posts },
	};
};

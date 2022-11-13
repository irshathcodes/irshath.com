import { InferGetStaticPropsType } from "next";
import Hero from "@/components/Hero";
import BlogOverview from "@/components/BlogOverview";
import getPosts from "@/utils/getPosts";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home(props: Props) {
	return (
		<>
			<Hero />
			<BlogOverview posts={props.posts} />
		</>
	);
}

export const getStaticProps = async () => {
	const posts = getPosts();

	return {
		props: { posts },
	};
};

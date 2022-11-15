import Link from "next/link";
import { InferGetStaticPropsType } from "next";
import Hero from "@/components/Hero";
import BlogOverview from "@/components/BlogOverview";
import getPosts from "@/utils/getPosts";
import Contact from "@/components/Contact";
import Container from "@/components/Container";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home(props: Props) {
	return (
		<Container title="Irshath Codes - Web Developer">
			<Hero />
			<BlogOverview posts={props.posts} />
			<Contact />

			<h1 className="my-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
				Want to know more?{" "}
			</h1>
			<p className="prose mb-8 text-lg text-gray-700 prose-a:font-bold prose-a:text-teal-500 dark:prose-invert dark:text-gray-300">
				You can read my <Link href="/blog">blog</Link>, look at my{" "}
				<Link href="/projects">projects</Link>, or learn more{" "}
				<Link href="about">about</Link> me.
			</p>
		</Container>
	);
}

export const getStaticProps = async () => {
	const posts = getPosts();

	return {
		props: { posts },
	};
};

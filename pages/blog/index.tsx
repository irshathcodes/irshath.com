import { InferGetStaticPropsType } from "next";
import getPosts from "@/utils/getPosts";

export const getStaticProps = async () => {
	const posts = getPosts();

	return {
		props: { posts },
	};
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Blog({ posts }: Props) {
	return <div>blog</div>;
}

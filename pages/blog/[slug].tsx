import fs from "fs";
import path from "path";
import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from "next";
import getSinglePost from "@/utils/getSinglePost";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useRouter } from "next/router";
import Container from "@/components/Container";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ frontmatter, content }: Props) {
	const router = useRouter();
	const { title, date, excerpt } = frontmatter;

	return (
		<Container title={title} description={excerpt}>
			<button
				type="button"
				onClick={() => router.back()}
				className="mt-4  w-fit rounded-md bg-gray-200/70 p-2 ring-teal-600 active:ring dark:bg-gray-700/70 lg:absolute lg:mt-0"
			>
				<HiOutlineArrowSmLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
			</button>
			<div className="prose prose-slate mx-auto w-full p-2 prose-a:text-blue-600 dark:prose-invert lg:mt-12  lg:p-0">
				<div className=" my-4 border border-transparent border-l-gray-300 pl-2   dark:border-l-gray-800">
					<time className="text-sm text-gray-600 dark:text-gray-400 lg:text-base">
						{date}
					</time>
				</div>
				<h1>{title}</h1>
				<p>{excerpt}</p>

				<article dangerouslySetInnerHTML={{ __html: content }}></article>
			</div>
		</Container>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync(path.join("blog-posts"));

	const paths = files.map((filename) => {
		const slug = filename.replace(".md", "");
		return {
			params: {
				slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const slug = context.params?.slug as string;
	const post = await getSinglePost(slug);

	return {
		props: post,
	};
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Posts } from "@/lib/types";

export default function getPosts() {
	const postsDir = "blog-posts";

	const files = fs.readdirSync(postsDir);

	const posts = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join(postsDir, filename),
			"utf-8"
		);

		const slug = filename.replace(".md", "");
		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	// sort by recent posts
	posts.sort((a, b) => {
		return (
			new Date(b.frontmatter.date).valueOf() -
			new Date(a.frontmatter.date).valueOf()
		);
	});

	return posts as Posts;
}

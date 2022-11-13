export interface Post {
	slug: string;
	frontmatter: {
		title: string;
		date: string;
		excerpt: string;
	};
	content: string;
}

export type Posts = Omit<Post, "content">[];

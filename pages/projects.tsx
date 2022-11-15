import projects from "../data/projects.json";
import Project from "@/components/Project";
import Container from "@/components/Container";

export default function Projects() {
	return (
		<Container
			title="Projects - Irshath Codes"
			description="I've created some simple projects to learn web development, you can see them live. source code is available on github!"
		>
			<h1 className="heading-styles mt-10 mb-4">Projects</h1>
			<p className="mb-4 text-gray-700 dark:text-gray-300">
				I&apos;ve created some simple projects to learn web development, you can
				see them live. source code is available on github!
			</p>

			<div className="mb-20 mt-12 lg:grid lg:grid-cols-2 lg:gap-8">
				{projects.map((project) => (
					<Project key={project.id} {...project} />
				))}
			</div>
		</Container>
	);
}

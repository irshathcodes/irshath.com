import projects from "../data/projects.json";
import Project from "@/components/Project";

export default function Projects() {
	return (
		<div>
			<h1 className="mt-10 mb-4 text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
				Projects
			</h1>
			<p className="mb-4 text-gray-700 dark:text-gray-300">
				I've created some simple projects to learn web development, you can see
				them live. source code is available on github!
			</p>

			<div className="mb-20 mt-12 lg:grid lg:grid-cols-2 lg:gap-8">
				{projects.map((project) => (
					<Project key={project.id} {...project} />
				))}
			</div>
		</div>
	);
}

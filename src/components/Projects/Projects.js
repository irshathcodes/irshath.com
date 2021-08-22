import data from "./projectData";
import Project from "./Project";
const Projects = () => {
	return (
		<>
			<section className="project-container" id="projects">
				<h1 className="heading">Projects</h1>
				<div className="underline"></div>
				<main>
					{data.map((item) => {
						return <Project key={item.id} {...item} />;
					})}
				</main>
			</section>
		</>
	);
};

export default Projects;

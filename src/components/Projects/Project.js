import { IoIosRocket } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { Slide } from "react-awesome-reveal";

const Project = ({ img, name, description, websiteLink, githubLink, tech }) => {
	return (
		<>
			<Slide>
				<div className="project-item-container">
					<div
						className="project-bg-container"
						style={{
							background: `url(${img})`,
							backgroundSize: "cover",
							backgroundPosition: "top",
							objectFit: "cover",
							backgroundRepeat: "no-repeat",
							borderTopLeftRadius: "1rem",
							borderTopRightRadius: "1rem",
						}}
					>
						<div className="hover-elements-container">
							<div className="project-tech">
								TECH: <span className="tech">{tech}</span>
							</div>
							<a
								href={websiteLink}
								target="_blank"
								rel="noopener noreferrer"
								className="rocket-icon-container"
							>
								<IoIosRocket className="rocket-icon pulse" />
							</a>
						</div>
					</div>
					<div className="project-flex-container">
						<div>
							<div className="project-name">
								<a href={websiteLink} target="_blank" rel="noopener noreferrer">
									{name}
								</a>
							</div>
							<div className="project-description">{description}</div>
						</div>
						<a href={githubLink} target="_blank" rel="noopener noreferrer">
							<AiFillGithub className="project-github-icon" />
						</a>
					</div>
				</div>
			</Slide>
		</>
	);
};

export default Project;

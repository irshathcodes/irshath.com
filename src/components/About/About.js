import { GoLocation } from "react-icons/go";
import aboutSvg from "../../assets/about-svg.png";
import irshathresume from "../../assets/irsathresume.pdf";
import { Fade, Roll } from "react-awesome-reveal";

const About = () => {
	return (
		<>
			<div className="about-container" id="about">
				<div className="flex-1">
					<Fade cascade damping={0.2} triggerOnce>
						<h1 className="heading about-heading">About</h1>
						<div className="underline" style={{ width: "4rem" }}></div>
						<p className="about-me">
							Hello World 👋, I am a Web Developer. Passionate to create
							experiences on web. It all started when I was in final year of my
							college. I always wonder how the web works so I started learning
							web development, eventually it turns out to be my passion. After
							learning the basics of HTML, CSS, Vanilla JavaScript, I chose
							React Js for creating UI. I constantly grind myself to become a
							full stack developer.
						</p>
						<div>
							<GoLocation className="location-icon" />
							<span
								style={{
									marginLeft: "0.5rem",
								}}
							>
								Chennai, TamilNadu, India
							</span>
						</div>
						<a href={irshathresume} download="mohammed-irsath-resume">
							<div className="about-btn-container">
								<button className="about-cv">Curriculum Vitae</button>
							</div>
						</a>
					</Fade>
				</div>
				<Roll>
					<div className="flex-2">
						<img src={aboutSvg} alt="aboutSvg" className="about-svg" />
					</div>
				</Roll>
			</div>
		</>
	);
};

export default About;

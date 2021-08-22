import { useState, useRef } from "react";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import irshathresume from "../../assets/irsathresume.pdf";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "./NavBar";
import { Zoom, Fade } from "react-awesome-reveal";

const Header = () => {
	const [navToggle, setnavToggle] = useState(false);
	const hamburgerRef = useRef(null);

	return (
		<>
			<header>
				<NavBar
					navToggle={navToggle}
					setNavToggle={setnavToggle}
					hamburgerRef={hamburgerRef}
				/>
				<div className="header-container">
					<Fade triggerOnce>
						<h4 className="greet">Hi,</h4>
					</Fade>
					<Zoom direction="down" cascade delay={500} triggerOnce>
						<h1 className="name">
							I am <span className="my-name">Mohammed Irshath</span>
						</h1>
					</Zoom>
					<Fade cascade delay={1500} triggerOnce>
						<h4 className="designation">Web App Developer</h4>
						<p className="slogan">Love to create experiences on web</p>
					</Fade>

					<div className="header-btn-container">
						<Fade delay={2000} triggerOnce>
							<HashLink
								to="/#contact"
								smooth
								scroll={(el) => scrollWithOffset(el, -25)}
							>
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="header-btn ripple"
								>
									Contact Me
								</motion.button>
							</HashLink>
							<a href={irshathresume} download="mohammed-irsath-resume">
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="header-btn ripple"
								>
									Resume
								</motion.button>
							</a>
						</Fade>
					</div>
					<div
						className="hamburger-container"
						onClick={() => {
							setnavToggle((prevState) => !prevState);
						}}
						ref={hamburgerRef}
					>
						<div className={`line top ${navToggle && "line-1"}`}></div>
						<div className={`line ${navToggle && "line-2"}`}></div>
						<div className={`line bottom ${navToggle && "line-3"}`}></div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;

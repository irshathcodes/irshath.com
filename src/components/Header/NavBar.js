import { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const navNames = [
	{
		id: 1,
		name: "Home",
		link: "/#",
		offset: 0,
	},
	{
		id: 2,
		name: "Projects",
		link: "/#projects",
		offset: -25,
	},
	{
		id: 3,
		name: "About",
		link: "/#about",
		offset: 0,
	},
	{
		id: 4,
		name: "Contact",
		link: "/#contact",
		offset: -25,
	},
];

export const scrollWithOffset = (el, offset) => {
	const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
	const yOffset = offset;
	window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

function useOutsideAlerter(ref, handler, hamburgerRef) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (
				!hamburgerRef.current.contains(event.target) &&
				ref.current &&
				!ref.current.contains(event.target)
			) {
				handler();
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
		// eslint-disable-next-line
	}, [ref]);
}

const NavBar = ({ navToggle, setNavToggle, hamburgerRef }) => {
	const navRef = useRef(null);

	const handler = () => {
		setNavToggle(false);
	};

	useOutsideAlerter(navRef, handler, hamburgerRef);

	const NavItems = ({ name, link, offset }) => {
		return (
			<>
				<motion.li
					whileHover={{ scale: 1.5 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setNavToggle(false)}
				>
					<HashLink
						to={link}
						smooth
						scroll={(el) => scrollWithOffset(el, offset)}
					>
						{name}
					</HashLink>
				</motion.li>
			</>
		);
	};

	return (
		<nav className={navToggle ? "show-nav" : null} ref={navRef}>
			<Fade cascade damping={0.1}>
				<ul>
					{navNames.map((item) => {
						return <NavItems key={item.id} {...item} />;
					})}
				</ul>
			</Fade>

			<div className="social-icons">
				<a
					className="github-icon"
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/mdirshath"
				>
					<AiFillGithub />
				</a>
				<a
					className="linkedin-icon"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/mdirshath/"
				>
					<FaLinkedinIn />
				</a>
				<a
					className="twitter-icon"
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/mdirshath23"
				>
					<AiOutlineTwitter />
				</a>
			</div>
		</nav>
	);
};

export default NavBar;

const Footer = () => {
	const footerLinks = [
		{
			id: 1,
			name: "Github",
			link: "https://github.com/mohammedirsath",
		},
		{
			id: 2,
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/mohammed-irsath-106736204/",
		},
		{
			id: 3,
			name: "Twitter",
			link: "https://twitter.com/irshath23",
		},
	];

	const FooterLinks = ({ name, link }) => {
		return (
			<>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="footer-links"
				>
					{name}
				</a>
			</>
		);
	};
	return (
		<>
			<footer>
				<div className="footer-links-container">
					{footerLinks.map((links) => {
						return <FooterLinks key={links.id} {...links} />;
					})}
				</div>
				<div className="footer-end-words">
					&copy;{new Date().getFullYear().toString()} Mohammed Irshath. All
					right reserved
				</div>
			</footer>
		</>
	);
};

export default Footer;

import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinkStyles =
	"w-fit my-4 text-lg flex items-center gap-2 text-gray-800 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-500";

export default function Contact() {
	return (
		<section className="my-20" id="contact">
			<h1 className="my-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
				Contact
			</h1>
			<p className="mb-5 text-lg text-gray-700 dark:text-gray-400">
				You can contact me through email, or hit me a DM on one of my socials.{" "}
			</p>

			<a
				href="mailto:irshath700@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
				className={socialLinkStyles}
			>
				<MdEmail className="h-5 w-5" />
				<span>irshath700@gmail.com</span>
			</a>
			<a
				href="https://twitter.com/irshathcodes"
				target="_blank"
				rel="noopener noreferrer"
				className={socialLinkStyles}
			>
				<FaTwitter className="h-5 w-5" />
				<span>@irshathcodes</span>
			</a>

			<a
				href="https://www.linkedin.com/in/irshathcodes/"
				target="_blank"
				rel="noopener noreferrer"
				className={socialLinkStyles}
			>
				<FaLinkedin className="h-5 w-5" />
				<span>Mohammed Irshath</span>
			</a>
		</section>
	);
}

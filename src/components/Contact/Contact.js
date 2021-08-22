import { useState, useEffect } from "react";
import contactPng from "../../assets/contact-us.png";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Fade, Roll, Zoom } from "react-awesome-reveal";

const Contact = () => {
	// Dynamic Labels state
	const [emailLabel, setEmailLabel] = useState("Email: ");
	const [phoneNoLabel, setPhoneNoLabel] = useState("Call/Whatsapp: ");

	//show/hide success Message
	const [showSentMessage, setShowSentMessage] = useState(true);

	// Formspree Api for sending Message
	const [state, handleSubmit] = useForm("xeqvpvpd");

	const emailId = "irshath700@gmail.com";
	const phoneNo = "+919600300630";

	useEffect(() => {
		const timeout = setTimeout(() => {
			setEmailLabel("Email: ");
			setPhoneNoLabel("Call/Whatsapp: ");
		}, 4000);
		return () => clearTimeout(timeout);
	}, [emailLabel, phoneNoLabel]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowSentMessage(false);
		}, 7000);

		return () => clearTimeout(timeout);
	}, [showSentMessage]);
	return (
		<>
			<div className="contact-container" id="contact">
				<div className="contact-flex-1">
					<Fade cascade damping={0.2} triggerOnce>
						<h1 className="heading contact-heading">Contact</h1>
						<div className="underline"></div>
						<div className="contact-details-container">
							<div className="email-label">{emailLabel}</div>
							<motion.div
								className="email-address"
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
								onMouseEnter={() => {
									setEmailLabel("click to copy");
								}}
								onMouseLeave={() => {
									setEmailLabel("Email: ");
								}}
								onClick={() => {
									navigator.clipboard.writeText(emailId);
									setEmailLabel("copied!");
								}}
							>
								{emailId}
							</motion.div>
							<div className="phone-no-label">{phoneNoLabel}</div>
							<motion.div
								className="phone-no"
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
								onMouseEnter={() => {
									setPhoneNoLabel("click to copy");
								}}
								onMouseLeave={() => {
									setPhoneNoLabel("Call/Whatsapp: ");
								}}
								onClick={() => {
									navigator.clipboard.writeText(phoneNo);
									setPhoneNoLabel("copied!");
								}}
							>
								{phoneNo}
							</motion.div>
						</div>
						<div style={{ padding: "1rem 0" }}>or</div>
					</Fade>
					<div>
						<Zoom>
							<form className="contact-form-container" onSubmit={handleSubmit}>
								<div className="form-heading">Send Me a Message</div>
								<div className="underline" style={{ marginBottom: "0" }}></div>
								<div className="each-form-container">
									<label htmlFor="name" className="label">
										Name
									</label>
									<input
										type="text"
										className="input"
										name="name"
										spellCheck="false"
										required
									/>
									<ValidationError
										prefix="Name"
										field="name"
										errors={state.errors}
									/>
								</div>
								<div className="each-form-container">
									<label htmlFor="email" className="label">
										Email
									</label>
									<input
										type="email"
										className="input"
										name="email"
										spellCheck="false"
										required
									/>
									<ValidationError
										prefix="Email"
										field="email"
										errors={state.errors}
									/>
								</div>
								<div className="each-form-container">
									<label htmlFor="message" className="label">
										Message
									</label>
									<textarea
										type="text"
										className="input message"
										name="message"
										spellCheck="false"
										required
									/>
									<ValidationError
										prefix="Message"
										field="message"
										errors={state.errors}
									/>
								</div>
								<div className="form-btn-container">
									<button
										type="submit"
										className="form-btn"
										disabled={state.submitting}
										onClick={() => {
											setShowSentMessage(true);
										}}
									>
										{state.submitting
											? "Sending..."
											: state.succeeded && showSentMessage
											? "Message Sent Successfully!"
											: "Send"}
									</button>
								</div>
							</form>
						</Zoom>
					</div>
				</div>
				<Roll>
					<div className="contact-flex-2">
						<img src={contactPng} alt="contact png" className="contact-png" />
					</div>
				</Roll>
			</div>
			<p
				style={{
					textAlign: "center",
					padding: "1rem 0.6rem",
					fontSize: "0.8rem",
				}}
			>
				Please Send me a Message If you like/dislike my Website.
			</p>
		</>
	);
};

export default Contact;

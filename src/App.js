import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Projects />
				<About />
				<Contact />
				<Footer />
			</Router>
		</>
	);
};

export default App;

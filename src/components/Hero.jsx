import { useNavigate } from "react-router-dom";

//Project files
import "../styles/Hero.css";

export default function Hero() {
	const navigate = useNavigate();
	return (
		<section className="hero">
			<img className="hero-image" src="/images/love-to-learn.jpg" alt="hero" />
			<div className="hero-text">
				<h1 className="hero-title">Mind Match</h1>
				<img src="/images/logo.png" alt="logo" />
				<h3 className="slogan">Unlock the power of you</h3>
				<button className="view-btn" onClick={() => navigate("/signup")}>
					Sign Up
				</button>
				<button className="view-btn" onClick={() => navigate("/login")}>
					Log In
				</button>
			</div>
		</section>
	);
}

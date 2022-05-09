//Project files
import "../../styles/Hero.css";

export default function Hero() {
	return (
		<section className="hero">
			<img className="hero-image" src="/images/love-to-learn.jpg" alt="hero" />
			<div className="hero-text">
				<h1 className="hero-title">Mind Match</h1>
				<img src="/images/logo.png" alt="logo" />
				<h3 className="slogan">Unlock the power of you</h3>
				<h4>Get job-ready for an in-demand career </h4>
				<p>Break into a new field </p>
			</div>
		</section>
	);
}

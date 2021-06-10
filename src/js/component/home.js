import React from "react";
import PropTypes from "prop-types";
//create your first component
/* Ejemplo de React
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}
function App() {
	return (
		<div>
			<Welcome name="Sara" />
			<Welcome name="Cahal" />
			<Welcome name="Edite" />
		</div>
	);
} */
function Tarjetas(props) {
	return (
		<div className="card">
			<img src={props.imgtarjeta} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.titulotarjeta}</h5>
				<p className="card-text">{props.textotarjeta}</p>
				<p className="card-text">
					<small className="text-muted">
						Last updated 3 mins ago
					</small>
				</p>
				<a
					href="https://www.instagram.com/asv.jewels/"
					className="btn btn-primary">
					Go IG
				</a>
			</div>
		</div>
	);
}
Tarjetas.propTypes = {
	imgtarjeta: PropTypes.string,
	titulotarjeta: PropTypes.string,
	textotarjeta: PropTypes.string
};
function Variastarjetas() {
	return (
		<div className="card-deck">
			<Tarjetas
				imgtarjeta="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/0fa4ef121288983.60c28835edd1b.jpg"
				titulotarjeta="Card title1"
				textotarjeta="This is a wider card with supporting text below
                        as a natural lead-in to additional content. This
                        card has even longer content than the first to
                        show that equal height action."
			/>
			<Tarjetas
				imgtarjeta="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/77f6bc121288983.60c27e003db92.jpg"
				titulotarjeta="Card title2"
				textotarjeta="This is a wider card with supporting text below
                        as a natural lead-in to additional content. This
                        card has even longer content than the first to
                        show that equal height action."
			/>
			<Tarjetas
				imgtarjeta="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5f8a47121288983.60c27e003d59e.jpg"
				titulotarjeta="Card title3"
				textotarjeta="This is a wider card with supporting text below
                        as a natural lead-in to additional content. This
                        card has even longer content than the first to
                        show that equal height action."
			/>
			<Tarjetas
				imgtarjeta="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3340ad121288983.60c28835eebdc.jpg"
				titulotarjeta="Card title4"
				textotarjeta="This is a wider card with supporting text below
                        as a natural lead-in to additional content. This
                        card has even longer content than the first to
                        show that equal height action."
			/>
		</div>
	);
}
export function Home() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">Hello, world!</h1>
					<p className="lead">
						This is my first page in React Javascript.
					</p>

					<p>Si les gustan las imagenes que puse vean mas aca:</p>
					<a
						className="btn btn-primary btn-lg"
						href="https://www.instagram.com/asv.jewels/"
						role="button">
						ASV.JEWELS
					</a>
				</div>
				<Variastarjetas />
			</div>
			<footer class="page-footer font-small blue bg-dark sticky-bottom">
				<div class="footer-copyright text-center py-3">
					© 2021 Copyright:
					<a href="https://www.linkedin.com/in/adaschuler/">
						{" "}
						Ada Schuler{" "}
					</a>
				</div>
			</footer>
		</>
	);
}

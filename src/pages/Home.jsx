import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import config from "../config";
import Slider from "./Slider.jsx";
import ReactPlayer from "react-player";
import "../css/Home.css";

function Home() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		axios.get(`${config.URL}/work`).then((response) => {
			let images = response.data.item.rows;
			console.log(images[25].Resources[0].route);

			images.map((image) => {
				image.is_requested = false;
			});
			//save images variable in state
			setImages({
				images,
			});
		});
	}, []);

	return (
		<div>
			<Navigation />
			<div className="player-wrapper">
				<ReactPlayer
					playing={true}
					className="react-player"
					loop={true}
					controls
					width="100%"
					height="100%"
					url="https://api.systemagency.com/assets/edce0bd5/main_video.mp4"
				/>
			</div>
			<div className="container py-24">
				<div className="grid grid-cols-2 gap-10">
					<div>
						<img
							src="https://api.systemagency.com/assets/9c535a96/Rose-Valentine-3.jpg"
							alt="magazine"
						/>
					</div>
					<div>
						<img
							src="https://api.systemagency.com/assets/f187fda2/Vovk-1.jpg"
							alt="magazine"
						/>
					</div>
				</div>
			</div>
			<div className="carousel"></div>
		</div>
	);
}

export default Home;

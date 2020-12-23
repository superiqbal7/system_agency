import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Navigation from "../components/Navigation.jsx";
import config from "../config";
import Carousel from "../components/Carousel";
import "../css/Home.css";

function Home() {
	const [images, setImages] = useState([]);
	const [timelineWork, setTimelineWork] = useState([]);

	useEffect(() => {
		axios.get(`${config.URL}/work`).then((response) => {
			let images = response.data.item.rows;

			// images.map((image) => {
			// 	image.is_requested = false;
			// });
			//save images variable in state
			setImages(images);
			setTimelineWork(filterTimelineWork(images));
		});
	}, []);

	function filterTimelineWork(rows) {
		const timelineWork = [];
		rows.forEach((row) => {
			if (row["main_component"] === "timeline_work") {
				timelineWork.push({
					img: row["Resources"][0]["route"],
					talentName: row["talent_name"],
					clientName: row["client_name"],
					Photographer: row["photographer"],
					Stylist: row["stylist_name"],
				});
			}
		});
		return timelineWork;
	}

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
			<div className="container py-64">
				<div className="grid grid-cols-4 gap-x-64 gap-y-32 w-3/4 mx-auto">
					{images.map((image, index) =>
						image.Resources[0].type === "image/jpeg" && index !== 2 ? (
							<div
								className={
									image.Resources[0].width > image.Resources[0].height
										? "col-span-4"
										: "col-span-2"
								}
							>
								<div className="text-center mb-3">
									<p className="font-bold m-0">{image.talent_name}</p>
									<small>{image.client_name}</small>
								</div>
								<img
									src={config.URL + image.Resources[0].route}
									alt="magazine"
									style={{ width: "100%", height: "auto" }}
								/>
								<div className="text-center font-base pt-5 px-10">
									{image.description}
								</div>
							</div>
						) : index === 2 ? (
							<div className="col-span-4">
								<ReactPlayer
									playing={true}
									width="100%"
									height="100%"
									controls
									url={config.URL + "/assets/edce0bd5/main_video.mp4"}
								/>
							</div>
						) : (
							""
						)
					)}
				</div>
				<div className="h-32"></div>
				<Carousel items={timelineWork} />
			</div>
		</div>
	);
}

export default Home;

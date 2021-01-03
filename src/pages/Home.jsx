import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Navigation from "../components/Navigation.jsx";
import config from "../config";
import Carousel from "../components/Carousel";
import "../css/Home.css";

function Home() {
	const [images, setImages] = useState([]);
	const [timelineWork, setTimelineMain] = useState([]);

	let countimg = 0;

	useEffect(() => {
		//axios.get(`${config.URL}/work?main_component=timeline_main`)
		axios.get(`${config.URL}/work`).then((response) => {
			let images = response.data.item.rows;

			// images.map((image) => {
			// 	image.is_requested = false;
			// });
			//save images variable in state
			setImages(images);
			setTimelineMain(filterTimelineMain(images));
		});
	}, []);

	function filterTimelineMain(rows) {
		const timelineWork = [];
		rows.forEach((row) => {
			if (row["main_component"] === "timeline_main") {
				timelineWork.push({
					img: row["Resources"][0]["route"],
					talentName: row["talent_name"],
					clientName: row["client_name"],
					Photographer: row["photographer"],
					Stylist: row["stylist_name"],
					url: `https://${row.background_reference}`,
					type: row.Resources[0].type,
				});
			}
		});
		return timelineWork;
	}

	let PortraitImgIndex = () => {
		countimg++;
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
					url="https://res.cloudinary.com/djhzlslux/video/upload/v1609391159/system_main_bvarm6.mp4"
				/>
			</div>
			<div className="container pt-64 pb-36">
				<div className="grid grid-cols-4 gap-x-64 gap-y-32 w-3/4 mx-auto">
					{images.map((image, index) =>
						image.Resources[0].type === "image/jpeg" ? (
							
							<div
								className={
									image.Resources[0].width > image.Resources[0].height
										? "col-span-4 "
										: "col-span-2 "
								}
							> 
								{image.Resources[0].width < image.Resources[0].height ? PortraitImgIndex() : ""}
								<div className={
									image.Resources[0].width < image.Resources[0].height && countimg % 2 == 1 ? "text-center mb-3" : image.Resources[0].width < image.Resources[0].height && countimg % 2 == 1 ? "text-center mb-3 text-right" : "text-center mb-3"
								}>
									<p className="helvetica-neue font-bold italic m-0">{image.talent_name}</p>	
									<a target="_blank" className="helvetica-neue-light italic" href={`https://${image.background_reference}`}><small className="text-black hover:font-semibold">{image.client_name}</small></a>
									
								</div>
								
								<img
									src={config.URL + image.Resources[0].route}
									alt="magazine"
									className={
										image.Resources[0].width > image.Resources[0].height
											? "landscapeImg"
											: image.Resources[0].width < image.Resources[0].height && countimg % 2 == 1 ? "portraitImg leftImg ml-0" : "portraitImg rightImg ml-auto"
									}
									style={{ }}
								/>
								<div className="helvetica-neue-light text-center italic text-lg pt-5">
									{image.description}
								</div>
							</div>
						) :  (
							<div className="col-span-4">
								<ReactPlayer
									playing={true}
									volume= "0"
									muted= {true}
									width="100%"
									height="100%"
									controls
									url={config.URL + image.Resources[0].route}
									//url="https://res.cloudinary.com/djhzlslux/video/upload/v1608802611/FENDIxHIGHSNOB_16x9.mov_yqasxb.mp4"
								/>
							</div>
						)
					)}
				</div>
				<div className="h-32">
				</div>
				
			</div>
			<div className="pb-64">
				<Carousel items={timelineWork} />
			</div>
		</div>
	);
}

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation.jsx";
import Carousel from "../components/Carousel";
import Timeline from "../components/Timeline";
const url = "https://api.systemagency.com/";

function Work() {
	const [carouselItems, setCarouselItems] = useState([]);
	const [timelineWork, setTimelineWork] = useState([]);
	const [pictureCount, setPictureCount] = useState(0);

	function filterCarouselItems(rows) {
		const pictures = [];
		rows.forEach((row) => {
			if (row["main_component"] === "timeline_main") {
				pictures.push({
					img: row["Resources"][0]["route"],
					talentName: row["talent_name"],
					clientName: row["client_name"],
					Photographer: row["photographer"],
					Stylist: row["stylist_name"],
					Slug: row["slug"],
					popup: row["Resources"],
					url: `https://${row.background_reference}`,
					type: row.Resources[0].type,
				});
			}
		});
		return pictures;
	}

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
					Slug: row["slug"],
					popup: row["Resources"]
				});
			}
		});
		return timelineWork;
	}

	const fetchModelWorkDeatils = async (endpoint) => {
		const response = await axios.get(url + endpoint);
		const rows = response.data.item.rows;
		//console.log(rows);
		setCarouselItems(filterCarouselItems(rows));
		setTimelineWork(filterTimelineWork(rows));
		setPictureCount(response.data.item.count);
	};

	useEffect(() => {
		fetchModelWorkDeatils("work");
	}, []);

	return (
		<div>
			
			<Navigation />
			<div className="my-64">
				{pictureCount > 0 ? (
					<div>
						{console.log("carousel is", carouselItems)}
						<Carousel items={carouselItems} />
						<Timeline items={timelineWork} />
					</div>
				) : (
						<div></div>
					)}
			</div>
			
		</div>
	);
}

export default Work;

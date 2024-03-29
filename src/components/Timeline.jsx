import React, { useState } from "react";
import axios from 'axios';
import "../css/Timeline.css";
import config from "../config";
import ReactPlayer from "react-player";
//const url = "https://api.systemagency.com/talent/";

function Timeline({ items }) {
	const [popUpData, setPopupData] = useState({});
	const left = "item-container left-content";
	const right = "item-container right-content";
	let leftItemCount = Math.ceil(items.length / 2);

	let showPopup = (data) => {
		let popupImg = data.popup.filter(item => item.Components[0].name === "work_photoset");
		console.log(popupImg);
		
		setPopupData(popupImg);
	};

	let closePopup = () => {
		setPopupData({});
	};



	return (
		<div className="container">
			<div className="cols py-10 md:py-32">
				{items.map((item, index) =>  (
					<div className={index < leftItemCount ? right : left} key={index}>
						<div className="img-wrapper" onClick={() => showPopup(item)}>
							<img
								className="timelineImage"
								src={`https://api.systemagency.com${item.img}`}
								alt="placeholder alternative"
							/>
						</div>
						<div className="content">
							<strong>
								<b className="name capitalize">{item.talentName}</b>
							</strong>
							<div> {item.clientName} </div>
							<div>Stylist: {item.Stylist === null ? "No" : item.Stylist}</div>
							<div>
								Photographer:
								{item.Photographer === null ? "No" : item.Photographer}
							</div>
						</div>
					</div>
				))}
			</div>
			{Object.keys(popUpData).length > 0 ? (
				<Popup data={popUpData} closePopup={closePopup} />
			) : (
				""
			)}
		</div>
	);
}

export default Timeline;

function Popup({ data, closePopup }) {
	console.log(data);
	return (
		<div className={data[0].type == "image/jpeg" ? "popup overflow-scroll" : "popup"}>
			<div style={{ zIndex: 1 }} className="close">
				<i style={{ cursor: 'pointer' }} onClick={closePopup} className="material-icons md-1"> clear</i>
			</div>
			<div class="blocker" onClick={closePopup}></div>
			<div className={data[0].type == "image/jpeg" ? "popup-contentImg" : "popup-content"}>
					<div className="grid grid-cols-2 gap-0">
						{data.map((item, index) => item.type === "image/jpeg" ? (

							<div className={item.width < item.height ? "col-span-1" : "col-span-2"}>
								<img
									className="popoverImg"
									src={`https://api.systemagency.com${item.route}`}
									alt="placeholder alternative"
								/>
							</div>
						) : (
								<div className="col-span-2">
									<ReactPlayer
										playing={true}
										volume="0"
										muted={true}
										width="auto"
										height="auto"
										controls
										//src={`https://api.systemagency.com${item.route}`}
										url="https://res.cloudinary.com/djhzlslux/video/upload/v1608802611/FENDIxHIGHSNOB_16x9.mov_yqasxb.mp4"
									/>
								</div>
							))}
				</div>
			</div>
		</div>
	);
}


// <div class="row">
// 	<div class="col-sm">
// 		<img
// 			src="https://res.cloudinary.com/shakilahmmeed/image/upload/v1608670639/2_pfytib.jpg"
// 			alt="alernate text"
// 		/>
// 	</div>
// 	<div class="col-sm">
// 		<img
// 			src="https://res.cloudinary.com/shakilahmmeed/image/upload/v1608670639/2_pfytib.jpg"
// 			alt="alernate text"
// 		/>
// 	</div>
// </div>




// src = {`https://api.systemagency.com${image.Resources[0].route}`}
// alt = { image.name }
// <div className="flex gallery">
// 	<div className="img-wrapper">
// 		<img
// 			src={`https://api.systemagency.com${props.data.img}`}
// 			alt="alernate text"
// 		/>
// 	</div>
// 	<div className="img-wrapper">
// 		<img
// 			src="https://res.cloudinary.com/shakilahmmeed/image/upload/v1608670639/1_fafdgi.jpg"
// 			alt="alernate text"
// 		/>
// 	</div>
// 	<div className="img-wrapper">
// 		<img
// 			src="https://res.cloudinary.com/shakilahmmeed/image/upload/v1608670639/2_pfytib.jpg"
// 			alt="alernate text"
// 		/>
// 	</div>
// 	<div className="img-wrapper">
// 		<img
// 			src="https://res.cloudinary.com/shakilahmmeed/image/upload/v1608670639/3_hso4ra.jpg"
// 			alt="alernate text"
// 		/>
// 	</div>
// </div>

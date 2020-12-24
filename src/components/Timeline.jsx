import React, { useState } from "react";
import axios from 'axios';
import "../css/Timeline.css";

const url = "https://api.systemagency.com/";

function Timeline({ items }) {
	const [popUpData, setPopupData] = useState({});
	const [imageData, setImageData] = useState({});
	const left = "item-container left-content";
	const right = "item-container right-content";
	let leftItemCount = Math.ceil(items.length / 2);

	let showPopup = (data) => {
		axios.get(url + `?slug=${data.Slug}`)
		.then( response =>{
			setImageData(response.data);
			console.log("getimg " + response.data)
		})
		.catch( err => {
			console.log("mara khaisi", err);
		})
		
		setPopupData(data);
		
		console.log("ekhanse ashslam..", data);
	};

	let closePopup = () => {
		setPopupData({});
	};



	return (
		<div className="container">
			<div className="cols py-10 md:py-32">
				{items.map((item, index) => (
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
								<b className="name">{item.talentName}</b>
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
				<Popup data={imageData} closePopup={closePopup} />
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
		<div className="popup">
			<div className="popup-content">
				<span className="close" onClick={closePopup}>
					&times;
				</span>
					<div class="row">
						<div class="col-md-6">
							<img
								src="https://res.cloudinary.com/shakilahmmeed/image/upload/v1608670639/2_pfytib.jpg"
								alt="alernate text"
							/>
						</div>
						<div class="col-md-6"><img
							src="https://res.cloudinary.com/shakilahmmeed/image/upload/v1608670639/2_pfytib.jpg"
							alt="alernate text"
						/></div>
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

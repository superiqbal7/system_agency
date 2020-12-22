import React from "react";
// import ClassNames from "classnames";
import "../css/Timeline.css";

function Timeline({ items }) {
	const left = "item-container left-content";
	const right = "item-container right-content";
	let leftItemCount = Math.ceil(items.length / 2);

	return (
		<div className="container">
			<div className="cols py-10 md:py-32">
				{items.map((item, index) => (
					<div className={index < leftItemCount ? right : left} key={index}>
						<div className="img-wrapper">
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
		</div>
	);
}

export default Timeline;

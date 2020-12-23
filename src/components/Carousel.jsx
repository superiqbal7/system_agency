import React, { Component } from "react";
import Slider from "react-slick";
import "../css/Carousel.css";

export default class SimpleSlider extends Component {
	render() {
		let { items } = this.props;

		const settings = {
			dots: false,
			infinite: true,
			speed: 2000,
			//slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 0,
			variableWidth: true,
			initialSlide: 1,
			cssEase: "linear",
		};

		return (
			<div className="carousel">
				<h2>Single Item</h2>
				<Slider {...settings}>
					{items.map((item) => (
						<div className="img-wrapper">
							<div className="info">
								<h5 className="name">
									<span className="uppercase">
										{item.talentName.split(" ")[0]}
									</span>
									<span className="capitalize">
										{item.talentName.replace(item.talentName.split(" ")[0], "")}
									</span>
								</h5>
								<p>ELLE Mexico, December 2018</p>
							</div>
							<img
								src={`https://api.systemagency.com${item.img}`}
								alt="alter"
							/>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}

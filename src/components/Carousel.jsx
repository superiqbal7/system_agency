import React, { Component } from "react";
import Slider from "react-slick";
import "../css/Carousel.css";

export default class SimpleSlider extends Component {
	render() {
		let { items } = this.props;

		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			// slidesToShow: 5,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 3000,
			variableWidth: true,
		};

		return (
			<div>
				<h2> Single Item</h2>
				<Slider {...settings}>
					{items.map((item) => (
						<div className="img-wrapper">
							<img src={`https://api.systemagency.com${item}`} alt="alter" />
						</div>
					))}
				</Slider>
			</div>
		);
	}
}

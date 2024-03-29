import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import config from "../config"
import SliderImages from "../pages/Slider.jsx"


class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			renderSlider: false,
			sliderItems: [],
			type: null
		}
	}

	componentDidMount() {
		const slug = this.props.match.params.slug
		console.log(slug);
		axios.get(`${config.URL}/talent?slug=${slug}`)
			.then((response) => {
				console.log(response);
				this.setState({
					data: response.data.item.rows
				})
				this.silderShow("talent_portfolio")
			});

		
	}

	silderShow = (picName) => {
		this.setState({
			renderSlider: true,
			type: picName
		})

		let images = this.state.data;
		let res = images[0].Resources;

		let slider = [];
		res.forEach((resource, i) => {
			if (resource.Components[0].name == picName) {
				slider.push(resource);
			}
		});


		if (slider.length > 0) {
			this.setState({
				sliderItems: slider
			})
		}
	}


	render() {

		const data = this.state.data;
		// console.log(this.state);

		function formatInstagramContext(text) {
			let com = text.split(".com/"); // ["someurl", "instagramUsername"]
			let arroba = text.split("@"); // ["@", "someUser"]
			if (com[1] !== undefined) {
				return com[1];
			}
			if (arroba[1] !== undefined) {
				return arroba[1];
			}
			return text;
		}

		return (
			<div>
				<Navigation />
				<section className="mt-6 pt-32">
						{data.map((talent, i) => (
							<div className="pt-32">
								<div className="row mx-0">
									{this.state.type == 'talent_video' ? ' ' : (
										<div className="col-sm-4 ">
											<div className="pleft">
											
												<h3 className="detailTalentLastname text-center uppercase"><strong>{`${talent.name}`}</strong> {talent.last_name}</h3>
												<div className="flex justify-center">
												<table className="tableTalentDetails helvetica-neue-light" style={{ width: '100%', marginTop: '7rem', margin: '100px 15px 40px auto' }}>
													<tr className="fles justify-center" style={{ width: '100%'}}>
														<th> HEIGHT </th>
														<td className="helvetica-neue-medium italic">{talent.height}</td>
													</tr>
													<tr>
														<th> BUST</th>
														<td className="helvetica-neue-medium italic">{talent.bust}</td>
													</tr>
													<tr>
														<th> WAIST</th>
														<td className="helvetica-neue-medium italic">{talent.waist}</td>
													</tr>
													<tr>
														<th> HIPS</th>
														<td className="helvetica-neue-medium italic">{talent.hips}</td>
													</tr>
													<tr>
														<th> SHOES</th>

														<td className="helvetica-neue-medium italic">{talent.shoes}</td>
													</tr>
													<tr>
														<th> EYES</th>

														<td className="helvetica-neue-medium italic uppercase">{talent.eyes}</td>
													</tr>
													<tr>
														<th> HAIR</th>
														<td className="helvetica-neue-medium italic uppercase">{talent.hair}</td>
													</tr>
												</table>
												</div>
												
												<div className="flex justify-center mt-4">
													<div className="pdf_btn">
													<a href={"https://www.instagram.com/" + formatInstagramContext(talent.instagram)}><i class="fa fa-instagram" style={{ fontsize: "24px", display: "block" }}></i></a>
													<a className="helvetica-neue-italic" href={"https://www.instagram.com/" + formatInstagramContext(talent.instagram)}>@{formatInstagramContext(talent.instagram)}</a>
													<div>
														<section className="flex justify-center mt-2 helvetica-neue-thin italic about-office-buttons" >
															<button className=" hover:font-extrabold"> <a target="_blank" href={`${config.URL}${talent.pdf_route}`} style={{ color: 'black', fontSize: '12px' }}>create pdf</a></button>
														</section>
													</div>
												</div>
												</div>
												
											</div>
										</div>
									) }
									
									{
										this.state.renderSlider && this.state.sliderItems.length > 0 ?
											null
											:
											<div className="col-sm-4">
												<img style={{ width: '315px' }} className="image center-image" src={`https://api.systemagency.com${talent.Resources[0].route}`} alt={talent.name} ></img>
											</div>
									}

									<div className={this.state.type == 'talent_video' ? "col-sm-12" :  "col-sm-8"}>
										{
											this.state.renderSlider && this.state.sliderItems.length > 0 ?
												<div>
													<SliderImages type={this.state.type} sliderItems={this.state.sliderItems} />
												</div>
												:
												null
										}
									</div>
								</div>

								<div className="detail_btn text-center my-4" style={{ fontStyle: 'italic' }}>
									<label className={this.state.type == 'talent_portfolio' ? 'active px-12 font-bold' : 'px-12 hover:font-bold'} onClick={() => this.silderShow("talent_portfolio")}>PORTFOLIO</label>
									<label className={this.state.type == 'talent_polaroid' ? 'active px-12 font-bold' : 'px-12 hover:font-bold'} onClick={() => this.silderShow("talent_polaroid")}>POLAROIDS</label>
									<label class={this.state.type == 'talent_video' ? 'active px-12 font-bold' : 'px-12 hover:font-bold'} onClick={() => this.silderShow("talent_video")}> VIDEOS</label>
									{/* <button> <Link>EDIT</Link></button> */}
								</div>

							</div>
						))}
				</section>
				<Footer />
			</div>
		);
	}
}

export default Detail;

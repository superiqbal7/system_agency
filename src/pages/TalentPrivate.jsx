import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import config from "../config";

import "../css/TalentPrivate.css";
class TalentPrivate extends Component {

	constructor(props) {
		super(props);
		this.state = {
		data: [],
		name: "",
		gender: "",
		category: "",
		height: "",
		bust: "",
		waist: "",
		hips: "",
		shoes: "",
		eyes: "",
		hair: "",
		instagram: "@",
		available: true,
		development: true,
		}
	}

	componentDidMount() {
		if(this.props.match.path === "/addTalent"){
				console.log(this.props);
		}
		else if(this.props.match.path === "/editTalent/:slug"){
			console.log(this.props);
			const slug = this.props.match.params.slug
			console.log(slug);
			axios.get(`${config.URL}/talent?slug=${slug}`)
				.then((response) => {
					console.log(response);
					this.setState({
						data: response.data.item.rows,
						name: response.data.item.rows[0].name,
						gender: response.data.item.rows[0].gender,
						category: response.data.item.rows[0].development === true ? "development" : "",
						height: response.data.item.rows[0].height,
						bust: response.data.item.rows[0].bust,
						waist: response.data.item.rows[0].waist,
						hips: response.data.item.rows[0].hips,
						shoes: response.data.item.rows[0].shoes,
						eyes: response.data.item.rows[0].eyes,
						hair: response.data.item.rows[0].hair,
						instagram: `@${response.data.item.rows[0].instagram}`,
					})
				});

		}
		
	}

	// state = {
	// 	name: "",
	// 	gender: "",
	// 	category: "",
	// 	height: "",
	// 	bust: "",
	// 	waist: "",
	// 	hips: "",
	// 	shoes: "",
	// 	eyes: "",
	// 	hair: "",
	// 	instagram: "@",
	// 	available: true,
	// 	development: true,
	// };

	addTalent = () => {
		const token = localStorage.getItem("token");
		const formData = new FormData();
		formData.append("name", this.state.name);
		formData.append("last_name", this.state.name);
		formData.append("instagram", `@${this.state.instagram}`);
		formData.append("gender", this.state.gender);
		formData.append("available", this.state.available);
		formData.append("development", this.state.development);
		formData.append("hair", this.state.hair);
		formData.append("eyes", this.state.eyes);
		formData.append("height", this.state.height);
		formData.append("bust", this.state.bust);
		formData.append("waist", this.state.waist);
		formData.append("hips", this.state.hips);
		formData.append("shoes", this.state.shoes);

		const headers = {
			token: token,
		};

		axios
			.post(`${config.URL}/talent`, formData, {
				headers: headers,
			})
			.then(function (res) {
				console.log(res.data);
			})
			.catch(function (err) {
				console.log(err);
			});
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
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
			<div className="talent-private">
				<Navigation />
				<section className="container mt-6 pt-32">
					<div className="row mt-16">
						<div>
							<div className="row">
								<div className="col-sm-4">
									<div
										className="text-right w-3/4 ml-auto helvetica-neue-light pleft"
									>
										<div className="input-wrapper pb-4">
											<input
												type="text"
												placeholder="NAME"
												className="w-full text-center font-semibold text-3xl"
												style={{ marginLeft: "0px" }}
												name="name"
												value={this.state.name}
												onChange={this.handleInput}
											/>
										</div>
										<div className="pb-4 border-gray-100 border-opacity-25 bg-transparent">
											<select
												name="gender"
												id="gender"
												className="w-full uppercase bg-transparent border-opacity-25"
												value={this.state.gender}
												onChange={this.handleInput}
											>
												<option value="..." className="uppercase">
													Select Gender*
											</option>
												<option value="men">Male</option>
												<option value="women">Female</option>
											</select>
										</div>
										<div className="pb-4 border-gray-100 border-opacity-25 bg-transparent">
											<select
												name="category"
												id="category"
												className="w-full uppercase input-wrapper bg-transparent"
												value={this.state.category}
												onChange={this.handleInput}
											>
												<option value="..." className="uppercase">
													Select Category*
											</option>
												<option value="image">Image</option>
												<option value="development">Development</option>
												<option value="curve">Curve</option>
											</select>
										</div>
										
										<Input
											label="Height"
											name="height"
											value={this.state.height}
											handleInput={this.handleInput}
										/>
										<Input
											label="Bust"
											name="bust"
											value={this.state.bust}
											handleInput={this.handleInput}
										/>
										<Input
											label="Waist"
											name="waist"
											value={this.state.waist}
											handleInput={this.handleInput}
										/>
										<Input
											label="Hips"
											name="hips"
											value={this.state.hips}
											handleInput={this.handleInput}
										/>
										<Input
											label="Shoes"
											name="shoes"
											value={this.state.shoes}
											handleInput={this.handleInput}
										/>
										<Input
											label="Eyes"
											name="eyes"
											value={this.state.eyes}
											handleInput={this.handleInput}
										/>
										<Input
											label="Hair"
											name="hair"
											value={this.state.hair}
											handleInput={this.handleInput}
										/>
										<div className="my-16 text-right">
											<div className="flex justify-center my-4 ">
												<i
													class="fa fa-instagram fa-2x"
													style={{ fontsize: "40px" }}
												></i>
											</div>
											<div className="flex justify-center">
												<input
													type="text"
													placeholder="@"
													className="text-center"
													style={{ marginLeft: "0px" }}
													value={this.state.instagram}
													name="instagram"
													onChange={this.handleInput}
												/>
											</div>
										</div>
									</div>
									
								</div>
								<div
									className="col-sm-8 uppercase italic"
									style={{ paddingLeft: "50px" }}
								>
									<Tabs>
										<TabPanel>
											<div className="screen">Cover</div>
											<div className="mt-4 upload-wrapper">
												<label
													htmlFor="file"
													className="uppercase italic px-3 py-1 addFile"
												>
													Add File(s) *
												</label>
												<input
													id="file"
													type="file"
													style={{ display: "none" }}
												/>
											</div>
										</TabPanel>
										<TabPanel>
											<div className="screen">Portfolio</div>
											<div className="mt-4 upload-wrapper">
												<label
													htmlFor="file"
													className="uppercase italic px-3 py-1 addFile"
												>
													Add File(s) *
												</label>
												<input
													id="file"
													type="file"
													style={{ display: "none" }}
												/>
											</div>
										</TabPanel>
										<TabPanel>
											<div className="screen">Polas</div>
											<div className="mt-4 upload-wrapper">
												<label
													htmlFor="file"
													className="uppercase italic px-3 py-1 addFile"
												>
													Add File(s) *
												</label>
												<input
													id="file"
													type="file"
													style={{ display: "none" }}
												/>
											</div>
										</TabPanel>
										<TabPanel>
											<div className="screen">Videos</div>
											<div className="mt-4 upload-wrapper">
												<label
													htmlFor="file"
													className="uppercase italic px-3 py-1 addFile"
												>
													Add File(s) *
												</label>
												<input
													id="file"
													type="file"
													style={{ display: "none" }}
												/>
											</div>
										</TabPanel>
										<TabList className="flex justify-between w-3/4 mt-10">
											<Tab className="focus:outline-none font-bold cursor-pointer ">
												Cover
											</Tab>
											<Tab className="focus:outline-none cursor-pointer">
												Portfolio
											</Tab>
											<Tab className="focus:outline-none cursor-pointer">
												Polas
											</Tab>
											<Tab className="focus:outline-none cursor-pointer">
												Videos
											</Tab>
										</TabList>
									</Tabs>
									<div className="flex justify-center mt-10">
										<Link
											to="/talents"
											className="hover:no-underline"
											style={{ color: "inherit" }}
										>
											Back
										</Link>
										<p className="ml-10" onClick={this.addTalent}>
											Save
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}

export default TalentPrivate;

function Input(props) {
	return (
		<div className="input-wrapper">
			<label htmlFor="">{props.label}</label>
			<input
				type="text"
				name={props.name}
				value={props.value}
				onChange={props.handleInput}
			/>
		</div>
	);
}

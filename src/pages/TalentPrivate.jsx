import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import config from "../config";
import SliderImages from "../pages/Slider.jsx";
import "../css/TalentPrivate.css";

class TalentPrivate extends Component {
	state = {
		name: "aditoo",
		gender: "male",
		category: "",
		height: "55",
		bust: "88",
		waist: "56",
		hips: "532",
		shoes: "55",
		eyes: "44",
		hair: "444",
		instagram: "aditoo",
		available: true,
		development: true,
	};

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
										className="text-right w-3/4 ml-auto pleft"
										style={{
											fontFamily:
												'helvetica-neue, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;',
										}}
									>
										<div className="input-wrapper">
											<input
												type="text"
												placeholder="NAME"
												className="w-full text-center font-semibold"
												style={{ marginLeft: "0px" }}
												name="name"
												value={this.state.name}
												onChange={this.handleInput}
											/>
										</div>
										<select
											name="gender"
											id="gender"
											className="w-full uppercase input-wrapper"
											value={this.state.gender}
											onChange={this.handleInput}
										>
											<option value="..." className="uppercase">
												Select Gender*
											</option>
											<option value="male">Male</option>
											<option value="female">Female</option>
										</select>
										<br />
										<select
											name="category"
											id="category"
											className="w-full uppercase input-wrapper"
											value={this.state.category}
											onChange={this.handleInput}
										>
											<option value="..." className="uppercase">
												Select Category*
											</option>
											<option value="category1">Category 1</option>
											<option value="category2">Category 2</option>
											<option value="category3">Category 3</option>
										</select>
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
										<div className="mt-16">
											<div className="pdf_btn" style={{ width: "120px" }}>
												<i
													class="fa fa-instagram"
													style={{ fontsize: "24px" }}
												></i>
											</div>
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
								<div
									className="col-sm-8 uppercase italic"
									style={{ paddingLeft: "50px" }}
								>
									<Tabs>
										<TabPanel>
											<div className="screen"></div>
											<div className="mt-4 upload-wrapper">
												<label
													htmlFor="file"
													className="uppercase italic px-3 py-1"
													style={{ border: "1px solid black" }}
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
										</TabPanel>
										<TabPanel>
											<div className="screen">Polas</div>
										</TabPanel>
										<TabPanel>
											<div className="screen">Videos</div>
										</TabPanel>
										<TabList className="flex justify-between w-3/4 mt-10">
											<Tab className="focus:outline-none cursor-pointer">
												Cover
											</Tab>
											<Tab className="focus:outline-none cursor-pointer">
												Portfolio
											</Tab>
											<Tab className="focus:outline-none cursor-pointer">
												Polas
											</Tab>
											<Tab className="focus:outline-none cursor-pointer">
												VIdeos
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

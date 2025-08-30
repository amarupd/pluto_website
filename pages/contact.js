import React, { useState } from "react";
import axios from "axios";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";

function Contact() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
		type: "",
	});

	const [responseMessage, setResponseMessage] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {

			const response = await axios.post(process.env.NEXT_PUBLIC_API_URL, formData);
			// console.log("Response:", response.data);
			setResponseMessage(response.data);
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				message: "",
				type: "",
			});
		} catch (error) {

			// console.error("Error:", error.response.data);


			setResponseMessage(error.response.data);
		}
		setTimeout(() => {
			setResponseMessage(null);
		}, 3000);

	};

	return (
		<main>
			<section className='inner_hero_sec padding-top padding-bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='heading'>
								<h1>Contact Us</h1>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='about-sec padding-top padding-bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='heading'>
								<h2>
									Contact <span> Us</span>
								</h2>
							</div>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<div className='cotact-form'>
								<form onSubmit={handleSubmit} className='row'>
									<div className='col-md-6'>
										<div className='mb-4'>
											<input
												type='text'
												className='form-control'
												placeholder='First Name *'
												name='firstName'
												value={formData.firstName}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='mb-4'>
											<input
												type='text'
												className='form-control'
												placeholder='Last Name *'
												name='lastName'
												value={formData.lastName}
												onChange={handleChange}
												// required
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='mb-4'>
											<input
												type='email'
												className='form-control'
												placeholder='E-Mail *'
												name='email'
												value={formData.email}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='mb-4'>
											<input
												type='number'
												className='form-control'
												placeholder='Phone *'
												name='phone'
												value={formData.phone}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className='col-md-12'>
										<div className='mb-4'>
											<select className='form-control' name='type' value={formData.type} onChange={handleChange} required>
												<option value="" disabled>Issue Category*  👇</option>
												<option value="GAME">GAME</option>
												<option value="PAYMENT">PAYMENT</option>
												<option value="KYC">KYC</option>
												<option value="OPINION">OPINION</option>
												<option value="ACCOUNT">ACCOUNT</option>
												<option value="OTHERS">OTHERS</option>
											</select>

										</div>
									</div>
									{formData.type && (
										<div className='col-md-12'>
											<div className='mb-4'>
												<textarea
													className='form-control'
													placeholder='Issue Description *'
													rows='4'
													name='message'
													value={formData.message}
													onChange={handleChange}
													required
												></textarea>
											</div>
										</div>
									)}
									<div className='col-md-12' style={{ display: 'flex', alignItems: 'center' }}>
										<div className='submit-col'>
											<button type='submit' className='btn btn-primary'>
												Send
											</button>
										</div>
										{responseMessage && (
											<div className={`alert ${responseMessage.success ? 'alert-success' : 'alert-danger'} primary-blue`} style={{ marginLeft: '16px', padding: '2px', borderRadius: '2px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}>
												<span style={{ marginRight: '8px', fontSize: '25px', color: 'red' }}>{responseMessage.success ? '❌' : '✅'}</span>
												<span style={{ fontSize: '15px', fontWeight: 'bold', color: '#007bff' }}>{responseMessage.message}</span>
											</div>
										)}
									</div>

								</form>
							</div>
						</div>
					</div>
				</div>
			</section>


		</main>
	);
}

export default Contact;

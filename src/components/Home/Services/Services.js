import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import floride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';

const serviceData = [
	{
		name: 'Flouride Treatment',
		img: floride,
	},
	{
		name: 'Cavity Filling',
		img: cavity,
	},
	{
		name: 'Teeth Whitening',
		img: floride,
	},
];

const Services = () => {
	return (
		<section className="services-container mt-5">
			<div className="text-center">
				<h5 style={{ color: 'rgb(26, 235, 203)' }}>Our Services</h5>
				<h2>Services We Provide</h2>
			</div>
			<div className=" d-flex justify-content-center">
				<div className="row w-75 mt-4">
					{serviceData.map((data) => (
						<ServiceCard data={data}></ServiceCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;

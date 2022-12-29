import React from 'react';

const ServiceCard = (service) => {
	return (
		<div className="col-md-4 text-center">
			<img style={{ height: '80px' }} src={service.data.img} alt="" />
			<h5 className="mt-3 mb-3"> {service.data.name} </h5>
			<p className="text-secondary">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
				voluptas?
			</p>
		</div>
	);
};

export default ServiceCard;

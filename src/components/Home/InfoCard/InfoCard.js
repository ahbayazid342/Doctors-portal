import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = (info) => {
	return (
		<div className="col-md-4 info-card">
			<div
				className={`d-flex info-con justify-content-center info-${info.info.background}`}
			>
				<div className="mr-3">
					<FontAwesomeIcon
						className="info-icon"
						icon={info.info.icon}
					></FontAwesomeIcon>
				</div>
				<div>
					<h6> {info.info.title} </h6>
					<small> {info.info.description} </small>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;

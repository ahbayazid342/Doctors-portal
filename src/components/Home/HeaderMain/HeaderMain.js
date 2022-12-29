import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
	return (
		<div>
			<main
				style={{ height: '600px' }}
				className="row d-flex align-items-center"
			>
				<div className="col-md-4 offset-md-1">
					<h1>
						Your New Smile <br /> Stars Here
					</h1>
					<p style={{ color: 'rgb(132, 57, 129)' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
						facilis amet nesciunt, corrupti inventore dolorum?
					</p>
					<button className="btn btn-primary">GET APPOINTMENT</button>
				</div>
				<div className="col-md-6">
					<img src={chair} alt="chair-img" className="img-fluid" />
				</div>
			</main>
		</div>
	);
};

export default HeaderMain;

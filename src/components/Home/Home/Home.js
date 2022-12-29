import React from 'react';
import Blogs from '../Bloags/Bloags';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Doctors from './../Doctors/Doctors';
import Footer from './../Footer/Footer';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<Services></Services>
			<FeaturedService></FeaturedService>
			<MakeAppointment></MakeAppointment>
			<Testimonials></Testimonials>
			<Blogs></Blogs>
			<Doctors></Doctors>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default Home;

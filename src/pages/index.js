import React from 'react';

import AboutSection from '../components/Sections/About';
import ProjectsSection from '../components/Sections/Projects';
import ContactSection from '../components/Sections/Contact';

import Layout from '../components/Layouts';
import Footer from '../components/Layouts/Footer';
import Menu from '../components/Layouts/Menu';

const Homepage = () => (
	<Layout>
		<Menu />
		<AboutSection />
		<ProjectsSection />
		<ContactSection />
		<Footer />
	</Layout>
);

export default Homepage;

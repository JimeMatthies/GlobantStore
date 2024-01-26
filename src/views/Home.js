import React from 'react';
import Card from '../components/Card';
import '../styles/Home.css';

const Home = () => {
	return (
		<>
			<section id='hero'>
				<div className='container'>
					<div className='title-container'>
						<span>tecnología</span>
						<span>renovada</span>
					</div>
				</div>
			</section>
			<main>
				<div className='container'>
					<div className='product-container'>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;

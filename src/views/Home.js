import React from 'react';
import Card from '../components/Card';

const Home = () => {
	return (
		<>
			<section id='hero'>
				<div className='container-fluid'>
					<div className='title-container'>
						<span>tecnología</span>
						<span>renovada</span>
					</div>
				</div>
			</section>
			<main>
				<div className='container-fluid'>
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

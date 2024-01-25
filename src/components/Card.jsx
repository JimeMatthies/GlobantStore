import React from 'react';

const Card = () => {
	return (
		<article className='product-card'>
			<img
				className='product-img'
				src='../assets/mock1.jpg'
				alt='Macbook Pro'
			/>
			<div className='product-info'>
				<span className='product-title'>Macbook Pro 15&apos;4</span>
				<span className='product-description'>Space Gray</span>
				<div className='product-price-block'>
					<span className='price'>$750.000</span>
					<span className='discount'>50% Off</span>
				</div>
				<div className='product-tax-policy'>
					Incluye impuesto País y percepción AFIP
				</div>
			</div>
		</article>
	);
};

export default Card;

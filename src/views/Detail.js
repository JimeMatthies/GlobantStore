import React from 'react';
import '../styles/Detail.css';

const Detail = () => {
	return (
		<>
			<main>
				<div className='container'>
					<div className='columns-container'>
						<div className='product-images-block'>
							<div className='thumbnail-container'>
								<img src='../assets/mock1.jpg' alt='Mock 1' />
							</div>
							<div className='thumbnail-container'>
								<img src='../assets/mock2.jpg' alt='Mock 2' />
							</div>
						</div>
						<div className='product-description-block'>
							<h1 className='title'>Macbook Pro 15&apos;4</h1>
							<div className='description'>
								<span className='label'>Descripción:</span>
								<p>
									Chip M2 CPU 8 núcleos y GPU 10 núcleos, 8GB RAM, 256GB SSD
								</p>
							</div>
							<form className='selector'>
								<fieldset>
									<label className='label' htmlFor='color'>
										Color
									</label>
									<select type='text' placeholder='Selecciona un color'>
										<option value='1'>Space Gray</option>
										<option value='2'>Silver</option>
										<option value='3'>Space Black</option>
										<option value='4'>Gold</option>
									</select>
								</fieldset>
								<fieldset>
									<label className='label' htmlFor='size'>
										Tamaño
									</label>
									<select type='text' placeholder='Selecciona un tamaño'>
										<option value='1'>14&apos;</option>
										<option value='2'>15&apos;4</option>
										<option value='3'>16&apos;</option>
										<option value='4'>17&apos;</option>
									</select>
								</fieldset>
							</form>
						</div>
						<div className='product-checkout-block'>
							<div className='checkout-container'>
								<span className='checkout-total-label'>Total:</span>
								<h2 className='checkout-total-price'>$152.400</h2>
								<p className='checkout-description'>
									Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
									50711 haciendo la solicitud en AFIP.
								</p>
								<ul className='checkout-policy-list'>
									<li>
										<span className='policy-icon'>
											<img src='../assets/truck.png' alt='Truck' />
										</span>
										<span className='policy-desc'>
											Agrega el producto al carrito para conocer los costos de
											envío
										</span>
									</li>
									<li>
										<span className='policy-icon'>
											<img src='../assets/plane.png' alt='Plane' />
										</span>
										<span className='policy-desc'>
											Recibí aproximadamente entre 10 y 15 días hábiles,
											seleccionando envío normal
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='sales-block'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
						porro, eum minus nobis doloribus pariatur tempora officia a, facilis
						repellendus, aspernatur veniam. Similique nulla tenetur
						necessitatibus provident ipsam, incidunt ipsa.
					</div>
				</div>
			</main>
		</>
	);
};

export default Detail;

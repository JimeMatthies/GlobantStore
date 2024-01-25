import React from 'react';

const Header = () => {
	return (
		<header>
			<div className='container-fluid'>
				<div className='search'>
					<div className='logo'>
						<img
							src='../assets/tiendamia-logo.svg'
							width='218'
							alt='Logo store'
						/>
					</div>
					<div className='form'>
						<form>
							<input type='text' placeholder='Search' />
						</form>
					</div>
					<div className='social'>
						<ul>
							<li>
								<img
									src='../assets/facebook.png'
									width='25'
									alt='Facebook Logo'
								/>
							</li>
							<li>
								<img
									src='../assets/instagram.png'
									width='25'
									alt='Instagram Logo'
								/>
							</li>
						</ul>
					</div>
				</div>
				<div className='nav'>
					<ul>
						<li>
							<a href='#'>Ofertas de la semana</a>
						</li>
						<li>
							<a href='#'>Cómo comprar</a>
						</li>
						<li>
							<a href='#'>Costos y Tarifas</a>
						</li>
						<li>
							<a href='#'>Mis pedidos</a>
						</li>
						<li>
							<a href='#'>Invita y Gana</a>
						</li>
						<li>
							<a href='#'>Garantía de entrega</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;

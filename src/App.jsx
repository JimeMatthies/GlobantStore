import React from 'react';
/* import { BrowserRouter, Route, Routes } from 'react-router-dom'; */
import Header from './components/Header';
import Home from './views/Home';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Home />
			<Footer />
		</>
	);
};

export default App;

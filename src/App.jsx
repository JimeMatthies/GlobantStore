import React, { useState } from "react";
/* import { BrowserRouter, Route, Routes } from 'react-router-dom'; */
import Home from './views/Home';
import Footer from './components/Footer';

const App = ({ copyright }) => {
    return (
        <>
            <Home/>
            <Footer footer={copyright} />
        </>
    )
}

export default App;
import React from 'react';
import './App.css';
import Header from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Build from './pages/build';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path='/home' element={<Home />} />
				<Route path='/build' element={<Build />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>

	);
}

export default App;

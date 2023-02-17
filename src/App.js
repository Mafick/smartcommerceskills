import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import AllSkills from './pages/AllSkills';
import MyProfile from './pages/MyProfile';
import Contact from './pages/Contact';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="allskills" element={<AllSkills/>}/>
				<Route path="myprofile" element={<MyProfile/>}/>
				<Route path="contact" element={<Contact/>}/>
			</Routes>
		</div>
	);
}
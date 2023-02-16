import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import AllSkills from './pages/AllSkills';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="allskills" element={<AllSkills/>}/>
			</Routes>
		</div>
	);
}
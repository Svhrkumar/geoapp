import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MapsPage from './Pages/MapsPage';

import FormPage from './Pages/FormPage';
import Header from './components/Header/Header';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/forms' element={<FormPage />} />
					<Route exact path='/maps' element={<MapsPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

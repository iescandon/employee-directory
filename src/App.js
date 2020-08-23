import React from 'react';
import './App.css';
import EmployeeRow from './components/employeerow';
import Jumbotron from './components/jumbotron';
// import SearchBar from './components/searchbar';

function App() {
	return (
		<div className="App">
			<Jumbotron />
			<EmployeeRow />
		</div>
	);
}

export default App;

// import React, { useState, useEffect } from 'react';
// import EmployeeRow from '../employeerow';
// import API from '../../utils/API';

// function Search() {
// 	const [state, setState] = useState({
// 		search: '',
// 		results: [],
// 	});

// 	useEffect(() => {
// 		API.search().then((res) => {
// 			setState({ ...state, results: res.data });
// 			// console.log(res.data);
// 			console.log(state);
// 		});
// 	}, [state.results]);

// 	//  handleInputChange = (event) => {
// 	// 		const name = event.target.name;
// 	// 		const value = event.target.value;
// 	// 		setState({
// 	// 			[name]: value,
// 	// 		});
// 	// 	};

// 	return (
// 		<div>
// 			<div className="jumbotron mb-0">
// 				<h1 className="display-4 mb-5 text-center">Employee Directory</h1>

// 				<form className="form-inline my-2 my-lg-0 justify-content-center">
// 					<input
// 						className="form-control mr-sm-2"
// 						type="search"
// 						placeholder="Search"
// 						aria-label="Search"
// 					/>
// 				</form>
// 			</div>
// 			<EmployeeRow results={state.results} />
// 		</div>
// 	);
// }

// export default Search;

// -------------------------------------

import React, { Component } from 'react';
import EmployeeRow from '../employeerow';
import API from '../../utils/API';

class Search extends Component {
	state = {
		search: '',
		results: [],
		filteredResults: [],
	};

	componentDidMount() {
		this.getUsers();
	}

	getUsers = () => {
		API.search().then((res) => {
			this.setState({
				...this.state,
				results: res.data.results,
			});
		});
	};

	updateResults = () => {
		//algorithm   .filter, .sort
		this.setState({ filteredResults: [] });
	};
	// componentDidMount() {
	//   API.search().then(results => {
	//     this.setState({
	//       users: results.data.results,
	//       filteredUsers: results.data.results
	//     });
	//   });
	// }

	handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div>
				<div className="jumbotron mb-0">
					<h1 className="display-4 mb-5 text-center">Employee Directory</h1>

					<form className="form-inline my-2 my-lg-0 justify-content-center">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
					</form>
				</div>
				<EmployeeRow employees={this.state.results} />
			</div>
		);
	}
}

export default Search;

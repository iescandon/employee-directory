import React, { Component } from 'react';
import EmployeeRow from '../employeerow';
import API from '../../utils/API';
// import BootstrapTable from 'react-bootstrap-table-next';

class Search extends Component {
	state = {
		search: '',
		results: [],
		filteredResults: [],
		order: 'down',
	};

	// state = {
	// 	search: '',
	// 	results: [],
	// 	filteredResults: [],
	// 	order: [
	// 		{ Image: 'down' },
	// 		{ 'First Name': 'down' },
	// 		{ 'Last Name': 'down' },
	// 		{ 'Phone Number': 'down' },
	// 		{ 'E-mail': 'down' },
	// 	],
	// };

	tableHeaders = [
		{ name: 'Image', sort: true },
		{ name: 'First Name', sort: true },
		{ name: 'Last Name', sort: true },
		{ name: 'Phone Number', sort: true },
		{ name: 'E-mail', sort: true },
	];

	componentDidMount() {
		this.getUsers();
	}

	getUsers = () => {
		API.search().then((res) => {
			this.setState({
				results: res.data.results,
				filteredResults: res.data.results,
			});
		});
	};

	updateResults = (event) => {
		const filterSearch = this.state.search;
		const filteredList = this.state.results.filter((item) => {
			let values = Object.values(item).join('').toLowerCase();
			return values.indexOf(filterSearch.toLowerCase()) !== -1;
		});
		this.setState({ filteredResults: filteredList });
	};

	handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value,
		});
		this.updateResults();
	};

	handleOrder = (header) => {
		console.log(header);
		for (var i = 0; i < this.tableHeaders.length; i++) {
			const currentHeader = this.tableHeaders[i].name;
			console.log(currentHeader);
			if (header === currentHeader) {
				if (this.state.order === 'down') {
					this.setState({
						order: 'up',
					});
				} else {
					this.setState({
						order: 'down',
					});
				}
			}
		}
		console.log(header);
		// set state filtered search
	};

	render() {
		return (
			<div>
				<div className="jumbotron mb-0">
					<h1 className="display-4 mb-5 text-center">EMPLOYEE DIRECTORY</h1>
					{/* <h2>{this.state.search}</h2> */}
					<form className="form-inline my-2 my-lg-0 justify-content-center">
						<input
							name="search"
							value={this.state.search}
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							onChange={this.handleInputChange}
						/>
					</form>
				</div>
				<EmployeeRow
					employees={this.state.filteredResults}
					tableHeaders={this.tableHeaders}
					order={this.state.order}
					handleOrder={this.handleOrder}
				/>
			</div>
		);
	}
}

export default Search;

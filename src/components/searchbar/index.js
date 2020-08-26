import React, { Component } from 'react';
import EmployeeRow from '../employeerow';
import API from '../../utils/API';
// import BootstrapTable from 'react-bootstrap-table-next';

class Search extends Component {
	state = {
		search: '',
		results: [],
		filteredResults: [],
	};

	tableHeaders = [
		{ name: 'Image' },
		{ name: 'First Name' },
		{ name: 'Last Name' },
		{ name: 'Phone Number' },
		{ name: 'E-mail' },
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

	handleSort = (order, name) => {
		console.log(order, name);
		//switch .sort
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
					handleSort={this.handleSort}
					// order={this.state.order}
					// handleOrder={this.handleOrder}
				/>
			</div>
		);
	}
}

export default Search;

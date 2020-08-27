import React, { Component } from 'react';
import EmployeeRow from '../employeerow';
import API from '../../utils/API';

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
		// const filteredList = this.state.results.filter((item) =>
		// 	item.match(filterSearch)
		// );
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
		switch (name) {
			// case 'Image':
			// 	//sort
			// 	break;
			case 'First Name':
				if (order === 'down') {
					this.setState({
						filteredResults: this.state.filteredResults.sort((a, b) =>
							a.name.first.localeCompare(b.name.first)
						),
					});
				} else {
					this.setState({
						filteredResults: this.state.filteredResults.reverse(),
					});
				}
				break;
			case 'Last Name':
				if (order === 'down') {
					this.setState({
						filteredResults: this.state.filteredResults.sort((a, b) =>
							a.name.last.localeCompare(b.name.last)
						),
					});
				} else {
					this.setState({
						filteredResults: this.state.filteredResults.reverse(),
					});
				}
				break;
			case 'Phone Number':
				if (order === 'down') {
					this.setState({
						filteredResults: this.state.filteredResults.sort((a, b) =>
							a.cell.localeCompare(b.cell)
						),
					});
				} else {
					this.setState({
						filteredResults: this.state.filteredResults.reverse(),
					});
				}
				break;
			case 'E-mail':
				if (order === 'down') {
					this.setState({
						filteredResults: this.state.filteredResults.sort((a, b) =>
							a.email.localeCompare(b.email)
						),
					});
				} else {
					this.setState({
						filteredResults: this.state.filteredResults.reverse(),
					});
				}
				break;
			default:
		}
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
				/>
			</div>
		);
	}
}

export default Search;

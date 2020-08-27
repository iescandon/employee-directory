import React from 'react';
import Header from '../headerBars';

function Employee({ employees, tableHeaders, handleSort }) {
	return (
		<table className="table table-striped mt-0">
			<thead>
				<tr>
					{tableHeaders.map((header) => {
						return (
							<Header
								key={header.name}
								header={header}
								handleSort={handleSort}
							/>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{employees.map((employee) => {
					return (
						<tr key={employee.id.value}>
							<td>
								<img src={employee.picture.medium} alt={employee.name.first} />
							</td>
							<td>{employee.name.first}</td>
							<td>{employee.name.last}</td>
							<td>{employee.cell}</td>
							<td>{employee.email}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Employee;

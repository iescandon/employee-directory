import React from 'react';

function Employee({ employees }) {
	return (
		<table className="table table-striped mt-0">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">First</th>
					<th scope="col">Last</th>
					<th scope="col">Phone Number</th>
					<th scope="col">E-mail</th>
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

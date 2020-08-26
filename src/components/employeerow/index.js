import React from 'react';

function Employee({ employees, tableHeaders, order, handleOrder }) {
	// const image = order[0].Image;
	// const firstName = order[1]['First Name'];
	// const lastName = order[2]['Last Name'];
	// const phoneNumber = order[3]['Phone Number'];
	// const email = order[4]['E-mail'];

	// let orderObj = {
	// 	Image: order,
	// 	'First Name': order,
	// 	'Last Name': order,
	// 	'Phone Number': order,
	// 	'E-mail': order,
	// };

	// const handleOrder = (header) => {
	// 	console.log(header);
	// 	for (var i = 0; i < tableHeaders.length; i++) {
	// 		const currentHeader = tableHeaders[i].name;
	// 		if (header === currentHeader) {
	// 			if (orderObj[header] === 'down') {
	// 				console.log(orderObj[header]);
	// 				orderObj[header] = 'up';
	// 			} else {
	// 				console.log(orderObj[header]);
	// 				orderObj[header] = 'down';
	// 			}
	// 		}
	// 	}
	// };

	return (
		<table className="table table-striped mt-0">
			<thead>
				<tr>
					{tableHeaders.map((header) => {
						return (
							<th key={header.name}>
								{header.name}
								<i
									className={`fa fa-caret-${order}`}
									onClick={() => handleOrder(header.name)}
								></i>
							</th>
						);
					})}
				</tr>

				{/* <tr>
					{tableHeaders.map((header) => {
						return (
							<th key={header.name}>
								{header.name}
								<i
									className={`fa fa-caret-${orderObj[header.name]}`}
									onClick={() => handleOrder(header.name)}
								></i>
							</th>
						);
					})}
				</tr> */}

				{/* <tr>
					<th>
						Image
						<i
							className={`fa fa-caret-${image}`}
							onClick={() => handleOrder(tableHeaders[0].name)}
						></i>
					</th>
					<th>
						First Name
						<i
							className={`fa fa-caret-${firstName}`}
							onClick={() => handleOrder(tableHeaders[1].name)}
						></i>
					</th>
					<th>
						Last Name
						<i
							className={`fa fa-caret-${lastName}`}
							onClick={() => handleOrder(tableHeaders[2].name)}
						></i>
					</th>
					<th>
						Phone Number
						<i
							className={`fa fa-caret-${phoneNumber}`}
							onClick={() => handleOrder(tableHeaders[3].name)}
						></i>
					</th>
					<th>
						E-mail
						<i
							className={`fa fa-caret-${email}`}
							onClick={() => handleOrder(tableHeaders[4].name)}
						></i>
					</th>
				</tr> */}
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

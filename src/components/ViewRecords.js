import React, { useEffect } from "react";
import { DeleteReceipt, GetAllReceipts } from "../service";
const ViewRecords = () => {
	const [receipts, setReceipts] = React.useState([]);
	useEffect(() => {
		getAllReceipts();
	}, []);

	const getAllReceipts = async () => {
		try {
			const res = await GetAllReceipts();
			if (res.status === 200) {
				setReceipts(res.data);
			} else {
				alert(res.message);
			}
		} catch (error) {
			console.log("error", error.message);
		}
	};
	const handleDelete = async (id) => {
		const confirmation = window.confirm("Are you sure you want to delete this record?");
		if (confirmation) {
			const res = await DeleteReceipt(id);
			alert(res.message);
			if (res.status === 200) {
				getAllReceipts();
			}
		}
	};
	return (
		<table className="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>Institute</th>
					<th>Name</th>
					<th>Std</th>
					<th>Type</th>
					<th>Amount</th>
					<th>Date</th>
					<th>Number</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{receipts?.length > 0 ? (
					receipts.map((item) => (
						<tr key={item?.receipt}>
							<td>{item?.instituteName}</td>
							<td>{item?.studentName}</td>
							<td>{item?.std}</td>
							<td>{item?.paymentMethod}</td>
							<td>{item?.amount}</td>
							<td>{item?.paymentDate}</td>
							<td>{item?.receipt}</td>
							<td>
								<button className="btn btn-danger" onClick={() => handleDelete(item?.receipt)}>
									Delete
								</button>
							</td>
						</tr>
					))
				) : (
					<div>No records found</div>
				)}
			</tbody>
		</table>
	);
};

export default ViewRecords;

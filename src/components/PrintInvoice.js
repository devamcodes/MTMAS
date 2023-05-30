import React from "react";
import { useNavigate } from "react-router-dom";
import { GetReceiptNumber } from "../service";
const PrintInvoice = ({ details, handleDetails }) => {
	const navigate = useNavigate();

	const handlePreview = async (e) => {
		e.preventDefault();
		try {
			if (details?.receipt) {
				const res = await GetReceiptNumber();
				console.log("res", res);
				if (res) {
					handleDetails({ target: { name: "receipt", value: res } });
					navigate("/preview");
				}
			} else {
				navigate("/preview");
			}
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<form className="container" onSubmit={(e) => handlePreview(e)}>
			<h2 className="text-center">Tuition Fees Payment</h2>
			<div className="mb-3">
				<label htmlFor="instituteName" className="form-label">
					Institute Name:
				</label>
				<select
					id="instituteName"
					name="instituteName"
					className="form-select"
					onChange={(e) => handleDetails(e)}
					defaultValue={details?.instituteName}
					required>
					<option value="">Select Institute Name</option>
					<option value="MAITRAYEE TUITIONS">MAITRAYEE TUITIONS</option>
					<option value="MAITRAYEE ACADEMY">MAITRAYEE ACADEMY</option>
				</select>
			</div>
			<div className="d-flex justify-content-between align-items-end">
				{/* <div className="mb-3">
            <div className="d-flex justify-content-between">
					<div className="flex-grow-3">
						<label htmlFor="studentName" className="form-label">
							Student Name:
						</label>
						<input
							type="text"
							id="studentName"
							name="studentName"
							onChange={(e) => handleChange(e)}
							className="form-control"
							required
						/>
					</div>
					{/* <input
						type="text"
						id="academicYear"
						name="academicYear"
						className="form-control"
						required
						onChange={(e) => handleChange(e)}
						defaultValue={invoiceItems.academicYear}
					/> //
					<div className="flex-grow-2">
						<label for="academic-year">Academic Year:</label>
						<input
							type="text"
							id="academic-year"
							name="academic-year"
							placeholder="YYYY-YYYY"
							pattern="\d{4}-\d{4}"
							required
						/>
					</div>

					<input
						type="date"
						id="paymentDate"
						name="paymentDate"
						className="form-control flex-grow-1"
						required
						onChange={(e) => handleChange(e)}
						defaultValue={invoiceItems.paymentDate}
					/>
				</div>
			</div> */}

				<div className="flex-grow-3 ">
					<label htmlFor="studentName" className="form-label" style={{ marginBottom: "-0.5rem" }}>
						Student Name:
					</label>
					<input
						type="text"
						id="studentName"
						name="studentName"
						onChange={(e) => handleDetails(e)}
						className="form-control"
						defaultValue={details?.studentName}
						required
					/>
				</div>
				<div className="flex-grow-1">
					<label htmlFor="academic-year">Academic Year:</label>
					<input
						type="text"
						id="academic-year"
						className="form-control"
						name="academic-year"
						placeholder="YYYY-YYYY"
						pattern="\d{4} - \d{4}"
						defaultValue={details?.academicYear}
						required
					/>
				</div>
				<div className="flex-grow-1">
					<label htmlFor="paymentDate">Payment Date:</label>
					<input
						type="date"
						id="paymentDate"
						name="paymentDate"
						className="form-control"
						required
						defaultValue={details?.paymentDate}
						onChange={(e) => handleDetails(e)}
					/>
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount:
				</label>
				<input
					type="number"
					id="amount"
					name="amount"
					onChange={(e) => handleDetails(e)}
					defaultValue={details?.amount}
					className="form-control"
					required
				/>
				<label htmlFor="std" className="form-label">
					Standard:
				</label>
				<input
					type="text"
					id="std"
					name="std"
					onChange={(e) => handleDetails(e)}
					defaultValue={details?.std}
					className="form-control"
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="paymentMethod" className="form-label">
					Payment Method:
				</label>
				<select
					id="paymentMethod"
					name="paymentMethod"
					className="form-select"
					onChange={(e) => handleDetails(e)}
					defaultValue={details?.paymentMethod}
					required>
					<option value="">Select payment method</option>
					<option value="creditCard">Credit Card</option>
					<option value="bankTransfer">Bank Transfer</option>
					<option value="cash">Cash</option>
				</select>
			</div>
			<button className="btn btn-primary" type="submit">
				Preview
			</button>
		</form>
	);
};
export default PrintInvoice;

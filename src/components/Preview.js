import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/preview.css";
import logo from ".././Images/NavImage.png";
import numberToWords from "number-to-words";
import { CreateReceipt } from "../service";
const Preview = ({ details, handleDetails }) => {
	console.log("details", details);
	const handlePrint = async () => {
		try {
			const res = await CreateReceipt(details);
			console.log("res while creating receipt", res);
			if (res.status === 200) {
				window.print();
				window.addEventListener("afterprint", () => {
					console.log("After teh Print button clicked");
				});
				navigate("/");
			} else {
				navigate("/print-invoice");
				alert(res.message);
			}
		} catch (error) {
			console.log("error", error.message);
		}
	};

	const navigate = useNavigate();
	return (
		<>
			<div className="main-container">
				<div className="main-frame" style={{ margin: 30, padding: 30 }}>
					<div className="row mb-3">
						<div className="col-7 d-flex align-items-center" style={{ justifyContent: "space-around" }}>
							<img src={logo} alt="logo" className="logo" />
							<div className="title">{details?.instituteName}</div>
						</div>
						<div className="col-5 d-flex justify-content-between align-items-center">
							<div className="date">Date: {details?.paymentDate}</div>
							<div className="receipt">Receipt No: {details?.receipt}</div>
						</div>
					</div>
					<div className="content" style={{ lineHeight: 2 }}>
						Received with thanks the amount of <u>{numberToWords.toWords(details?.amount)}</u> rupees towards
						Tuition Fees / Material Charges from Mr./Mrs. <u>{details?.studentName}</u> for std.{" "}
						<u>{details?.std}</u> for the academic year <u>{details?.academicYear}</u> by{" "}
						<u>{details?.paymentMethod}</u>.
					</div>
					<div className="amount border border-dark p-2 mt-4">
						<strong>₹</strong> {details?.amount}
					</div>
					<div className="sign text-end">Proprietor</div>
				</div>
			</div>

			<div className="print-operation-buttons d-flex justify-content-around">
				<button onClick={handlePrint} className="btn btn-success">
					Print Invoice
				</button>
				<button onClick={() => navigate("/print-invoice")} className="btn btn-danger">
					Cancel
				</button>
			</div>
		</>
	);
};

export default Preview;

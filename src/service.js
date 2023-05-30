export const GetReceiptNumber = async () => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/GetReceiptNumber`);
	// const response = await fetch(`http://localhost:5000/api/GetReceiptNumber`);
	const data = await response.json();
	return data;
};

export const CreateReceipt = async (data) => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/CreateReceipt`, {
		// const response = await fetch(`http://localhost:5000/api/CreateReceipt`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response.json();
};
export const GetAllReceipts = async () => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/getReceipts`);
	// const response = await fetch(`http://localhost:5000/api/getReceipts`);
	const data = await response.json();
	return data;
};

export const DeleteReceipt = async (id) => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/deleteReceipt/${id}`, {
		// const response = await fetch(`http://localhost:5000/api/deleteReceipt/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.json();
};

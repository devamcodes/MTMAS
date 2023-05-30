import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import BasicLayout from "./components/BasicLayout";

const Loadable = (Component) => (props) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks

	return (
		<Suspense
			fallback={
				<div
					style={{
						textAlign: "center",
						zIndex: 9999,
						position: "relative",
					}}>
					Loading........
				</div>
			}>
			<Component {...props} />
		</Suspense>
	);
};
export const Router = () => {
	const [studentDetails, setStudentDetails] = React.useState({
		instituteName: "MAITRAYEE TUITIONS",
		studentName: "",
		paymentDate: new Date().toISOString().slice(0, 10),
		amount: 5000,
		std: "XI",
		academicYear: `${new Date().getFullYear() - 1} - ${new Date().getFullYear()}`,
		paymentMethod: "cash",
		receipt: 23001,
	});
	const handleStudents = (e) => {
		const { name, value } = e.target;
		setStudentDetails((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};
	const element = useRoutes([
		{
			path: "/",
			element: <BasicLayout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/view-records",
					element: <ViewRecords />,
				},
				{
					path: "/print-invoice",
					element: <PrintInvoice details={studentDetails} handleDetails={(e) => handleStudents(e)} />,
				},
			],
		},
		{
			path: "/preview",
			element: <Preview details={studentDetails} handleDetails={(e) => handleStudents(e)} />,
		},
		{
			path: "*",
			element: (
				<div
					className="error_page"
					style={{ margin: "30px", fontFamily: "monospace", fontSize: "20px", textAlign: "center" }}>
					404 Page Not Found
				</div>
			),
		},
	]);
	return element;
};

const Home = Loadable(lazy(() => import("./components/Dashboard")));
const ViewRecords = Loadable(lazy(() => import("./components/ViewRecords")));
const PrintInvoice = Loadable(lazy(() => import("./components/PrintInvoice")));
const Preview = Loadable(lazy(() => import("./components/Preview")));

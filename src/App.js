import React, { useState, useEffect } from "react";
import "./App.css";
import AddUsers from "./pages/AddUsers";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";
import ViewUsersTable from "./pages/ViewUsersTable";
import Login from "./components/Login";
import SideBar from "./pages/SideBar";
import NavBarComp from "./pages/NavBarComp";
import ViewSingleUser from "./pages/ViewSingleUser";
import GridLoader from "react-spinners/GridLoader";
import TablePage from "./pages/TablePage";
import PrivateRoute from "./components/PrivateRoute";
import { Axios } from "./AxiosInterceptors";

function App() {
	const [loading, setLoading] = useState(false);
	let [color, setColor] = useState("#00C9E5");
	const token = localStorage.getItem("authToken"); // Change this according to your actual storage
	const [authenticate ,setAuthenticate] =useState(token !== null);
	// const isAuthenticated = () => {
	// 	return token !== null;
	// };
	// const authenticated = isAuthenticated();
	// console.log(authenticated,"authenticated");
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			<div>
				{loading ? (
					<div className="loaderdesign">
						<GridLoader color={color} loading={loading} size={20} />
					</div>
				) : (
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Login setAuthenticate={setAuthenticate}/>} />
							<Route
								path="/table"
								element={
									<PrivateRoute authenticate={authenticate}>
										<NavBarComp />
										<TablePage />
									</PrivateRoute>
								}
							/>
							<Route path="*" element={<AddUsers />} />
						</Routes>
					</BrowserRouter>
				)}
			</div>
		</>
	);
}

export default App;

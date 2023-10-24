import React, { useState } from "react";
import AddFrom from "./components/AddFrom";
import Table from "./components/Table";
import moment from "moment";
import "./style/main.css";
import { appointment } from "./Types/Appointment.types";

function App() {
	let getFormSchema = (): appointment => {
		return {
			patientName: "",
			phoneNo: "",
			age: "",
			gender: "",
			doctor: "",
			visitDate: moment().add(0, "days").format("dddd, Do MMMM YYYY"),
			visitTime: "",
			visitStatus: "Consult",
		};
	};
	const [FormData, setFormData] = useState<appointment>(getFormSchema());
	const [LocalStorage, setLocalStorage] = useState<appointment[]>([]);
	const [updateIdFlag, setUpdateIdFlag] = useState<(string | boolean)[]>([
		"",
		false,
	]);
	return (
		<div className="app-container">
			<AddFrom
				FormData={FormData}
				setFormData={setFormData}
				updateIdFlag={updateIdFlag}
				setUpdateIdFlag={setUpdateIdFlag}
				getFormSchema={getFormSchema}
			/>
			<Table
				FormData={FormData}
				setFormData={setFormData}
				LocalStorage={LocalStorage}
				setLocalStorage={setLocalStorage}
				setUpdateIdFlag={setUpdateIdFlag}
			/>
		</div>
	);
}

export default App;

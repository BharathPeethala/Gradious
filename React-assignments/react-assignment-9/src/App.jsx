import { React, useState } from "react";
import AddFrom from "./components/AddFrom";
import Table from "./components/Table";
import moment from "moment";

function App() {
	let getFormSchema = () => {
		return {
			value:"",
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
	const [FormData, setFormData] = useState(getFormSchema());
	const [LocalStorage, setLocalStorage] = useState([]);
	const [updateIdFlag, setUpdateIdFlag] = useState(["", false]);
	return (
		<div className="app-container">
			<AddFrom
				FormData={FormData}
				setFormData={setFormData}
				LocalStorage={LocalStorage}
				setLocalStorage={setLocalStorage}
				defaultForm={getFormSchema}
				updateIdFlag={updateIdFlag}
				setUpdateIdFlag={setUpdateIdFlag}
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

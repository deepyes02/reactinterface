import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentList from "./data/data.json";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
	return (
		<>
			<div className="App container mx-auto mt-3 font-thin">
				<h1 className="text-5xl">
					<BiArchive className="inline-block text-red-400 align-top" />Your Appointments</h1>
				<AddAppointment />
				<Search />
			</div>
			<ul>
				{
					AppointmentList.map(data =>
						<AppointmentInfo 
						key = {data.petName+data.id}
						petName={data.petName}
						aptDate={data.aptDate}
						ownerName={data.ownerName}
						aptNotes={data.aptNotes}
						/>
					)
				}
			</ul>
		</>
	);
}
export default App;

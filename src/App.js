import { SiJavascript } from "react-icons/si";
import Search from "./components/Search";

function App() {
	return (
		<>
			<div className="App container-fluid text-center font-thin bg-black text-white">
				<h1 className="text-3xl mx-auto">Hello React <SiJavascript className="text-green-700 inline-block" /></h1>
			</div>
			<div className="search">
				<Search />
			</div>
		</>
	);
}
export default App;

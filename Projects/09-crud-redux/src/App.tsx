import "./App.css";
import { ListOfUsers } from "./components/ListOfUsers";

function App() {
	return (
		<>
			<h1 style={{ marginBottom: "20px" }}>
				CRUD React + TS + Redux + Tremor!!
			</h1>
			<ListOfUsers />
		</>
	);
}

export default App;

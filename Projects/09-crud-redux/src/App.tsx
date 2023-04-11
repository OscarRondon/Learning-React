import { Toaster } from "sonner";
import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import { ListOfUsers } from "./components/ListOfUsers";

function App() {
	return (
		<>
			<h1 style={{ marginBottom: "20px" }}>
				CRUD React + TS + Redux + Tremor!!
			</h1>
			<ListOfUsers />
			<CreateNewUser />
			<Toaster richColors />
		</>
	);
}

export default App;

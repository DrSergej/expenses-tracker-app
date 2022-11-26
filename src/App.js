import "./App.css";
import Expenses from "./Components/Expenses";

function App() {
	const expenses = [
		{ title: "Car Insurance", amount: 299.99, date: new Date() },
		{ title: "New Smartphone", amount: 399.99, date: new Date() },
		{ title: "New TV", amount: 499.99, date: new Date() },
		{ title: "Toilet Paper", amount: 599.99, date: new Date() },
	];
	return (
		<div className="App">
			<Expenses expensesData={expenses} />
		</div>
	);
}

export default App;

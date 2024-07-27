import { Header } from "./components/PageHeader";
import { ProductTable } from "./components/ProductTable";

function OrderButton() {
	return <button className="order-button">Order Now</button>;
}

function App() {
	return (
		<main className="main-page">
			<Header />
			<ProductTable />
			<OrderButton />
		</main>
	);
}

export default App;

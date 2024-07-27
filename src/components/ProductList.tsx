import { products } from "../utils/data";
import { Product } from "./Product";

export function ProductTable() {
	const productMap = new Map();
	function handleProductSelection(event: React.FocusEvent) {
		console.log(event);
	}
	return (
		<table className="product-table">
			<thead>
				<th>Select Item</th>
				<th>Item Name</th>
				<th>Quantity</th>
				<th>Unit Price</th>
				<th>Total Price</th>
				<th>Instruction</th>
			</thead>
			<tbody>
				{products.map((product, index) => (
					<Product
						key={index}
						productDetail={product}
						onSelection={handleProductSelection}
					/>
				))}
			</tbody>
		</table>
	);
}

import { products } from "../utils/data";
import { Product } from "./Product";

export function ProductTable() {
	return (
		<table className="product-table">
			<thead>
				<tr>
					<th>Select Item</th>
					<th>Item Name</th>
					<th>Quantity</th>
					<th>Unit Price</th>
					<th>Total Price</th>
					<th>Instruction</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product, index) => (
					<Product
						key={index}
						productDetail={product}
					/>
				))}
			</tbody>
		</table>
	);
}

import { useReducer } from "react";
import { products } from "../utils/data";
import { ProductDetail } from "../utils/types";
import { Product } from "./Product";

type Action = {
	type: string;
};

function reducer(state: ProductDetail[], action: Action) {
	const { type } = action;
	switch (type) {
		default:
			return state;
	}
}

export function ProductTable() {
	const productMap = new Map();
	const [selectedProduct, dispatch] = useReducer(reducer, productMap);
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

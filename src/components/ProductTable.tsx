import { useState } from "react";
import { products } from "../utils/data";
import { ProductDetail } from "../utils/types";
import { Product } from "./Product";

export function ProductTable() {
	const [orderList, setOrderList] = useState<ProductDetail[] | []>([]);
	console.log(orderList);
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
					<Product key={index} productDetail={product} setOrderList={setOrderList} />
				))}
			</tbody>
		</table>
	);
}

import { ProductDetail } from "../utils/types";
import { ProductCount } from "./ProductCount";

export function Product({ productDetail }: { productDetail: ProductDetail }) {
	const { name, price, totalPrice } = productDetail;
	return (
		<tr>
			<td>
				<input type="checkbox" />
			</td>
			<td>{name}</td>
			<td>
				<ProductCount />
			</td>
			<td>{price}</td>
			<td>{totalPrice}</td>
			<td>
				<input type="text" />
			</td>
		</tr>
	);
}

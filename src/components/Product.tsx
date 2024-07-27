import { ProductDetail } from "../utils/types";
import { ProductCount } from "./ProductCount";

export function Product({
	productDetail,
	onSelection,
}: {
	productDetail: ProductDetail;
	onSelection: () => void;
}) {
	const { name, price, totalPrice } = productDetail;
	return (
		<tr>
			<td>
				<input type="checkbox" onChange={onSelection} />
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

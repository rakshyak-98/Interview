import { memo } from "react";
import { useProductDetails } from "../customHooks/useProductDetails";
import { ProductDetail } from "../utils/types";
import { ProductCount } from "./ProductCount";

export const Product = memo(function ({
	productDetail,
	setOrderList,
}: {
	productDetail: ProductDetail;
	setOrderList: React.Dispatch<React.SetStateAction<ProductDetail[]>>;
}) {
	const { name, price, totalPrice } = productDetail;
	const { count, handleChange, isChecked, setCount, updateTotalPrice } = useProductDetails(
		productDetail,
		setOrderList
	);

	return (
		<tr>
			<td>
				<input type="checkbox" checked={isChecked} onChange={handleChange} />
			</td>
			<td>{name}</td>
			<td>
				<ProductCount
					count={count}
					setCount={setCount}
					updateTotalPrice={updateTotalPrice}
				/>
			</td>
			<td>{price}</td>
			<td>{totalPrice}</td>
			<td>
				<input type="text" />
			</td>
		</tr>
	);
});

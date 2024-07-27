import { useState } from "react";
import { ProductDetail } from "../utils/types";
import { ProductCount } from "./ProductCount";

export function Product({
	productDetail,
	setOrderList,
}: {
	productDetail: ProductDetail;
	setOrderList: React.Dispatch<React.SetStateAction<ProductDetail[]>>;
}) {
	const { name, price, totalPrice } = productDetail;
	const [count, setCount] = useState(1);
	const [isChecked, setIsChecked] = useState(false);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const checked = event?.target.checked;
		setIsChecked(checked);
		setOrderList((prev) => {
			if (checked) {
				if (prev) {
					return [...prev, { name, price, totalPrice: price * count, quantity: count }];
				} else {
					return [{ name, price, totalPrice: price * count, quantity: count }];
				}
			} else {
				return prev.filter((item) => item.name !== name);
			}
		});
	}

	return (
		<tr>
			<td>
				<input type="checkbox" checked={isChecked} onChange={handleChange} />
			</td>
			<td>{name}</td>
			<td>
				<ProductCount count={count} setCount={setCount} />
			</td>
			<td>{price}</td>
			<td>{totalPrice}</td>
			<td>
				<input type="text" />
			</td>
		</tr>
	);
}

import { useCallback, useState } from "react";
import { ProductDetail } from "./../utils/types.d";

export function useProductDetails(
	productDetail: ProductDetail,
	setOrderList: React.Dispatch<React.SetStateAction<ProductDetail[]>>
) {
	const { name, price } = productDetail;
	const [count, setCount] = useState(1);
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = useCallback(function (event: React.ChangeEvent<HTMLInputElement>) {
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
	}, []);

	const updateTotalPrice = useCallback(() => {
		setOrderList((prev) => {
			return prev.map((product) => {
				if (product.name === name) {
					return {
						...product,
						totalPrice: product.price * count,
						quantity: count,
					};
				} else {
					return product;
				}
			});
		});
	}, []);
	return { count, setCount, updateTotalPrice, isChecked, handleChange };
}

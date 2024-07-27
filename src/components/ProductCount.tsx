export function ProductCount({
	count,
	setCount,
	updateTotalPrice,
}: {
	count: number;
	updateTotalPrice: () => void;
	setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
	return (
		<div className="product-count">
			<button
				onClick={() => {
					count > 1 && setCount(count - 1);
					updateTotalPrice();
				}}
			>
				-
			</button>
			<span>{count}</span>
			<button
				onClick={() => {
					setCount(count + 1);
					updateTotalPrice();
				}}
			>
				+
			</button>
		</div>
	);
}

export function ProductCount({
	count,
	setCount,
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
				}}
			>
				-
			</button>
			<span>{count}</span>
			<button onClick={() => setCount(count + 1)}>+</button>
		</div>
	);
}

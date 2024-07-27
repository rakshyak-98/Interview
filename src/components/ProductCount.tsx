export function ProductCount({
	count,
	setCount,
}: {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
	function handleCount() {
		if (count < 0) {
			setCount(0);
			return 0;
		}
		return count;
	}
	return (
		<div className="product-count">
			<button onClick={() => setCount(count - 1)}>-</button>
			<span>{handleCount()}</span>
			<button onClick={() => setCount(count + 1)}>+</button>
		</div>
	);
}

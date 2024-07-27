import { useState } from "react";
export function ProductCount() {
	const [count, setCount] = useState(1);
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

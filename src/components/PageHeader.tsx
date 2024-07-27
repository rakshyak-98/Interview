import { Navigate } from "react-router-dom";
export function Header() {
	return (
		<header className="main-header">
			<a href="/products" onClick={() => Navigate({ to: "/product-page" })}>
				Product Page
			</a>
			<a href="/order-page" onClick={() => Navigate({ to: "/order-page" })}>
				Order Page
			</a>
		</header>
	);
}

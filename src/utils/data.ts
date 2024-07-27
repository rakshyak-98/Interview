import { ProductDetail } from "./types";

export class Product {
	name: string;
	price: number;
	totalPrice: number;
	constructor(detail: ProductDetail) {
		const { name, price, totalPrice } = detail;
		this.name = name;
		this.price = price;
		this.totalPrice = totalPrice;
	}
}

export const products: ProductDetail[] | [] = [
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item1",
			price: 150,
			totalPrice: 150,
		},
	];

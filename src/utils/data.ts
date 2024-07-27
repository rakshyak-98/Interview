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
			name: "item2",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item3",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item4",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item5",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item6",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item7",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item8",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item9",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item10",
			price: 150,
			totalPrice: 150,
		},
		{
			name: "item11",
			price: 150,
			totalPrice: 150,
		},
	];

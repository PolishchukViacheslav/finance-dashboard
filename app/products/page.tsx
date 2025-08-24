import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
}

interface ProductsData {
	products: Product[];
}

export default async function Products() {
	let products;
	try {
		const productsData: ProductsData = await (
			await fetch("https://dummyjson.com/products")
		).json();
		products = productsData.products;
	} catch (error) {
		console.error("Error fetching products:", error);
		return <div>Error fetching products</div>;
	}

	return (
		<div className="flex flex-wrap gap-4 p-4">
			{products.map(product => (
				<Card key={product.id} className="max-w-400 w-full flex-1 min-w-sm">
					<CardHeader>
						<CardTitle>{product.title}</CardTitle>
						<CardDescription>{product.description}</CardDescription>
						<CardContent>
							<Button
								variant="secondary"
								className="w-full mt-4 cursor-pointer hover:bg-gray-500 hover:text-white transition-colors duration-300"
							>
								Buy for {product.price}
							</Button>
						</CardContent>
					</CardHeader>
				</Card>
			))}
		</div>
	);
}

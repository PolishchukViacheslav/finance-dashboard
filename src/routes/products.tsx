import { createFileRoute } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface ProductsData {
  products: Product[];
}

export const Route = createFileRoute('/products')({
  loader: async () => {
    const res = await fetch('https://dummyjson.com/products');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return (await res.json()) as ProductsData;
  },
  component: ProductsPage,
});

function ProductsPage() {
  const { products } = Route.useLoaderData();

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

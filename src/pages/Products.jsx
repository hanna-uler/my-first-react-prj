import { ProductList } from '../components/ProductList/ProductList';
import { getProducts } from '../fakeProductsApi';

export default function Products() {
  const products = getProducts();

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
import FeaturedProductsCarousel from '@/components/FeaturedProductsCarousel';
import ProductsCarousel from '@/components/ProductsCarousel';
import ProductsGuide from '@/components/ProductsGuide';

export default function Home() {
	return (
		<main>
			<FeaturedProductsCarousel />
			<ProductsGuide />
			<ProductsCarousel />
		</main>
	);
}

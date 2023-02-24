import Banner from '@/components/Banner';
import FeaturedProductsCarousel from '@/components/FeaturedProductsCarousel';
import ProductsCarousel from '@/components/ProductsCarousel';
import ProductsCategories from '@/components/ProductsCategories';
import ProductsGuide from '@/components/ProductsGuide';

export default function Home() {
	return (
		<main>
			<FeaturedProductsCarousel />
			<ProductsGuide />
			<ProductsCarousel />
			<ProductsCategories />
			<Banner />
		</main>
	);
}

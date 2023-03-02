import sweater01 from '@/../public/images/products/sweater/product_01.jpg';
import sweater01b from '@/../public/images/products/sweater/product_01b.jpg';
import sweaterSlide01 from '@/../public/images/products/sweater/slide_01.jpg';

import sweater02 from '@/../public/images/products/sweater/product_02.jpg';
import sweater02b from '@/../public/images/products/sweater/product_02b.jpg';
import sweaterSlide02 from '@/../public/images/products/sweater/slide_02.jpg';

import sweater03 from '@/../public/images/products/sweater/product_03.jpg';
import sweater03b from '@/../public/images/products/sweater/product_03b.jpg';
import sweaterSlide03 from '@/../public/images/products/sweater/slide_03.jpg';

import sweater04 from '@/../public/images/products/sweater/product_04.jpg';
import sweater04b from '@/../public/images/products/sweater/product_04b.jpg';
import sweaterSlide04 from '@/../public/images/products/sweater/slide_04.jpg';

import hoodie01 from '@/../public/images/products/hoodie/product_01.jpg';
import hoodie01b from '@/../public/images/products/hoodie/product_01b.jpg';
import hoodieSlide01 from '@/../public/images/products/hoodie/slide_01.jpg';

import hoodie02 from '@/../public/images/products/hoodie/product_02.jpg';
import hoodie02b from '@/../public/images/products/hoodie/product_02b.jpg';
import hoodieSlide02 from '@/../public/images/products/hoodie/slide_02.jpg';

import hoodie03 from '@/../public/images/products/hoodie/product_03.jpg';
import hoodie03b from '@/../public/images/products/hoodie/product_03b.jpg';
import hoodieSlide03 from '@/../public/images/products/hoodie/slide_03.jpg';

import hoodie04 from '@/../public/images/products/hoodie/product_04.png';
import hoodie04b from '@/../public/images/products/hoodie/product_04b.jpg';
import hoodieSlide04 from '@/../public/images/products/hoodie/slide_04.jpg';

import shirt01 from '@/../public/images/products/shirt/product_01.jpg';
import shirt01b from '@/../public/images/products/shirt/product_01b.jpg';
import shirtSlide01 from '@/../public/images/products/shirt/slide_01.jpg';

import shirt02 from '@/../public/images/products/shirt/product_02.jpg';
import shirt02b from '@/../public/images/products/shirt/product_02b.jpg';
import shirtSlide02 from '@/../public/images/products/shirt/slide_02.jpg';

import shirt03 from '@/../public/images/products/shirt/product_03.jpg';
import shirt03b from '@/../public/images/products/shirt/product_03b.jpg';
import shirtSlide03 from '@/../public/images/products/shirt/slide_03.jpg';

import shirt04 from '@/../public/images/products/shirt/product_04.jpg';
import shirt04b from '@/../public/images/products/shirt/product_04b.jpg';
import shirtSlide04 from '@/../public/images/products/shirt/slide_04.jpg';
import { IProduct } from '@/common/interfaces';

const PRODUCTS: IProduct[] = [
	{
		id: 0,
		name: 'Teal Sweater',
		price: 40,
		discount: 10,
		color: 'teal',
		category: 'sweater',
		image: sweater01,
		altImage: sweater01b,
		slide: sweaterSlide01,
	},
	{
		id: 1,
		name: 'Ocean Blue Sweater',
		price: 45,
		discount: 25,
		color: 'blue',
		category: 'sweater',
		image: sweater02,
		altImage: sweater02b,
		slide: sweaterSlide02,
	},
	{
		id: 2,
		name: 'Red Sweater',
		price: 45,
		discount: 25,
		color: 'brown',
		category: 'sweater',
		image: sweater03,
		altImage: sweater03b,
		slide: sweaterSlide03,
	},
	{
		id: 3,
		name: 'Brown Sweater',
		price: 40,
		discount: 30,
		color: 'red',
		category: 'sweater',
		image: sweater04,
		altImage: sweater04b,
		slide: sweaterSlide04,
	},

	{
		id: 4,
		name: 'Gray Hoodie',
		price: 60,
		discount: 30,
		color: 'gray',
		category: 'hoodie',
		image: hoodie01,
		altImage: hoodie01b,
		slide: hoodieSlide01,
	},
	{
		id: 5,
		name: 'Light Blue Hoodie',
		price: 55,
		discount: 0,
		color: 'blue',
		category: 'hoodie',
		image: hoodie02,
		altImage: hoodie02b,
		slide: hoodieSlide02,
	},
	{
		id: 6,
		name: 'Solid Pink Hoodie',
		price: 50,
		discount: 5,
		color: 'pink',
		category: 'hoodie',
		image: hoodie03,
		altImage: hoodie03b,
		slide: hoodieSlide03,
	},
	{
		id: 7,
		name: 'Bright Orange Hoodie',
		price: 60,
		discount: 30,
		color: 'orange',
		category: 'hoodie',
		image: hoodie04,
		altImage: hoodie04b,
		slide: hoodieSlide04,
	},

	{
		id: 8,
		name: 'Light Blue Collar Shirt',
		price: 30,
		discount: 10,
		color: 'blue',
		category: 'shirt',
		image: shirt01,
		altImage: shirt01b,
		slide: shirtSlide01,
	},
	{
		id: 9,
		name: 'Light Blue Collar Shirt',
		price: 25,
		discount: 5,
		color: 'blue',
		category: 'shirt',
		image: shirt02,
		altImage: shirt02b,
		slide: shirtSlide02,
	},
	{
		id: 10,
		name: 'White Collar Shirt',
		price: 20,
		discount: 0,
		color: 'white',
		category: 'shirt',
		image: shirt03,
		altImage: shirt03b,
		slide: shirtSlide03,
	},
	{
		id: 11,
		name: 'Red Blue Plaid Shirt',
		price: 35,
		discount: 20,
		color: 'blue',
		category: 'shirt',
		image: shirt04,
		altImage: shirt04b,
		slide: shirtSlide04,
	},
];

export default PRODUCTS;

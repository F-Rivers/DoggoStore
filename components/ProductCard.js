import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";
import React from "react";

const ProductCard = ({ product }) => {
	const { handle, title } = product.node;
	const { altText, originalSrc } = product.node.images.edges[0].node;
	const price = product.node.priceRange.minVariantPrice.amount;
	const [darkToggle, setDarkToggle] = React.useState(false);

	return (
		<>
			<div className='bg-sky dark:bg-gray text-center'>
				<Link href={`/products/${handle}`}>
					<a className='group'>
						<div className='w-full bg-black rounded-3xl overflow-hidden'>
							<div className='relative group-hover:opacity-75 h-72'>
								<Image
									src={originalSrc}
									alt={altText}
									layout='fill'
									objectFit='cover'
								/>
							</div>
						</div>
						<h3 className='mt-4 text-lg font-medium text-black'>{title}</h3>
						<p className='mt-1 text-small text-black'>
							{formatter.format(price)}
						</p>
					</a>
				</Link>
				{/* <div className='bg-gray'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
						<h2 className='text-2xl font-bold text-graydark'>Collections</h2>
						<div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
							<div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
								<Image
									src={originalSrc}
									alt={altText}
									layout='fill'
									objectFit='cover'
								/>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</>
	);
};
export default ProductCard;

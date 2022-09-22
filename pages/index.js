import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import "../styles/Home.module.css";
import Hero from "../components/Hero";
import Head from "next/head";
import React from "react";

export default function Home({ products }) {
	const [darkToggle, setDarkToggle] = React.useState(false);
	return (
		<>
			<div className=''>
				<Head>
					{/* title on page tab, need to add brand icon */}
					<title>doggo</title>
					<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
					<meta
						httpEquiv='Content-Type'
						content='text/html; charset=ISO-8859-1'
					/>
					<meta
						name='description'
						content='An eCommerce Store for purchasing Pet products, built using Next.js, Shopify, and TailwindCSS.'
					/>
					<meta property='og:title' content='Shopify eCommerce Store' />
					<meta property='og:type' content='website' />
					<meta property='og:url' content='https://www.myroute.dev' />
					<meta
						property='og:image'
						content='https://www.myroute.dev/share.png'
					/>
					<meta
						property='og:description'
						content='An eCommerce Store for purchasing Pet products, built using Next.js, Shopify, and TailwindCSS. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps, and HeadlessUI'
					/>
					<meta property='og:locale' content='en_US' />
					<meta property='og:site_name' content='Shopify eCommerce Store' />
				</Head>
				<Hero />
				<ProductList products={products} />
			</div>

			{/* creates the dark mode toggle */}
			<div
				className={`h-screen w-full flex items-center justify-center bg-gray flex-col ${
					darkToggle && "dark"
				}`}
			>
				{/* creates the checkbox that when checked, overrides the current css and implements the 'dark:' class */}
				<label className='toggleDarkBtn flex items-center justify-center'>
					<input type='checkbox' onClick={() => setDarkToggle(!darkToggle)} />
					<div className='text-black dark:text-white font-bold'>Dark Mode</div>
					<span className='slideBtnTg round'></span>
				</label>
				<div className='max-w-sm rounded overflow-hidden bg-gray p-5 mt-4 text-white dark:bg-graydark'>
					{/* <img
						className='w-full'
						src='https://v1.tailwindcss.com/img/card-top.jpg'
						alt='Sunset in the mountains'
					/> */}
					{/* random text to test the color change */}
					<div className='px-6 py-4'>
						<div className='text-black dark:text-white font-bold text-xl mb-2'>
							The Coldest Sunset
						</div>
						{/* random text to test the color change */}

						<p className='text-white dark:text-sky'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatibus quia, nulla! Maiores et perferendis eaque,
							exercitationem praesentium nihil.
						</p>
					</div>
					{/* random text to test the color change */}
					<div classNamw='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							#photography
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
// makes the website rebuild when new products are added
// 09-19-22: not updating or not updating quickly (I reset the deployment in order to get the changes to sync)
export async function getStaticProps() {
	const products = await getProductsInCollection();

	return {
		// will be passed to the page component as props
		props: { products },
	};
}

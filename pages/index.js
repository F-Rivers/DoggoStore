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

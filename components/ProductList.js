import React from "react";
import "../styles/Home.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
	const [darkToggle, setDarkToggle] = React.useState(false);
	return (
		<>
			<div
				className={`h-full w-full items-center justify-center bg-blue ${
					darkToggle && "dark"
				}`}
			>
				<label className='toggleDarkBtn flex items-center'>
					{/* this button lives on top of the products card */}
					{/* useEffect () => setDarkToggle(!darkToggle)} */}
					<div className='text-black dark:text-white font-bold'>Dark Mode</div>
					<span className='slideBtnTg round'></span>
				</label>

				<div className='h-full w-full items-center justify-center bg-blue  dark:bg-graydark'>
					<h2 className='text-2xl font-extrabold text-black mb-6 dark:text-sky'>
						Products
					</h2>
					<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
						{/* displays all products in the shopify store, products are fetched by key/id method */}
						{products.map((product) => (
							<ProductCard key={product.node.id} product={product} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductList;

import Link from "next/link";
import "../styles/Home.module.css";
import React from "react";

const Hero = () => {
	const [darkToggle, setDarkToggle] = React.useState(false);
	return (
		<>
			<div
				className={`h-screen w-full flex items-center justify-center bg-blue ${
					darkToggle && "dark"
				}`}
			>
				<label className='toggleDarkBtn flex items-center'>
					<input type='checkbox' onClick={() => setDarkToggle(!darkToggle)} />
					<div className='text-black dark:text-white font-bold'>Dark Mode</div>
					<span className='slideBtnTg round'></span>
				</label>

				{/* // class names implement the tailwind screen size parameters, colors, and font from tailwind.config.js */}
				<div className='my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center bg-pink dark:bg-graydark'>
					<h1 className='font-extrabold text-black'>
						<p className='text-xl sm:text-6xl md:text-7xl dark:text-sky'>
							DogGo
						</p>
						<p className='text-transparent bg-clip-text text-darkblue text-4xl sm:text-3xl md:text-4xl dark:text-blue'>
							The store for pets.
						</p>
					</h1>
					<h2 className='mt-3 max-w-md mx-auto text-darkblue sm:text-lg md:mt-5 md:text-xl md:max-x-3xl dark:text-blue'>
						Pet Friendly eCommerce
					</h2>
					<div className='mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8'>
						<Link href='#'>
							{/* add link for sign up page */}
							<a className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-black bg-graylight hover:bg-blue'>
								Sign Up
							</a>
						</Link>
						<Link href='#'>
							{/* add link for sign in */}
							<a className='inline-flex items-center font-semibold h-12 px-6 mr-6 py-3 border-transparent rounded-md text-black hover:text-blue hover:bg-graylight dark:bg-graylight dark:hover:bg-blue dark:text-black'>
								Sign In
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

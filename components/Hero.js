import Link from "next/link";

const Hero = () => {
	return (
		// implements the tailwind screen size parameters
		<div className='my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center'>
			<h1 className='font-extrabold text-black'>
				<p className='text-xl sm:text-6xl md:text-7xl'>DogGo</p>
				<p className='text-transparent bg-clip-text text-darkblue text-4xl sm:text-3xl md:text-4xl'>
					The store for pets.
				</p>
			</h1>
			<h2 className='mt-3 max-w-md mx-auto text-darkblue sm:text-lg md:mt-5 md:text-xl md:max-x-3xl'>
				Pet Friendly eCommerce
			</h2>
			<div className='mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8'>
				<Link href='#'>
					{/* add link for sign up page */}
					<a className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-light hover:bg-blue'>
						Sign Up
					</a>
				</Link>
				<Link href='#'>
					{/* add link for sign in */}
					<a className='inline-flex items-center font-semibold text-black hover:text-blue'>
						Sign In
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Hero;

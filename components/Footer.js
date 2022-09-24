const navigation = [
	{ name: "About", href: "#" },
	{ name: "Shop", href: "#" },
	{ name: "Jobs", href: "#" },
	{ name: "Terms and Conditions", href: "#" },
	// add link back to top
	// add link to home
];

const Footer = () => {
	return (
		<footer className='bg-white'>
			<div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
				<nav className='flex flex-wrap justify-center'>
					{navigation.map((item, index) => (
						<div className='px-6 py-2' key={index}>
							<a href={item.href} className='text-graydark hover:text-blue'>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<p className='mt-8 text-center text-graydark'>
					&copy; 2022 Custom Copyright, All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;

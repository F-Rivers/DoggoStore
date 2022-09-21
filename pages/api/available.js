// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// need to implement async testing, see README -> #Testing

export default async function available(req, res) {
	const {
		query: { id },
	} = req;

	const domain = process.env.SHOPIFY_STORE_DOMAIN;
	const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;
	// the ${domain} is the shopify store, the env.local file is being called on to supply the domain name
	// 2022-07 is the current version of the graphql shopify app
	async function ShopifyData(query) {
		const URL = `https://${domain}/api/2022-07/graphql.json`;

		const options = {
			endpoint: URL,
			method: "POST",
			headers: {
				"X-Shopify-Storefront-Access-Token": storefrontAccessToken,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query }),
		};

		// if 'products cannot be fetched' console.log this try-catch method for help with errors
		try {
			const data = await fetch(URL, options).then((response) => {
				return response.json();
			});
			return data;
		} catch (error) {
			throw new Error("Products not fetched");
		}
	}

	// add async testing for getProduct
	async function getProduct(handle) {
		// gives the search input for the graphql shopify app
		const query = `
    {
      productByHandle(handle: "${handle}") {
        id
        variants(first: 25) {
          edges {
            node {
              id
              availableForSale
            }
          }
        }
      }
    }`;

		const response = await ShopifyData(query);
		const product = response.data.productByHandle
			? response.data.productByHandle
			: [];
		return product;
	}
	const products = await getProduct(id);
	res.status(200);
	res.json(products);
}

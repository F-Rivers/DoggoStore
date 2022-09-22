# DoggoStore

https://franks-teststore.myshopify.com/

created product categories for bed, bowl, collar, leash, brush, and harness
created products for each category created products for dogs and cats

## 500 error

https://rmdevs.com/performance/shopping/summary [13:54:44] LOG.error: Undefined
array key 0 {"userId":29,"exception":{}}

https://rmdevs.com/settings/location [13:58:34] LOG.error: Undefined array key 0
(View:
/home/forge/rmdevs.com/resources/views/livewire/settings-location.blade.php)
{"view":{"view":"\/home\/forge\/rmdevs.com\/vendor\/laravel\/framework\/src\/Illuminate\/Collections\/Collection.php","data":[]},"userId":29,"exception":{}}

Why the Shopify/Next.js/Tailwind CSS tech stack?

- Loading, development, and deployment speed
  - faster loading = lower bounce rate = higher conversion
  - faster development = lower development costs
  - faster deployment = more iterations

# environment set up

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm run dev
```

# Deployment Fix

deployment settings on Vercel was stringifying a string, leading to a failure to
fetch products. fixed by deleting quotes on environmental variables

# Testing

## Resources

https://nextjs.org/docs/testing#jest-and-react-testing-library

## Step 1

Run terminal command:

```
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

## Step 2

create a file in the root named jest.config.js add the following:

```js
// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
```

## Step 3

add the following script in package.json

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test": "jest --watch"
}
```

## Step 4

- create a file named [_ _ tests_ _] (no spaces)
- add tests

# To-Do

- add comments to ./pages
- add icon to page tab
- add conditional screen rendering for cards

# Git Maintenance

to update remote branches

```
git remote update origin --prune
```

# styling

-

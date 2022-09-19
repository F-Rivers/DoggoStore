# DoggoStore

https://franks-teststore.myshopify.com/

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

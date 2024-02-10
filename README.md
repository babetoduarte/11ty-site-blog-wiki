# 11ty-site-blog-wiki

This is a template repository for a **very simple** statically-generated website using [eleventy](https://www.11ty.dev/) with the following features:
- Main landing page listing latest blog posts and latest wiki articles
- A Blog section listing all blog posts
- A Wiki section listing all wiki articles
- An About page
- Reusable navigation bar (section hyperlinks) for all pages
- Reusable header and footer partial elements for all pages
- A working generic `favicon.ico`
- Empty `_drafts` folder which gets ignored when building the site to store your draft blog posts and wiki articles

As you will notice, the site has no styling (blank `style.css` file), and ships without any JavaScript (blank `script.js` file). This is meant to be a working blank canvas that you can make your own.

This project is readily deployable using [Netlify](https://www.netlify.com/)!

## Dependencies
This project depends on two `npm` packages:
 - [@11ty/eleventy](https://www.npmjs.com/package/@11ty/eleventy) >= 2.0.0
 - [luxon](https://www.npmjs.com/package/luxon) >= 3.4.0

Therefore, you must have [`npm` and `nodejs`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

## Installing
To install these dependencies locally, navigate to the project's root and run the following commands:

```bash
$ npm install
```

## Building
To build the static website locally using `eleventy`, navigate to the project's root and run the following commands:

```bash
$ npm build
```

## Running 
To run the static website locally, navigate to the project's root and run the following commands:

```bash
$ npm start
```

## Netlify
This project is also ready to be deployed using [Netlify](https://docs.netlify.com/integrations/frameworks/eleventy/)

## Screenshots

![0-Site_Home](https://github.com/babetoduarte/11ty-site-blog-wiki/assets/2272956/952ac4e6-f035-46d2-8ab1-0511a6d45fe6)
![1-Blog_Section](https://github.com/babetoduarte/11ty-site-blog-wiki/assets/2272956/c07fd58b-cb51-4f2f-9ddd-38348ca98ff2)
![2-Blog_Post](https://github.com/babetoduarte/11ty-site-blog-wiki/assets/2272956/d54e4f19-e57f-4dab-aace-1c26ba068605)
![3-Wiki_Section](https://github.com/babetoduarte/11ty-site-blog-wiki/assets/2272956/dfdac758-611f-4e7c-a2f4-332814ff2fb7)
![4-Wiki_Article](https://github.com/babetoduarte/11ty-site-blog-wiki/assets/2272956/d24e0fb4-1f0f-46cf-8e45-cea6324cef01)
![5-About_Page](https://github.com/babetoduarte/11ty-site-blog-wiki/assets/2272956/c795efc8-315e-4248-b833-c055e3dbf90b)

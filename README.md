## Problem

- Create the following APP: [Products WebApp](https://glistening-licorice-ce9cdb.netlify.app/) using the Provided Boilerplate,

**_Note_**: Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to see data on this website.

## [Video Explanation](https://masai-course.s3.ap-south-1.amazonaws.com/problem/rct-101/rct-101.e1.mp4)

## Getting Started

1. Fork this repository [https://github.com/riteshf/rct-101-e2.git](https://github.com/riteshf/rct-101-e2)
2. Clone the Forked repository.
   - **_Note_**: This Clone repository should be on your github account.
3. navigate to the folder `cd rct-101-e2`
4. npm install
5. npm start
6. Make sure your `json-server` is running on port `8080`, `db.json` file is provided.

**_Note_**: Libraries are not installed, you need to install `axios` and `chakra-ui` yourself.

## Understanding Component Structure

- [App](./src/App.js)
  - [Products](./src/components/Products.jsx)
    - [AddProduct](./src/components/AddProduct.jsx)
    - [Product](./src/components/Product.jsx) List
    - [Pagination](./src/components/Pagination.jsx)

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)
  - Initial Products should be fetched using json-server.
  - Make sure json-server is running on port 8080.

**Note** - `Make sure you use only the given data and dont create new data. Changing data might result in giving you zero marks`

## Features to build

1. App should fetch `products` using axios as soon as Page Loads
   - Default Page Limit is `3`, can be changed from `Pagination` Component.
   - Default Page Number is `1`, changable from `Pagination` Component as per the button name.
2. `Add New Product` Button
   - When Clicked should load a `Modal` component.
   - Modal should have similar fields as in the Deployed Website.
   - Create Button should run validation for all fields, empty values should not be able to add.
   - Create Button should call `POST` api to store product to `json-server`.
     - You can hard-code Image URl.
     - this should also add produt to the product list at the end.

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

## Knowledge Required

1. [React](https://reactjs.org/)
   - useEffect
   - useState
   - useRef
2. [axios](https://axios-http.com/)
   - GET
   - POST
3. [Chakra-UI](https://chakra-ui.com/)
   - Container
   - Stack
   - Button
     - ButtonGroup
   - Modal
   - FormControl - FormLabel - Input

**Note** - This might not be all the things, you are free to use other components.

#### Submission

- You need to Submit Github Link as well as netify link.
- Make sure you use masai github account provided by MasaiSchool(submit link to root folder of your repository on github).
- Make Sure you have netify account, else you will be getting zero marks as netify takes down your app in few days if your account does not exist.


# frontend-intern-assessment
An empty repo for the frontend dev assessment
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> ff2cad7 (switch_to_js)

# SommaStore

SommaStore is a sample e-commerce web application built with Vite, React, and Tailwind CSS. The project utilizes Jotai for state management and offers a simple online shopping experience. This README provides information on how to set up and run the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Design Structure](#design-structure)
- [Technologies Used](#technologies-used)
- [How They Interact](#how-they-interact)
- [Remote Dummy JSON API](#remote-dummy-json-api)
- [Data Fetching Process](#data-fetching-process)
- [Data Fetching, Handling, and Interaction](#data-fetching-handling-and-interaction)

## Getting Started

To run SommaStore on your local machine, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/SommaStore.git


## Navigate to the project directory:

cd my-project
 ##   Install dependencies:
 npm install
## Start the development server:
npm run dev

## Design Structure

The project's source code (`src` folder) is organized as follows:

- **`app.jsx`**: This is the entry point of the application. It fetches data from the dummy API and manages state using Jotai. It also handles routing using React Router.

- **`pages` folder**: This folder contains the route components that correspond to different pages of the application. The pages include:
  - `Home.js`: The landing page displaying a list of products and a category menu to filter products based on categories.
  - `Product_Details.js`: Displays detailed information about a chosen product.
  - `CheckOut.js`: Represents the checkout or cart page.
  - `CheckOut_Success.js`: Displays a success message after successful payment.

- **`components` folder**: This folder contains reusable components that can be used across different pages and components. Components include:
  - `ProductCard.js`: Displays product information in a card format.
  - `Slider.js`: A carousel component for viewing hot products.
  - `Categories.js`: A component for displaying a categorized menu.
  - `Layout.js`: Contains the header and footer components used across the site.

- **`assets` folder**: This folder contains custom hooks and Jotai atom functions used for retrieving data. It ensures clean separation of concerns for data-related operations.

- **`public` folder**: Contains icons, GIFs, and other static assets used in the site.

- **`error` folder**: Contains an `404.js` page, which is displayed when a user navigates to a non-existent route.

### Page Structure

The application follows a clear page structure:

1. **Home Page (`Home.js`)**:
   - Displays a list of products fetched from the API.
   - Includes a category menu for filtering products by categories.

2. **Product Details Page (`Product_Details.js`)**:
   - Displays detailed information about a selected product.

3. **Checkout Page (`CheckOut.js`)**:
   - Represents the cart or checkout page where users can review their selected products.

4. **Checkout Success Page (`CheckOut_Success.js`)**:
   - Displays a success message after successful payment.


## Technologies Used

- **Vite**: A fast build tool that sets up your project with instant hot module replacement.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for designing modern websites.
- **Jotai**: A simple and scalable state management library for React applications.

## How They Interact
The application fetches product data from a remote API using `fetch`, stores it using Jotai's state management, and displays the data using React components. The Tailwind CSS classes ensure consistent styling and responsive design.

## Remote Dummy JSON API
SommaStore fetches product data from a remote dummy JSON API. The API is used to simulate a database of products. The URL for fetching the products is: `https://dummyjson.com/products`.

## Data Fetching Process

The SommaStore application fetches product data from a remote dummy JSON API using the following process:

1. **Dependencies Used**: The data fetching process involves the usage of the following dependencies:
   - **Jotai**: A simple and scalable state management library for React applications.
   - **React**: A JavaScript library for building user interfaces.
   - **Effect Hook**: A React hook that lets you perform side effects in function components.

## Data Fetching, Handling, and Interaction

In SommaStore, the application fetches, handles, and interacts with product data seamlessly:

1. **Fetching Data**: The application initiates an HTTP GET request to the remote dummy JSON API using the `fetch` function. This process retrieves product data from the API endpoint `https://dummyjson.com/products`.

2. **Handling Data**: Upon receiving the product data in JSON format, the application utilizes the `useState` hook from React to manage the data's state. The `useState` hook establishes the initial state and dynamically updates it as the data arrives.

3. **Storing Data with Jotai**: Jotai, a powerful state management library, is employed to effectively store and distribute the fetched product data across different components of the application. The product data resides within a Jotai atom, guaranteeing that modifications to the data are automatically reflected throughout the entire app.

4. **Rendering Components**: With the data fetched and stored, React components come into play. Components like `List_Product` and `Card` rely on the data stored within the Jotai atom to render the product information on the user interface.

5. **Interacting with Components**: Through a synergy of Jotai's state management, React's rendering capabilities, and the effect hook for data fetching, SommaStore achieves efficient retrieval, storage, and presentation of product data from the remote dummy JSON API.

This structured approach guarantees consistent data flow, resulting in a smooth and responsive user experience.

---







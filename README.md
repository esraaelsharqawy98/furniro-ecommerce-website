# eCommerce React Application

A modern eCommerce application built with React, Zustand for state management, and CSS modules for styling. This project includes various pages and features for a complete shopping experience.

## Table of Contents

   1. [Features](#Features)
   2. [Installation](#Installation)
   3. [Usage](#Usage)
   4. [Folder Structure](#Folder-Structure)
   5. [Technology Stack](#Technology-Stack)
   6. [Routing](#Routing)
   7. [State Management](#State-Management)
   8. [Styling](#Styling)

### Features

   - Category Page: Display a list of product categories.
   - Shop Page: List of products with filtering and sorting options.
   - Product Details Page: Detailed view of a product with images and description.
   - Cart Page: View and manage items in the shopping cart.
   - Cart Menu: Quick access to cart details from anywhere in the application.
   - Contact Page: Contact form for user inquiries.
   - Responsive Design: Optimized for both desktop and mobile devices.

### Installation

To get started with this project, follow these steps:

   1. Clone the Repository
```bash
 git clone https://github.com/your-username/ecommerce-react-app.git
```
2. Navigate to the Project Directory

```bash
cd ecommerce-react-app
```
3. Install Dependencies

```bash
npm install
```
4. Start the Development Server

```bash
    npm run dev
```
This will start the Vite development server and open the application in your default browser.

### Usage

   - Development: Run npm run dev to start the development server and view the application locally.
  - Build: Run npm run build to create a production build of the application.
  - Preview: Run npm run preview to preview the production build locally.

### Folder Structure

```less

src/
  components/           // Reusable UI components
    Header.jsx
    Footer.jsx
    CartMenu.jsx
  layout/               // Layout-related components
    Layout.jsx
  pages/                // Page components
    CategoryPage.jsx
    ShopPage.jsx
    ProductDetailsPage.jsx
    CartPage.jsx
    ContactPage.jsx
  store/                // Zustand state management
    cartStore.jsx
  App.jsx               // Main application component with routing
  index.css             // Global styles
  index.js              // Entry point
  
```

### Technology Stack

   - React: Frontend library for building user interfaces.
   - Zustand: State management library for managing application state.
   - Vite: Build tool for faster development and optimized builds.
   - CSS Modules: Scoped CSS for styling components.

### Routing

The application uses react-router-dom for routing. The routes are defined in App.jsx, with a central Layout component that includes common elements like Header and Footer.
State Management

State management is handled using Zustand. The state stores for managing the cart and other application state are located in the store/ directory.
Styling

Styling is managed using CSS modules for scoped and modular styles. Each component has its own corresponding CSS module file.


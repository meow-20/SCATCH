
# E-Commerce Website for Bag Retailer

An E-Commerce platform built using **Express**, **Multer**, **Mongoose**, **EJS**, and **bcryptjs**, designed for a bag retail business. This project supports functionalities for an **Admin/Owner** to manage the store and **Users/Customers** to shop for bags seamlessly.

## Features

### Admin/Owner Features
- **Product Management**: Add, update, and delete products.
- **Order Management**: View and manage customer orders.
- **Admin Dashboard**: Access business metrics and sales data.

### User/Customer Features
- **User Registration and Login**: Secure authentication using `bcryptjs` for password encryption.
- **Profile Management**: View and edit personal details.
- **Product Catalog**: Browse available bags on the shop page.
- **Shopping Cart**: Add and manage products in the cart.
- **Logout**: Safely log out from the account.

## Technologies Used
- **Express**: For building the server and managing routes.
- **Multer**: For handling image uploads (e.g., product images).
- **Mongoose**: For managing the MongoDB database.
- **EJS (Embedded JavaScript)**: For dynamic and responsive templating.
- **bcryptjs**: For encrypting and decrypting passwords securely.

## Installation and Setup

1. **Clone the Repository**
   git clone https://github.com/your-username/SCATCH.git
   cd SCATCH

2. **Install Dependencies**
   npm install

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory with the following:
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key

4. **Start the Server**
   npm start
   The application will be running on `http://localhost:3000`.

## Folder Structure
```
📂 SCATCH
├── 📂 public              # Static files (CSS, JS, Images)
├── 📂 views               # EJS templates
├── 📂 config              # for multer & mongoose config
├── 📂 utils               # for generate Tokens for cookie
├── 📂 models              # Mongoose models (User, Product, Order)
├── 📂 routes              # Express routes
├── 📂 controllers         # Application logic
├── 📂 middleware          # Custom middleware (auth, file upload)
├── .env                   # Environment variables
├── app.js              # Main server file
└── package.json           # Node.js dependencies
```
## Database Models

### User Model
- **Fields**: Name, Email, Password (encrypted with `bcryptjs`), Role (Admin/User).
- **Features**: Authentication and authorization.

### Product Model
- **Fields**: Name, Price, Description, Category, Image.

### Order Model
- **Fields**: User ID, Product Details, Quantity, Total Price, Status.

## How to Use

### For Admin:
1. Login with Admin credentials only in development phase
2. Access the dashboard to manage products and orders.

### For Users:
1. Register and login to access your account.
2. Browse the shop page to view products.
3. Add products to your cart and proceed to checkout.

## Future Improvements
- Add payment gateway integration (e.g., Stripe, PayPal).
- Implement search and filter functionalities.
- Add order tracking for users.

## Contributions
Contributions are welcome! Please fork the repository and create a pull request to propose changes.

## Contact
For questions or support, feel free to contact me:
- **Email**: bansaripanchal2021@gmail.com
- **GitHub**: [Bansari-Panchal](https://github.com/meow-20)

You can now copy this as a single block for your project! Let me know if further edits are needed.

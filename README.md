# 🛒 Modern Full-Stack E-Commerce Marketplace

A sleek, robust, and feature-rich e-commerce marketplace built from the ground up to provide a seamless shopping experience. This platform features secure authentication, dynamic product filtering, an intuitive shopping cart, and a comprehensive admin interface for managing inventory.

## ✨ Key Features

- **🔐 Secure Authentication** - JWT-based login and registration system
- **👨‍💼 Admin Dashboard** - Centralized control for product management and monitoring
- **🔍 Dynamic Catalog** - Real-time product search, filtering, and categorization
- **🛒 Seamless Checkout** - Smooth cart management with "save for later" functionality
- **📱 Responsive Design** - Fully optimized UI tailored for desktop and mobile devices
- **☁️ Cloud Image Management** - Cloudinary integration for efficient image hosting
- **💾 Persistent State** - Zustand-powered state management

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern JavaScript UI library
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Axios** - HTTP client library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Cloudinary** - Cloud image management
- **JWT** - Secure authentication tokens

## 📋 Prerequisites

- Node.js v14+
- npm or yarn
- MongoDB instance (local or Atlas)
- Cloudinary account (for image uploads)

## ⚙️ Installation & Setup

### 1. Clone & Navigate
```bash
git clone https://github.com/talaaltariq/ecommerce-fullstack-design.git
cd fullstack-ecommerce-marketplace
```

### 2. Environment Configuration

Create a `.env` file in the **backend** directory:
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secure_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

### 3. Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 4. Run the Application

Open two terminal instances:

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
# Runs on http://localhost:5173
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
# Runs on http://localhost:5000
```

## 📁 Project Structure

```
fullstack-ecommerce-marketplace/
├── frontend/                    # React.js + Vite frontend
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── pages/              # Page components
│   │   ├── stores/             # Zustand state management
│   │   └── lib/                # Utilities & API config
│   └── package.json
│
├── backend/                     # Express.js backend
│   ├── src/
│   │   ├── controllers/        # Business logic
│   │   ├── models/             # MongoDB schemas
│   │   ├── routes/             # API endpoints
│   │   ├── middleware/         # Express middleware
│   │   └── lib/                # Database & utilities
│   └── package.json
│
└── README.md
```

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

### Save for Later
- `GET /api/saveForLater` - Get saved items
- `POST /api/saveForLater` - Save item for later
- `DELETE /api/saveForLater/:id` - Remove from saved

## 🔐 Authentication Flow

1. User registers or logs in
2. JWT token is generated and stored in HTTP-only cookies
3. Token is validated on protected routes via middleware
4. User credentials secured with bcrypt hashing

## 📦 Build & Deployment

### Frontend Build
```bash
cd frontend
npm run build
# Creates optimized production build in dist/
```

### Backend Production
```bash
cd backend
npm start
# Runs production server
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Talal Tariq** DHC-1521

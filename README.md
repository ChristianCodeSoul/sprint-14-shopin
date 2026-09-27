# ShopIn.

ShopIn is a full-stack ecommerce application built for **Prodesk IT Sprint 14**.

The goal of this sprint was to build a working "walking skeleton" where the frontend, backend, authentication, database, and core shopping flow all work together.

## What it does

* User registration and login
* JWT-based authentication
* Product listing from MongoDB
* Add products to cart
* Update cart quantities
* Remove and clear cart items
* Place orders
* View profile and update personal details
* View previous orders
* Protected backend APIs
* Responsive frontend
* GitHub Actions CI

## Tech Stack

### Frontend

* Next.js
* React
* Redux Toolkit
* RTK Query
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

### Development

* Git & GitHub
* GitHub Actions
* Vercel
* Render

## Main Flow

```text
User
 ↓
Next.js Frontend
 ↓
Redux Toolkit / RTK Query
 ↓
Express API
 ↓
JWT Authentication
 ↓
MongoDB
```

Products, cart items, users, and orders are stored and handled through the backend rather than only in the browser.

## Running Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend runs on:

```text
http://localhost:4000
```

Create a `.env` file inside `backend`:

```env
MONGO_URI=connection_string
JWT_SECRET=jwt_secret
PORT=4000
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:3000
```

Create `.env.local` inside `frontend`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

## CI

GitHub Actions runs on pushes and pull requests targeting `main`.

The workflow checks:

* Frontend lint
* Frontend tests
* Frontend production build
* Backend tests

The workflow is located at:

```text
.github/workflows/ci.yml
```

## Sprint 14 Focus

This project was built around the main Sprint 14 requirements:

1. Connect the frontend with backend controllers.
2. Add authentication and protected API routes.
3. Set up an automated GitHub Actions workflow.
4. Prepare the application for production deployment.



# MERN Expenses Tracker

A full-stack web application for tracking daily expenses. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, this application allows users to manage their personal finances by adding, viewing, and categorizing expenses.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Add new expenses with details like amount, description, and category.
- View a list of all expenses.
- Filter expenses by date, category, or amount.
- Visualize expense data with charts.
- Edit or delete expenses.
- Secure authentication and user management.

## Technologies Used
- **Frontend:**
  - React.js
  - CSS (or any styling libraries you've used, e.g., Bootstrap, Material UI)
- **Backend:**
  - Node.js
  - Express.js
- **Database:**
  - MongoDB (via Mongoose)
- **Other Tools:**
  - JWT for authentication
  - Chart.js for expense data visualization (if applicable)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (You can also use MongoDB Atlas)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vshksneha/MERN-expenses_tracker.git
   cd MERN-expenses_tracker
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following:
   ```bash
   MONGO_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   ```

5. **Run the development server:**
   - **Backend**: From the `backend` folder:
     ```bash
     npm start
     ```
   - **Frontend**: From the `frontend` folder:
     ```bash
     npm start
     ```

6. **Open in browser:**
   Visit `http://localhost:3000` to view the application.

## Usage
- **Sign up** to create an account.
- **Log in** to access the expenses dashboard.
- **Add new expenses** by filling out the form on the dashboard.
- **View, edit, or delete expenses** by navigating to the list of expenses.
- **Visualize your spending** with the built-in charts for better financial tracking.

## Folder Structure

```
MERN-expenses_tracker/
├── backend/                 # Backend code (Node.js, Express)
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   └── server.js            # Main server file
│
├── frontend/                # Frontend code (React.js)
│   ├── public/              # Static assets
│   └── src/                 # React components, pages, and services
│
└── README.md                # Project documentation
```

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Create a new Pull Request.


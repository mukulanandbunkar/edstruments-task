# Task Management App with Login

This project is a simple task management application built with React, implementing user authentication, task management, and persistent data storage using `localStorage`.

## Features

### 1. Login/Logout System
- Users can log in using a username and password.
- Sessions are stored in `localStorage` and persist across page reloads.
- Logout clears the session and redirects to the login screen.

### 2. Task Management
- Add, view, edit, delete, and mark tasks as completed.
- Tasks are tied to the logged-in user and stored persistently in `localStorage`.

### 3. State Management
- Uses Redux Toolkit for state management (auth and tasks).

### 4. Bonus Features
- Form validation for login and task inputs.
- Task filtering (e.g., completed, incomplete).
- Error handling for invalid inputs.

---

## Project Setup

### 1. Clone the Repository
```bash
git clone <repository_url>
cd edstruments-task
```

### 2. Install Dependencies
Ensure you have Node.js version 16 or higher installed.
```bash
npm install
```

### 3. Start the Application
```bash
npm start
```

### 4. Build for Production
```bash
npm run build
```

### 5. Run Tests
```bash
npm test
```

---

## Technologies Used

- **React**: Front-end framework for building UI components.
- **Redux Toolkit**: State management for authentication and tasks.
- **React Router DOM**: Routing between login and task management pages.
- **localStorage**: Persistent storage for user sessions and tasks.
- **CSS Modules (BEM)**: Component-specific, scoped styles.
- **Atomic Design**: Structured components using Atomic Design principles.
---

## Project Directory Structure

```
src/
├── components/                   # React components organized by Atomic Design
│   ├── atoms/                    # Smallest reusable components
│   │   ├── Button/               # Button atomic component
│   │   ├── Card/                 # Card atomic component
│   │   ├── Input/                # Input atomic component
│   │   └── Modal/                # Modal atomic component
│   ├── molecules/                # Small combinations of atoms
│   │   ├── TaskForm/             # Task form for adding/editing tasks
│   │   └── TaskWrapper/          # Wrapper for individual tasks      
│   |── Header.js                 # Header component
│   │── Footer.js                 # Footer component
│   │── Layout.js                 # Main layout
│   ├── pages/                    # Complete pages for routing
│   │   ├── LoginPage.js          # Login page
│   │   └── TaskManagementPage.js # Task management page
├── services/                     # Helper services
│   ├── Reducer                  
|   |    |--task.js               # Task Slice for Toolkit
|   |-- Store                     # Store middleware for redux toolkit
|   |    |--reducer.js            # default name import and export
|   |    |-- store.js             # middle ware export
│   ├── data.services.js          # LocalStorage utilities for persisting data
│   └── form.services.js          # Utility for form validation
├── App.js                        # Main app entry point with routing
├── index.js                      # React entry point
├── .gitignore                    # Git ignore file
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```


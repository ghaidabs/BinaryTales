# BinaryTales

A full-stack book discovery and management platform with interactive analytics dashboard. BinaryTales provides a seamless experience for users to discover books, manage their collections, and explore data-driven insights about the book market.


## Overview

BinaryTales is a modern web application built with cutting-edge technologies across the full stack. It combines a robust Node.js backend with a responsive React frontend and a Python-powered analytics dashboard to deliver a complete book management ecosystem.


## Features

- **User Authentication & Authorization**
  - Secure user registration and login with JWT tokens
  - Password encryption using bcrypt
  - Role-based access control

- **Book Management**
  - Browse and discover books with detailed information
  - Search functionality across book catalog
  - Add, update, and manage book collections
  - RESTful API for all book operations

- **Advanced Search**
  - Search books by title, author, and other attributes
  - Filter and sort capabilities
  - Real-time search results

- **Interactive Analytics Dashboard**
  - Top 10 books ranked by user ratings
  - Median price analysis by book type
  - Beautiful data visualizations using Plotly
  - Custom color scheme and styling

- **Responsive Design**
  - Mobile-friendly interface
  - Adaptive layout for all screen sizes
  - Smooth user experience across devices

---

## Tech Stack

### **Backend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | Latest | JavaScript runtime |
| **Express.js** | ^4.18.2 | Web framework & routing |
| **MongoDB** | ^6.3.0 | NoSQL database |
| **Mongoose** | ^8.2.0 | MongoDB ODM |
| **JWT (jsonwebtoken)** | ^9.0.2 | Authentication tokens |
| **bcrypt** | ^5.1.1 | Password hashing |
| **CORS** | ^2.8.5 | Cross-origin resource sharing |
| **Joi** | ^17.12.2 | Data validation |
| **Joi Password Complexity** | ^5.2.0 | Password strength validation |
| **dotenv** | ^16.4.5 | Environment variables |
| **Nodemon** | ^3.1.0 | Development auto-reload |

### **Frontend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | ^18.2.0 | UI library |
| **Vite** | ^5.1.4 | Build tool & dev server |
| **React Router DOM** | ^6.22.2 | Client-side routing |
| **Redux** | ^5.0.1 | State management |
| **Redux Toolkit** | ^2.2.3 | Redux utilities |
| **Redux Persist** | ^6.0.0 | State persistence |
| **React Redux** | ^9.1.1 | Redux React bindings |
| **Axios** | ^1.6.8 | HTTP client |
| **Bootstrap** | ^5.3.3 | CSS framework |
| **React Icons** | ^5.0.1 | Icon library |
| **React Responsive** | ^9.0.2 | Responsive design |
| **Lodash** | ^4.17.21 | Utility library |
| **ESLint** | ^8.56.0 | Code quality |

### **Dashboard**
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Python** | 3.x | Programming language |
| **Dash** | Latest | Web application framework |
| **Plotly** | Latest | Interactive visualizations |
| **Pandas** | Latest | Data manipulation & analysis |


## Quick Start

### **Prerequisites**
- **Node.js** v14+ and npm (for Backend & Frontend)
- **Python** 3.7+ (for Dashboard)
- **MongoDB Atlas** account (Cloud database)
- **Git** installed on your machine

##  Running the Application

### **Option 1: Development Mode (All Components)**

**Terminal 1 - Backend:**
```bash
cd Backend
npm run dev
# Server running on localhost:5555
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# App running on localhost:5173
```

**Terminal 3 - Dashboard:**
```bash
cd Dashboard
python dashboard.py
# Dashboard on localhost:8050
```

### **Option 2: Production Build**

**Frontend Build:**
```bash
cd frontend
npm run build
# Creates optimized build in dist/ folder
npm run preview  # Preview production build
```

**Backend Production:**
```bash
cd Backend
npm start
# Runs with optimized settings
```
---


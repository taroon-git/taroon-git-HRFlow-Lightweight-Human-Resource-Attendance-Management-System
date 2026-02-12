# HRFlow - Lightweight Human Resource Attendance Management System

A modern, lightweight HR management system built with React and Node.js for efficient employee attendance tracking and management.

## 🚀 Features

- **Employee Management**: Add, edit, and manage employee profiles
- **Attendance Tracking**: Real-time attendance monitoring and reporting
- **Dashboard**: Comprehensive analytics and insights
- **User Authentication**: Secure login and role-based access
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI framework
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Prisma** - Modern database toolkit
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development auto-restart

## 📁 Project Structure

```
hrms-lite/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── assets/          # Images and icons
│   │   ├── pages/           # React page components
│   │   ├── services/        # API service functions
│   │   ├── App.jsx          # Main App component
│   │   ├── main.jsx         # Application entry point
│   │   └── index.css        # Global styles
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── hrms-lite/
│   └── backend/             # Node.js backend API
│       ├── prisma/          # Database schema and migrations
│       ├── server.js        # Express server
│       └── package.json     # Backend dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Database (PostgreSQL recommended for Prisma)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/taroon-git/taroon-git-HRFlow-Lightweight-Human-Resource-Attendance-Management-System.git
   cd hrms-lite
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../hrms-lite/backend
   npm install
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Configure environment variables**
   - Create a `.env` file in the backend directory
   - Add your database connection string and other environment variables

### Running the Application

1. **Start the backend server**
   ```bash
   cd hrms-lite/backend
   npm run dev
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📊 API Endpoints

The backend API provides the following endpoints:

- `GET/POST/PUT/DELETE /api/employees` - Employee management
- `GET/POST /api/attendance` - Attendance tracking
- `POST /api/auth/login` - User authentication
- `GET /api/dashboard` - Dashboard analytics

## 🔧 Development Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with auto-restart
- `npm start` - Start production server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Contact

Created and maintained by [Taroon](https://github.com/taroon-git)

---

**Note**: This is a lightweight HR management system designed for small to medium-sized organizations. For enterprise-level features, consider integrating with additional HR modules and services.

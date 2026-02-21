# Bobyard Comments System

A full-stack application for managing comments with CRUD operations, built with React (TypeScript) and Express.js with PostgreSQL database.

## 🚀 Tech Stack

**Frontend:**

- React 19 with TypeScript
- Vite for development and build
- Tailwind CSS for styling
- Axios for API requests

**Backend:**

- Express.js
- PostgreSQL database
- CORS enabled for frontend communication
- Nodemon for development

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v18 or higher)
- PostgreSQL (running locally or connection to remote database)
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/luisarevalo21/bobyard.git
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env  # or create manually
```

**Configure your .env file in the backend directory using the example:**

```env
PORT=3000
DATABASE_URL=your_postgresql_connection_string
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create environment file
```

**Configure your .env file in the frontend directory:**

```env
VITE_BACKEND_URL=http://localhost:3000
```

### 4. Database Setup

Make sure PostgreSQL is running and create your database. The application will handle table creation.

## 🏃‍♂️ Running the Application

### Start the Backend Server

```bash
# From the backend directory
cd backend
npm start
```

The backend will run on `http://localhost:3000`

### Start the Frontend Development Server

```bash
# From the frontend directory (in a new terminal)
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📚 API Endpoints

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | `/api/comments`     | Get all comments        |
| GET    | `/api/comments/:id` | Get specific comment    |
| POST   | `/api/comments`     | Create new comment      |
| PUT    | `/api/comments/:id` | Update comment          |
| DELETE | `/api/comments/:id` | Delete specific comment |

## 🎯 Future Enhancements

### Planned Features:

- **Toast Notifications**: Implement toast messages for successful/unsuccessful API requests
- **Docker Integration**: Containerize the backend with PostgreSQL database for easier deployment and development
- **Enhanced Error Handling**: More robust error responses and user feedback
- **Production Deployment**: Deploy to cloud platforms with proper environment configurations

### Docker Implementation (Coming Soon):

```dockerfile
# Future Docker setup will include:
# - Backend service with Express.js
# - PostgreSQL database service
# - Docker Compose for orchestration
```

## 🚀 Production Build

### Frontend:

```bash
cd frontend
npm run build
npm run preview  # To preview production build locally
```

### Backend:

Update environment variables for production and deploy to your preferred platform.

## 🔧 Development Scripts

**Frontend:**

- `npm run dev` - Start development server

**Backend:**

- `npm run start` - Start server with nodemon (development)

## 📝 Notes

- No authentication is currently implemented
- CORS is configured for `http://localhost:5173` (Vite default)
- Database operations use PostgreSQL with the `pg` library
- Frontend uses modern React 19 features and TypeScript for type safety

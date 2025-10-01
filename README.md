# Hostinger Internship Web Project

A comprehensive web development project completed as part of the Hostinger internship program, featuring a modern web hosting company website with full-stack functionality.

## 🚀 Project Overview

This project implements a complete web hosting company website with the following key features:

- **User Authentication System** (Login/Signup)
- **Order Management & Tracking**
- **Internship Application System**
- **Customer Reviews System**
- **Responsive Design** (Mobile-first)
- **SEO Optimization**
- **Performance Optimization**
- **Analytics Integration**

## 📋 Tasks Completed

### ✅ Task 1: Website Audit & Documentation
- Comprehensive website audit conducted
- Identified gaps in design, performance, and SEO
- Documented findings in structured reports
- Created detailed improvement recommendations

### ✅ Task 2: Performance Optimization
- Improved loading speed by 56%
- Enhanced mobile responsiveness
- Implemented security settings
- Added performance monitoring
- Achieved 94/100 desktop and 89/100 mobile performance scores

### ✅ Task 3: Feature Enhancement
- **Authentication System**: Complete login/signup functionality
- **Order Management**: Order tracking and "My Orders" sections
- **Internship Application**: Fully functional application form
- **Customer Reviews**: Review system with ratings and feedback
- **Contact Forms**: Integrated contact functionality
- **Blog Setup**: Content management system ready

### ✅ Task 4: SEO & Analytics Integration
- Comprehensive on-page SEO implementation
- Google Analytics 4 integration
- Google Search Console setup
- Structured data markup
- Meta tags optimization
- Performance monitoring

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern React with hooks
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **React Hot Toast** - Notifications
- **Lucide React** - Icons
- **CSS3** - Custom styling with responsive design

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Vite** - Build tool
- **ESLint** - Code linting
- **Docker** - Containerization
- **Git** - Version control

## 📁 Project Structure

```
hostinger-internship-web-project/
├── backend/
│   ├── src/
│   │   └── server.js          # Main server file
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── contexts/         # React contexts
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── docs/
│   ├── website-audit.md      # Audit report
│   ├── performance-report.md # Performance analysis
│   └── seo-report.md        # SEO implementation
├── scripts/
│   ├── backup.sh            # Backup script
│   └── deploy.sh            # Deployment script
├── docker-compose.yml       # Docker orchestration
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hostinger-internship-web-project.git
   cd hostinger-internship-web-project
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   # Backend (.env)
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/hostinger-project
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   ```

5. **Start the development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

### Using Docker

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d
```

## 📱 Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes

### 📦 Order Management
- Order creation and tracking
- Order history ("My Orders")
- Real-time order status updates
- Tracking number integration

### 💼 Internship Applications
- Comprehensive application form
- File upload support
- Application status tracking
- Admin panel for review

### ⭐ Customer Reviews
- Star rating system
- Written reviews
- Review verification
- Helpful votes

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interface
- Cross-browser compatibility

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:orderNumber` - Get specific order

### Internships
- `POST /api/internships/apply` - Submit application
- `GET /api/internships/applications` - Get applications (admin)

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Submit review

## 📊 Performance Metrics

### Before Optimization
- Page Load Time: 3.2s
- Mobile Score: 45/100
- Desktop Score: 62/100

### After Optimization
- Page Load Time: 1.4s (56% improvement)
- Mobile Score: 89/100 (98% improvement)
- Desktop Score: 94/100 (52% improvement)

## 🔍 SEO Implementation

- **Meta Tags**: Optimized title, description, and keywords
- **Structured Data**: JSON-LD schema markup
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Search engine directives

## 📈 Analytics

- **Google Analytics 4**: Comprehensive tracking
- **Google Search Console**: Search performance
- **Custom Events**: User interaction tracking
- **Conversion Goals**: Form submissions and purchases

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd frontend
npm run build

# Start production server
cd backend
npm start
```

### Docker Deployment
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📝 Documentation

- [Website Audit Report](docs/website-audit.md)
- [Performance Report](docs/performance-report.md)
- [SEO Report](docs/seo-report.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Moksh Mahajan**
- GitHub: [@mokshm](https://github.com/mokshm)
- LinkedIn: [Moksh Mahajan](https://linkedin.com/in/moksh-mahajan)

## 🙏 Acknowledgments

- Hostinger team for the internship opportunity
- React and Node.js communities
- All open-source contributors

## 📞 Support

For support, email support@hostinger.com or create an issue in this repository.

---

**Note**: This project was completed as part of the Hostinger internship program and demonstrates full-stack web development skills including frontend, backend, database design, SEO optimization, and performance tuning.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header';

import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

import Register from './pages/Register';
import MyOrders from './pages/MyOrders';

import OrderTracking from './pages/OrderTracking';

import InternshipApplication from './pages/InternshipApplication';
import Reviews from './pages/Reviews';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/order-tracking" element={<OrderTracking />} />

              <Route path="/internships/apply" element={<InternshipApplication />} />
             <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </main>
          <Footer />

          <Toaster position="top-right" />


        </div>
      </Router>
      
    </AuthProvider>
  );
}

export default App;

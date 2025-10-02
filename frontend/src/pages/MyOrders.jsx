import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Package, Eye, Calendar, DollarSign, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './MyOrders.css';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch user orders
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        // Mock data - in real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockOrders = [
          {
            _id: '1',
            orderNumber: 'ORD-20240115-001',
            status: 'delivered',
            items: [
              { name: 'Web Hosting Plan - Premium', quantity: 1, price: 9.99 },
              { name: 'SSL Certificate', quantity: 1, price: 0 }
            ],
            totalAmount: 99.99,
            createdAt: '2024-01-15T10:30:00Z',
            updatedAt: '2024-01-20T16:45:00Z',
            trackingNumber: 'TRK123456789'
          },
          {
            _id: '2',
            orderNumber: 'ORD-20240110-002',
            status: 'shipped',
            items: [
              { name: 'Domain Registration - .com', quantity: 1, price: 122.99 },
              { name: 'Privacy Protection', quantity: 1, price: 22.99 }
            ],
            totalAmount: 152.98,
            createdAt: '2024-01-10T14:20:00Z',
            updatedAt: '2024-01-18T09:30:00Z',
            trackingNumber: 'TRK987654321'
          },
          {
            _id: '3',
            orderNumber: 'ORD-20240105-003',
            status: 'processing',
            items: [
              { name: 'VPS Hosting Plan', quantity: 1, price: 199.99 }
            ],
            totalAmount: 199.99,
            createdAt: '2024-01-05T16:45:00Z',
            updatedAt: '2024-01-15T11:20:00Z',
            trackingNumber: null
          }
        ];
        
        setOrders(mockOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#ffc107';
      case 'processing':
        return '#17a2b8';
      case 'shipped':
        return '#007bff';
      case 'delivered':
        return '#28a745';
      case 'cancelled':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  if (!user) {
    return (
      <div className="my-orders-container">
        <div className="auth-required">
          <h1>Authentication Required</h1>
          <p>Please log in to view your orders.</p>
          <Link to="/login" className="btn-primary">Login</Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="my-orders-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading your orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-orders-container">
      <div className="orders-header">
        <h1>My Orders</h1>
        <p>Track and manage your recent orders</p>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <Package size={80} className="no-orders-icon" />
          <h2>No Orders Yet</h2>
          <p>You haven't placed any orders yet. Start shopping to see your orders here.</p>
          <Link to="/" className="btn-primary">Start Shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <h3>Order #{order.orderNumber}</h3>
                  <div className="order-meta">
                    <span className="order-date">
                      <Calendar size={16} />
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                    <span className="order-total">
                      <DollarSign size={16} />
                      ${order.totalAmount}
                    </span>
                  </div>
                </div>
                <div className="order-status">
                  <span 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  >
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>

              <div className="order-items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index} className="order-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-details">
                        Qty: {item.quantity} × ₹{item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-actions">
                <Link 
                  to={`/order-tracking?orderNumber=${order.orderNumber}`}
                  className="btn-secondary"
                >
                  <Eye size={16} />
                  Track Order
                </Link>
                {order.trackingNumber && (
                  <span className="tracking-number">
                    Tracking: {order.trackingNumber}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;

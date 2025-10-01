import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Search, Package, Truck, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import './OrderTracking.css';

const OrderTracking = () => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock order data
      const mockOrder = {
        orderNumber: data.orderNumber,
        status: 'shipped',
        items: [
          { name: 'Web Hosting Plan - Premium', quantity: 1, price: 9.99 },
          { name: 'SSL Certificate', quantity: 1, price: 0 }
        ],
        totalAmount: 9.99,
        shippingAddress: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'USA'
        },
        trackingNumber: 'TRK123456789',
        createdAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-18T14:20:00Z',
        trackingHistory: [
          {
            status: 'pending',
            message: 'Order received and payment confirmed',
            timestamp: '2024-01-15T10:30:00Z',
            completed: true
          },
          {
            status: 'processing',
            message: 'Order is being prepared for shipment',
            timestamp: '2024-01-16T09:15:00Z',
            completed: true
          },
          {
            status: 'shipped',
            message: 'Order has been shipped and is in transit',
            timestamp: '2024-01-18T14:20:00Z',
            completed: true
          },
          {
            status: 'delivered',
            message: 'Order delivered successfully',
            timestamp: null,
            completed: false
          }
        ]
      };
      
      setOrder(mockOrder);
      toast.success('Order found!');
    } catch (error) {
      toast.error('Order not found. Please check your order number.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock size={20} className="status-icon pending" />;
      case 'processing':
        return <Package size={20} className="status-icon processing" />;
      case 'shipped':
        return <Truck size={20} className="status-icon shipped" />;
      case 'delivered':
        return <CheckCircle size={20} className="status-icon delivered" />;
      case 'cancelled':
        return <AlertCircle size={20} className="status-icon cancelled" />;
      default:
        return <Clock size={20} className="status-icon" />;
    }
  };

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

  return (
    <div className="order-tracking-container">
      <div className="tracking-header">
        <h1>Track Your Order</h1>
        <p>Enter your order number to track the status of your purchase</p>
      </div>

      <div className="tracking-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="tracking-form">
          <div className="form-group">
            <label htmlFor="orderNumber">Order Number</label>
            <div className="input-group">
              <input
                type="text"
                id="orderNumber"
                placeholder="Enter your order number (e.g., ORD-123456)"
                {...register('orderNumber', { required: 'Order number is required' })}
              />
              <button type="submit" className="search-button" disabled={isLoading}>
                {isLoading ? (
                  <div className="spinner"></div>
                ) : (
                  <Search size={20} />
                )}
                {isLoading ? 'Searching...' : 'Track Order'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {order && (
        <div className="order-details">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-info">
              <div className="info-item">
                <span className="label">Order Number:</span>
                <span className="value">{order.orderNumber}</span>
              </div>
              <div className="info-item">
                <span className="label">Status:</span>
                <span className="value status-badge" style={{ backgroundColor: getStatusColor(order.status) }}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              <div className="info-item">
                <span className="label">Total Amount:</span>
                <span className="value">${order.totalAmount}</span>
              </div>
              <div className="info-item">
                <span className="label">Tracking Number:</span>
                <span className="value">{order.trackingNumber}</span>
              </div>
            </div>
          </div>

          <div className="order-items">
            <h3>Order Items</h3>
            <div className="items-list">
              {order.items.map((item, index) => (
                <div key={index} className="item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">Qty: {item.quantity}</span>
                  <span className="item-price">${item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="shipping-address">
            <h3>Shipping Address</h3>
            <div className="address">
              <p>{order.shippingAddress.street}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
              <p>{order.shippingAddress.country}</p>
            </div>
          </div>

          <div className="tracking-timeline">
            <h3>Tracking Timeline</h3>
            <div className="timeline">
              {order.trackingHistory.map((event, index) => (
                <div key={index} className={`timeline-item ${event.completed ? 'completed' : 'pending'}`}>
                  <div className="timeline-icon">
                    {getStatusIcon(event.status)}
                  </div>
                  <div className="timeline-content">
                    <h4>{event.message}</h4>
                    {event.timestamp && (
                      <p className="timeline-date">
                        {new Date(event.timestamp).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;

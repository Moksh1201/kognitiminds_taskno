import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { Star, ThumbsUp, MessageCircle, User } from 'lucide-react';
import toast from 'react-hot-toast';
import './Reviews.css';

const Reviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
const mockReviews = [
  {
    _id: '1',
    userName: 'Rahul Mehta',
    rating: 5,
    title: 'Very good hosting',
    comment: 'I have been using this service for 1 year. No big issues. Speed is fine and support replies on time.',
    verified: true,
    createdAt: '2024-02-10T10:30:00Z',
    helpful: 9
  },
  {
    _id: '2',
    userName: 'Priya Sharma',
    rating: 4,
    title: 'Affordable and useful',
    comment: 'The plan price is reasonable. Works fine for my small business website. Faced a small issue but it was solved quickly.',
    verified: true,
    createdAt: '2024-02-08T14:20:00Z',
    helpful: 6
  },
  {
    _id: '3',
    userName: 'Amit Patel',
    rating: 5,
    title: 'Good for beginners',
    comment: 'I am not very technical but setup was easy. The panel is simple and there are guides available.',
    verified: true,
    createdAt: '2024-02-05T16:45:00Z',
    helpful: 11
  },
  {
    _id: '4',
    userName: 'Sneha Reddy',
    rating: 3,
    title: 'Okay but can improve',
    comment: 'Hosting is okay but sometimes site loads slowly. Support is fine but not very fast.',
    verified: true,
    createdAt: '2024-02-03T09:15:00Z',
    helpful: 4
  },
  {
    _id: '5',
    userName: 'Vikram Singh',
    rating: 5,
    title: 'Support is helpful',
    comment: 'The best thing is their support. I asked many questions and they explained properly. Hosting is reliable also.',
    verified: true,
    createdAt: '2024-02-01T11:30:00Z',
    helpful: 13
  }
];

      
      setReviews(mockReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    if (!user) {
      toast.error('Please log in to submit a review');
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newReview = {
        _id: Date.now().toString(),
        userName: `${user.firstName} ${user.lastName}`,
        rating: data.rating,
        title: data.title,
        comment: data.comment,
        verified: true,
        createdAt: new Date().toISOString(),
        helpful: 0
      };
      
      setReviews(prev => [newReview, ...prev]);
      reset();
      toast.success('Review submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'star filled' : 'star'}
      />
    ));
  };

  const getAverageRating = () => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review => {
      distribution[review.rating]++;
    });
    return distribution;
  };

  if (isLoading) {
    return (
      <div className="reviews-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h1>Customer Reviews</h1>
        <p>See what our customers have to say about Hostinger</p>
      </div>

      <div className="reviews-content">
        <div className="reviews-summary">
          <div className="rating-overview">
            <div className="average-rating">
              <span className="rating-number">{getAverageRating()}</span>
              <div className="stars">
                {renderStars(Math.round(getAverageRating()))}
              </div>
              <p>Based on {reviews.length} reviews</p>
            </div>
            
            <div className="rating-breakdown">
              {[5, 4, 3, 2, 1].map(rating => {
                const count = getRatingDistribution()[rating];
                const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                return (
                  <div key={rating} className="rating-bar">
                    <span className="rating-label">{rating} star{rating !== 1 ? 's' : ''}</span>
                    <div className="bar-container">
                      <div 
                        className="bar" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="rating-count">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <div className="write-review">
            <h2>Write a Review</h2>
            {user ? (
              <form onSubmit={handleSubmit(onSubmit)} className="review-form">
                <div className="form-group">
                  <label htmlFor="rating">Rating *</label>
                  <div className="rating-input">
                    {[1, 2, 3, 4, 5].map(rating => (
                      <label key={rating} className="star-input">
                        <input
                          type="radio"
                          value={rating}
                          {...register('rating', { required: 'Please select a rating' })}
                        />
                        <Star size={30} className="star-icon" />
                      </label>
                    ))}
                  </div>
                  {errors.rating && <span className="error-message">{errors.rating.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="title">Review Title *</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Summarize your experience"
                    {...register('title', { required: 'Title is required' })}
                  />
                  {errors.title && <span className="error-message">{errors.title.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Your Review *</label>
                  <textarea
                    id="comment"
                    rows="5"
                    placeholder="Tell us about your experience with Hostinger..."
                    {...register('comment', { 
                      required: 'Review is required',
                      minLength: {
                        value: 20,
                        message: 'Review must be at least 20 characters'
                      }
                    })}
                  />
                  {errors.comment && <span className="error-message">{errors.comment.message}</span>}
                </div>

                <button type="submit" className="submit-review-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            ) : (
              <div className="login-prompt">
                <p>Please log in to write a review.</p>
                <a href="/login" className="btn-primary">Login</a>
              </div>
            )}
          </div>

          <div className="reviews-list">
            <h2>Customer Reviews ({reviews.length})</h2>
            {reviews.map(review => (
              <div key={review._id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <User size={20} />
                    </div>
                    <div className="reviewer-details">
                      <h4>{review.userName}</h4>
                      <div className="review-meta">
                        <div className="stars">
                          {renderStars(review.rating)}
                        </div>
                        <span className="review-date">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                        {review.verified && (
                          <span className="verified-badge">Verified Purchase</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="review-content">
                  <h3>{review.title}</h3>
                  <p>{review.comment}</p>
                </div>

                <div className="review-actions">
                  <button className="helpful-btn">
                    <ThumbsUp size={16} />
                    Helpful ({review.helpful})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

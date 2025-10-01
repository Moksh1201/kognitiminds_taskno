import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, FileText, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import './InternshipApplication.css';

const InternshipApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Application data:', data);
      
      toast.success('Application submitted successfully!');
      setIsSubmitted(true);
      reset();
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="application-container">
        <div className="success-message">
          <CheckCircle size={80} className="success-icon" />
          <h1>Application Submitted!</h1>
          <p>Thank you for your interest in joining our team. We'll review your application and get back to you within 5-7 business days.</p>
          <button 
            className="btn-primary"
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="application-container">
      <div className="application-header">
        <h1>Apply for Internships</h1>
        <p>Join our dynamic team and gain valuable experience in web development, marketing, and business operations.</p>
      </div>

      <div className="application-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="application-form">
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName', { required: 'First name is required' })}
                />
                {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName', { required: 'Last name is required' })}
                />
                {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                />
                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Educational Background</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="university">University/College *</label>
                <input
                  type="text"
                  id="university"
                  {...register('university', { required: 'University is required' })}
                />
                {errors.university && <span className="error-message">{errors.university.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="major">Major/Field of Study *</label>
                <input
                  type="text"
                  id="major"
                  {...register('major', { required: 'Major is required' })}
                />
                {errors.major && <span className="error-message">{errors.major.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="graduationYear">Expected Graduation Year *</label>
              <select
                id="graduationYear"
                {...register('graduationYear', { required: 'Graduation year is required' })}
              >
                <option value="">Select graduation year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
              {errors.graduationYear && <span className="error-message">{errors.graduationYear.message}</span>}
            </div>
          </div>

          <div className="form-section">
            <h2>Position & Experience</h2>
            <div className="form-group">
              <label htmlFor="position">Position Applied For *</label>
              <select
                id="position"
                {...register('position', { required: 'Position is required' })}
              >
                <option value="">Select a position</option>
                <option value="web-development">Web Development Intern</option>
                <option value="marketing">Marketing Intern</option>
                <option value="business-operations">Business Operations Intern</option>
                <option value="customer-support">Customer Support Intern</option>
                <option value="data-analysis">Data Analysis Intern</option>
              </select>
              {errors.position && <span className="error-message">{errors.position.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter *</label>
              <textarea
                id="coverLetter"
                rows="6"
                placeholder="Tell us why you're interested in this internship and what you hope to learn..."
                {...register('coverLetter', {
                  required: 'Cover letter is required',
                  minLength: {
                    value: 100,
                    message: 'Cover letter must be at least 100 characters'
                  }
                })}
              />
              {errors.coverLetter && <span className="error-message">{errors.coverLetter.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume/CV</label>
              <div className="file-upload">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  {...register('resume')}
                />
                <label htmlFor="resume" className="file-upload-label">
                  <Upload size={20} />
                  <span>Upload Resume (PDF, DOC, DOCX)</span>
                </label>
              </div>
              <p className="file-help">Optional: Upload your resume for additional consideration</p>
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  {...register('terms', { required: 'You must accept the terms' })}
                />
                <span>I agree to the <a href="/terms" target="_blank">Terms and Conditions</a> and <a href="/privacy" target="_blank">Privacy Policy</a> *</span>
              </label>
              {errors.terms && <span className="error-message">{errors.terms.message}</span>}
            </div>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Submitting Application...
              </>
            ) : (
              <>
                <Send size={20} />
                Submit Application
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InternshipApplication;

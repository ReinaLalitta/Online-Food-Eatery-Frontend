import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // State for success message
    const navigate = useNavigate(); // useNavigate hook replaces useHistory

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    // Validate form fields
    const validate = () => {
        const errors = {};

        if (!formData.full_name.trim()) {
            errors.full_name = 'Full Name is required';
        }

        if (!formData.email) {
            errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        return errors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setFormErrors(validationErrors);

        // Only submit if no validation errors
        if (Object.keys(validationErrors).length === 0) {
            setError(''); // Reset error message
            setSuccess(''); // Reset success message

            try {
                const response = await axios.post('https://online-food-eatery-backend-52ee84174892.herokuapp.com/api/auth/register', formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 201) {
                    setSuccess('Registration successful! Redirecting to login page...');
                    setTimeout(() => {
                        // Use navigate to redirect to login page after 3 seconds
                        navigate('/login');
                    }, 3000);
                }
            } catch (err) {
                setError('Registration failed. Please try again.');
                console.error(err);
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        {/* Error Alert */}
                        {error && (
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Error:</strong> {error}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        )}
                        {/* Success Alert */}
                        {success && (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Success:</strong> {success}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="full_name">Full Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${formErrors.full_name ? 'is-invalid' : ''}`}
                                    id="full_name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    required
                                />
                                {formErrors.full_name && (
                                    <div className="invalid-feedback">
                                        {formErrors.full_name}
                                    </div>
                                )}
                            </div>
                            <div className="form my-3">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                    required
                                />
                                {formErrors.email && (
                                    <div className="invalid-feedback">
                                        {formErrors.email}
                                    </div>
                                )}
                            </div>
                            <div className="form my-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                />
                                {formErrors.password && (
                                    <div className="invalid-feedback">
                                        {formErrors.password}
                                    </div>
                                )}
                            </div>
                            <div className="my-3">
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;

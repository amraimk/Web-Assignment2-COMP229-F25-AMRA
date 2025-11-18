import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        if (error) {
            setError('');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to login');
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.user.name);
            if (setUser) {
                setUser({ name: data.user.name });
            }
            navigate('/');

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <div className="auth-page">
                <div className="auth-container">
                    <h2>Login</h2>
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
                        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
                        {error && <div className='alert alert-danger'>{error}</div>}

                        <button type="submit">Login</button>
                    </form>
                    <div className="auth-footer">
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </>
    );
}
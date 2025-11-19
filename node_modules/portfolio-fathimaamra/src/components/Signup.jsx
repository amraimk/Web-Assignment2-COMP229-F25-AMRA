import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup({ setUser }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })

        if (error) {
            setError('');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to register');
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.user.name);
            localStorage.setItem('role', data.user.role);
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
            <div class="auth-page">
                <div class="auth-container">
                    <h2>Sign Up</h2>
                    <form class="auth-form" onSubmit={handleSubmit}>
                        <input type="text" id='name' name='name' value={form.name} onChange={handleChange} placeholder="Full Name" required/>
                        <input type="email" id='email' name='email' value={form.email} onChange={handleChange} placeholder="Email" required/>
                        <input type="password" id='password' name='password' value={form.password} onChange={handleChange} placeholder="Password" required/>
                        {error && <div className='alert alert-danger'>{error}</div>}

                        <button type="submit">Sign Up</button>
                    </form>
                    <div class="auth-footer">
                        Already have an account? <a href="/login">Login</a>
                    </div>
                </div>
            </div>
        </>
    );
}
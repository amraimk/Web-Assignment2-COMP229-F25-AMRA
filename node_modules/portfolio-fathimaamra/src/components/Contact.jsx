import { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        contactnumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(""); // Clear error 
        setSuccess(""); // Clear success 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message');
            }

            setSuccess("Message sent successfully!");

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <section className="contact">
                <h2 className="contact-title">Contact Me</h2>
                <p className="contact-intro">
                    Reach out via the form below or through my contact details.
                </p>

                <div className="contact-container">
                    <div className="contact-panel">
                        <h3>Get in Touch</h3>
                        <p><strong>Phone:</strong> (647) 456-7890</p>
                        <p>
                            <strong>LinkedIn:</strong>{" "}
                            <a href="https://www.linkedin.com/in/amra-badurdeen" target="_blank" rel="noreferrer">
                                https://www.linkedin.com/in/amra-badurdeen
                            </a>
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input type="text" name="firstname" placeholder="First Name" value={formData.firstname}
                                onChange={handleChange} required />

                            <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname}
                                onChange={handleChange} required />
                        </div>

                        <input type="tel" name="contactnumber" placeholder="Contact Number"
                            value={formData.contactnumber} onChange={handleChange} />

                        <input type="email" name="email" placeholder="Email Address"
                            value={formData.email} onChange={handleChange} required />

                        <textarea
                            name="message" placeholder="Your Message" rows="5" value={formData.message}
                            onChange={handleChange} required />

                        <button type="submit" className="btn-submit">Send Message</button>

                        {error && <p className="error-msg">{error}</p>}
                        {success && <p className="success-msg">{success}</p>}
                    </form>
                </div>
            </section>
        </>
    )
}
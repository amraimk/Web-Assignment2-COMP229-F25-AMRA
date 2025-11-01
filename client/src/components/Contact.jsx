import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create message string
        const messageText = `
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Contact: ${formData.contactNumber}
        Message: ${formData.message}`;

        // Show default browser alert
        alert("Message Captured..\n" + messageText);

        // Clear form
        setFormData({ firstName: "", lastName: "", contactNumber: "", email: "", message: "" });

        // Redirect to Home page
        navigate("/", { replace: true });
    };

    return (
        <>
            <section className="contact">
                <h2 className="contact-title">Contact Me</h2>
                <p className="contact-intro">
                    Reach out via the form below or through my contact details.
                </p>

                <div className="contact-container">
                    {/* Contact Info */}
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
                            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName}
                                onChange={handleChange} required />

                            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName}
                                onChange={handleChange} required />
                        </div>

                        <input type="text" name="contactNumber" placeholder="Contact Number"
                            value={formData.contactNumber} onChange={handleChange} />

                        <input type="email" name="email" placeholder="Email Address"
                            value={formData.email} onChange={handleChange} required />

                        <textarea
                            name="message" placeholder="Your Message" rows="5" value={formData.message}
                            onChange={handleChange} required />

                        <button type="submit" className="btn-submit">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}
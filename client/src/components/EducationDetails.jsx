import { set } from "mongoose";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EducationDetails() {
    const [education, setEducation] = useState({
        title: "",
        firstname: "",
        lastname: "",
        email: "",
        completion: "",
        description: ""
    }); 

    const role = localStorage.getItem("role");
    const { id } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation(prevState => ({ ...prevState, [name]: value }));
        setError(""); // Clear error 
        setSuccess(""); // Clear success 
    };

    useEffect(() => {
        if (id) {
            const fetchEducation = async () => {
                const token = localStorage.getItem('token');

                if (!token) {
                    navigate('/login');
                    return;
                }

                try {
                    const response = await fetch(`/api/qualifications/${id}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch education record');
                    }

                    const data = await response.json();
                    setEducation({
                        title: data.title,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        email: data.email,
                        completion: data.completion.split("T")[0],
                        description: data.description
                    });

                } catch (error) {
                    console.error('Error fetching education record', error);
                }
            }
            fetchEducation();
        }
    }, [id, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (role !== "Admin") return;

        if (!token) {
            navigate('/login');
            return;
        }

        const method = id ? 'PUT' : 'POST';
        const url = id ? `/api/qualifications/${id}` : `/api/qualifications`;

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(education)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to save education');
            }

            setSuccess(data.message);
            setTimeout(() => {
                navigate('/educationlist');
            }, 1500);

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="form-create-page">
            <h1>
                {role === "Admin"
                    ? (id ? "Update Education" : "Create Education")
                    : "Education Details"}
            </h1>

            {error && <p className="error-msg">{error}</p>}
            {success && <p className="success-msg">{success}</p>}

            <form className="form-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={education.title}
                    onChange={handleChange}
                    required
                    disabled={role !== "Admin"}
                />
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value={education.firstname}
                    onChange={handleChange}
                    required
                    disabled={role !== "Admin"}
                />
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={education.lastname}
                    onChange={handleChange}
                    required
                    disabled={role !== "Admin"}
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={education.email}
                    onChange={handleChange}
                    required
                    disabled={role !== "Admin"}
                />
                <input
                    type="date"
                    id="completion"
                    name="completion"
                    placeholder="Completion Date"
                    value={education.completion}
                    onChange={handleChange}
                    required
                    disabled={role !== "Admin"}
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={education.description}
                    onChange={handleChange}
                    required
                    disabled={role !== "Admin"}
                ></textarea>

                {role === "Admin" ? (
                    <>
                        <button type="submit" className="create-btn">
                            {id ? 'Update Education' : 'Create Education'}
                        </button>
                    </>
                ) : (
                    <>
                        <button className="create-btn" onClick={() => navigate(`/educationlist`)}>Back</button>
                    </>
                )}
            </form>
        </div>
    );
}

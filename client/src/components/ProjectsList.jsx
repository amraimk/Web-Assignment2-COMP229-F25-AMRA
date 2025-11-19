import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectsList() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const role = localStorage.getItem("role");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    navigate('/login');
                    return;
                }

                const response = await fetch('/api/projects', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message)
                }
                setProjects(data);

            } catch (error) {
                console.error(`Error fetching projects: ${error.message}`);
            }
        }
        fetchProjects();
    }, [])


    const handleDelete = async (projectId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this project?");
        if (!confirmDelete) return;

        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
            return;
        }
        try {
            const response = await fetch(`/api/projects/${projectId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Failed to delete project');
            }

            setProjects(prevProjects => prevProjects.filter(project => project._id !== projectId));

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="table-section-page">
            <h1>Projects</h1>

            {role === "Admin" && (
                <button className="create-btn" onClick={() => navigate('/projectdetails')}>Create New Project</button>
            )}

            {error && <p className="error-msg">{error}</p>}
            {projects.length > 0 ? (
                <>
                    <table className="site-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Completion Date</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project._id}>
                                    <td>{project.title}</td>
                                    <td>{project.firstname}</td>
                                    <td>{project.lastname}</td>
                                    <td>{project.email}</td>
                                    <td>{new Date(project.completion).toLocaleDateString()}</td>
                                    <td>{project.description}</td>
                                    <td className="actions-cell">
                                        {role === "Admin" ? (
                                            <>
                                                <div>
                                                    <button className="btn-action btn-update" onClick={() => navigate(`/projectdetails/${project._id}`)}>Update</button>
                                                    <button className="btn-action btn-delete" onClick={() => handleDelete(project._id)}>Delete</button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <button className="btn-action btn-update" onClick={() => navigate(`/projectdetails/${project._id}`)}>View</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <>
                    <p className="empty-state">No projects available</p>
                </>
            )}
        </div>
    );
}

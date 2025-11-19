import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EducationList() {
  const [educations, setEducations] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch("/api/qualifications", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        setEducations(data);

      } catch (error) {
        console.error(`Error fetching education data: ${error.message}`);
      }
    };

    fetchEducation();
  }, []);

  const handleDelete = async (educationid) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`/api/qualifications/${educationid}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to delete record");
      }

      setEducations((prevEducation) => prevEducation.filter((education) => education._id !== educationid));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="table-section-page">
      <h1>Education Records</h1>

      {role === "Admin" && (
        <button className="create-btn" onClick={() => navigate("/educationdetails")}>
          Add New Education</button>
      )}

      {error && <p className="error-msg">{error}</p>}
      {educations.length > 0 ? (
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
              {educations.map((edu) => (
                <tr key={edu._id}>
                  <td>{edu.title}</td>
                  <td>{edu.firstname}</td>
                  <td>{edu.lastname}</td>
                  <td>{edu.email}</td>
                  <td>{new Date(edu.completion).toLocaleDateString()}</td>
                  <td>{edu.description}</td>
                  <td className="actions-cell">
                    {role === "Admin" ? (
                      <>
                        <div className="actions-cell">
                          <button className="btn-action btn-update" onClick={() => navigate(`/educationdetails/${edu._id}`)}>
                            Update</button>
                          <button className="btn-action btn-delete" onClick={() => handleDelete(edu._id)}>
                            Delete</button>
                        </div>
                      </>
                    ) : (
                      <button className="btn-action btn-update"
                        onClick={() => navigate(`/educationdetails/${edu._id}`)} >
                        View</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <p className="empty-state">No education records available</p>
        </>
      )}
    </div>
  );
}

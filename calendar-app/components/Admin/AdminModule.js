import React, { useState } from "react";

function AdminModule() {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: "",
    location: "",
    linkedIn: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    periodicity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  const addCompany = () => {
    setCompanies([...companies, newCompany]);
    setNewCompany({
      name: "",
      location: "",
      linkedIn: "",
      emails: "",
      phoneNumbers: "",
      comments: "",
      periodicity: "",
    });
  };

  return (
    <div className="admin-module p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Module</h2>

      <div className="company-form">
        <h3 className="font-semibold">Add New Company</h3>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={newCompany.name}
          onChange={handleInputChange}
          className="border p-2 mb-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newCompany.location}
          onChange={handleInputChange}
          className="border p-2 mb-2"
        />
        <input
          type="text"
          name="linkedIn"
          placeholder="LinkedIn Profile"
          value={newCompany.linkedIn}
          onChange={handleInputChange}
          className="border p-2 mb-2"
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={newCompany.comments}
          onChange={handleInputChange}
          className="border p-2 mb-2"
        />
        <button onClick={addCompany} className="bg-blue-500 text-white p-2">Add Company</button>
      </div>

      <div className="company-list mt-4">
        <h3 className="font-semibold">Existing Companies</h3>
        {companies.map((company, index) => (
          <div key={index} className="border p-2 mb-2">
            <p>Name: {company.name}</p>
            <p>Location: {company.location}</p>
            <p>LinkedIn: {company.linkedIn}</p>
            <p>Comments: {company.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminModule;
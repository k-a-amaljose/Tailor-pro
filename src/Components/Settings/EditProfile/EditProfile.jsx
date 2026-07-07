import { useState } from "react";
import "./EditProfile.css";
import SettingsCard from "../SettingsCard/SettingsCard";

function EditProfile({ profile }) {
  if (!profile) {
    return <p>No profile data.</p>;
  }
  
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <SettingsCard
      title="Edit Profile"
      description="Update your personal information and how your boutique appears to customers."
    >
      <div className="profile-photo-section">
        <img
          src={profile.profileIhoto}
          alt={`${profile.name} profile`}
          className="profile-photo"
        />

        <div className="profile-photo-info">
          <h4>Profile Photo</h4>

          <p>Upload a profile photo.</p>

          <button className="upload-photo-btn">
            Change Photo
          </button>
        </div>
      </div>

      <div className="profile-form-grid">
        <div className="profile-field">
          <label>Full Name</label>

          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="profile-field">
          <label>Username</label>

          <input
            type="text"
            value={formData.username}
            onChange={handleChange}
            
          />
        </div>
      </div>

      <div className="profile-field">
        <label>Bio</label>

        <textarea
          rows="5"
          value={formData.bio}
          onChange={handleChange}
          
        />
      </div>

      <div className="profile-form-grid">
        <div className="profile-field">
          <label>Email Address</label>

          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="profile-field">
          <label>Phone Number</label>

          <input
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="profile-form-grid">
        <div className="profile-field">
          <label>Location</label>

          <input
            type="text"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="profile-field">
          <label>Website</label>

          <input
            type="text"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="profile-field">
        <label>Business Category</label>

        <input
          type="text"
          value={formData.businessCategory}
          onChange={handleChange}
        />
      </div>

      <div className="profile-actions">
        <button className="save-profile-btn">
          Save Changes
        </button>
      </div>
    </SettingsCard>
  );
}

export default EditProfile;
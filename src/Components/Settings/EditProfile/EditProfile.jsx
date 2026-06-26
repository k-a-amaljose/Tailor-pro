import "./EditProfile.css";

import SettingsCard from "../SettingsCard/SettingsCard";

function EditProfile({ profile }) {
  return (
    <SettingsCard
      title="Edit Profile"
      description="Update your personal information and how your boutique appears to customers."
    >
      <div className="profile-photo-section">
        <img
          src={profile.profilePhoto}
          alt={`${profile.fullName} profile`}
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
            value={profile.fullName}
            readOnly
          />
        </div>

        <div className="profile-field">
          <label>Username</label>

          <input
            type="text"
            value={profile.username}
            readOnly
          />
        </div>
      </div>

      <div className="profile-field">
        <label>Bio</label>

        <textarea
          rows="5"
          value={profile.bio}
          readOnly
        />
      </div>

      <div className="profile-form-grid">
        <div className="profile-field">
          <label>Email Address</label>

          <input
            type="email"
            value={profile.email}
            readOnly
          />
        </div>

        <div className="profile-field">
          <label>Phone Number</label>

          <input
            type="tel"
            value={profile.phone}
            readOnly
          />
        </div>
      </div>

      <div className="profile-form-grid">
        <div className="profile-field">
          <label>Location</label>

          <input
            type="text"
            value={profile.location}
            readOnly
          />
        </div>

        <div className="profile-field">
          <label>Website</label>

          <input
            type="text"
            value={profile.website}
            readOnly
          />
        </div>
      </div>

      <div className="profile-field">
        <label>Business Category</label>

        <input
          type="text"
          value={profile.businessCategory}
          readOnly
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
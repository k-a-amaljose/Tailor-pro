import { useState } from "react";
import "./BusinessSettings.css";
import SettingsCard from "../SettingsCard/SettingsCard";

function BusinessSettings({
  // Default values used if no props are passed
  initialBusinessName = "Luxe Atelier",
  initialDescription = "A boutique studio specializing in bespoke design and tailoring.",
  initialEmail = "contact@luxeatelier.com",
  initialPhone = "555-0199",
  initialAddress = "123 Creative Studio Way, Brooklyn, NY",
  initialWebsite = "https://luxeatelier.com",
  initialInstagram = "luxe_atelier",
  onSave = (data) => {
    alert("Changes saved successfully!");
    console.log("Saved business data:", data);
  },
}) {
  // Initialize internal state using the incoming prop arguments
  const [formData, setFormData] = useState({
    businessName: initialBusinessName,
    description: initialDescription,
    email: initialEmail,
    phone: initialPhone,
    address: initialAddress,
    website: initialWebsite,
    instagram: initialInstagram,
  });

  // Handle updates to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <SettingsCard
      title="Business & Brand"
      description="Manage your brand and business information."
    >
      <form onSubmit={handleSubmit}>
        <div className="business-grid">
          <div className="business-field">
            <label htmlFor="businessName">Business Name</label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="business-field">
          <label htmlFor="description">Business Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="business-grid">
          <div className="business-field">
            <label htmlFor="email">Business Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="business-field">
            <label htmlFor="phone">Business Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="business-field">
          <label htmlFor="address">Shop / Studio Address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="business-field">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div className="business-field">
          <label htmlFor="instagram">Instagram</label>
          <div className="instagram-input">
            <span>@</span>
            <input
              id="instagram"
              name="instagram"
              type="text"
              value={formData.instagram}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="business-actions">
          <button type="submit" className="business-save-btn">
            Save Changes
          </button>
        </div>
      </form>
    </SettingsCard>
  );
}

export default BusinessSettings;
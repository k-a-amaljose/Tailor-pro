import "./PrivacySettings.css";

import SettingsCard from "../SettingsCard/SettingsCard";

function PrivacySettings({
  privacySections,
}) {
  return (
    <SettingsCard
      title="Privacy Settings"
      description="Control who can view your profile, interact with your content, and contact you."
    >
      {privacySections.map((section) => (
        <div
          key={section.id}
          className="privacy-section"
        >
          <h3>{section.title}</h3>

          {section.items.map((item) => (
            <div
              key={item.id}
              className="privacy-row"
            >
              <div>
                <h4>{item.title}</h4>

                <p>
                  {item.description}
                </p>
              </div>

              {item.type === "select" ? (
                <select
                  className="privacy-select"
                  value={item.value}
                  readOnly
                >
                  {item.options.map((option) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <label className="privacy-switch">
                  <input
                    type="checkbox"
                    checked={item.enabled}
                    readOnly
                  />

                  <span className="privacy-slider"></span>
                </label>
              )}
            </div>
          ))}
        </div>
      ))}
    </SettingsCard>
  );
}

export default PrivacySettings;
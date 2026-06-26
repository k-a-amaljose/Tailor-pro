import "./SecuritySettings.css";

import SettingsCard from "../SettingsCard/SettingsCard";

function SecuritySettings({
  securityItems,
}) {
  return (
    <SettingsCard
      title="Security"
      description="Keep your account safe and secure."
    >
      <div className="security-list">

        {securityItems.map((item) =>
          item.type === "toggle" ? (
            <div
              key={item.id}
              className="security-item"
            >
              <div>
                <h4>{item.title}</h4>

                <p>
                  {item.description}
                </p>
              </div>

              <label className="security-switch">
                <input
                  type="checkbox"
                  checked={item.enabled}
                  readOnly
                />

                <span className="security-slider"></span>
              </label>
            </div>
          ) : (
            <button
              key={item.id}
              className="security-item security-link"
            >
              <div>
                <h4>{item.title}</h4>

                <p>
                  {item.description}
                </p>
              </div>

              <span className="security-chevron">
                ›
              </span>
            </button>
          )
        )}

      </div>
    </SettingsCard>
  );
}

export default SecuritySettings;
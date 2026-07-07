import "./NotificationSettings.css";

import SettingsCard from "../SettingsCard/SettingsCard";

function NotificationSettings({
  notificationSections,
}) {
  return (
    <SettingsCard
      title="Notification Settings"
      description="Choose which notifications you want to receive and how you'd like to be notified."
    >
      {notificationSections.map((section) => (
        <div
          key={section.id}
          className="notification-section"
        >
          <h3>{section.title}</h3>

          {section.layout === "grid" ? (
            <div className="notification-grid">

              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="notification-item"
                >
                  <div>
                    <h4>{item.title}</h4>

                    <p>
                      {item.description}
                    </p>
                  </div>

                  <label className="notification-switch">
                    <input
                      type="checkbox"
                      checked={item.enabled}
                      readOnly
                    />

                    <span className="notification-slider"></span>
                  </label>
                </div>
              ))}

            </div>
          ) : (
            <>
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="notification-row"
                >
                  <div>
                    <h4>{item.title}</h4>

                    <p>
                      {item.description}
                    </p>
                  </div>

                  <label className="notification-switch">
                    <input
                      type="checkbox"
                      checked={item.enabled}
                      readOnly
                    />

                    <span className="notification-slider"></span>
                  </label>
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </SettingsCard>
  );
}

export default NotificationSettings;
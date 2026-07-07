import "./PreferenceSettings.css";

import SettingsCard from "../SettingsCard/SettingsCard";

function PreferenceSettings({
  preferenceSections,
}) {
  return (
    <SettingsCard
      title="Preferences"
      description="Customise your experience across the platform."
    >
      {preferenceSections.map((section) => (
        <div
          key={section.id}
          className="preferences-section"
        >
          <h3>{section.title}</h3>

          {section.items.map((item) => (
            <div
              key={item.id}
              className="preferences-row"
            >
              <div>
                <h4>{item.title}</h4>

                <p>
                  {item.description}
                </p>
              </div>

              {item.type === "select" ? (
                <select
                  className="preferences-select"
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
                <label className="preferences-switch">
                  <input
                    type="checkbox"
                    checked={item.enabled}
                    readOnly
                  />

                  <span className="preferences-slider"></span>
                </label>
              )}
            </div>
          ))}
        </div>
      ))}
    </SettingsCard>
  );
}

export default PreferenceSettings;
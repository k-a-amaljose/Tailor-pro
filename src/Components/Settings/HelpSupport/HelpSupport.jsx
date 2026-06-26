import "./HelpSupport.css";

import SettingsCard from "../SettingsCard/SettingsCard";

function HelpSupport({
  supportItems,
}) {
  return (
    <SettingsCard
      title="Help & Support"
      description="We're here to help you."
    >
      <div className="help-support-list">

        {supportItems.length > 0 ? (
          supportItems.map((item) => (
            <button
              key={item.id}
              className="help-support-item"
            >
              <div>
                <h4>{item.title}</h4>

                <p>
                  {item.description}
                </p>
              </div>

              <span className="help-chevron">
                ›
              </span>
            </button>
          ))
        ) : (
          <p className="no-support-items">
            No support options available
          </p>
        )}

      </div>
    </SettingsCard>
  );
}

export default HelpSupport;
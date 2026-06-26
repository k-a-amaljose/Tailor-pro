import "./SettingsCard.css";

function SettingsCard({
  title,
  description,
  children,
}) {
  return (
    <section className="settings-card">
      <div className="settings-card-header">
        <h2>{title}</h2>

        {description && (
          <p>{description}</p>
        )}
      </div>

      <div className="settings-card-content">
        {children}
      </div>
    </section>
  );
}

export default SettingsCard;
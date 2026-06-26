import "./AccountSettings.css";
import SettingsCard from "../SettingsCard/SettingsCard";

function AccountSettings({
  settings,
  onChangeEmail,
  onChangeNumber,
  onChangeUsername,
  onChangePassword,
  onViewSessions,
  onDeactivate,
  onDelete,
}) {
  // Render a fallback placeholder if settings data has not loaded yet
  if (!settings) {
    return (
      <SettingsCard
        title="Account Settings"
        description="Manage your account details, login information and account status."
      >
        <div className="account-section">
          <p style={{ textAlign: "center", padding: "20px" }}>
            Loading account details...
          </p>
        </div>
      </SettingsCard>
    );
  }

  return (
    <SettingsCard
      title="Account Settings"
      description="Manage your account details, login information and account status."
    >
      <div className="account-section">
        <h3>Account Information</h3>

        <div className="account-row">
          <div>
            <h4>Email Address</h4>
            <p>{settings.email}</p>
          </div>

          <button className="account-btn" onClick={onChangeEmail}>
            Change Email
          </button>
        </div>

        <div className="account-row">
          <div>
            <h4>Phone Number</h4>
            <p>{settings.phone || "Not set"}</p>
          </div>

          <button className="account-btn" onClick={onChangeNumber}>
            Change Number
          </button>
        </div>

        <div className="account-row">
          <div>
            <h4>Username</h4>
            <p>{settings.username}</p>
          </div>

          <button className="account-btn" onClick={onChangeUsername}>
            Change Username
          </button>
        </div>
      </div>

      <div className="account-section">
        <h3>Password & Login</h3>

        <div className="account-row">
          <div>
            <h4>Password</h4>
            <p>Last updated {settings.passwordLastUpdated || "N/A"}</p>
          </div>

          <button className="account-btn" onClick={onChangePassword}>
            Change Password
          </button>
        </div>

        <div className="account-row">
          <div>
            <h4>Active Sessions</h4>
            <p>View devices currently signed into your account</p>
          </div>

          <button className="account-btn" onClick={onViewSessions}>
            View Sessions
          </button>
        </div>
      </div>

      <div className="account-section">
        <h3>Verification Status</h3>

        <div className="verification-grid">
          <div
            className={`verification-card ${
              settings.isEmailVerified ? "verified" : "unverified"
            }`}
          >
            <span className="verification-badge">
              {settings.isEmailVerified ? "Verified" : "Unverified"}
            </span>
            <h4>Email Verification</h4>
            <p>
              {settings.isEmailVerified
                ? "Your email address has been verified."
                : "Please verify your email address."}
            </p>
          </div>

          <div
            className={`verification-card ${
              settings.isPhoneVerified ? "verified" : "unverified"
            }`}
          >
            <span className="verification-badge">
              {settings.isPhoneVerified ? "Verified" : "Unverified"}
            </span>
            <h4>Phone Verification</h4>
            <p>
              {settings.isPhoneVerified
                ? "Your phone number has been verified."
                : "Please verify your phone number."}
            </p>
          </div>
        </div>
      </div>

      <div className="account-section danger-zone">
        <div className="account-row">
          <div>
            <h4>Deactivate Account</h4>
            <p>Temporarily disable your profile and content.</p>
          </div>

          <button className="danger-btn" onClick={onDeactivate}>
            Deactivate
          </button>
        </div>

        <div className="account-row">
          <div>
            <h4>Delete Account</h4>
            <p>Permanently remove your account and all associated data.</p>
          </div>

          <button className="danger-btn" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </SettingsCard>
  );
}

export default AccountSettings;
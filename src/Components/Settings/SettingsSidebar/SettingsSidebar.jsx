import "./SettingsSidebar.css";

import {
  User,
  Shield,
  Bell,
  SlidersHorizontal,
  Ban,
  Lock,
  Building2,
} from "lucide-react";

function SettingsSidebar({
  activeSection,
  setActiveSection,
}) {
  const sections = [
    {
      id: "profile",
      label: "Edit Profile",
      icon: User,
    },
    {
      id: "account",
      label: "Account",
      icon: User,
    },
    {
      id: "privacy",
      label: "Privacy",
      icon: Shield,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      id: "preferences",
      label: "Preferences",
      icon: SlidersHorizontal,
    },
    {
      id: "blocked",
      label: "Blocked Accounts",
      icon: Ban,
    },
    {
      id: "security",
      label: "Security",
      icon: Lock,
    },
    {
      id: "business",
      label: "Business & Brand",
      icon: Building2,
    },
  ];

  return (
    <aside className="settings-sidebar">
      <div className="settings-sidebar-header">
        <h2>Settings</h2>
        <p>
          Manage your account and preferences
        </p>
      </div>

      <div className="settings-sidebar-menu">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              className={
                activeSection === section.id
                  ? "settings-sidebar-item active"
                  : "settings-sidebar-item"
              }
              onClick={() =>
                setActiveSection(section.id)
              }
            >
              <Icon size={18} />

              <span>
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default SettingsSidebar;
import { useState } from "react";

import "./Settings.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import TopProfile from "../../Components/TopProfile/TopProfile";

import SettingsSidebar from "../../Components/Settings/SettingsSidebar/SettingsSidebar";

import EditProfile from "../../Components/Settings/EditProfile/EditProfile";
import AccountSettings from "../../Components/Settings/AccountSettings/AccountSettings";
import PrivacySettings from "../../Components/Settings/PrivacySettings/PrivacySettings";
import NotificationSettings from "../../Components/Settings/NotificationSettings/NotificationSettings";
import PreferenceSettings from "../../Components/Settings/PreferenceSettings/PreferenceSettings";
import SecuritySettings from "../../Components/Settings/SecuritySettings/SecuritySettings";
import BusinessSettings from "../../Components/Settings/BusinessSettings/BusinessSettings";

function Settings() {
  const [active, setActive] = useState("profile");

  const profile = {
    profilePhoto:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    fullName: "Label",
    username: "label",
    bio: "Designer boutique specialising in custom wear.",
    email: "label@example.com",
    phone: "+60 12-345 6789",
    location: "Kuala Lumpur, Malaysia",
    website: "https://label.com",
    businessCategory: "Fashion Designer",
  };
  
  const sections = {
    profile: <EditProfile profile={profile} />,
    account: <AccountSettings />,
    privacy: <PrivacySettings />,
    notifications: <NotificationSettings />,
    preferences: <PreferenceSettings />,
    security: <SecuritySettings />,
    business: <BusinessSettings />,
  };

  return (
    <div className="settings-page">
      <Sidebar />

      <div className="settings-content">
        <div className="settings-topbar">
          <Searchbar />
          <TopProfile />
        </div>

        <div className="settings-layout">
          <SettingsSidebar
            activeSection={active}
            setActiveSection={setActive}
          />

          {sections[active]}
        </div>
      </div>
    </div>
  );
}

export default Settings;

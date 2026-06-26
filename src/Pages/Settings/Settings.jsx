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

  const sections = {
    profile: <EditProfile />,
    account: <AccountSettings />,
    privacy: <PrivacySettings />,
    notifications: <NotificationSettings />,
    preferences: <PreferenceSettings />,
    blocked: <BlockedAccounts />,
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
            active={active}
            setActive={setActive}
          />

          {sections[active]}
        </div>
      </div>
    </div>
  );
}

export default Settings;
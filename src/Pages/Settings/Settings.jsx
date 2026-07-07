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
    location: "Bangalore",
    website: "https://label.com",
    businessCategory: "Fashion Designer",
  };

  const accountSettings = {
    email: profile.email,
    phone: profile.phone,
    username: profile.username,
  };

  const privacySections = [
    {
      id: "visibility",
      title: "Profile Visibility",
      items: [
        {
          id: "private",
          title: "Private Account",
          description: "Only approved followers can view your profile.",
          type: "toggle",
          enabled: false,
        },
        {
          id: "messages",
          title: "Who can message you",
          description: "Choose who can send you direct messages.",
          type: "select",
          value: "Everyone",
          options: ["Everyone", "Followers", "Nobody"],
        },
      ],
    },
  ];

  const notificationSections = [
    {
      id: "general",
      title: "General Notifications",
      layout: "grid",
      items: [
        {
          id: "email",
          title: "Email Notifications",
          description: "Receive updates by email.",
          enabled: true,
        },
        {
          id: "push",
          title: "Push Notifications",
          description: "Receive browser notifications.",
          enabled: true,
        },
        {
          id: "sms",
          title: "SMS Notifications",
          description: "Receive important alerts by SMS.",
          enabled: false,
        },
      ],
    },
  ];

  const preferenceSections = [
    {
      id: "general",
      title: "General Preferences",
      items: [
        {
          id: "theme",
          title: "Theme",
          description: "Choose the appearance of the application.",
          type: "select",
          value: "Light",
          options: ["Light", "Dark", "System"],
        },
      ],
    },
  ];

  const securityItems = [
    {
      id: "password",
      title: "Change Password",
      description: "Update your account password.",
      type: "button",
    }
  ];

  const sections = {
    profile: <EditProfile profile={profile} />,

    account: (
      <AccountSettings
        settings={accountSettings}
        onChangeEmail={() => {}}
        onChangeNumber={() => {}}
        onChangeUsername={() => {}}
        onChangePassword={() => {}}
        onViewSessions={() => {}}
        onDeactivate={() => {}}
        onDelete={() => {}}
      />
    ),

    privacy: (
      <PrivacySettings
        privacySections={privacySections}
      />
    ),

    notifications: (
      <NotificationSettings
        notificationSections={notificationSections}
      />
    ),

    preferences: (
      <PreferenceSettings
        preferenceSections={preferenceSections}
      />
    ),

    security: (
      <SecuritySettings
        securityItems={securityItems}
      />
    ),

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
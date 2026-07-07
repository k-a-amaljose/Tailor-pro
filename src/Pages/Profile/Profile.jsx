import "./Profile.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import SavedBoards from "../../Components/SavedBoards/SavedBoards";
import UpComingAppts from "../../Components/UpComingAppts/UpComingAppts";

function Profile() {
  const profile = {
    id: 1,
    name: "Label",
    username: "label",
    bio: "Designer boutique specialising in custom wear.",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    followers: 1240,
    following: 186,
    boards: 12,
  };

  const boards = [
    {
      id: 1,
      name: "Bridal Collection",
      itemCount: 24,
      coverImage:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    },
    {
      id: 2,
      name: "Reception Looks",
      itemCount: 18,
      coverImage:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    {
      id: 3,
      name: "Festive Wear",
      itemCount: 31,
      coverImage:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    },
  ];

  const appointments = [
    {
      id: 1,
      customerName: "Priya Sharma",
      customerImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      service: "Bridal Consultation",
      date: "28 Jun 2026",
      time: "10:00 AM",
    },
    {
      id: 2,
      customerName: "Aisha Khan",
      customerImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      service: "Custom Design Fitting",
      date: "29 Jun 2026",
      time: "2:30 PM",
    },
  ];

  return (
    <div className="profile-page">
      <Sidebar />

      <main className="profile-content">
        <ProfileCard
          avatar={profile.profileImage}
          username={profile.username}
          bio={profile.bio}
          followers={profile.followers}
          following={profile.following}
          posts={profile.boards}
        />

        <SavedBoards boards={boards} />

        <UpComingAppts appointments={appointments} />
      </main>
    </div>
  );
}

export default Profile;
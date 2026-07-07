import "./ProfileCard.css";

function ProfileCard({
  profile,
}) {
  return (
    <div className="profile-card">

      <div className="profile-card-header">

        <img
          src={profile.profileImage}
          alt={profile.name}
          className="profile-avatar"
        />

        <button className="profile-edit-btn">
          Edit Profile
        </button>

      </div>

      <div className="profile-card-body">

        <h2 className="profile-name">
          {profile.name}
        </h2>

        <p className="profile-username">
          @{profile.username}
        </p>

        <p className="profile-bio">
          {profile.bio}
        </p>

      </div>

      <div className="profile-stats">

        <div className="profile-stat">
          <h3>{profile.followers}</h3>
          <p>Followers</p>
        </div>

        <div className="profile-stat">
          <h3>{profile.following}</h3>
          <p>Following</p>
        </div>

        <div className="profile-stat">
          <h3>{profile.boards}</h3>
          <p>Boards</p>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;
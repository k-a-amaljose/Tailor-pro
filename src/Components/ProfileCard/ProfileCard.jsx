import "./ProfileCard.css";

const ProfileCard = ({
  avatar = "https://placehold.co/120x120",
  username = "Username",
  bio = "Fashion lover • Creating my own style.",
  followers = 123,
  following = 87,
  posts = 42,
  saved = [],
}) => {
  return (
    <div className="profile-card">

      <div className="profile-header">
        <img
          src={avatar}
          alt={username}
          className="profile-avatar"
        />

        <div className="profile-info">
          <h2>{username}</h2>

          <button className="edit-btn">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="profile-stats">
        <div>
          <h3>{followers}</h3>
          <span>Followers</span>
        </div>

        <div>
          <h3>{following}</h3>
          <span>Following</span>
        </div>

        <div>
          <h3>{posts}</h3>
          <span>Posts</span>
        </div>
      </div>

      <p className="profile-bio">
        {bio}
      </p>

      <div className="saved-section">
        <h3>Recently Saved</h3>

        <div className="saved-grid">
          {saved.length > 0 ? (
            saved.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Saved ${index + 1}`}
              />
            ))
          ) : (
            <>
              <div className="placeholder" />
              <div className="placeholder" />
              <div className="placeholder" />
              <div className="placeholder" />
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProfileCard;
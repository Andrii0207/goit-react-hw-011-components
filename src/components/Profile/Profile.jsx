const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  //   const { username, tag, location, avatar, stats } = user;
  return (
    <div class="profile">
      <div class="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt={avatar}
          class="avatar"
        />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

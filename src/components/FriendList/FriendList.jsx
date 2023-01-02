import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;

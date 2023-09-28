import clsx from 'clsx';
import friends from '../Data/friends.json';
import css from './FriendListItem.module.css';

export const FriendListItem = () => {
  return friends.map(friend => {
    return (
      <li className={css.item} key={friend.id}>
        <span
          className={clsx(
            css.status,
            friend.isOnline ? css.online : css.offline
          )}
        ></span>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    );
  });
};

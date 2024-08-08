import { UserListType } from '../type/user.js';
import UserDetail from './UserDetail';
import './UsersList.css';

UsersList.propTypes = {
  users: UserListType.isRequired,
};

function UsersList({ users }) {
  return (
    <ul className="UsersList">
      {users.map((user) => (
        <UserDetail key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;

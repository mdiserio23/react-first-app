const UserItem = (props) => {
  return (
    <li>
      <span>{props.username}</span>
      <span> ({props.age} years old)</span>
    </li>
  );
};

export default UserItem;

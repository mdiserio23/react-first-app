const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  }
  return (
    <li onClick={deleteHandler}>
      <span>{props.username}</span>
      <span> ({props.age} years old)</span>
    </li>
  );
};

export default UserItem;

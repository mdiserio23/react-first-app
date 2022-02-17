import Card from "../../project-library/Card/Card";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.usersList.map((user) => {
          return (
            <UserItem username={user.username} age={user.age} key={user.id} id={user.id} onDelete={props.onDelete}/>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;

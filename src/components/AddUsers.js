import Input from "../project-library/Input/Input";
import Button from "../project-library/Button/Button";
import styles from "./AddUsers.module.css";

const AddUsers = (props) => {
  const addUserHandler = event => {
      event.preventDefault();
  };

  return (
    <div className={styles.addUsers}>
      <form
        onSubmit={addUserHandler}
        className={styles["addUsers__form-control"]}
      >
        <div className={styles.addUsers__field}>
          <label className={styles.addUsers__label}>Username</label>
          <Input type="text"></Input>
        </div>
        <div className={styles.addUsers__field}>
          <label className={styles.addUsers__label}>Age(Year)</label>
          <Input type="number"></Input>
        </div>
        <Button type="submit" label="Add User" />
      </form>
    </div>
  );
};

export default AddUsers;

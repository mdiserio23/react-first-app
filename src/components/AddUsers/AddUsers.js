import Input from "../../project-library/Input/Input";
import Button from "../../project-library/Button/Button";
import styles from "./AddUsers.module.css";
import { useState } from "react";
import Card from "../../project-library/Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUsers = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorState, setErrorState] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const resetForm = () => {
    setAge("");
    setUsername("");
    setErrorState();
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 && age.trim().length === 0) {
      setErrorState({
        title: "Invalid input",
        message: "Please enter a valid name and age (no empty value)",
      });
      return;
    }
    if (+age < 0) {
      setErrorState({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    const newUser = {
      id: Math.random(),
      username,
      age,
    };
    resetForm();
    props.onAddUser(newUser);
  };

  return (
    <div>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onCloseModal={resetForm}
        />
      )}
      <Card className={styles.addUsers}>
        <form
          onSubmit={addUserHandler}
          className={styles["addUsers__form-control"]}
        >
          <div className={styles.addUsers__field}>
            <label className={styles.addUsers__label}>Username</label>
            <Input
              value={username}
              type="text"
              onChange={usernameChangeHandler}
            ></Input>
          </div>
          <div className={styles.addUsers__field}>
            <label className={styles.addUsers__label}>Age(Year)</label>
            <Input
              value={age}
              type="number"
              onChange={ageChangeHandler}
            ></Input>
          </div>
          <Button type="submit" label="Add User" />
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;

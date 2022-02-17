import { useState } from "react";
import AddUsers from "./components/AddUsers/AddUsers";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [userArray, setUserArray] = useState([])

  const addUserHandler = newUser => {
    setUserArray(prevUser => [newUser, ...prevUser]);
  }

  return (
    <div >
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList usersList={userArray}/>
    </div>
  );
}

export default App;

import { useState } from "react";
import AddUsers from "./components/AddUsers/AddUsers";
import UsersList from "./components/UsersList/UsersList";
import Wrapper from "./Helper/Wrapper";

function App() {
  const [userArray, setUserArray] = useState([])

  const addUserHandler = newUser => {
    setUserArray(prevUser => [newUser, ...prevUser]);
  }

  const deleteUserHandler = id => {
    console.log('ciao', id);
    setUserArray(prevUser => prevUser.filter(user => user.id !== id));
  }

  return (
    <Wrapper>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList usersList={userArray} onDelete={deleteUserHandler}/>
    </Wrapper>
  );
}

export default App;

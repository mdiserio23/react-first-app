import { useState } from "react";
import AddUsers from "./components/AddUsers";

function App() {
  const [userArray, setUserArray] = useState([])

  const addUserHandler = newUser => {
    setUserArray(prevUser => [newUser, ...prevUser]);
  }

  return (
    <div >
      <AddUsers onAddUser={addUserHandler}/>
    </div>
  );
}

export default App;

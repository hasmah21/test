import "./App.css";
import { useState } from "react";
import Axios from "axios";


function App() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState(0);
 
  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3333/User").then((response) => {
      setUserList(response.data);
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3333/create", {
      username: username,
      email: email,
      password: password,
      
    }).then(() => {
      setUserList([
        ...userList,
        {
          username: username,
          email: email,
          password: password,
        },
      ]);
    });
  };

  

 

  return (
    <div className="App container">
      <h1>Employees Infomation</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country">password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => {
                setPass(event.target.value)
              }}
            />
          </div>
         
         
          <button onClick={addUser} class="btn btn-success">
            Add Employee
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getUser}>
          Show Employees
        </button>
        <br />
        <br />
        {userList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">Name: {val.name}</p>
                <p className="card-text">email: {val.email}</p>
                <p className="card-text">password: {val.password}</p>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
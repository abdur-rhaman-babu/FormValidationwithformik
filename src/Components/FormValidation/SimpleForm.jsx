import { useState } from "react";

const SimpleForm = () => {
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formValidationHandler = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password,
      id:Date.now()
    };

    setUsers([...users,newUser])

    if (username.trim() === "" || email.trim() === "") {
      return username, email;
    }
    // console.log(newUser);
    emptyInput();
  };

  const emptyInput = () => {
    setUserName("");
    setEmail("");
    setPassword("");
   
  };

  return (
    <div>
      <form onSubmit={formValidationHandler}>
        <label htmlFor="username">username:</label>
        <br />
        <input
          type="text"
          required
          autoFocus
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          name="username"
          id="username"
        />{" "}
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
        />{" "}
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
        />
        <br /> <br />
        <button type="submit">Sign up</button>
      </form>
      {
         users && users.map((user)=>( 
         <div key={user.id}>
          <h3>{user.username}</h3>
          <h4>{user.email}</h4>
          <h4>{user.password}</h4>
         </div>
          
        ))
      }
    </div>
  );
};

export default SimpleForm;

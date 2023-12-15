import { useState } from "react";

const DynamitForm = () => {
  const [inputs,setInputs] = useState([])
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const formValidationHandler = (e) => {
    e.preventDefault();

    setInputs([...inputs,input])

    if (input.username.trim() === "" || input.username.trim() === "") {
      return input;
    }
    // console.log(input);

    setInput({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={formValidationHandler}>
        <label htmlFor="username">username:</label>
        <br />
        <input
          type="text"
          required
          value={input.username}
          onChange={onChangeHandler}
          name="username"
          id="username"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          required
          value={input.email}
          onChange={onChangeHandler}
          name="email"
          id="email"
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          required
          value={input.password}
          onChange={onChangeHandler}
          name="password"
          id="password"
        />
        <br /> <br />
        <button type="submit">Sign up</button>
      </form>

      {
        inputs && inputs.map((user)=>(
          <div key={user.id}>
            <h1>{user.username}</h1>
            <h3>{user.email}</h3>
            <h3>{user.password}</h3>
            <h3>{user.id}</h3>
          </div>
        ))
      }
    </div>
  );
};

export default DynamitForm;

import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

state = {
  username: "",
  email: " ", 
  pass: "",
};

handleChange = (e) => {
  
  const name = e.target.name;
  const value = e.target.value;
  this.setState({
  [name]: value,
  });
};

/*const Header = () => {
  return (
    <>
      <div className="App-logo">
        <img src={logo} className="Logo" alt="logo" />
      </div>*/
render () {
  return
<div className="form">
  formularz
  <form>
    <label htmlFor="user">
      Nazwa użytkowanika:
      <input
        type="text" 
        id="user"
        name="username"
        value={this.state.username}
        onChange={this.handleChange}
      />
    </label>

    <label htmlFor="email">
      Twój email:
      <input
        type="email"
        id="email"
        name="email"
        value={this.state.email}
        onChange={this.handleChange}
      />
    </label>
    <label htmlFor="password">
      Twoje hasło:
      <input
        type="password"
        id="password"
        name="password"
        value={this.state.password}
        onChange={this.handleChange}
      />
    </label>
    <button>Rejestracja</button> /*w trakcie...*/
  </form>
</div>;
}

/*const Login = () => {
  return (
    <div className="Login">
      <h1>Login</h1>
      <input type="text"></input>
      <label></label>
      <button></button>
      <Link to="/">Home</Link>
    </div>
  );
}*/
/*ReactDOM.render(<Login/>, document.getElementById("root"));
export default Login;*/

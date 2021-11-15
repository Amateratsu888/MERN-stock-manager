import "./newUser.css";
import { useState } from "react";
import axios from "axios";


export default function NewUser() {
  const [username, setUsername] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState("admin");


  const passwordValide = (password1, password2) => {
    if (password1 !== password2) return false;
    return true;
  };

  const submitHandler = (e, username, password1, password2, email, role) => {
    e.preventDefault();
    const pswOk = passwordValide(password1, password2);
    if (pswOk) {
      let data = {
        login: username,
        email: email,
        role: role,
        password: password1,
      };
      axios
        .post("http://localhost:5000/admin/users/userPost", data)
        .then((res) => {
          alert(res.statusText)
          
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      alert("dont match");
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form
        className="newUserForm"
        onSubmit={(e) => {
          submitHandler(e, username, password1, password2, email, role);
        }}
      >
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            minLength="8"
            maxLength="16"
            alphabet="A-Za-z0-9+_%@!$*~-"
            requiredclasses="[A-Z] [a-z] [0-9] [+_%@!$*~-]"
            requiredclasscount="3"
            required
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Confirme password</label>
          <input
            type="password"
            minLength="8"
            maxLength="16"
            alphabet="A-Za-z0-9+_%@!$*~-"
            requiredclasses="[A-Z] [a-z] [0-9] [+_%@!$*~-]"
            requiredclasscount="3"
            required
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">admin</option>
            <option value="manager">manager</option>
            <option value="seller">seller</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

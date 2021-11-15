
import { Link , useParams, useLocation} from "react-router-dom"; 
import { useState } from "react";
import "./user.css";
import axios from "axios";

export default function User() {

  const {userId} = useParams()
  const data = useLocation()
  const userData = data.state.filter(item => item.login === userId)
  const [form,setForm] = useState({
    login : userData[0].login,
    password : userData[0].password,
    email : userData[0].email,
    role : userData[0].role
  })
  


  const formHandler = e =>{
    const newForm = {...form}
    newForm[e.target.id] = e.target.value
    setForm(newForm)

    
  }
  
  const submitHandler = e => {
    e.preventDefault()
    axios.put(`http://localhost:5000/admin/users/updateUser/${userData[0]._id}`,form)
    .then(res => console.log(res.status))
    .catch(err=> console.log(err))
  }

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={e=>submitHandler(e)} >
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" className="userUpdateInput" 
                required
                value={form.login}
                onChange={e=>formHandler(e)}
                id='login'
                />
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                onChange={e=>formHandler(e)}
                id='password'
                  type="text"
                  className="userUpdateInput"
                  minLength="8"
                  maxLength="16"
                  alphabet="A-Za-z0-9+_%@!$*~-"
                  requiredclasses="[A-Z] [a-z] [0-9] [+_%@!$*~-]"
                  requiredclasscount="3"
                  value={form.password}
                  required
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                onChange={e=>formHandler(e)}
                  id = 'email'
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                  value={form.email}
                />
              </div>
              <div className="userUpdateItem">
                <label>Role</label>
                <select className="newUserSelect" name="active" id="role" value={form.role} onChange={e=>formHandler(e)} >
                  <option value="admin">admin</option>
                  <option value="manager">manager</option>
                  <option value="seller">seller</option>
                </select>
              </div>
              
            
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

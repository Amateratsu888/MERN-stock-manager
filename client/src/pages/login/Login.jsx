import  React from "react";
import { useState } from "react";
import './Login.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useHistory } from "react-router";




export default function SignIn() {

    let router = useHistory()
  const [log, setLog] = useState({
      login : '',
      password : ''
  });
  const logHandler = e =>{
      const newLog = {...log}
      newLog[e.target.id] = e.target.value
      setLog(newLog)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/login/loginPost',log)
    .then(res => {console.log(res.status)
        if(res.status === 200){
          router.push('/home')
        }
        else{
        alert('login or password uncorrect')}
    })
    

  };

  return (
    <>
        

<div className="wrapper fadeInDown">
  <div id="formContent">
    

    <div className="fadeIn first">
     <h3> LIMEX stock manager</h3>
    </div>

    
    <form onSubmit={e=>handleSubmit(e)} >
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"  onChange={e=>logHandler(e)} value={log.login}
      required
      /> 
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" onChange={e=>logHandler(e)} value={log.password}
       minLength="8"
       maxLength="16"
       alphabet="A-Za-z0-9+_%@!$*~-"
       requiredclasses="[A-Z] [a-z] [0-9] [+_%@!$*~-]"
       requiredclasscount="3"
       required
      />
      <input type="submit" className="fadeIn fourth" value="Log In"  />
    </form>

    

  </div>
  
</div>
    </>
  );
}

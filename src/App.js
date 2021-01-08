import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import { useState } from 'react';

function App() {
  const [loginMsg, setloginMsg] = useState("");
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function Login() {
    fetch("https://5ff80d0710778b0017042b9f.mockapi.io/api/v1/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email:username , password:password })})
  
      .then(function (response) {
        if (response.status !== 200 && response.status !== 201) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(function (data) {
          setloginMsg(data.message);
          setname(data.name);
        });
      })
      .catch(function (err) {
        console.log(err);       
      });
     
  }

  function setvaluefunc(type , e) {
    if(type==="username")
    {
      setusername(e.target.value);
    }
    else
    {
      setpassword(e.target.value);
    }
  }
  
  return (
    <>
      <div className="maintDiv">
      <div className="parent">
        <div className="Header">
          <h1> Welcome!</h1>
          <p>Hi {name}</p>
        </div>

         {!loginMsg && 
          <div className="InputBoxDiv">
          <Input Type="email" Placeholder="username" onchangefunc={(e) => setusername(e.target.value)} val={username} />
          <br />
          <Input Type="password" Placeholder="password" onchangefunc={(e) => setpassword(e.target.value) } val={password}/>
        </div>
        }
        

        {username && password && !loginMsg && <div className="Buttondiv">
          <Button clickmethod={Login} />
          <p className="logiStatusMsg">{loginMsg}</p>
        </div>}
        
      </div>
      </div>
    </>
  );
}

export default App;

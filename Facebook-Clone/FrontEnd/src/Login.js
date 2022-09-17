import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Login( ) {
  const navigate = useNavigate();
  const emailFormRef = useRef(null);
  const passwordFormRef = useRef(null);
  
  const handleSubmit = () => {
    fetch("http://localhost:8080/auth/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailFormRef.current.value,
        password: passwordFormRef.current.value,
      }
      
      ),
    }).then(response => response.json()).then(
        obj => {
          if(!obj){
            alert("Password doesn't match");
          }else{
            //console.log(obj);
            localStorage.setItem('token', obj);
            console.log(localStorage.getItem('token'));
            navigate('/main')
          }
         
        
        }
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <h3><img alt="" height='50px' width='150px'  src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg"/></h3>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input 
              ref={ emailFormRef }   placeholder="Email"     className="loginInput" 
            />

            <input
              ref={ passwordFormRef }  placeholder="Password" className="loginInput"  type="password"
            />

            <button  className="loginButton"   
            onClick={ handleSubmit}
            >
              Log in
            </button>

            <button 
              className="loginRegisterButton"
             onClick={ () => navigate('/') }
            >
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

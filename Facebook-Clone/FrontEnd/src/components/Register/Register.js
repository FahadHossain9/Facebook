import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
export default function Register() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = () => {
    fetch("http://localhost:8080/auth/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    }).then(response => response.json()).then(
        obj => {
          console.log(obj.message)
          if(obj.message!="This email already has an account"){
            console.log('succesfully register')
             navigate("/login");
          }else{
            alert("shalar vai account ager thekei ase");
          }
         
        }
    );
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Facebook</h3>
        
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input ref={firstNameRef} placeholder="First Name" required className="registerInput" />
            <input ref={lastNameRef} placeholder="Last Name" required className="registerInput" />
            <input ref={emailRef} type="email" required placeholder="Email" className="registerInput" />
            <input
              ref={passwordRef}
              placeholder="Password"
              className="registerInput"
              type="password"
            />
            <input
              ref={confirmPasswordRef}
              placeholder="Confirm Password"
              className="registerInput"
              type="password"
            />
            <button className="registerButton" onClick={handleSubmit}>
              Sign up
            </button>
            <button 
              className="registerLoginButton"
              onClick={ () => navigate('/login') }
            >
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

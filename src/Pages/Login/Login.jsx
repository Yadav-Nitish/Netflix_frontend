import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Appcontext from '../../Context/Appcontext'
import netflix_spinner from '../../assets/netflix_spinner.gif'


const Login = () => {

  const navigate = useNavigate();
  const { userRegister, userLogin } = useContext(Appcontext)

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const submitData = async (e) => {
    e.preventDefault();

    if (!email || !password || (signState === "Sign Up" && !name)) {
      alert("Please fill all the required fields");
      return;
    }

    let result;

    if (signState === 'Sign In') {
      result = await userLogin(email, password);
      if (result.success) {
        setName("");
        setEmail("");
        setPassword("");
        navigate('/')
      }

    } else {
      result = await userRegister(name, email, password);
      if (result.success) {
        setName("");
        setEmail("");
        setPassword("");
      }
    }

    alert(result.message);



    if (signState === "Sign Up") {
      setSignState("Sign In");
    }



  }


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>

        <form>
          {signState === 'Sign Up' ? <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} /> : <></>}

          <input type="email" placeholder='Email'
            value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password'
            value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={submitData} type='submit' >{signState} </button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>


        <div className="form-switch">
          {signState === 'Sign In' ?
            <p>New To Netflix? <span onClick={() => { setSignState("Sign Up") }} >Sign Up Now</span> </p>
            : <p>Already have account? <span onClick={() => { setSignState("Sign In") }}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }*/

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    props.onFormSwitch('newrelease');
  }

  return (
    <div className="auth-form-container">
      <div style={{ display: 'flex', backgroundColor: 'blue', color: 'white', padding: '20px', borderRadius: '5px' }}>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1 }}>
            <h1 style={{ textAlign: 'center' }}>
                Movie<span style={{ color: 'black' }}>Tix</span>
            </h1>
            <form className="login-form" onSubmit={handleSubmit}>
                
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Sign Up</button>
                <button type="submit">Log In</button>
            </form>
            </div>
            <div style={{ flex: 1 }}>
              <img src="./sign.svg" alt="placeholder" style={{ maxWidth: '300px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




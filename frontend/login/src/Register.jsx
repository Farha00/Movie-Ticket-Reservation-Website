/*import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Sign Up</h2> 
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlfor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="full name"/>
            <label htmlfor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Sign Up</button>
        </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? log In</button>
            <div>
                <img src="./sign.svg" style={{ maxWidth: 300 }} alt="" />
            </div>
    </div>
    )
}*/

import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlfor="name">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="full name"/>
                <label htmlfor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlfor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
                <label htmlfor="Confirm password">Confirm Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="Confirm password" placeholder="********" id="confirm password" name="confirm password"/>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? log In</button>
                <button type="submit">Sign Up</button>
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

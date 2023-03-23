import React from 'react';
import MiddleForm from './components/MiddleForm';
import { useState } from 'react';
import './App.css';

function App() {
  const[name, setName] = useState({value: '',
                                  isTouched: false});
  const[email, setEmail] = useState({value: '',
                                    isTouched: false});
  const[confirmEmail, setConfirmEmail] = useState({value: '',
                                                  isTouched: false});
  const[password,setPassword] = useState({value: '',
                                        isTouched: false});

  //validate name
  const nameErrorMessage = () => {
    let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    let result = userCheck.test(name.value);
    return !result ?
        setName({value: '', isTouched: false}) :
        null;
  }

  //validate email
  const emailErrorMessage = () => {
    setEmail({value: '', isTouched: false});
    setConfirmEmail({value: '', isTouched: false});
}

  //validate password
  const passwordErrorMessage = () => {
    setPassword({value: '', isTouched: false});
  }

  //validate form
  const formValid = () => {
    return (
      name.value &&
      email.value &&
      confirmEmail.value &&
      password.value.length > 7
    )
  }

  //continue with the form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Great, you finished the first part!')
  }

  return (
    <div className="App">
      <h1>Client - Side Validating Form</h1>
      <h6>* Please note that this form is designed to erase every input if your info is incorrect. The BUTTON will be disabled until you type the correct information!</h6>
      <h3>Part 1 of 3</h3>
      {/* The first part of this form */}
      <form className='form' onSubmit={handleSubmit} >
        {/* username */}
        <label htmlFor="name">
          Userame:
        </label>
        <input id="name"
                type="text"
                value={name.value}
                placeholder='Type your name'
                onChange={(e) => setName({...name, value: e.target.value})}
                onBlur={() => setName({...name, isTouched: true})}
                required />
        {name.isTouched ?
          nameErrorMessage() :
          null}
        <p>
          * It must be alpha-numeric. Numbers have to be at the end. There can be zero or more of them at the end. Cannot start with a number. At least two characters long. A two characters username can only use alphabet letters.
        </p>

        {/* Email */}
        <hr />
        <label htmlFor='email'>
          Email:
        </label>
        <input id='email'
                type='email'
                value={email.value}
                placeholder='Type your email'
                onChange={(e) => setEmail({...email, value: e.target.value})}
                onBlur={() => setEmail({...email, isTouched: true})}
                required />

        {/* Confirm email */}
        <hr />
        <label htmlFor='confirmEmail' >
          Confirm your email:
        </label>
        <input id='confirmEmail'
                type='email'
                value={confirmEmail.value}
                placeholder='Type your email ... again'
                onChange={(e) => setConfirmEmail({...confirmEmail, value: e.target.value})}
                onBlur={() => setConfirmEmail({...confirmEmail, isTouched: true})}
                required />
        {email.isTouched && confirmEmail.isTouched && email.value !== confirmEmail.value ?
              emailErrorMessage() :
              null}
        <p>
            * Please notice that the emails must be the same.
        </p>

        {/* Password */}
        <hr />
        <label htmlFor='password' >
          Password:
        </label>
        <input id='password'
                type='password'
                value={password.value}
                placeholder="Type your password"
                onChange={(e) => setPassword({...password, value: e.target.value})}
                onBlur={() => setPassword({...password, isTouched: true})}
                required />
        {password.isTouched && password.value.length < 8 ?
                  passwordErrorMessage() :
                  null}
        <p>
          * Minimum 8 characters.
        </p>
      </form>

      {/* Conditional rendering in order to continue with the form */}
      {!formValid() ?
      null :
      <MiddleForm />}
    </div>
  );
}

export default App;

/*
HACER LO DEL PASSWORD

name
email
confirm email
password

age range - select
us number
are you a dev - radio

rate my form - range
comments
submit
*/
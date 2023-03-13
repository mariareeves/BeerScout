import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.css'
import logo from '../../assets/logo.png'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (

    <div className={`container ${styles['form-container']}`}>
      <img src={logo} className={styles.logo} alt='BeerScout logo' />
      <h2 className='title has-text-centered'>Welcome Back!</h2>
      <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className={`input is-normal ${styles['input-small']}`} type="email" name='email' placeholder="e.g. johnsmith@gmail.com" value={credentials.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className={`input is-normal ${styles['input-small']}`} type="password" name="password" placeholder='Password' value={credentials.password} onChange={handleChange} required />
          </div>
        </div>
        <div class="field">
          <p class="control">
            <button className="button is-success" type="submit">
              Log In
            </button>
          </p>
        </div>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>


  );
}


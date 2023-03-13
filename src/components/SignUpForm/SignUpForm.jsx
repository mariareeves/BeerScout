import { Component } from 'react'
import { signUp } from '../../utilities/users-service'
import styles from './SignUpForm.module.css'
import logo from '../../assets/logo.png'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
      const user = await signUp(formData)
      this.props.setUser(user)
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' })
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className={`container ${styles['form-container']}`}>
        <img src={logo} className={styles.logo} alt='BeerScout logo' />
        <h2 className='title has-text-centered'>Create An Account</h2>
        <form className={styles.form} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className={`input is-normal ${styles['input-small']}`} type="text" name='name' placeholder="e.g John Smith" value={this.state.name} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className={`input is-normal ${styles['input-small']}`} type="email" name='email' placeholder="e.g. johnsmith@gmail.com" value={this.state.email} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className={`input is-normal ${styles['input-small']}`} type="password" name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input className={`input is-normal ${styles['input-small']}`} type="password" name="confirm" placeholder='Confirm Password' value={this.state.confirm} onChange={this.handleChange} required />
            </div>

          </div>
          <div class="field">
            <p class="control">
              <button className="button is-success" type="submit" disabled={disable}>
                Sign Up
              </button>
            </p>
          </div>
        </form>

        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}


{/* <label className='label'>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button> */}
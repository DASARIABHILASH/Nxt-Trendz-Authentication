import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: '', ischecking: false}

  input1 = event => {
    this.setState({username: event.target.value})
  }

  input2 = event => {
    this.setState({password: event.target.value})
  }

  success = () => {
    const {history} = this.props
    history.replace('/')
  }

  errorgett = error => {
    this.setState({ischecking: true, error})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state

    // if (username.trim() === '' && password.trim() === '') {
    //   alert('enter data')
    //   console.log('response')
    // }
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.success()
    } else {
      this.errorgett(data.error_msg)
      console.log(data.error_msg)
    }
    this.setState({username: '', password: ''})
  }

  render() {
    const {username, password, ischecking, error} = this.state
    return (
      <div className="div1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="logo1"
          alt="website login"
        />
        <form className="div2" onSubmit={this.onSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logo2"
            alt="website logo"
          />

          <div>
            <label htmlFor="username" className="h2">
              USERNAME
            </label>
            <input
              type="text"
              className="input1"
              id="username"
              placeholder="Username"
              onChange={this.input1}
              value={username}
            />
            <label htmlFor="password" className="h2">
              PASSWORD
            </label>
            <input
              type="password"
              className="input1"
              id="password"
              placeholder="Password"
              onChange={this.input2}
              value={password}
            />
            <button className="btn" type="submit">
              Login
            </button>
            {ischecking && <p className="h">{error}</p>}
          </div>
        </form>
      </div>
    )
  }
}
export default LoginForm
// import {Component} from 'react'

// import './index.css'

// class LoginForm extends Component {
//   state = {
//     username: '',
//     password: '',
//     showSubmitError: false,
//     errorMsg: '',
//   }

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

//   onSubmitSuccess = () => {
//     const {history} = this.props

//     history.replace('/')
//   }

//   onSubmitFailure = errorMsg => {
//     this.setState({showSubmitError: true, errorMsg})
//   }

//   submitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state
//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok === true) {
//       this.onSubmitSuccess()
//     } else {
//       this.onSubmitFailure(data.error_msg)
//     }
//   }

//   renderPasswordField = () => {
//     const {password} = this.state

//     return (
//       <>
//         <label className="input-label" htmlFor="password">
//           PASSWORD
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="password-input-field"
//           value={password}
//           onChange={this.onChangePassword}
//           placeholder="Password"
//         />
//       </>
//     )
//   }

//   renderUsernameField = () => {
//     const {username} = this.state

//     return (
//       <>
//         <label className="input-label" htmlFor="username">
//           USERNAME
//         </label>
//         <input
//           type="text"
//           id="username"
//           className="username-input-field"
//           value={username}
//           onChange={this.onChangeUsername}
//           placeholder="Username"
//         />
//       </>
//     )
//   }

//   render() {
//     const {showSubmitError, errorMsg} = this.state
//     return (
//       <div className="login-form-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           className="login-website-logo-mobile-img"
//           alt="website logo"
//         />
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//           className="login-img"
//           alt="website login"
//         />
//         <form className="form-container" onSubmit={this.submitForm}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//             className="login-website-logo-desktop-img"
//             alt="website logo"
//           />
//           <div className="input-container">{this.renderUsernameField()}</div>
//           <div className="input-container">{this.renderPasswordField()}</div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//           {showSubmitError && <p className="error-message">*{errorMsg}</p>}
//         </form>
//       </div>
//     )
//   }
// }

// export default LoginForm

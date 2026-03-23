// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="div3">
        <Header />
        <div className="div6">
          <div className="div7">
            <h1 className="hh2">Clothes That Get YOU Noticed</h1>
            <p className="hh3">
              Fashion is part of the daily air following functionalities When
              invalid credentials are provided in the login form and Login
              button is clicked, then the respective error message from the
              response should be displayed When the username and password are
              provided correctly and Login button is clicked, then the page
              should navigate to Home Route
            </p>
            <button className="btn1">Shop Now</button>
          </div>
          <div className="div8">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
              alt="clothes that get you noticed"
              className="logo4"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Home

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
            <h1 className="hh2">Clothes That Get You Noticed</h1>
            <p className="hh3">
              Fashion is part of the daily air and it does not quite help...
              VBIbk e2b3iu23eb e3oub3oub3 e 3ou3be 32oe 3oeu3 e23oe23b ej23eej
              04p9ri ed0f9i4kfm rugjr09rokww3gm0r9o k3-0fogh
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

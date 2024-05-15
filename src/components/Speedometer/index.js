// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}
  onAccelerate = () => {
    if (this.state.count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    } else {
      this.setState(prevState => ({count: prevState.count}))
    }
  }
  onBrake = () => {
    if (this.state.count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    } else {
      this.setState(prevState => ({count: prevState.count}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
          className="image"
        />
        <h1 className="heading-speed">Speedometer</h1>
        <div className="content-container">
          <h1 className="heading">
            Speed is {count}mph
          </h1>
          <p className="paragraph">Min limit is 0mph, Max limit is 200mph</p>
          <div>
            <button className="accelerate" onClick={this.onAccelerate}>
              Accelerate
            </button>
            <button className="brake" onClick={this.onBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer

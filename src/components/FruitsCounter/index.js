// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoescount: 0, bananascount: 0}

  onClickEatMango = () => {
    this.setState(prevState => ({mangoescount: prevState.mangoescount + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananascount: prevState.bananascount + 1}))
  }

  render() {
    const {mangoescount, bananascount} = this.state

    return (
      <div className="fruites-counter-bg-container">
        <div className="fruites-counter-container">
          <div className="fruites-counter-card">
            <h1 className="eating-counts-heading">
              Bob ate
              <i className="fruite_count"> {mangoescount} </i>
              mangoes
              <i className="fruite_count"> {bananascount} </i>
              bananas
            </h1>
            <div className="fruites-container">
              <div className="fruite-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                  className="fruite-img"
                />
                <button
                  type="button"
                  onClick={this.onClickEatMango}
                  className="fruite-button"
                >
                  Eat Mango
                </button>
              </div>
              <div className="fruite-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                  className="fruite-img"
                />
                <button
                  type="button"
                  onClick={this.onClickEatBanana}
                  className="fruite-button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

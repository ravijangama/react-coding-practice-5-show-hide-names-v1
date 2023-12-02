// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowFn: false, isShowSn: false}

  onFirstName = () => {
    this.setState(prevState => ({isShowFn: !prevState.isShowFn}))
  }

  onSecondName = () => {
    this.setState(prevState => ({isShowSn: !prevState.isShowSn}))
  }

  render() {
    const {isShowFn, isShowSn} = this.state
    const jsxElement = (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="btn-container">
            <button type="button" className="button" onClick={this.onFirstName}>
              Show/Hide firstname
            </button>
            {isShowFn && <p className="fullname">Joe</p>}
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="button"
              onClick={this.onSecondName}
            >
              Show/Hide Lastname
            </button>
            {isShowSn && <p className="fullname">Jonas</p>}
          </div>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default ShowHide

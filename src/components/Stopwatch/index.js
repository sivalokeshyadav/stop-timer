// Write your code here
import './index.css'
import {Component} from 'react'

class StopWatch extends Component {
  state = {
    seconds: 0,
    isTimerRunning: false,
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({seconds: 0, isTimerRunning: false})
  }

  addSeconds = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  displayTimer = () => {
    const {seconds} = this.state
    const minutesIn = Math.floor(seconds / 60)
    const secondsIn = Math.floor(seconds % 60)
    const displayMinutes = minutesIn > 9 ? minutesIn : `0${minutesIn}`
    const displaySeconds = secondsIn > 9 ? secondsIn : `0${secondsIn}`

    return `${displayMinutes}:${displaySeconds}`
  }

  startOrStopFunction = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.timerId = setInterval(() => {
        this.addSeconds()
      }, 1000)
    } else {
      clearInterval(this.timerId)
    }
  }

  onStart = () => {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
    this.startOrStopFunction()
  }

  onStop = () => {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
    this.startOrStopFunction()
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="heading">StopWatch</h1>
        <div className="stop-watch-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="timer-name">Timer</p>
          </div>
          <h1 className="running-time">{this.displayTimer()}</h1>
          <div className="stop-start-container">
            <button className="start-btn" type="button" onClick={this.onStart}>
              Start
            </button>
            <button className="stop-btn" type="button" onClick={this.onStop}>
              Stop
            </button>
            <button
              className="restart-btn"
              type="button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch

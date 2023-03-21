import {Component} from "react"
import './index.css'

class RandomNumber extends Component {
    state = {
        count: 0,
    }
    onChangeRandomNumber = () => {
        const random = Math.ceil(Math.random() * 100)
        this.setState({count: random,})
    }
    render() {
        const {count} = this.state
        return (
            <div className="random-bg">
                <div className="random-container">
                    <h1>Random Number</h1>
                    <p className="para">Generate a random number in the range of 0 - 100</p> 
                    <div className="button-1">
                    <button type="button" onClick={this.onChangeRandomNumber}>Generate </button>  
                    </div>    
                    <p className="count">{count}</p>
                </div>
            </div>
        )
    }
} 

export default RandomNumber

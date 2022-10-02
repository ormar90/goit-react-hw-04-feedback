import { Component } from "react";
import { Feedback } from "./Feedback-block/Feedback-block";
import { Statistics } from "./Statictics-block/Statistics-block";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateReview = (e) => {
    const currentState = e.target.name.toLowerCase()
    // console.log(e.target.name);
    // console.log(this.state);
    this.setState(prevState => {
      return { currentState: prevState[e.target.name.toLowerCase()] += 1 };
    });      
  }
  
  render() {
    return (
      <>
        <Feedback changeReview={this.updateReview} />
        <Statistics changeState={this.state} />
      </>
    );
  }  
}
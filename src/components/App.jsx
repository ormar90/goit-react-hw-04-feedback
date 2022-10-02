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
    this.setState(prevState => {
      prevState[e.target.name.toLowerCase()] += 1;
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
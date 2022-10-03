import { Component } from "react";
import { Section } from "./Section/Section";
import { Feedback } from "./Feedback-block/Feedback-block";
import { Statistics } from "./Statictics-block/Statistics-block";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateReview = (e) => {
    this.setState(prevState => {
    return ({[e.target.name]: (prevState[e.target.name] += 1) })
    });            
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  }

  countPositiveFeedbackPercentage() {
    const result = (100 * this.state.good) / this.countTotalFeedback();
    
    return isNaN(result) ? 0 : Number(result.toFixed(0)); 
  }
  
  render() {
    return (
      <>
        <Section title="Please leave your feedback">
          <Feedback options={this.updateReview} />        
        </Section>
        <Section title="Statistics">
          {(this.countTotalFeedback() === 0)
            ? (<Notification message="There is no feedback"/>)               
            : (<Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()} />)}
        </Section>        
      </>
    );
  }  
}
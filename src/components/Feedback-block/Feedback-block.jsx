import { Component } from "react";
import { FeedbeckBock, FeedbeckTitle, FeedbackButton } from "./Feedback-block.styled"

export class Feedback extends Component {
    render() {
        return (
            <FeedbeckBock>
                <FeedbeckTitle>Please leave feedback</FeedbeckTitle>
                <FeedbackButton 
                    type="button"
                    name="Good"
                    onClick={this.props.changeReview}
                >Good</FeedbackButton>
                <FeedbackButton 
                    type="button"
                    name="Neutral"
                    onClick={this.props.changeReview}
                >Neutral</FeedbackButton>
                <FeedbackButton 
                    type="button"
                    name="Bad"
                    onClick={this.props.changeReview}
                >Bad</FeedbackButton>
            </FeedbeckBock>
        );
    }
}


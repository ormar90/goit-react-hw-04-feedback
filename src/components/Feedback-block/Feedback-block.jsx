import { Component } from "react";
import { FeedbeckBock, FeedbackButton } from "./Feedback-block.styled"
import { BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs";
import PropTypes from 'prop-types';

export class Feedback extends Component {
    render() {
        return (
            <FeedbeckBock>
                <FeedbackButton 
                    type="button"
                    name="good"
                    onClick={this.props.options}>
                    Good
                    <span>
                        <BsFillEmojiSmileFill color="green" size={24}  />
                    </span>
                </FeedbackButton>
                <FeedbackButton 
                    type="button"
                    name="neutral"
                    onClick={this.props.options}>
                    Neutral
                    <span>
                        <BsFillEmojiNeutralFill color="orange" size={24}  />
                    </span>
                </FeedbackButton>
                <FeedbackButton 
                    type="button"
                    name="bad"
                    onClick={this.props.options}>
                    Bad
                    <span>
                        <BsFillEmojiFrownFill color="red" size={24}  />
                    </span>
                </FeedbackButton>
            </FeedbeckBock>
        );
    }
}

Feedback.propTypes = {
    options: PropTypes.func,
}


import { Component } from "react";
import { NotificationMessage } from "./Notification.styed";
import PropTypes from "prop-types";

export class Notification extends Component {
  render() {
    return <NotificationMessage>{this.props.message}</NotificationMessage>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

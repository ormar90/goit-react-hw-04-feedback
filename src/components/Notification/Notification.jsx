import { NotificationMessage } from "./Notification.styed";
import PropTypes from "prop-types";

export const Notification = ({message}) => {
  return (
    <NotificationMessage>{message}</NotificationMessage>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};

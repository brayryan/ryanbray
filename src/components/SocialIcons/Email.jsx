import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Email = ({ email }) => (
    <CircleIcon iconName="EnvelopIcon" href={`mailto:${email}`} />
);

Email.propTypes = {
    email: PropTypes.string.isRequired,
};

export default Email;

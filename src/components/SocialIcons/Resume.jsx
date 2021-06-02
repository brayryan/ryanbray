import React from "react";
import PropTypes from "prop-types";

const Resume = ({ userName }) => (
    <Icon iconName="FileIcon" />
);

Resume.propTypes = {
    file: PropTypes.string.isRequired,
};

export default Resume;

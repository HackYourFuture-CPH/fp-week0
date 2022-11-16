import React from 'react';
import PropTypes from 'prop-types';

export const RoundedImage = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} width={80} height={80} />;
};

RoundedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

RoundedImage.defaultProps = {
  alt: '',
};

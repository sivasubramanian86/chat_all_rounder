import React from 'react';

const FormattedResponse = ({ response }) => {
  return (
    <div
      className="formatted-response"
      dangerouslySetInnerHTML={{ __html: response }}
    />
  );
};

export default FormattedResponse;
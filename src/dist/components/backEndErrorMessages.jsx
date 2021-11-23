import React from 'react';
const BackEndErrorMessages = ({ backEndErrors }) => {
  const message = backEndErrors.message;
  return (
    <div>
      {Array.isArray(message) ? (
        <ul>
          {message.map((single) => (
            <li key={single}>{single}</li>
          ))}
        </ul>
      ) : (
        <div>{message}</div>
      )}
    </div>
  );
};
export default BackEndErrorMessages;

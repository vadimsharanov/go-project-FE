import React from 'react';
const BackEndErrorMessages = ({ backEndErrors }) => {
  const messages = backEndErrors.errors;
  if (messages === undefined) {
    return <div></div>;
  }
  const keys = Object.keys(messages);
  return (
    <div>
      {keys.map((item) => (
        <ul key={item} style={{ fontSize: '24px' }}>
          {item[0].toUpperCase() + item.slice(1)}
          {messages[item].map((err) => (
            <li key={err} style={{ fontSize: '18px' }}>
              {err}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
export default BackEndErrorMessages;

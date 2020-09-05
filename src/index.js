import React from 'react';
import ReactDOM from 'react-dom';

class ReactApp extends React.Component {
  render() {
    return <h1>React Boilerplate</h1>
  }
}

ReactDOM.render(
  <ReactApp />,
  document.querySelector('#root')
);

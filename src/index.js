import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';

class App extends React.Component {
  render() {
    return (
      <Header />
      // <h1>React start</h1>
    );
  }
}
// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

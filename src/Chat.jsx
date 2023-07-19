const SendbirdProvider = require('@sendbird/uikit-react/cjs/SendbirdProvider');
const React = require('react');

function App() {
  debugger
  return (
    <div>
      <h1>React 18</h1>
      <SendbirdProvider>
        <h1>React 18</h1>
      </SendbirdProvider>
    </div>
  );
}

module.exports = App;

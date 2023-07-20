const App = require('@sendbird/uikit-react/cjs/App');
const React = require('react');

function Chat() {
  return (
    <div style={{ height: '100vh' }}>
      <h1>CJS app</h1>
      <App
        appId="//"
        userId="sendbird"
        nickname="sendbird"
      />
    </div>
  );
}

module.exports = Chat;

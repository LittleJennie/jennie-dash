import React from 'react';
import CreateOrder from './admin/CreateOrder';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
    };
  }

  render() {
    return (
      <div>
        <CreateOrder />
      </div>
    )
  }
};

export default App;

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React! I am using babel6, npm , webpack and livereload.</p>;
  }
}

render(<App/>, document.getElementById('app'));

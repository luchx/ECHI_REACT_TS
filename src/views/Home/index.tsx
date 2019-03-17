import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Text from '../Test';


class Home extends Component {
  render() {
    return (
      <header className="app-header">
        <Link to="/haha">Text</Link>
        <Text text='测试props'></Text>
      </header>
    );
  }
}

export default Home;

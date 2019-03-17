import React, { Component } from 'react';
import './index.scss';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <header className="app-header">
        <Link to="/haha">sadsad</Link>
      </header>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types'

//定义一个接口规范state的类型  
export interface IState {

}
//定义一个接口规范state的类型  
export interface IProps {
  text: String
}
class Test extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  static propsType = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: 3333
  }

  render() {
    return (
      <header className="app-header">
        {this.props.text}
      </header>
    );
  }
}

export default Test;

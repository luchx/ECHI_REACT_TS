import React, { Component } from 'react';
import PropTypes from 'prop-types'

//定义一个接口规范state的类型  
export interface IState {
    noPage: any
}
//定义一个接口规范state的类型  
export interface IProps {

}

class notMatch extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            noPage: require('@img/404.jpg'),
        }
    }

    propTypes = {
        num: PropTypes.number
    }

    render() {
        return (
            <div className='box-center'>
                <img src={this.state.noPage} alt="" />
            </div>
        )
    }
}

export default notMatch;
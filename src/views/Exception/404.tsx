import React, { Component } from 'react';
import PropTypes from 'prop-types'

//定义一个接口规范state的类型  
export interface IState {
    noPage: any
}

class notMatch extends Component<any, IState> {
    constructor(props: any) {
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
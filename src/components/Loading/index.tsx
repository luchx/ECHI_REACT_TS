import React, { Component } from 'react';
import './index.scss';

class Loading extends Component<any, {}> {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div className="loading-wrapper">
                <div className="loading-spinner">
                    <span className="loading-dot loading-dot-spin"><i></i><i></i><i></i><i></i></span>
                </div>
            </div >
        )
    }
}

export default Loading;
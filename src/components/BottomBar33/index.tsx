import React, { Component } from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { ApiGetMemberInfo } from '../../api';

interface IBottomObject {
    link: string;
    icon: string;
    onIcon: string;
    text: string;
}

export interface IState{
    bottomData: Array<IBottomObject>;
}

class BottomBar extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            bottomData: [
                {
                    link: "/schedule",
                    icon: "&#xe678;",
                    onIcon: "&#xe678;",
                    text: "课表"
                },
                {
                    link: "/coach",
                    icon: "&#xe677;",
                    onIcon: "&#xe677;",
                    text: "教练"
                },
                {
                    link: "/member",
                    icon: "&#xe675;",
                    onIcon: "&#xe675;",
                    text: "我的"
                }
            ]
        }
    }
    
    render() {
        return (
            <div>
                <div className="sub-bottom"></div>
                <footer className="bottom-bar">
                    {
                        this.state.bottomData.map((item, index) => {
                            return (
                                <NavLink to={item.link} key={index} activeClassName="on" className="bottom-item">
                                    <span className="bottom-icon">
                                        <i className="iconfont" dangerouslySetInnerHTML={{ __html: item.icon }}></i>
                                    </span>
                                    <span className="bottom-text">{ item.text }</span>
                                </NavLink>
                            )
                        })
                    }
                </footer>
            </div >
        )
    }
}

export default BottomBar;
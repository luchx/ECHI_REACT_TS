 import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import ListItem from '../../components/ListItem';

export interface IState {
    seatData1: Object;
    seatData2: Object;
    seatData3: Object;
}

class Subscribe extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            seatData1: {
                seat_1: {},
                seat_2: {},
                seat_3: {},
                seat_4: {},
                seat_5: {},
                seat_6: {},
                seat_7: {},
            },
            seatData2: {
                seat_8: {},
                seat_9: {},
                seat_10: {},
                seat_11: {},
                seat_12: {},
                seat_13: {},
                seat_14: {},
                seat_15: {},
            },
            seatData3: {
                seat_16: {},
                seat_17: {},
                seat_18: {},
                seat_19: {},
                seat_20: {},
                seat_21: {},
                seat_22: {},
                seat_23: {},
                seat_24: {},
            }
        }
    }

    render() {
        const { seatData1, seatData2, seatData3 } = this.state;
        return (
            <div className="bg-default">
                <div className="oc-contain">
                    <div className="contain-con">
                        <ListItem itemData={{}}></ListItem>  
                    </div>
                    <div className="book-seat">
                        <div className="seat-con">
                            <h1 className="center-title"><span>选择车位</span></h1>
                            <div className="seat-area">
                                <ul className="seat-item">
                                    {
                                        Object.keys(seatData1).map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{('0' + (index + 1)).slice(-2)}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="seat-item">
                                    {
                                        Object.keys(seatData2).map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{('0' + (index + 8)).slice(-2)}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="seat-item">
                                    {
                                        Object.keys(seatData3).map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{('0' + (index + 16)).slice(-2)}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="seat-platform">
                                <span className="coach-platform">教练台</span>
                            </div>
                            <div className="seat-tips fs-10 color-pale">*每人每次最多只能选2个车位</div>
                        </div>
                    </div>
                </div>
                <div className="sub-bottom"></div>
                <div className="book-bottom">
                    立即预约
                </div>
            </div>
        )
    }
}

export default Subscribe;
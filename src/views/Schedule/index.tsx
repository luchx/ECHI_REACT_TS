import React, { Component } from 'react';
import './index.scss';
import BottomBar from '../../components/BottomBar';
import Banner_01 from '@img/banner_01.png';
import Banner_02 from '@img/banner_02.png';
import { ApiGetTime } from '../../api';
import dayjs from 'dayjs';
import ListItem from '../../components/ListItem';
import { ApiGetProject } from '../../api/project';
import { Toast } from 'antd-mobile';

export interface IState {
    bannerList: Array<any>;
    weekDate: Array<any>;
    activeIndex: Number;
    listData: Array<any>;
}

class Schedule extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            bannerList: [{
                imgSrc: Banner_01
            }, {
                imgSrc: Banner_02
            }],
            weekDate: [],
            activeIndex: 0,
            listData: [],
        }
    }

    componentDidMount() {
        this.getTimeStamp();
    }

    getTimeStamp() {
        ApiGetTime().then((result: any) => {
            if (result.status) {
                this.formatDate(result.data);
            }
        });
    }

    formatDate(timeStamp: number) {
        let weekDate = []; // 日期周期
        let num = 7; // 循环次数
        let day = 0; // 当前天数
        while (num--) {
            let addDay = 86400000 * day;  // 当前时间跨度(86400000为一天的间隔)
            weekDate.push(timeStamp + addDay);
            day++;
        }
        this.setState({
            weekDate
        });
        this.getBookStatus();
    }

    getBookStatus() {
        ApiGetProject().then((result: { status: any; data: any[]; message: React.ReactNode; }) => {
            if(result.status) {
                this.setState({
                    listData: result.data
                })
            }else {
                Toast.info(result.message, 2)
            }
        }).catch((err: any) => {
            console.error(err)
        });
    }

    render() {
        return (
            <div className="schedule-wrapper">
                <img className="autoImg" src={Banner_01} alt={Banner_01} />
                <div className="oc-data">
                    <div className="data-con">
                        {
                            this.state.weekDate.map((item, index) => {
                                return (
                                    <div className={`data-item ${index === this.state.activeIndex ? 'on' : ''}`} onClick={() => {
                                        this.setState({
                                            activeIndex: index
                                        })
                                    }} key={index}>
                                        {'周' + ['日', '一', '二', '三', '四', '五', '六'][dayjs(item).day()]}
                                    </div>
                                )
                            })    
                        }
                    </div>
                    <div className="data-con no-border">
                        {
                            this.state.weekDate.map((item, index) => {
                                return (
                                    <div className={`day-item ${index === this.state.activeIndex ? 'on' : ''}`} onClick={() => {
                                        this.setState({
                                            activeIndex: index
                                        })
                                    }} key={index}>
                                        {dayjs(item).date()}
                                    </div>
                                )
                            })
                        }
                        <span className="day-tips"></span>
                    </div>
                </div>
                <div className="oc-contain">
                    <div className="contain-con">
                        {
                            this.state.listData.map((item, index) => {
                                return (
                                    <ListItem itemData={item} key={index}></ListItem>
                                )
                           })
                        }
                    </div >
                </div >
                {/* 底部固定页 */}
                <BottomBar></BottomBar>
            </div>
        )
    }
}

export default Schedule;
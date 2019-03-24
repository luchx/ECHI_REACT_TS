import React, { Component } from 'react';
import './index.scss';
import BottomBar from '../../components/BottomBar';
import { Tabs } from 'antd-mobile';
import Banner_01 from '@img/banner_01.png';
import Banner_02 from '@img/banner_02.png';

export interface IState {
    bannerList: Array<any>;
}

class Schedule extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            bannerList: [{
                imgSrc: Banner_01
            }, {
                imgSrc: Banner_02
            }]
        }
    }

    render() {
        const bannerList = this.state.bannerList;
        return (
            <div className="schedule-wrapper">
                <img className="autoImg" src={Banner_01} alt={Banner_01} />
                <div className="oc-data">
                    <div className="data-con">
                        <div className="data-item">
                            12
                        </div>
                        <span className="date-tips"></span>
                    </div>
                    <div className="data-con no-border">
                        <div className="day-item">
                            13
                        </div>
                        <span className="day-tips"></span>
                    </div>
                </div>
                <div className="oc-contain">
                    <div className="contain-con">
                        <Tabs tabs={bannerList} initialPage={1}>
                            {
                                bannerList.map((item, index) => {
                                    return (
                                        <div className="swiper-item" key={index}>
                                            <img className="autoImg" src={item.imgSrc} alt={item.imgSrc} />
                                        </div>
                                    )
                                })
                            }
                        </Tabs>
                    </div >
                </div >
                {/* 底部固定页 */}
                <BottomBar></BottomBar>
            </div>
        )
    }
}

export default Schedule;
import React, { Component } from 'react';
import './index.scss';
import dayjs from 'dayjs';
import { Button } from 'antd-mobile'

export interface IProps {
    itemData: any;
}

class ListItem extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }
    
    render() {
        const { itemData } = this.props;
        let ItemStatus;
        if(itemData.isHot && itemData.leftSeat !== 0) {
            // 有剩余座位且热门
            ItemStatus = <div className="item-arrow item-arrow-left">HOT</div>
        }else if(itemData.leftSeat !== 0 && itemData.leftSeat < 14) {
            // 紧张状态
            ItemStatus = <div className="item-arrow item-arrow-right">紧张</div>
        }else {
            ItemStatus = <div className="item-arrow item-arrow-right arrow-full">约满</div>
        }
        return (
            <div className="contain-item">
                <div className="contain-img">
                    <img className="autoImg" src={itemData.coachAvatar} alt="" />
                </div>
                <div className="contain-desc">
                    <div className="contain-member">
                        <span className="fs-14 color-main">{itemData.coachName}</span>
                        <span className="fs-11 color-pale ml-10">￥ {itemData.price} ( 会员￥ {itemData.memberPrice} )</span>
                    </div>
                    <div className="contain-btn-group">
                        <div className="contain-tips">
                            <span className="color-sub fs-13 mr-10">{itemData.coachName}</span>
                            <span className="oc-btn oc-btn-xs oc-btn-danger">活力</span>
                        </div>
                    </div>
                    <div className="contain-time">
                        <span className="color-main fs-13">{itemData.duration}mins</span>
                        <span className="color-pale fs-10 ml-10">{dayjs(itemData.startTime).format('HH:mm')} - {dayjs(itemData.endTime).format('HH:mm')}</span>
                    </div>
                    <div className="color-pale fs-10 contain-follow">
                        您关注的
                        <span className="color-main">
                            Echi
                            <span>,</span>
                        </span>等3位好友预约了
                    </div>
                </div>
                <div className="contain-btn">
                    <Button type="ghost" size="small" disabled={itemData.leftSeat === 0}>预约</Button>
                </div>
                {ItemStatus}
            </div>
        )
    }
}

export default ListItem;
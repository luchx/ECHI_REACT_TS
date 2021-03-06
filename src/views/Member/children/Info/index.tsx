import React, {
    Component
} from 'react';
import './index.scss';
import { ApiGetMemberInfo, ApiModifyMember } from '../../../../api';
import { Modal } from 'antd-mobile';
import { local } from '../../../../utils/storage';
import { selectFileImage } from '../../../../utils';

const prompt = Modal.prompt;

export interface IState {
    member: any;
    memberId: any;
}

class MemberInfo extends Component < any, IState > {
    constructor(props: any) {
        super(props);
        this.state = {
            member: {},
            memberId: null,
        }
    }

    componentDidMount() {
        let memberId = local.get('echi_user_id');
        ApiGetMemberInfo(memberId).then((result: any) => {
            this.setState({
                member: result.data,
                memberId
            })
        }).catch((err: any) => {
            console.error(err);
        });
    }


    // 修改用户
    modifyInfo(value: any, key: string) {
        if (value[0].length !== 0) {
            const memberId = this.state.memberId;
            const info: any = {};
            info[key] = value[0];
            ApiModifyMember(memberId, info).then((result: any) => {
                if(result.status) {
                    let { member } = this.state;
                    member[key] = value[0];
                    this.setState({
                        member
                    })
                }
            }).catch((err: any) => {
                console.error(err);
            });
        }
    }

    // 上传图片
    uploadImage(event: any) {
        let file = event.target.files[0];
        selectFileImage(file, img => {
            let { member } = this.state;
            member['avatar'] = img;
            this.setState({
                member
            });
            this.modifyInfo([img], 'avatar');
        });
    }

    render() {
        const member = this.state.member;
        return (
            <div className="member-info">
                <div className="link-group">
                    <div className="link">
                        <span className="fs-13">头像</span>
                        <div className="value-unchangable">
                            <div className="upload-wrapper">
                                <input className="img-file" type="file" accept="image/*" onChange={($event) => this.uploadImage($event)} />
                                <img className="avastar" src={member.avatar} />
                            </div>
                            <i className="iconfont">&#xe660;</i>
                        </div>
                    </div>
                    <div className="link"
                        onClick={
                            () => prompt('修改用户信息', '请输入姓名', [
                                { text: '取消' },
                                { text: '确定', onPress: (...argus) => {
                                    this.modifyInfo(argus, 'nickname');
                                }}
                            ], 
                            'default', member.nickname)
                            }
                        >
                        <span className="fs-13">
                            昵称
                        </span>
                        <span className="fs-12 c-aaa">
                            { member.nickname }
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </div>
                    {/* <div className="link">
                        <span className="fs-13">
                            性别
                        </span>
                        <span className="fs-12 c-aaa">
                            { member.genderDisplay }
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </div> */}
                    <div className="link">
                        <span className="fs-13">
                            生日
                        </span>
                        <span className="fs-12 c-aaa">
                            { member.birthday }
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </div>
                </div>
                <div className="link-group">
                    <div className="link"
                        onClick={
                            () => prompt('修改用户信息', '请输入鞋码', [
                                { text: '取消' },
                                {
                                    text: '确定', onPress: (...argus) => {
                                        this.modifyInfo(argus, 'shoeSize');
                                    }
                                }
                            ],
                                'default', member.shoeSize)
                        }
                    >
                        <span className="fs-13">
                            鞋码
                        </span>
                        <span className="fs-12 c-aaa">
                            {member.shoeSize}
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </div>
                    <div className="link"
                        onClick={
                            () => prompt('修改用户信息', '座位高度', [
                                { text: '取消' },
                                {
                                    text: '确定', onPress: (...argus) => {
                                        this.modifyInfo(argus, 'seatHeight');
                                    }
                                }
                            ],
                                'default', member.seatHeight)
                        }
                    >
                        <span className="fs-13">
                            座位高度
                        </span>
                        <span className="fs-12 c-aaa">
                            {member.seatHeight}
                            <i className="iconfont">&#xe660;</i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberInfo;
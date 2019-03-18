import React, { Component } from 'react';
import './index.scss';
import Logo from '@img/logo.svg';
import { Button, Toast } from 'antd-mobile'; 
import { TestPhone } from '../../utils/validator';

export interface ICheckState {
    focusName: string;
    phone: string;
    code: string;
    sendingCodeStatus: boolean;
    sendingCodeText: string;
    leftTime: number;
    handleTimer: any;
}

class Login extends Component<any, ICheckState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            focusName: '',
            phone: '',
            code: '',
            sendingCodeStatus: false,
            sendingCodeText: '',
            leftTime: 120,
            handleTimer: null,
        }
    }

    // 手机号码输入操作
    handlePhoneChange(event: any) {
        this.setState({ 
            phone: event.target.value 
        });
    }

    // 验证码输入操作
    handleCodeChange(event: any) {
        this.setState({
            code: event.target.value
        });
    }

    inputFocus(key: any) {
        this.setState({
            focusName: key
        })
    }

    inputBlur() {
        this.setState({
            focusName: ''
        })
    }

    // 发送验证码
    handleSendCode() {
        let { phone, code } = this.state;
        if (!phone) {
            return Toast.info('请输入您的手机号码', 2);
        }
        if (!TestPhone(phone)) {
            return Toast.info('您的号码输入错误', 2);
        }
        this.getLeftTime();
    }

    // 倒计时获取剩余时间
    getLeftTime() {
        let leftTime = this.state.leftTime;
        this.setState({
            sendingCodeStatus: true,
            sendingCodeText: leftTime + "s"
        })
        if (this.state.handleTimer !== undefined) {
            clearInterval(this.state.handleTimer)
            this.setState({
                handleTimer: null
            })
        };
        let handleTimer = setInterval(() => {
            leftTime--;
            if (leftTime < 0) {
                this.setState({
                    sendingCodeStatus: false,
                    sendingCodeText: "获取验证码"
                })
                leftTime = this.state.leftTime;
                clearInterval(handleTimer);
            } else {
                this.setState({
                    sendingCodeText: leftTime + "s"
                })
            }
        }, 1000);
        this.setState({
            handleTimer: handleTimer
        });
    }

    render() {
        return (
            <div className="login-wrapper">
                <div className="login-verify-content">
                    <div className="login-verify-logo">
                        <img className="autoImg app-logo" src={Logo} alt="logo" title="logo" />
                    </div>
                </div>
                <div className="login-verify-check">
                    <div className="login-verify-item">
                        <label>手机号码</label>
                        <div className={this.state.focusName === 'phone' ? 'login-verify-input focus' : 'login-verify-input'}>
                            <input type="number" ref="phone" placeholder="请输入手机号码" autoFocus
                                value={this.state.phone} 
                                onChange={(event) => this.handlePhoneChange(event)} 
                                onFocus={() => this.inputFocus('phone')} 
                                onBlur={() => this.inputBlur()} />
                        </div>
                    </div >
                    <div className="login-verify-item">
                        <label>验证码</label>
                        <div className={this.state.focusName === 'code' ? 'login-verify-input check focus' : 'login-verify-input check'}>
                            <input type="number" placeholder="请输入验证码" 
                                value={this.state.code} 
                                onChange={(event) => this.handleCodeChange(event)} 
                                onFocus={() => this.inputFocus('code')}
                                onBlur={() => this.inputBlur()}/>
                            <div className="login-verify-btn">
                                <Button type="primary" size="small" 
                                    onClick={() => this.handleSendCode()}
                                    disabled={this.state.sendingCodeStatus}>
                                    {this.state.sendingCodeStatus ? this.state.sendingCodeText : '发送验证码'}
                                </Button>
                            </div>
                        </div>
                    </div >
                    <div className="login-verify-bottom">
                        <Button type="primary"
                            onClick={() => this.handleSendCode()}
                            disabled={this.state.sendingCodeStatus}>
                            提交
                        </Button>
                    </div>
                </div >
            </div>
        )
    }
}

export default Login;
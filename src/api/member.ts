import service from '../axios/service';

/**
 * 获取验证码
 *
 * @export
 * @param {string} phone
 * @returns
 */
export function ApiGetVerifyCode(phone: string) {
    let url = 'api/member/getCode';
    let data = {
        phone
    }
    return service.get({
        url,
        data
    })
}

/**
 * 注册用户
 *
 * @export
 * @param {string} phone
 * @param {string} code
 * @returns
 */
export function ApiMemberLogin(phone: string, code: string) {
    let url = 'api/member/login';
    let data = {
        phone,
        code
    }
    return service.post({
        url,
        data
    })
}

/**
 * 获取用户信息
 *
 * @export
 * @param {string} memberId
 * @returns
 */
export function ApiGetMemberInfo(memberId: any) {
    let url = `api/member/getInfo/${memberId}`;
    return service.get({
        url
    })
}

/**
 * 修改用户信息
 *
 * @export
 * @param {*} memberId
 * @param {*} modify
 * @returns
 */
export function ApiModifyMember(memberId: any, modify: any) {
    let url = 'api/member/modify';
    const data = {
        id: memberId,
        ...modify
    }
    return service.put({
        url,
        data
    })
}
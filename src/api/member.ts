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
 * 注册用户
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
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
export function ApiMemberRegister(phone: string, code: string) {
    let url = 'api/member/register';
    let data = {
        phone,
        code
    }
    return service.post({
        url,
        data
    })
}
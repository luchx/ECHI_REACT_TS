import service from '../axios/service';

/**
 * 获取验证码
 *
 * @export
 * @param {string} phone
 * @returns
 */
export function ApiGetVerifyCode(phone: string) {
    let url = 'api/user/getCode';
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
export function ApiUserRegister(phone: string, code: string) {
    let url = 'api/user/register';
    let data = {
        phone,
        code
    }
    return service.post({
        url,
        data
    })
}
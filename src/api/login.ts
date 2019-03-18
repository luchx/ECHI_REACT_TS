import service from '../axios/service';

export function ApiGetVerifyCode(phone: string) {
    let url = 'api/login/getCode';
    let data = {
        phone
    }
    return service.get({
        url,
        data
    })
}
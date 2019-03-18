import service from '../axios/service';

export function ApiGetVerifyCode(phone: string) {
    let url = `api/login/getCode/${phone}`;
    return service.get({
        url
    })
}
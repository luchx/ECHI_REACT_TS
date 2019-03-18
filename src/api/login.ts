import service from '../axios/service';

export function ApiGetVerifyCode(phone: string) {
    let url = `api/login/code/${phone}`;
    return service.get({
        url
    })
}
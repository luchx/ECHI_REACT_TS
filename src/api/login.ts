import service from '../axios/service';

export function ApiGetVerifyCode(phone: string) {
    let url = 'api/member/code';
    let data = {
        phone
    }
    return service.get({
        url,
        data
    })
}
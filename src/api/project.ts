import service from '../axios/service';

/**
 * 获取课程表
 *
 * @export
 * @returns
 */
export function ApiGetProject() {
    let url = 'api/project/getProject';
    return service.get({
        url
    })
}
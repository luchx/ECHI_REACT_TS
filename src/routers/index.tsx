import React from 'react';
import Loadable from 'react-loadable'
import { Redirect } from 'react-router-dom'

//标记： 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载，这是经常需要做的行为。
// 详情请参考这一篇文章：https://blog.csdn.net/China_Guanq/article/details/82194928#loadable
const loadable = (filename: string) => Loadable({
    loader: () => import(`@/views/${filename}`),
    loading: (): any => <div>Loading...</div>,
    delay: 300, // 0.3 seconds
});

//路由配置对象
const routers = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/login" />
    },
    {
        path: '/login',
        component: loadable('Login')
    }, 
    {
        path: '/member/:id',
        component: loadable('Member')
    }, 
    {
        path: '*',
        component: loadable('Exception/404')
    }
];

export default routers;

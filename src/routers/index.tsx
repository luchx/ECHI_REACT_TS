import React from 'react';
import Loadable from 'react-loadable'
import { Redirect } from 'react-router-dom'
import Loading from '../components/Loading';

const LoadingComponent = ({ isLoading, error }: any) => {
    if (isLoading) {
        return <Loading />;
    }else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }else {
        return null;
    }
};

//标记： 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载，这是经常需要做的行为。
// 详情请参考这一篇文章：https://blog.csdn.net/China_Guanq/article/details/82194928#loadable
const loadable = (filename: string) => Loadable({
    loader: () => import(`@/views/${filename}`),
    loading: LoadingComponent,
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
        path: '/member',
        exact: true,
        component: loadable('Member')
    }, 
    {
        path: '/member/info',
        component: loadable('Member/children/Info')
    }, 
    {
        path: '/schedule',
        component: loadable('Schedule')
    }, 
    {
        path: '/subscribe',
        component: loadable('Subscribe')
    }, 
    {
        path: '*',
        component: loadable('Exception/404')
    }
];

export default routers;

import React from 'react';

const Home = React.lazy(() => import('../Page/Home'));
const Detail = React.lazy(() => import('../Page/Detail'))
// const Login = React.lazy(() => import('../pages/Login/login'));
// const Signup =React.lazy(()=>import('../pages/sign up/signup'))

const routes = [
  {
    path: '/',
    exact: false,
    element: Home,

    isAuthenticated: false,
    isCommon: true
  },
  {
    path:'/detail/:id',
    exact:false,
    element:Detail,
    isAuthenticated: false,
    isCommon: true
  }
  

]

export default routes;

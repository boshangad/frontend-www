// 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。
import { RequestConfig, IRoute } from 'umi';
import IndexPage from '@/pages/index.jsx';

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [],
  prefix: '',
};

export function patchRoutes(obj: { routes: IRoute[] }) {
  let routes = obj.routes;
  routes.unshift({
    path: '/',
    exact: true,
    component: IndexPage,
    routes: [],
    children: [],
  });
  // routes.unshift({
  //   path: '*',
  //   exact: true,
  //   component: IndexPage,
  //   routes: [],
  // });
}

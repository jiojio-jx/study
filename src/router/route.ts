import { lazy } from 'react';

const Index = lazy(() => import(/* webpackChunkName: "Index" */ '@/pages/home'));
const Detail = lazy(() => import(/* webpackChunkName: "Detail" */ '@/pages/detail'));

export interface RouteConfig {
  path: string;
  component?: any;
  exact?: boolean;
  meta?: {
    title: string;
  };
  render?: any;
}

export const routes: RouteConfig[] = [
  {
    path: '/index',
    component: Index,
    exact: true,
  },
  {
    path: '/detail',
    component: Detail,
    exact: true,
    meta: {
      title: '奖品详情',
    },
  },
];

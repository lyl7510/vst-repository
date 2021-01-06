import asynComponent from "@packages/router/asyncComponent";
import {RouterType} from "@packages/router/RouterType";

const routers: RouterType[] = [
    {
        path: '/button',
        component: asynComponent(() => import('./button/ButtonExample'))
    },
    {
        path: '/pager',
        component: asynComponent(() => import('./pager/PagerExample'))
    },
    {
        path: '/queryPager',
        component: asynComponent(() => import('./queryPager/QueryPagerExample'))
    },
    {
        path: '/form',
        component: asynComponent(() => import('./form/FormExample'))
    }
];

export default routers;

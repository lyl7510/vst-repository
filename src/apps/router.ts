import asynComponent , {RouterType} from "../vst/router/AsynComponent";

let routers: RouterType[];
routers = [
    {
        path: '/layout',
        component: asynComponent(() => import('./test/layout'))
    },
    {
        path: '/button',
        component: asynComponent(() => import('./test/button'))
    },
    {
        path: '/grid',
        component: asynComponent(() => import('./test/grid'))
    },
    {
        path: '/menu',
        component: asynComponent(() => import('./../block/menu'))
    },
    {
        path: '/select',
        component: asynComponent(() => import('./test/select'))
    },
    {
        path: '/cascader',
        component: asynComponent(() => import('./test/cascader'))
    },
    {
        path: '/inputNumber',
        component: asynComponent(() => import('./test/inputNumber'))
    },
    {
        path: '/checkbox',
        component: asynComponent(() => import('./test/checkbox'))
    },
    {
        path: '/radio',
        component: asynComponent(() => import('./test/radio'))
    },
    {
        path: '/treeSelect',
        component: asynComponent(() => import('./test/treeSelect'))
    },
    {
        path: '/date',
        component: asynComponent(() => import('./test/date'))
    },
    {
        path: '/form',
        component: asynComponent(() => import('./test/form'))
    },{
        path: '/login',
        component: asynComponent(() => import('./test/login'))
    },{
        path: '/input',
        component: asynComponent(() => import('./test/input'))
    }
];

export default routers;

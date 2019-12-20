import asynComponent , {RouterType} from "../vst/router/AsynComponent";

let routers: RouterType[];
routers = [
    {
        path: '/layout',
        component: asynComponent(() => import('./test/layout'))
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
        path: '/textarea',
        component: asynComponent(() => import('./test/textarea'))
    },
    {
        path: '/form',
        component: asynComponent(() => import('./test/form'))
    },
    {
        path: '/modal',
        component: asynComponent(() => import('./test/modal'))
    },
    {
        path: '/tab',
        component: asynComponent(() => import('./test/tab'))
    }
];

export default routers;

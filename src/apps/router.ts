import asynComponent , {RouterType} from "../vst/router/AsynComponent";

const routers:RouterType[] = [
    {
        path:'/layout',
        component: asynComponent(() => import('./test/layout'))
    },
    {
        path:'/grid',
        component: asynComponent(() => import('./test/grid'))
    },
    {
        path:'/menu',
        component: asynComponent(() => import('./../block/menu'))
    }
]

export default routers;

import Vst from "./../vst/index";
import * as ReactDOM from 'react-dom';
import routers from './router';

import RouterFunction from './../vst/router/RouterFunction';
const RouterComponent = RouterFunction(routers);

ReactDOM.render(
    <RouterComponent/>,
    document.getElementById('root') as HTMLElement
);
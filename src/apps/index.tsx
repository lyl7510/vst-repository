import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ConfigProvider} from "antd";
import zh_CN from 'antd/es/locale-provider/zh_CN';
import {HashRouter} from "react-router-dom";
import routers from './router';

import RouterFunction from './../vst/router/RouterFunction';

const RouterComponent = RouterFunction(routers);

ReactDOM.render(
    <ConfigProvider locale={zh_CN}>
        <HashRouter>
            <RouterComponent/>
        </HashRouter>
    </ConfigProvider>,
    document.getElementById('root') as HTMLElement
);
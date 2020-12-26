import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";

import ComponentConfig from "@packages/config/ComponentConfig";
import defaultComponentConfig from "./config/DefaultComponentConfig";

import SerializeRouter from "@packages/router/SerializeRouter";
import routers from "./routers";

ComponentConfig.assign(defaultComponentConfig);

ReactDOM.render(
    <HashRouter>
        {SerializeRouter(routers)}
    </HashRouter>,
    document.getElementById('root') as HTMLElement
);

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";

//注入组件默认参数
import ComponentConfig from "@packages/config/ComponentConfig";
import defaultComponentConfig from "./config/DefaultComponentConfig";

//注入验证规则
import regulation from "@packages/config/regulation";
import regulationConfig from "./config/RegulationConfig";

import SerializeRouter from "@packages/router/SerializeRouter";
import routers from "./routers";

ComponentConfig.assign(defaultComponentConfig);
regulation.inject(regulationConfig);

ReactDOM.render(
    <HashRouter>
        {SerializeRouter(routers)}
    </HashRouter>,
    document.getElementById('root') as HTMLElement
);

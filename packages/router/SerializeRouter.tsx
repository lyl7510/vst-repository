import * as React from 'react';
import {Route} from "react-router-dom";
import {RouterType} from "./RouterType";

const SerializeRouter = function (routers: RouterType[]): React.ReactNode {
    return <React.Fragment>
        {
            routers.map((item: RouterType) => {
                const exact = item.exact === true ? true : false;
                return <Route exact={exact} path={item.path} component={item.component} key={item.path}></Route>
            })
        }
    </React.Fragment>;
};

export default SerializeRouter;

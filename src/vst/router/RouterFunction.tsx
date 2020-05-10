import * as React from 'react';
import {Route} from "react-router-dom";
import {RouterType} from "./AsynComponent";

export interface IRouterComponentState {
    routers: RouterType[];
}

export default function asyncComponentList(imports: RouterType[]): any {
    return class RouterComponent extends React.Component<{}, IRouterComponentState> {
        constructor(props: {}) {
            super(props);
            this.state = {
                routers: imports
            }
        }

        render(): JSX.Element {
            const {routers} = this.state;
            return (
                    <React.Fragment>
                        {
                            routers.map((router: RouterType, index) => {
                                return <Route key={index}
                                              exact={router.exact ? router.exact : false}
                                              path={router.path}
                                              component={router.component}></Route>
                            })
                        }
                    </React.Fragment>
            )
        }
    }
}

import * as React from 'react';
import {ConfigProvider} from "antd";
import zh_CN from 'antd/es/locale-provider/zh_CN';
import {HashRouter, Route} from "react-router-dom";
import {RouterType} from "./AsynComponent";

interface IrouterComponentState {
    routers: RouterType[];
}

export default function asyncComponentList(imports: RouterType[]): any {
    return class RouterComponent extends React.Component<{}, IrouterComponentState> {
        constructor(props: {}) {
            super(props);
            this.state = {
                routers: imports
            }
        }

        render(): JSX.Element {
            const {routers} = this.state;
            return (
                <ConfigProvider locale={zh_CN}>
                    <HashRouter>
                        {
                            routers.map((router:RouterType ,index)=>{
                                return <Route key={index} exact path={router.path} component={router.component}></Route>
                            })
                         }
                    </HashRouter>
                </ConfigProvider>
            )
        }
    }
}

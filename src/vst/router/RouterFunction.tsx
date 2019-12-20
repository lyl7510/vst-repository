import Vst, {Component} from "../index";
import {HashRouter, Route} from "react-router-dom";
import {RouterType} from "./AsynComponent";

interface IrouterComponentState {
    routers: RouterType[];
}

export default function asyncComponentList(imports: RouterType[]): any {

    return class RouterComponent extends Component<{}, IrouterComponentState> {
        constructor(props: {}) {
            super(props);
            this.state = {
                routers: imports
            }
        }

        render(): Vst.Element {
            const {routers} = this.state;
            return (
                <HashRouter>
                    {
                        routers.map((router:RouterType ,index)=>{
                            return <Route key={index} exact path={router.path} component={router.component}></Route>
                        })
                     }
                </HashRouter>
            )
        }
    }
}

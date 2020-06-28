import { RouterType } from "./AsynComponent";
export interface IRouterComponentState {
    routers: RouterType[];
}
export default function asyncComponentList(imports: RouterType[]): any;

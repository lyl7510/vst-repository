import PagerComponent, {PagerComponentState} from "./../pages/PagerComponent";
import Form from "../comps/form/Form";
import ArtList from "./../comps/list";
import {IModel, IRule} from "../comps/form/interface";

export interface IFormItemRule {
    [name: string]: IRule | IRule[];
}

export interface QueryPagerComponentState extends PagerComponentState {
    model?: IModel;
    rules?: IFormItemRule;
}

export default class QueryPagerComponent<P, S> extends PagerComponent<P, S> {

    protected myForm: Form = null;
    protected list: ArtList = null;

    constructor(props: P) {
        super(props);
    }

    public componentDidMount() {
        const model: IModel = this.myForm.getModel();
        this.list.setParam(model);
        this.list.search();
    }

    /**
     * 查询方法
     */
    public search(): void {
        const model: IModel = this.myForm.getModel();
        this.list.setParam(model);
        this.list.setPagerNumber(1);
        this.list.search();
    }

    /**
     * 重置方法
     */
    public reset(): void {
        this.myForm.resetFields().then(()=>{
            const model: IModel = this.myForm.getModel();
            this.list.setParam(model);
            this.list.setPagerNumber(1);
            this.list.search();
        });
    }
}

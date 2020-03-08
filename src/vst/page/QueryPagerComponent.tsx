import * as React from 'react';
import BaseComponent from "./BaseComponent";
import {Grid} from "../../comps";
import Form, {IForm, IRule} from "../../comps/form";
import VsbPager, {IPagerDesign} from "../../block/pager";

export interface QueryPagerComponentProps {

}

export interface QueryPagerComponentState {
    model: IForm;
    rules: IRule;
    design: IPagerDesign;
}

export default abstract class QueryPagerComponent<P extends QueryPagerComponentProps, S extends QueryPagerComponentState> extends BaseComponent<QueryPagerComponentProps, QueryPagerComponentState> {

    protected myFrom: Form;
    protected pager: VsbPager;

    protected constructor(props: QueryPagerComponentProps) {
        super(props);
        this.state = {
            model: {},
            rules: {},
            design: {
                url: "",
                title: "",
                checkbox: true,
                btns: [],
                columns: []
            }
        }
    }

    protected query(): void {
        this.pager.setParam(this.state.model);
        this.pager.query();
    }

    protected resetFields(): void {
        this.myFrom.resetFields();
    }

    public componentDidMount(): void {
        this.query();
    }

    public render(): JSX.Element {
        const {design} = this.state;
        return (<React.Fragment>
                {this.renderForm()}
                <Grid.Row>
                    <Grid.Col span={24}>
                        {<VsbPager ref={(node) => this.pager = node} design={design}></VsbPager>}
                    </Grid.Col>
                </Grid.Row>
            </React.Fragment>
        );
    }

    protected abstract renderForm(): JSX.Element;
}
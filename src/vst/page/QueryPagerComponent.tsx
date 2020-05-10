import * as React from 'react';
import BaseComponent, {BaseComponentProps} from "./BaseComponent";
import {Grid} from "../../comps";
import Form, {IForm, IRule} from "../../comps/form";
import VsbPager, {IPagerDesign} from "../../block/pager";

export interface QueryPagerComponentProps extends BaseComponentProps {

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
        this.pager.setParam(this.state.model);
        this.pager.setPagerNumber(1);
        this.pager.query();
    }

    protected refreshPage(): void {
        this.pager.setPagerNumber(1);
        this.pager.query();
    }

    public componentDidMount(): void {
        this.query();
    }

    public render(): JSX.Element {

        return (<React.Fragment>
                {this.renderForm()}
                <Grid.Row>
                    <Grid.Col span={24}>
                        {this.renderContent()}
                    </Grid.Col>
                </Grid.Row>
            </React.Fragment>
        );
    }

    protected renderForm(): JSX.Element {
        return null;
    }

    protected renderContent(): JSX.Element {
        const {design} = this.state;
        return (<VsbPager ref={(node) => this.pager = node} design={design}></VsbPager>)
    }
}
import * as React from 'react';
import BaseComponent, {BaseComponentProps} from "./BaseComponent";
import {Grid} from "../../comps";
import VsbPager, {IPagerDesign} from "../../block/pager";

export interface PagerComponentProps extends BaseComponentProps{

}

export interface PagerComponentState {
    design: IPagerDesign;
}

export default abstract class PagerComponent<P extends PagerComponentProps, S extends PagerComponentState> extends BaseComponent<PagerComponentProps, PagerComponentState> {

    protected pager: VsbPager;

    protected constructor(props: PagerComponentProps) {
        super(props);
        this.state = {
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
        const {design} = this.state;
        return (<React.Fragment>
                {this.renderOther()}
                <Grid.Row>
                    <Grid.Col span={24}>
                        {<VsbPager ref={(node) => this.pager = node} design={design}></VsbPager>}
                    </Grid.Col>
                </Grid.Row>
            </React.Fragment>
        );
    }

    protected renderOther(): JSX.Element {
        return null;
    }
}

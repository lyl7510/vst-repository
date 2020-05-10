import * as React from 'react';
import {Grid} from "../../../comps"
import VsbPager, {IPagerDesign} from "../../../block/pager";
import VsbPagerList from "../../../block/pager/list";
import VsbPagerTitle from "../../../block/pager/title";
import VsbPagerFooter from "../../../block/pager/footer";
import BaseComponent, {BaseComponentProps} from "../../../vst/page/BaseComponent";
import "./style/index.less";


export interface PagerExampleState {
    design: IPagerDesign;
}


export default class PagerExample extends BaseComponent<BaseComponentProps, PagerExampleState> {

    private pager: VsbPager = null;

    protected constructor(props: BaseComponentProps) {
        super(props);
        this.state = {
            design: {
                url: "/data/pager",
                title: "查询结果",
                checkbox: true,
                btns: [{
                    type: "primary",
                    icon: "plus",
                    text: "新增",
                }, {
                    type: "danger",
                    icon: "delete",
                    text: "删除"
                }],
                columns: [
                    {
                        title: '图片',
                        dataIndex: 'IMAGE',
                        key: 'IMAGE',
                        className: "image",
                        render: (text: any, record: any, index: number): React.ReactNode => {
                            return <img src={"http://106.12.117.171:8899/api/system/image?id=" + text}/>;
                        }
                    }, {
                        title: '标题',
                        dataIndex: 'TITLE',
                        key: 'TITLE',
                        width:150
                    }, {
                        title: '内容',
                        dataIndex: 'CONTENT',
                        key: 'CONTENT',
                        align: "center"
                    }]
            }
        }
    }

    componentDidMount(): void {
        this.pager.query();
    }

    public render(): JSX.Element {
        const {design} = this.state;
        return (<React.Fragment>
                <Grid.Row>
                    <Grid.Col span={24}>
                        <VsbPagerList design={design} ref={(node) => this.pager = node}></VsbPagerList>
                    </Grid.Col>
                </Grid.Row>
            </React.Fragment>
        );
    }

}

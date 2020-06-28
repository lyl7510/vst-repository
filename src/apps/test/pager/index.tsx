import * as React from 'react';
import "./style/index.less";
import PagerComponent, {PagerComponentProps, PagerComponentState} from "../../../vst/page/PagerComponent";

export default class PagerExample extends PagerComponent<PagerComponentProps, PagerComponentState> {

    public constructor(props: PagerComponentProps) {
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

}
